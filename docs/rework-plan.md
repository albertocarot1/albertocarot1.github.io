# Alberto Caroli: website rework for live and session drumming

*Based on a read-through of all seven pages (Home, Projects, About, Live, Studio, Gallery, Contact) on 26 Oct 2026. Draft wording is meant to be edited in your voice; anything in \[brackets\] is a fact only you can confirm.*

## The short version

1. **Lead with “drummer”.** Right now the site reads as an audio generalist who also plays drums. Make the recording side the proof of quality, not a competing headline.
2. **Your credibility is already on the site, just buried.** The Live table holds the best material you have. Pull the highlights onto the homepage as a proof strip.
3. **Turn the Studio page from a gear list into an explanation:** room, signal chain, drum mic map, audio demos, what the client receives.
4. **Add a Session drumming page** (process, deliverables, turnaround, audio demos) and make the Live page answer a booker’s questions.
5. **Let YouTube and Instagram feed the site automatically.** YouTube playlists become your content manager; Instagram works through a Creator account plus a feed service. Code is in section 5.
6. **Fix the small things that currently cost trust** (end of section 1).

## 1. What I found

### Already strong

- **The Live page.** 27 dated past shows since July 2023, with real names: you opened for Messa, Void of Sleep and Skulld (Rock Planet, Feb 2026), Elli de Mon and Murena (Hex, Apr 2026), Herba Mate (May 2026), Savana Funk (Mar 2025), Texas Toast Chainsaw Massacre (Sep 2025) and Brod (Oct 2025).
- **Big-room moments:** Rockin’ 1000 Romagna at the Dino Manuzzi stadium (Jul 2023); the San Marino Eurovision 2025 national selection semifinal, drums for Reagents (Feb 2025); Michele Luppi’s VGDM final show (May 2025); San Patrignano in front of 1,000+ people (Dec 2025); the Palazzuolo Drum Battle, where you played an original piece in front of George Kollias, Gergo Borlai, Sebastian Lanser, Mario Riso and Andrea Bessone (Jul 2025).
- **Four active projects** across heavy and alternative styles (Balera, Sand Monolith, Effigy, ZEMIC) and studio credits for Gremlin Special, Effigy and P(a)fanner’s Flying Donkeys.
- The contact form already splits by project type (live project / session drummer / production).

### What’s holding it back

1. **The homepage is one sentence and two buttons:** no names, no audio, no video. The tagline (“from the first idea to the final master”) describes a producer.
2. **Three roles share the headline** (“Drummer · Producer · Sound Engineer” in the sidebar, titles and meta description). A band looking for a drummer has to work out which one you are.
3. **About is mostly adjectives** (“obsession with sound quality”, “extraordinary ability to hear and to listen”, “artists across Italy and Europe”) and names nobody. The closing quote is generic. Every adjective you can swap for a show, a name, a number or a turnaround time will work harder.
4. **Projects sends visitors away.** Everything links out to Bandcamp, Spotify, SoundCloud or YouTube instead of playing on the page. Projects from the Live table (Alibi, Afterdark, Reagents, EMT, Rotation Stage, VGDM, Rockin’ 1000) don’t appear on it at all, and it doesn’t distinguish “band I’m a member of” from “hired for this”.
5. **Studio lists gear but doesn’t say how you use it,** and two claims don’t match the list: About says “industry-standard gear” and the Philosophy section mentions “a curated selection of outboard hardware”, but the gear list shows no outboard. Your list is reasonable for the work. The risk is that a vague claim invites comparison with a gear list that can’t back it up. Specific and audible beats adjectives.
6. **Missing entirely:** testimonials, a process and rates page, your town and travel radius, a visible email address (I only saw the form), and an Italian version, even though nearly all your shows are in Romagna, San Marino and Bologna.
7. **Housekeeping**
   - “Next Dates” still lists 24 Oct 2026 (Fossolo Club, Russi), two days ago. Hand-edited tables will keep doing this (see 5.3).
   - The 20 Jul 2024 row (Flood, Mordano) links to a YouTube ID with 12 characters (LLfB7xglOGUQ). IDs have 11, so it’s probably a typo.
   - The 03 Sep 2024 row (Alibi) links to a playlist ID that looks cut off (PLVkjTmjCMLdg). Test both links.
   - The Gallery page is still the template: placeholder SVGs and a developer note (“Add or replace images in \_data/gallery.yml”) visible to visitors.
   - Every page shares one meta description, I found no social-sharing image in the metadata, and the author name in the site config is empty.
   - The “Book a call” section on Contact showed no visible content when I read it. If it’s a scheduler embed, check that it loads, including on mobile.

## 2. Positioning and homepage

**Positioning line (edit to your voice):**

- “Live and session drummer based in \[town\], Italy: heavy, alternative and indie rock. I record my own drums, so what you get back is ready to mix.”

Replace the “Drummer · Producer · Sound Engineer” tag with **“Live & session drummer · Drums recorded in my own studio”**. Mixing and mastering stay on the site as a third, secondary service.

