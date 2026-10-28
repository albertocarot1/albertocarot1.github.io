#!/usr/bin/env python3
"""Refresh local JSON snapshots from public YouTube Atom feeds."""

import json
import os
import re
import sys
import tempfile
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "_data"

CHANNEL_ID = "UCED3GM2mk0ze-lTmZfL-8dQ"
LIVE_PLAYLIST_ID = "PL7rBHh-SMjjdWTSnYj7JzuUPk0kg49EpA"
SESSION_PLAYLIST_ID = "SESSION_PLAYLIST_ID_NOT_PROVIDED"
STUDIO_PLAYLIST_ID = "STUDIO_PLAYLIST_ID_NOT_PROVIDED"

# Enable only after a feed URL is supplied. No Instagram request is made by default.
INSTAGRAM_FEED_URL = ""

ATOM_NS = "http://www.w3.org/2005/Atom"
YOUTUBE_NS = "http://www.youtube.com/xml/schemas/2015"
VIDEO_ID_PATTERN = re.compile(r"^[A-Za-z0-9_-]{11}$")
PLACEHOLDER_SUFFIX = "_NOT_PROVIDED"
USER_AGENT = "albertocarot1.github.io media feed updater"
REQUEST_TIMEOUT_SECONDS = 20


def feed_urls():
    feeds = {
        "latest": (
            "https://www.youtube.com/feeds/videos.xml?"
            + urllib.parse.urlencode({"channel_id": CHANNEL_ID})
            if CHANNEL_ID and not CHANNEL_ID.endswith(PLACEHOLDER_SUFFIX)
            else None
        ),
        "live": (
            "https://www.youtube.com/feeds/videos.xml?"
            + urllib.parse.urlencode({"playlist_id": LIVE_PLAYLIST_ID})
            if LIVE_PLAYLIST_ID and not LIVE_PLAYLIST_ID.endswith(PLACEHOLDER_SUFFIX)
            else None
        ),
        "session": (
            "https://www.youtube.com/feeds/videos.xml?"
            + urllib.parse.urlencode({"playlist_id": SESSION_PLAYLIST_ID})
            if SESSION_PLAYLIST_ID and not SESSION_PLAYLIST_ID.endswith(PLACEHOLDER_SUFFIX)
            else None
        ),
        "studio": (
            "https://www.youtube.com/feeds/videos.xml?"
            + urllib.parse.urlencode({"playlist_id": STUDIO_PLAYLIST_ID})
            if STUDIO_PLAYLIST_ID and not STUDIO_PLAYLIST_ID.endswith(PLACEHOLDER_SUFFIX)
            else None
        ),
    }
    return feeds


def fetch_bytes(url):
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=REQUEST_TIMEOUT_SECONDS) as response:
        return response.read()


def parse_youtube_feed(feed_bytes):
    root = ET.fromstring(feed_bytes)
    entries = root.findall(f"{{{ATOM_NS}}}entry")
    videos = []

    for entry in entries:
        video_id = entry.findtext(f"{{{YOUTUBE_NS}}}videoId")
        title = entry.findtext(f"{{{ATOM_NS}}}title")
        published = entry.findtext(f"{{{ATOM_NS}}}published")
        if not video_id or not VIDEO_ID_PATTERN.fullmatch(video_id):
            raise ValueError("feed contains a missing or invalid YouTube video ID")
        if not title or not published:
            raise ValueError(f"feed entry {video_id} is missing its title or publish date")
        videos.append(
            {
                "id": video_id,
                "title": title.strip(),
                "published": published[:10],
            }
        )
    return videos


def save_json_atomically(path, data):
    temporary_path = None
    try:
        with tempfile.NamedTemporaryFile(
            mode="w",
            encoding="utf-8",
            dir=path.parent,
            prefix=f".{path.name}.",
            suffix=".tmp",
            delete=False,
        ) as temporary_file:
            temporary_path = Path(temporary_file.name)
            json.dump(data, temporary_file, indent=2, ensure_ascii=False)
            temporary_file.write("\n")
        os.replace(temporary_path, path)
    finally:
        if temporary_path and temporary_path.exists():
            temporary_path.unlink()


def update_youtube_feed(name, url):
    try:
        videos = parse_youtube_feed(fetch_bytes(url))
        if not videos:
            raise ValueError("feed returned no videos; keeping the existing data")
        save_json_atomically(DATA_DIR / f"yt_{name}.json", videos)
        print(f"{name}: saved {len(videos)} videos")
        return True
    except (
        ET.ParseError,
        OSError,
        TimeoutError,
        urllib.error.URLError,
        ValueError,
    ) as error:
        print(f"{name}: failed to update feed ({error}); keeping existing data", file=sys.stderr)
        return False


def update_instagram_feed():
    if not INSTAGRAM_FEED_URL:
        print("instagram: disabled; no request made")
        return True
    try:
        payload = json.loads(fetch_bytes(INSTAGRAM_FEED_URL))
        if not isinstance(payload, dict) or not isinstance(payload.get("posts"), list) or not payload["posts"]:
            raise ValueError("feed returned no posts; keeping the existing data")
        save_json_atomically(DATA_DIR / "instagram.json", payload)
        print(f"instagram: saved {len(payload['posts'])} posts")
        return True
    except (
        json.JSONDecodeError,
        OSError,
        TimeoutError,
        urllib.error.URLError,
        ValueError,
    ) as error:
        print(f"instagram: failed to update feed ({error}); keeping existing data", file=sys.stderr)
        return False


def main():
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    failures = []
    configured_count = 0

    for name, url in feed_urls().items():
        if not url:
            print(f"{name}: skipped; replace its clearly named ID placeholder to enable this feed")
            continue
        configured_count += 1
        if not update_youtube_feed(name, url):
            failures.append(name)

    if not update_instagram_feed():
        failures.append("instagram")

    if configured_count == 0:
        print("No YouTube feeds are configured.", file=sys.stderr)
        return 1
    if failures:
        print(f"Feed update failures: {', '.join(failures)}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
