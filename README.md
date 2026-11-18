# Alberto Caroli - Musician Portfolio Website

This is the Jekyll website for Alberto Caroli, a touring and session drummer based in Cesena, Italy. The public site is published at <https://www.albertocaroli.com>.

## Local development

Requirements:

- Ruby and Bundler
- Git

Install dependencies and start the local server:

```powershell
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000>. Jekyll rebuilds the site when source files change.

Build once without starting the server:

```powershell
bundle exec jekyll build
```

The generated site is written to `_site/`.

## Website structure

| Path | Purpose |
|---|---|
| `_config.yml` | Site title, description, timezone, featured YouTube video, and production URL |
| `_data/navigation.yml` | Main navigation |
| `_data/live.yml` | Upcoming and past concerts, highlights, and shared-stage lists |
| `_data/projects.yml` | Portfolio releases, current projects, and past projects |
| `_data/credits.yml` | Testimonials from clients and bandmates |
| `_data/session_samples.yml` | Audio examples shown on the Recording page |
| `_data/studio.yml` | Recording and drum gear lists |
| `_pages/*.md` | About, Live & Tours, Recording, Projects, Contact, and Privacy content |
| `index.html` | Homepage layout |
| `_includes/` | Reusable page sections, navigation, credits, highlights, and audio player |
| `assets/images/` | Photos and artwork |
| `assets/css/style.scss` | Custom styles |
| `samples/` | MP3 files used by the session audio player |

## Adding live dates

Edit `_data/live.yml`. Put future concerts under `upcoming` and completed concerts under `past`.

```yaml
upcoming:
  - date: "2027-06-15"
    venue: "Venue Name"
    city: "Cesena"
    country: "Italy"
    project: "Band Name"
    notes: "Optional supporting-act or event information"
    youtube_url: "https://www.youtube.com/watch?v=VIDEO_ID"
```

Fields:

| Field | Required | Description |
|---|---:|---|
| `date` | Yes | ISO format `YYYY-MM-DD`; determines display order |
| `venue` | Yes | Venue or event name |
| `city` | Yes | City |
| `country` | Yes | Country |
| `project` | Yes | Band or project performed with |
| `notes` | No | Additional concert information |
| `youtube_url` | No | YouTube, Instagram, or other recording/event URL |

Upcoming dates are sorted by date from soonest to latest. Past dates are sorted newest to oldest.

To feature a past concert on the homepage, add highlight fields:

```yaml
  - date: "2026-09-19"
    venue: "Camping Alto Savio"
    city: "San Piero in Bagno"
    country: "Italy"
    project: "Balera"
    notes: "Punking Festival"
    youtube_url: "https://www.youtube.com/watch?v=VIDEO_ID"
    highlight_title: "Punking Festival"
    highlight_where: "Balera, Camping Alto Savio"
    highlight_order: 7
```

- `highlight_title` makes the entry appear in the homepage highlights.
- `highlight_where` overrides the venue/city line; omit it to use the venue and city automatically.
- `highlight_order` controls curated highlight order on the homepage. Lower numbers appear first.

To show the bands supported at past shows, add `bill_with` and optionally `bill_relevance`:

```yaml
    bill_with: [Elli de Mon, Murena]
    bill_relevance: 3
```

Lower `bill_relevance` values appear first in the shared-stage section. Links reuse `youtube_url` from the same concert, so an external recording link is optional.

The Live & Tours page automatically renders `_data/live.yml` under **Next Dates** and **Past Concerts**.

## Adding projects

Projects and releases are managed in `_data/projects.yml`.

### Portfolio releases

Add a release under `portfolio`:

```yaml
portfolio:
  - title: "Album or track title"
    artist: "Artist or band name"
    link: "https://open.spotify.com/album/..."
    art: "/assets/images/portfolio/release-cover.webp"
    roles:
      - drummer_studio
      - producer
      - mixing_engineer
```

Available role keys:

| Key | Displayed label |
|---|---|
| `drummer_live` | Drummer (Live) |
| `drummer_studio` | Drummer (Studio) |
| `drummer_both` | Drummer (Live & Studio) |
| `producer` | Producer |
| `mixing_engineer` | Mixing Engineer |
| `mastering_engineer` | Mastering Engineer |
| `vocals` | Vocals |
| `recording_engineer` | Recording Engineer |
| `lights_technician` | Lights Technician |
| `composer` | Composer |
| `lyricist` | Lyricist |
| `backing_vocals` | Backing Vocals |
| `guitar` | Guitars |
| `bass` | Bass |

Keep artwork in `assets/images/portfolio/`. WebP and AVIF are both supported by the site. Square artwork is recommended.

### Current projects

Add an active band or project under `current_projects`:

```yaml
current_projects:
  - name: "Band Name"
    years: "2026-present"
    genre: "Alternative rock"
    description: "Optional short description."
    link: "https://band.example.com/"
    roles:
      - drummer_live
      - composer
    socials:
      - platform: "instagram"
        icon: "fab fa-instagram"
        url: "https://www.instagram.com/bandname/"
      - platform: "youtube"
        icon: "fab fa-youtube"
        url: "https://www.youtube.com/@bandname"
```

Supported social rendering is implemented for `instagram`, `facebook`, `youtube`, and `spotify`. The `icon` field is optional for the project cards. `link` and `socials` may be omitted or left empty.

### Past projects

Add former bands or projects under `past_projects`:

```yaml
past_projects:
  - name: "Former Band"
    years: "2018-2020"
    genre: "Rock"
    description: "Optional short description."
    roles:
      - drummer_both
      - composer
    socials: []
```

The Projects page renders portfolio entries first, followed by active projects and past projects.

## Adding audio samples

The Recording page audio section is generated from `_data/session_samples.yml`.

1. Put MP3 files in `samples/`.
2. Add each file and its display variants to `_data/session_samples.yml`.
3. Use matching durations for variants that represent the same song.

```yaml
- title: "heavy rock"
  file: /samples/heavy-rock-raw-no-grid.mp3
  mix: raw
  grid: false

- title: "heavy rock"
  file: /samples/heavy-rock-raw-grid.mp3
  mix: raw
  grid: true

- title: "heavy rock"
  file: /samples/heavy-rock-mixed-grid.mp3
  mix: mixed
  grid: true
```

Fields:

- `title`: Group name shown once per set of variants
- `file`: Absolute site path to the MP3 under `samples/`
- `mix`: `raw` or `mixed`
- `grid`: `true` or `false`

Entries with the same `title` appear as one player with selectable mix and grid variants. If a browser cannot seek or decode an MP3, remux it without re-encoding:

```powershell
ffmpeg -i input.mp3 -map_metadata -1 -c:a copy output.mp3
```

See `samples/README.md` for additional audio notes.

## Adding credits and testimonials

Edit `_data/credits.yml`.

```yaml
testimonials:
  - quote: "Alberto delivered great drum tracks in a short time."
    name: "Client Name"
    role: "Project or role"
```

Testimonials appear on the About and Recording pages. Quotes are optional: if `testimonials` is empty or absent, no testimonial block is rendered.

The site also derives highlights and shared-stage credits from `_data/live.yml`:

- `highlight_title` entries appear as homepage highlights.
- `bill_with` entries appear as shared stages with a project or band.
- `highlight_where`, `highlight_order`, and `bill_relevance` control presentation order and text.

## Updating gear

Edit `_data/studio.yml`.

`drum_gear` lists live and recording equipment. `gear` lists recording hardware and software. Each category has an array of items:

```yaml
drum_gear:
  - category: "Drum Kit"
    items:
      - "Gretsch Catalina Maple"

gear:
  - category: "DAW & Software"
    items:
      - "Reaper"
```

The Recording page renders both lists automatically.

## Updating text and navigation

- Homepage copy and section preview: `index.html`
- About: `_pages/about.md`
- Live & Tours: `_pages/live.md`
- Recording: `_pages/session.md`
- Projects: `_pages/projects.md`
- Contact: `_pages/contact.md`
- Privacy: `_pages/privacy.md`
- Navigation: `_data/navigation.yml`
- Global site title and featured YouTube video: `_config.yml`

The section front matter in `_pages/*.md` controls:

- `title`
- `permalink`
- `hero_image`
- `image_darkness`
- `section_slug`

The homepage automatically reads the matching section pages and cuts preview text at `<!-- home-cut -->`.

## Images

Use WebP or AVIF for local images where possible. Keep matching page references pointed to the exact filename.

Current named images:

| Image | Purpose |
|---|---|
| `assets/images/bio-photo.webp` | Homepage portrait |
| `assets/images/alberto-caroli.webp` | Default/overview hero |
| `assets/images/contact-background.webp` | Contact hero |
| `assets/images/live-background.webp` | Live page hero |
| `assets/images/live-concerts.webp` | Live concert archive panel |
| `assets/images/projects-background.webp` | Projects page hero |
| `assets/images/projects-current.webp` | Current projects panel |
| `assets/images/session-background.webp` | Recording page hero |
| `assets/images/session-drum-chart.webp` | Recording workflow photo |
| `assets/images/session-drums.webp` | Drum kit photo |
| `assets/images/session-studio-room.webp` | Studio room photo |
| `assets/images/portfolio/*` | Portfolio release artwork |

After replacing or renaming an image, update every reference under `_pages/`, `_layouts/`, `index.html`, `_data/`, and `README.md`. Avoid leaving unused original JPG files behind.

## Publishing

The site uses GitHub Pages with Jekyll.

1. Commit source changes.
2. Push to the configured publishing branch.
3. GitHub Pages rebuilds and publishes the site.

The public URL is configured by `url: "https://www.albertocaroli.com"` in `_config.yml`.