**Homepage, top to bottom**

1. **Hero.** A photo of you at the kit (not a portrait), the positioning line, two buttons: *Book me live* and *Hire me for a session* (each opening the contact form with the right project type preselected), plus a small “Hear the drums” link.
2. **Proof strip,** written from your own Live data:
   - *Opened for:* Messa · Savana Funk · Elli de Mon · Herba Mate · Void of Sleep · Texas Toast Chainsaw Massacre · Brod
   - *Stages:* Stadio Dino Manuzzi with Rockin’ 1000 · San Marino Eurovision 2025 national selection (semifinal) · Comunità San Patrignano (1,000+)
   - *Drum Battle Palazzuolo:* original piece played in front of Kollias, Borlai, Lanser, Riso and Bessone
   - *Counter:* “27 shows since 2023”, generated from your shows data so it never goes stale
   - Keep the Eurovision wording exact (“national selection, semifinal, drummer of the backing band”) so nobody reads it as Eurovision itself.
3. **Watch.** The three latest videos, filled automatically from your YouTube Live playlist.
4. **Hear.** Three short audio players, each tagged with a genre (doom/sludge, stoner/grunge, indie).
5. **How I work with you.** Three cards: Live · Session · Recording and mixing.
6. **Currently playing with.** Balera, Effigy, Sand Monolith, ZEMIC, each with its genre and next show.
7. **Latest on Instagram.** Six tiles, filled automatically.
8. **Closing call to action** with a direct email, WhatsApp and Instagram DM, since many Italian bands start a conversation there.

## 3. Page by page

**Navigation:** Home · Live · Session drumming (new) · Studio · Projects · About · Contact. Drop Gallery as a separate page; its content moves into Home and About.

### Live: answer a booker’s questions

- **Open with five lines** on what you bring. Draft: “\[N\] shows since 2023, from doom/sludge to indie rock, from club nights to a stadium stage. I learn sets quickly, \[play to click and backing tracks / use in-ears\] when the project needs it, and \[bring my own kit / need this backline\].”
- **Answer the practical questions** (only what’s true): click and tracks? in-ears (you list Shure CL215)? own kit and backline needs? how many songs can you learn, and in how long? travel radius and transport? backing vocals (you sing in Sand Monolith and at Rotation Stage events)? How do you price a live hire?
- **Your second differentiator:** About says you can run FOH, monitors and lights as a one-person show technician, but the Live page doesn’t. One line plus a downloadable stage plan and tech rider covers it: “Small band with no tech? I can play and run your sound and lights.”
- **Credits block:** an “Opened for” list with date and venue.
- **Dates as cards,** newest first, grouped by year: venue, project, a YouTube thumbnail (taken from the video ID automatically), and supporting acts as small labels. “Next dates” hides itself once a date has passed.
- **Move the data into `_data/shows.yml`:** one entry per show (date, venue, city, project, role, played with, notes, video link). The Live page, homepage counter, “opened for” lists and project cards all derive from that one file.

### Session drumming (new page)

1. **One line:** “Send me the song, get back finished drum tracks.”
2. **How it works:** (1) you send the demo, tempo map or click, a reference and notes; (2) I quote within \[X\] hours; (3) I record in my treated room; (4) files arrive in \[X\] days with \[N\] revisions included.
3. **What you receive:** WAV 24-bit/\[48\] kHz in your choice of stereo drum mix, full multitrack (kick, snare, toms, overheads, room) or processed stems; aligned to your click; \[edited / unedited\].
4. **Sound choices by genre:** see the sound palette in the Studio section below.
5. **Audio proof:** three demos, each as *raw tracks* and *in the mix*, plus your credits as playable embeds: Gremlin Special “Propheteering”, Effigy “Diluvio Universale”, P(a)fanner’s Flying Donkeys “Burning Up the Road”.
6. **Testimonials:** two or three named artists, one or two sentences each, linked to their projects.
7. **Rates:** either “from €\[X\] per song” or “quote within 24 hours”, plus what changes the price (song length, track count, mixing).
8. **Call to action:** the form preset to *Session drummer*, with a checklist of what to send.

### Studio becomes “Recording setup”

Keep the Philosophy short, then add what’s missing:

1. **Room.** Dimensions, a photo of the live room with the kit in position (today there’s only a control-room photo), and the treatment map: six Oudimmo Kombat 20 corner traps with membrane, foam panels at the edges. You claim a “flat, neutral” response. If you’ve measured the room (REW or similar), publish the response and decay plot; if not, soften the claim.
2. **Signal chain,** as a simple diagram: microphones → \[preamps: UMC1820 / UMC202HD\] → Reaper at \[48 kHz / 24-bit\] → monitoring. Say how many inputs you can record at once (the UMC1820 has eight preamps, if I remember its spec correctly; add the UMC202HD’s two if you run them together). Also say how you judge mixes: if I’m reading the gear list right, the db Technologies B-Hype 10 is a PA-style speaker rather than a studio nearfield, so gear-aware visitors may ask. An honest line about your method (reference tracks, headphones, checks on several systems) beats the phrase “critical listening”.
3. **Drum mic map.** A draft built from your gear list; correct it and add positions:

