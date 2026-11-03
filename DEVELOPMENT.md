# Scrolling homepage development branch

This branch implements the new homepage and navigation while leaving the live `master` branch untouched.

## Preview locally on Windows

Install Git, Ruby (with DevKit), and Bundler; alternatively use WSL2 Ubuntu with Ruby and Bundler.

```powershell
git clone https://github.com/albertocarot1/albertocarot1.github.io.git
cd albertocarot1.github.io
git switch feature/scrolling-homepage
bundle install
bundle exec jekyll serve --livereload
```

Visit <http://127.0.0.1:4000/>.

If you have already cloned the repository:

```powershell
git fetch origin
git switch --track origin/feature/scrolling-homepage
bundle install
bundle exec jekyll serve --livereload
```

Do **not** merge this branch until the local preview is correct.

## Editing sections

- The navigation order and route behavior live in `_data/navigation.yml`.
- Keep section content in `_pages/*.md`.
- For long sections, put `<!-- home-cut -->` on its own line inside the Markdown body. Everything before the marker is used as the homepage text preview. The **entire** Markdown body is used on the detail page.
- Set `has_detail: true` in navigation for sections with a detail page. Set `has_detail: false` for short sections such as Contact; the navigation always points to `/#contact` for these.
- Keep Markdown text *above the marker* free of Liquid tags and dynamic includes: Jekyll's `site.pages` content is read as raw content when the homepage renders its previews. The full detail pages can use Liquid normally.
- The homepage's featured release cards, photos, recent performances, and Session image are rendered via `_includes/home-highlights.html` from the existing YAML data. Adjust the `limit: 3` values there to change how many appear.
- Keep the YAML data in `_data/` and reuse its existing schema.
- Set `image_bottom_fade` in `_config.yml` to adjust how much of the homepage hero, homepage section backgrounds, and detail-page hero backgrounds fades into the page background (for example, `20%`).

## Embeds in detail pages

Place an include in the body of any section document:

```liquid
{% include youtube.html id="VIDEO_ID" title="Live performance" %}
{% include spotify.html type="track" id="SPOTIFY_TRACK_ID" title="Listen on Spotify" %}
{% include soundcloud.html url="https://soundcloud.com/ARTIST/TRACK" title="Listen on SoundCloud" %}
```

Videos and audio players are loaded lazily. Use the same includes in standalone pages or other Liquid templates.

## Before merging

1. Verify home menu items scroll to the correct anchor with the header visible.
2. Verify detail-page menu items open the other full pages, while Home and Contact return to the homepage anchors.
3. Verify See all opens each full page.
4. Test the contact form and Book a call link.
5. Verify Live, Projects, and Session still render YAML-driven content.
6. Test narrow browser widths and keyboard navigation.
7. When satisfied, open a PR from `feature/scrolling-homepage` to `master` and merge to publish.