| Source | Mic | Notes |
| --- | --- | --- |
| Kick | Shure Beta 52A | \[in / out, position\] |
| Snare top | Shure SM57 | \[position\] |
| Snare bottom or hi-hat | Shure Beta 56A | \[confirm\] |
| Toms (10 / 12 / 16) | Sennheiser e604 ×3 | clip-on |
| Overheads | Rode M5 ×2 | \[technique: spaced pair, XY, ORTF\] |
| Room | t.bone RM 700 (ribbon), Behringer 19A | \[confirm\] |

That’s ten microphones. If both interfaces run together, say “10 simultaneous inputs”. 4. **Sound palette.** Add a line to each item saying what it sounds like and when you reach for it. Three snares (14×6 Gretsch maple, 14×5.5 Pearl steel, 14×3.5 Mapex maple piccolo), Evans Genera dry on snare and G2 on toms, six cymbals plus hats. A producer or bandleader wants to know which snare you use for doom and which for indie. 5. **Audio.** One groove, three snares, four stages (close mics only, plus overheads, plus room, final mix). It proves the room and the mic choices in thirty seconds. 6. **Deliverables:** link to the Session page. 7. **Full gear list** stays, collapsed at the bottom. Either list the outboard or remove the claim.

### Projects

- **Two groups:** *Bands I’m in* (Balera, Sand Monolith, Effigy, ZEMIC) and *Past and guest projects* (Alibi, Afterdark, Reagents, EMT, Rotation Stage, VGDM, Rockin’ 1000 and others). Mark each as *member*, *session* or *guest*.
- **Each card:** genre tag, your role, an embedded player, and “Opened for” labels generated from `shows.yml` (Balera would automatically show Messa, Void of Sleep, Skulld, Elli de Mon, Murena and Herba Mate).
- **Studio credits** stay as a second section, split into *Drums on* and *Mixed or mastered by*, with embedded players.

### About

1. A paragraph with names. Draft: “I’m Alberto Caroli, a drummer from \[town\], Italy, with two decades of live and studio work. I play with Balera (doom/sludge), Effigy (grunge/stoner), Sand Monolith (doom) and ZEMIC (indie rock), and take on live and session work for other artists. I’ve opened for Messa, Savana Funk, Elli de Mon and Herba Mate, played the Dino Manuzzi stadium with Rockin’ 1000, and the San Marino Eurovision 2025 selection with Reagents. I record, mix and master in my own studio, so I can hand you drum tracks ready to drop into your session, or a finished mix.”
2. Three facts about working with you (turnaround, how fast you learn a set, availability), each backed by a number.
3. Town, travel radius, languages.
4. Replace the portrait with a photo at the kit and cut the closing quote.

### Contact

- Keep the form. Let the buttons preselect the project type, and ask for the three things that speed up a quote: date and city, links to the music, budget.
- Show an email address, a WhatsApp number or link, and your Instagram DM, with a stated reply time.
- Add a one-page **press kit PDF** (bio, photo, credits, tech rider and stage plan, gear list). Promoters and bandleaders ask for it constantly.

### Across the site

- **Social proof:** ask three to five artists you’ve played or recorded with for a sentence each.
- **Italian version** of at least Home, Session and Contact.
- **Per-page titles and descriptions,** for example “Live & session drummer — Alberto Caroli” and “Session drumming: remote recording from my studio”; a 1200×630 sharing image of you at the kit; alt text on images.
- **Load third-party embeds on click** (the YouTube grid below does this). It’s faster and avoids loading Google or Meta scripts before a visitor has asked for them. Worth a check against your cookie notice; this isn’t legal advice.

## 4. Content to collect

- A photo at the kit, a photo of the live room with the kit in place, and a photo of the mic’d-up kit
- Three audio demos of 60–90 seconds
- Three to five testimonials
- A room measurement plot, if you can make one
- A tech rider and stage plan
- Answers to: town and travel radius; rates policy; click, tracks and in-ears; own kit; turnaround and file formats; mic positions; outboard; what the “20 years” refers to; where the site is hosted

## 5. Letting YouTube and Instagram update the site by themselves

Your site is built with Jekyll, so its pages are static. “Automatic” means either the visitor’s browser fetches the feed on every visit, or a scheduled job refreshes the data and rebuilds the site. I recommend the scheduled job for both: pages load fast, no third-party scripts run on arrival, and a traffic spike can’t exhaust anyone’s quota.

### 5.1 YouTube: playlists as your content manager

Create playlists such as **Live**, **Session drumming** and **Studio**. Upload a video, add it to the right playlist, and it appears in the right place on the site. Every channel and playlist has a public feed:

- Channel: `https://www.youtube.com/feeds/videos.xml?channel_id=UC…`
- Playlist: `https://www.youtube.com/feeds/videos.xml?playlist_id=PL…`
- Feeds return about the latest 15 videos. The channel feed includes Shorts; replacing `UC` with `UULF` and using the result as a `playlist_id` gives long-form only (community-discovered, not officially documented).
- Find your channel ID in YouTube Studio → Settings → Channel → Advanced settings. A playlist ID is the text after `list=` in the playlist URL.
- YouTube’s feed endpoint has had stretches of intermittent 404 errors since December 2025, so the script below keeps the previous data if a fetch fails.

**Five-minute version, no code:** embed your whole uploads list as one player, using your channel ID with `UC` swapped for `UU`:

`<iframe src='https://www.youtube.com/embed/videoseries?list=UU…' width='560' height='315' allowfullscreen></iframe>`

It works as a playlist player, not a grid, and I’d test it before relying on it.

**Better version:** a scheduled script writes the feeds into `_data`, and Jekyll renders a thumbnail grid that loads the real player only on click.

`scripts/fetch_media.py`

```python
import json, os, sys, urllib.request
import xml.etree.ElementTree as ET

YOUTUBE = {  # name -> feed URL (put your real IDs in)
    'latest':  'https://www.youtube.com/feeds/videos.xml?channel_id=UC_YOUR_CHANNEL_ID',
    'live':    'https://www.youtube.com/feeds/videos.xml?playlist_id=PL_YOUR_LIVE_PLAYLIST',
    'session': 'https://www.youtube.com/feeds/videos.xml?playlist_id=PL_YOUR_SESSION_PLAYLIST',
}
INSTAGRAM = 'https://feeds.behold.so/YOUR_FEED_ID'  # see 5.2; leave empty to skip
NS = {'a': 'http://www.w3.org/2005/Atom', 'yt': 'http://www.youtube.com/xml/schemas/2015'}

def get(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read()

def save(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=1, ensure_ascii=False)

os.makedirs('_data', exist_ok=True)

for name, url in YOUTUBE.items():
    try:
        root = ET.fromstring(get(url))
        videos = [{'id': e.find('yt:videoId', NS).text,
                   'title': e.find('a:title', NS).text,
                   'published': e.find('a:published', NS).text[:10]}
                  for e in root.findall('a:entry', NS)]
        if videos:
            save('_data/yt_' + name + '.json', videos)
    except Exception as err:
        print(name, 'failed:', err, '- keeping previous data', file=sys.stderr)

if INSTAGRAM:
    try:
        feed = json.loads(get(INSTAGRAM))
        if feed.get('posts'):
            save('_data/instagram.json', feed)
    except Exception as err:
        print('instagram failed:', err, '- keeping previous data', file=sys.stderr)
```

`.github/workflows/update-media.yml`

```yaml
name: Update media
on:
  schedule:
    - cron: '17 5 * * *'   # daily; use '17 */6 * * *' for YouTube only
  workflow_dispatch:        # lets you run it by hand from the Actions tab
permissions:
  contents: write
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: python3 scripts/fetch_media.py
      - name: Commit if anything changed
        run: |
          git config user.name 'media-bot'
          git config user.email 'media-bot@users.noreply.github.com'
          git add _data
          git diff --cached --quiet || (git commit -m 'Update media feeds' && git push)
```

Run it once by hand so the data files exist. If your host doesn’t rebuild when the bot commits, tell me where the site is hosted (GitHub Pages, Netlify, Cloudflare Pages) and I’ll adapt the workflow.

{% raw %}
`_includes/yt-grid.html`, used as `{% include yt-grid.html feed='yt_live' limit=6 %}`

```liquid
{% assign limit = include.limit | default: 6 %}
<div class='yt-grid'>
{% for v in site.data[include.feed] limit: limit %}
  <button class='yt-card' data-id='{{ v.id }}' aria-label='Play: {{ v.title | escape }}'>
    <img loading='lazy' src='https://i.ytimg.com/vi/{{ v.id }}/hqdefault.jpg' alt=''>
    <span>{{ v.title | escape }}</span>
  </button>
{% endfor %}
</div>
```
{% endraw %}

Add the following once to your site CSS and JS:

```css
.yt-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; }
.yt-card { all: unset; cursor: pointer; display: block; }
.yt-card img, .yt-grid iframe { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border: 0; }
```

```js
document.addEventListener('click', function (e) {
  var b = e.target.closest('.yt-card');
  if (!b) return;
  var f = document.createElement('iframe');
  f.src = 'https://www.youtube-nocookie.com/embed/' + b.dataset.id + '?autoplay=1';
  f.allow = 'autoplay; encrypted-media; picture-in-picture';
  f.allowFullscreen = true;
  f.title = b.getAttribute('aria-label');
  b.replaceWith(f);
});
```

For the Live cards, a thumbnail needs no feed at all: take the video ID from each show’s link and use `https://i.ytimg.com/vi/<id>/hqdefault.jpg`.

### 5.2 Instagram: choose a route

Instagram’s old Basic Display API was shut down on 4 December 2024. Today, reading your own posts through any official route needs a **Business or Creator account**. Switching is free, in the Instagram app’s settings under Account type and tools.

| Route | Effort | Updates itself? | Cost | Notes |
| --- | --- | --- | --- | --- |
| **A. Feed service (Behold) JSON feed, fetched by the script above** | about 20 min | Yes | Free: 6 posts, daily refresh. $10/mo: 50 posts, hourly refresh, no Behold logo | Behold handles tokens and serves resized copies of the images from its own CDN. Recommended. |
| B. Drop-in widget (Behold, Elfsight and similar) | 5 min | Yes | Free tiers with monthly view limits | A third-party script loads on every visit; less control over the look. |
| C. Your own Meta app and Instagram API | hours, plus upkeep | Yes | Free | Tokens expire every 60 days and need refreshing; Instagram image links expire, so you must download copies. |
| D. Instagram’s own embed code (post menu → Embed) | 1 min per post | No | Free | Best for single reels you mention on the Live page, such as the Balera Punking Festival post. |

**Recommendation: A for the grid, D for specific reels.**

1. Switch the account to Creator.
2. Create a free Behold account, add your Instagram account as a source, then create a **JSON feed** (allow images, videos and reels). Copy its URL (`https://feeds.behold.so/…`) into `INSTAGRAM` in the script.
3. Because the script fetches the feed, your visitors never call Behold, so Behold’s free-plan view limit (1,200 a month) isn’t tied to your traffic.
4. Render the tiles. The field names below come from Behold’s documented feed format; check them against your own feed’s preview.

`_includes/ig-grid.html`

{% raw %}
```liquid
<div class='ig-grid'>
{% for p in site.data.instagram.posts limit: 6 %}
  <a href='{{ p.permalink }}' target='_blank' rel='noopener'>
    <img loading='lazy' src='{{ p.sizes.medium.mediaUrl }}' alt='{{ p.prunedCaption | default: p.caption | truncate: 120 | escape }}'>
    {% if p.isReel %}<span class='ig-badge'>Reel</span>{% endif %}
  </a>
{% endfor %}
</div>
```
{% endraw %}

```css
.ig-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: .5rem; }
.ig-grid a { position: relative; display: block; }
.ig-grid img { width: 100%; aspect-ratio: 1; object-fit: cover; }
.ig-badge { position: absolute; top: .4rem; right: .4rem; background: rgba(0,0,0,.7); color: #fff; padding: 0 .4rem; font-size: .75rem; }
```

These tiles link out to Instagram rather than playing the reel on your page. In-page playback needs Instagram’s own embed script (route D) or video links that expire.

### 5.3 Make the Live list update itself

Once shows live in `_data/shows.yml`, one date comparison splits them into next and past dates on every build. With the daily workflow above, a show moves from “Next” to “Past” by itself. Entry shape:

```yaml
- date: 2026-10-24
  venue: Fossolo Club
  city: Russi, Italy
  project: Effigy
  role: drums
  with: []
  video: ''
```

## 6. Suggested order of work

1. **Week 1:** housekeeping fixes, homepage hero and proof strip, rewritten About.
2. **Week 2:** `shows.yml` and the new Live page; the YouTube script and grid.
3. **Week 3:** Session page and the Studio rewrite (needs your photos and audio).
4. **Week 4:** Instagram feed, testimonials, press kit PDF, Italian version.

## Sources checked

- Behold pricing and plans: behold.so/pricing; JSON feed format: behold.so/docs/json-feeds; account requirement: behold.so/docs/getting-started
- Instagram Basic Display API shutdown (4 Dec 2024) and current API options: getphyllo.com/post/instagram-api-guide
- YouTube feed formats, the UULF prefix and the Dec 2025 feed outages: finder.wprssaggregator.com/rss-feeds/platform/youtube and rapidtoolset.com/en/tool/youtube-rss-link-generator

## Appendix: prompt checklist for your coding assistant

Work through these in order, one prompt at a time. After each one, preview the site locally, read the diff, commit, then tick the box here (change ☐ to ✅). The prompts point to this plan, so export it as Markdown first and save it in your repo as `docs/rework-plan.md`. Steps that only you can do are marked **You** and sit just before the prompt that needs them.

### Phase 0: Setup

☐ **0.1 You:** export this doc as Markdown to `docs/rework-plan.md` and commit it on a new branch.

☐ **0.2 Standing rules** (paste at the start of every session, or save them in your assistant’s project instructions file, such as CLAUDE.md)

```
This is my personal website (Jekyll; check which theme and how it is built). Standing rules for all work in this repo:
- Work on a branch named rework/<topic>. Small commits, one per task.
- Preview locally and tell me the command you used. Fix any build warnings you introduce.
- Never invent facts about me (dates, venues, prices, mic positions, testimonials, numbers). Where a fact is missing, leave a marker in the source, <!-- TODO(alberto): question -->, and list all markers at the end of the task.
- docs/rework-plan.md is the source of truth for wording and structure. If you change wording, tell me.
- Third-party embeds must load only on click. No secrets in the repo. No new dependencies without asking me first.
- After each task, list the files you changed, how to preview, and anything you need from me.
```

☐ **0.3 Orientation (read-only)**

```
Read-only task: change nothing. Explore this repo and report: the Jekyll and theme setup (Minimal Mistakes? which version), how the site is built and hosted (look at .github/workflows, CNAME, netlify.toml, _config.yml, Gemfile), which layouts and includes are used, what is in _data, how the navigation is defined, how the pages Home, Projects, About, Live, Studio, Gallery and Contact are implemented, and the exact command to preview locally. Then read docs/rework-plan.md and tell me which parts of the plan don't fit this setup (for example plugins the host doesn't allow) before we start.
```

☐ **0.4 Baseline build**

```
Create the branch rework/baseline, get the site building and serving locally, and tell me the exact command. Don't fix anything unrelated to getting it to build; list what you notice instead.
```

### Phase 1: Quick wins (week 1)

☐ **1.1 Fix the stale and broken bits**

```
Using the Housekeeping list in section 1 of docs/rework-plan.md: (a) on the Live page, find YouTube and playlist links whose IDs look invalid (video IDs are exactly 11 characters; check the 20 Jul 2024 and 03 Sep 2024 rows first) and test every external link on the site with curl or oEmbed. Report which are broken, but don't guess replacements; leave TODO markers. (b) Move the 24 Oct 2026 row out of 'Next Dates' into the past dates (the automatic split comes later). (c) Remove the Gallery page's placeholder images and developer note by hiding Gallery from the navigation and leaving the file unlisted until I decide. (d) Report any other placeholder or template text left in the repo.
```

☐ **1.2 Titles, descriptions, sharing image, alt text**

```
Give every page its own title and meta description (plain and specific, under 155 characters, in the style of the examples in section 3 'Across the site' of the plan). Fix the empty author name in _config.yml (use Alberto Caroli). Add a default Open Graph and Twitter image in the theme config pointing to assets/images/og-default.jpg (TODO: I will supply a 1200x630 photo of me at the kit). Make sure every image has meaningful alt text and list any you couldn't write one for.
```

☐ **1.3 Homepage hero, proof strip and navigation**

```
Rebuild the homepage following section 2 of docs/rework-plan.md: the new positioning line and tag (keep [town] as a TODO marker), a hero with two buttons (Book me live -> /contact/?type=live, Hire me for a session -> /contact/?type=session) and a 'Hear the drums' anchor, and the proof strip with the Opened for, Stages and Drum Battle lines exactly as written in the plan. Hard-code '27 shows since 2023' for now. Add clearly marked empty placeholders for Watch, Hear and Instagram. Change the navigation to Home, Live, Session drumming, Studio, Projects, About, Contact (Session drumming can point to a stub page). Keep the theme's styling, mobile first.
```

☐ **1.4 About**

```
Rewrite the About page using the draft in section 3 (About) of the plan: the paragraph with names, the three facts as TODO placeholders where I haven't given numbers, and town, travel radius and languages as TODOs. Add a 'photo at the kit' slot but keep the current image until I supply a new one, and remove the closing quote. Don't add claims that aren't in the plan or already on the site.
```

☐ **1.5 Contact**

```
On the Contact page: read ?type=live|session|production from the URL and preselect the project type in the form with a few lines of plain JavaScript (the form must still work without JS). Before changing the form, tell me what it posts to. If the handler supports it, add optional fields for date and city, links to my music, and budget. Add a contact block with email, WhatsApp and Instagram DM as TODO placeholders, plus an 'I reply within [X] hours' line. Then investigate the 'Book a call' section, which showed no visible content when I read the page: tell me what it is and whether it works on mobile.
```

### Phase 2: Shows data and the Live page (week 2)

☐ **2.1 Move the shows into a data file**

```
Create _data/shows.yml from the Live page's tables (Next Dates and past dates). One entry per show with: date (YYYY-MM-DD), venue, city, project, role (for example drums, drums+vocals, drums+bass), opened_for (list, only when the page says I supported someone), shared_bill (list, for festival line-ups and events like the Drum Battle), event (name, if any), notes, video (URL, if any) and links (list). Keep every existing detail and link verbatim. When done, print rows found versus entries created (I expect 27 past dates plus any upcoming) and flag anything you had to interpret. Don't change the Live page yet.
```

☐ **2.2 Rebuild the Live page from the data**

```
Rebuild the Live page from _data/shows.yml. Split upcoming and past dates using the build date (a static build only knows the date at build time, which is fine because we will rebuild daily). Show past dates as cards grouped by year, newest first: date, venue, city, project, supporting acts as small labels, and a thumbnail when the video is a YouTube URL (https://i.ytimg.com/vi/<id>/hqdefault.jpg; skip the thumbnail if the ID isn't exactly 11 characters). Hide the 'Next dates' section when there are none. No JavaScript needed, lazy-load images, keep it accessible.
```

☐ **2.3 Derive the counter and the 'opened for' lists**

```
Make these come from _data/shows.yml instead of being hard-coded: (1) the homepage counter ('N shows since YEAR', past shows only); (2) the 'Opened for' list on the Live page and in the homepage proof strip (unique names from opened_for, most recent first, first 7 on the homepage); (3) an include _includes/opened-for.html that takes a project name and lists the artists that project opened for, which we will reuse on project cards. Show me the output for Balera; I expect Messa, Void of Sleep, Skulld, Elli de Mon, Murena and Herba Mate.
```

☐ **2.4 Booker-facing copy on the Live page**

```
Add the content from section 3 (Live) of the plan: the five-line intro; a short block answering the practical questions (click and tracks, in-ears, own kit and backline, songs learned and how fast, travel radius, backing vocals, how a live hire is priced) with TODO placeholders; a one-line mention that I can also run sound and lights (the About page already says I can do FOH, monitors and lights); and a download slot for a tech rider PDF (file is a TODO). Don't fill in facts I haven't given.
```

### Phase 3: YouTube automation (week 2)

☐ **3.1 You:** create YouTube playlists named Live, Session drumming and Studio, add your videos to them, and note your channel ID (YouTube Studio → Settings → Channel → Advanced settings) and each playlist ID (the text after `list=` in the playlist URL).

☐ **3.2 Script, workflow and grid**

```
Implement the YouTube automation from section 5.1 of docs/rework-plan.md: scripts/fetch_media.py (YouTube only for now; keep the Instagram block but disabled), .github/workflows/update-media.yml, _includes/yt-grid.html, and the CSS and JS for click-to-load playback via youtube-nocookie. Adapt the code to this theme's structure and asset pipeline. Before writing anything, list the values you need from me (channel ID, playlist IDs) and use clearly named placeholders until I give them. The script must keep existing data when a fetch fails, and missing or empty data files must make the grid render nothing instead of breaking the build.
```

☐ **3.3 Place the grids**

```
Place the grids: the three latest videos from the Live playlist data in the homepage Watch section, the full Live playlist grid on the Live page above the dates, and the Session playlist grid on the Session drumming stub page. Give each a heading and a one-line intro. If a data file doesn't exist yet, hide the whole section.
```

☐ **3.4 Test with the real IDs**

```
Here are my channel ID and playlist IDs: [paste them]. Put them in scripts/fetch_media.py, run the script locally, show me the generated _data files, preview the grids, and check what happens when a feed URL is wrong (old data kept, build still passes). Then tell me exactly how to run the workflow by hand from GitHub's Actions tab and which repository setting could stop the bot from committing.
```

### Phase 4: Session page and Studio (week 3)

☐ **4.1 You:** record or export two or three audio demos of 60 to 90 seconds (raw tracks and in-the-mix versions), plus four stages of one groove for the Studio comparison (close mics, plus overheads, plus room, final mix). Take photos of the live room, the kit in position and the mic'd-up kit. Decide how you want to handle rates.

☐ **4.2 Reusable audio component**

```
Create a small reusable audio-demo include: a title, a genre tag and one or more labelled tracks (for example 'Raw tracks' and 'In the mix') using native <audio controls preload='none'>, driven by _data/audio.yml, with files in assets/audio/. Add a variant for the Studio page that switches between four stages of the same groove (close mics, + overheads, + room, final mix) with a tab-style control and keeps the playback position when switching. No external libraries. Ship it with two placeholder entries and tell me the file formats and sizes I should stay under for this repo and host.
```

☐ **4.3 Session drumming page**

```
Build the Session drumming page from section 3 (Session drumming) of the plan: the one-line promise, the four-step process, what you receive, audio proof (use the audio component), a testimonials slot, a rates section (TODO: I haven't decided between a price and 'quote within 24 hours'), what changes the price, and a call to action linking to /contact/?type=session with a short 'what to send me' checklist. Use a TODO marker for every bracketed value in the plan.
```

☐ **4.4 Studio becomes 'Recording setup'**

```
Restructure the Studio page following section 3 ('Studio becomes Recording setup') of the plan: a short philosophy, then Room (photo slots for the live room and the kit in position, plus the treatment map), Signal chain (an inline SVG diagram with theme-aware colours and TODO placeholders for preamps, sample rate and bit depth), the drum mic map table as drafted with the [confirm] items as TODOs, Sound palette (the existing drum gear grouped by purpose, with TODO one-liners), the four-stage audio comparison, Deliverables (link to the Session page), and the existing full gear list collapsed in <details> sections. Do NOT delete or reword existing claims such as 'industry-standard gear' or 'outboard hardware'. List them for me at the end so I can decide.
```

☐ **4.5 Fill the Home 'Hear' section**

```
Put three audio-demo entries from _data/audio.yml in the homepage Hear section, each with its genre tag, and make the hero's 'Hear the drums' link scroll to it. Hide the section if there are no entries.
```

### Phase 5: Projects (week 3)

☐ **5.1 Projects as data, in two groups**

```
Move the Projects page content into _data/projects.yml and rebuild the page in two groups: 'Bands I'm in' (Balera, Sand Monolith, Effigy, ZEMIC) and 'Past and guest projects' (Alibi, Afterdark, Reagents, EMT, Rotation Stage, VGDM, Rockin' 1000). Each entry: name, genre tags, role (member, session or guest), description, links, an embed (Bandcamp, Spotify, SoundCloud or YouTube URL) and the matching project name used in shows.yml. Cards show the embedded player loaded on click (a thumbnail or button that swaps in the iframe) and the 'Opened for' labels from the include built in 2.3. Migrate every existing link. For projects from the Live page that aren't on Projects yet, create entries with TODO markers instead of guessing.
```

☐ **5.2 Studio credits**

```
Keep the studio portfolio as a second section on the Projects page, or on a separate Credits page if it gets long, split into 'Drums on' and 'Mixed or mastered by', with the same click-to-load embeds. If the current page doesn't say which credits belong in which group, ask me.
```

### Phase 6: Instagram (week 4)

☐ **6.1 You:** switch your Instagram account to Creator (settings → Account type and tools), create a free Behold account, connect it, create a JSON feed that allows images, videos and reels, and copy its URL (`https://feeds.behold.so/...`).

☐ **6.2 Instagram grid**

```
Add the Instagram grid from section 5.2 of the plan: enable the Instagram part of scripts/fetch_media.py (feed URL in one constant at the top), add _includes/ig-grid.html and its CSS, and render six tiles in the homepage 'Latest on Instagram' section with a 'Follow on Instagram' link. Hide the section if _data/instagram.json is missing or empty. My Behold feed URL is [paste it]. Check the field names (permalink, sizes.medium.mediaUrl, caption or prunedCaption, isReel) against the real response and adjust if they differ. Then run the workflow logic locally once to confirm the file is written.
```

☐ **6.3 Single reels on the Live page, on click only**

```
Add an include for single Instagram posts or reels that doesn't load Instagram's script until the visitor clicks: show a placeholder with the caption and a 'Watch on Instagram' button, and only then inject Instagram's official embed. Add an optional instagram field to shows.yml and use the include on the Live page for shows that have one. Test it with this real post URL: [paste one].
```

### Phase 7: Trust, reach and checks (week 4)

☐ **7.1 You:** ask three to five artists you've played or recorded with for one or two sentences each. Prepare a one-page press kit PDF and a tech rider with stage plan.

☐ **7.2 Testimonials**

```
Add _data/testimonials.yml (name, project, quote, link) and an include that renders them as short quotes: up to three on the homepage, all on the Session page, one on About. Ship it with no real entries so nothing renders, and put three commented-out example entries showing the format.
```

☐ **7.3 Press kit and tech rider**

```
Create a /press/ page with download slots for a press kit PDF and a tech rider and stage plan PDF (files are TODOs), plus the bio in three lengths (about 50, 100 and 200 words) based on the About copy so promoters can copy it. Link it from the footer and the Live page. Don't invent content for the PDFs.
```

☐ **7.4 Italian version: options first (research only)**

```
Research only, change nothing: propose two or three ways to add an Italian version of Home, Session drumming and Contact on this exact setup, including whether the host and build allow a language plugin (plain duplicated /it/ pages with a language switcher and hreflang tags is the fallback). Give me effort, maintenance cost and risks for each, and recommend one.
```

☐ **7.5 Italian version: implement my choice**

```
Implement option [X] for Home, Session drumming and Contact only: a language switcher, hreflang tags, translated navigation labels, and all Italian text kept in one place. Mark every translated block TODO(alberto: proofread), because I will review the Italian myself.
```

☐ **7.6 Structured data and indexing**

```
Add JSON-LD (schema.org Person, jobTitle Drummer, sameAs links to my YouTube, Instagram and Bandcamp pages found in the repo) to the homepage. Confirm sitemap.xml and robots.txt exist and include the new pages, and check canonical URLs. Don't add MusicGroup markup or any claims about awards or ratings.
```

☐ **7.7 Final audit**

```
Run a final audit: build with warnings on, check all internal and external links (for example with html-proofer), run Lighthouse on mobile for Home, Live, Session drumming and Studio and report performance, accessibility and SEO scores, check keyboard navigation and colour contrast on the new components, confirm no third-party script loads before a click, and confirm the daily workflow runs successfully. Fix what's low-risk and list the rest.
```

☐ **7.8 TODO sweep**

```
List every TODO(alberto) marker in the repo grouped by page, with the question each one needs me to answer, so I can fill them in one pass. When I send the answers, apply them and remove the markers.
```

If a prompt produces more than you wanted, ask the assistant to revert that commit and redo the task smaller, naming the one part you want.
