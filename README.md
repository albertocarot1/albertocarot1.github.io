# Alberto Caroli – Musician Portfolio Website

Built on the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) Jekyll theme, configured for GitHub Pages.

## Quick Start

1. **Clone or fork this repo** and push to a GitHub repository.
2. Go to **Settings → Pages** → set source to `main` branch (root).
3. Your site will be live at `https://<username>.github.io/<repo>/`.

## Local Development

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

---

## How to Edit Content

### 🧑 About (`_pages/about.md`)
Edit the Markdown text and swap out `/assets/images/alberto-caroli.jpg` with your photo.

---

### 🎵 Projects (`_data/projects.yml`)

**Add a portfolio entry:**
```yaml
portfolio:
  - title: "Album Title"
    artist: "Artist Name"
    link: "https://open.spotify.com/album/..."     # optional
    art: "https://i.scdn.co/image/..."             # album art URL (paste from Spotify/Bandcamp)
    roles:
      - drummer_studio        # options below
      - mixing_engineer
```

**Available roles:**
| Key | Label |
|-----|-------|
| `drummer_live` | Drummer (Live) |
| `drummer_studio` | Drummer (Studio) |
| `drummer_both` | Drummer (Live & Studio) |
| `producer` | Producer |
| `mixing_engineer` | Mixing Engineer |
| `mastering_engineer` | Mastering Engineer |
| `vocals` | Backing Vocals |
| `recording_engineer` | Recording Engineer |
| `lights_technician` | Lights Technician |
| `composer` | Composer |
| `lyricist` | Lyricist |

**Add a current project:**
```yaml
current_projects:
  - name: "Band Name"
    description: "Short description of the project."
    link: "https://..."          # optional website
    roles:                         # optional; uses the available roles above
      - composer
      - lyricist
    socials:
      - platform: "instagram"
        icon: "fab fa-instagram"
        url: "https://instagram.com/bandname"
      - platform: "facebook"
        icon: "fab fa-facebook"
        url: "https://facebook.com/bandname"
      - platform: "youtube"
        icon: "fab fa-youtube"
        url: "https://youtube.com/@bandname"
```

---

### 🎤 Live (`_data/live.yml`)

**Add a concert:**
```yaml
upcoming:           # or: past:
  - date: "2026-09-01"          # YYYY-MM-DD (controls sort order)
    venue: "Venue Name"
    city: "City"
    country: "Italy"
    project: "Project Name"
    notes: "Optional note"       # optional
    youtube_url: "https://youtube.com/watch?v=..."   # optional
```

Upcoming concerts are sorted ascending (soonest first).  
Past concerts are sorted descending (most recent first).

---

### 🎚️ The Studio (`_data/studio.yml`)

Edit gear lists under `gear:` (studio gear) and `drum_gear:` (live rig).

```yaml
gear:
  - category: "Category Name"
    items:
      - "Item 1"
      - "Item 2"
```

Add or remove categories freely — the page auto-generates from the data file.

---

### 📱 Social Links & Author Sidebar (`_config.yml`)

Update the `author:` section with your real URLs:
```yaml
author:
  name: "Alberto Caroli"
  avatar: "/assets/images/bio-photo.jpg"
  bio: "Musician · Producer · Sound Engineer"
  links:
    - label: "YouTube"
      icon: "fab fa-fw fa-youtube"
      url: "https://youtube.com/@YOUR_CHANNEL"
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook"
      url: "https://facebook.com/YOUR_PAGE"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      url: "https://instagram.com/YOUR_HANDLE"
```

The same links are mirrored in `footer:` — update both.

---

### 🖼️ Images

Place images in `assets/images/`:
- `bio-photo.jpg` — sidebar portrait (square, min 200×200px)
- `alberto-caroli.jpg` — large about-page photo
- `studio-room.jpg` — studio room photo (appears in The Studio page)

---

## Structure

```
alberto-caroli-site/
├── _config.yml          # Site settings, author, social links
├── _data/
│   ├── navigation.yml   # Top nav menu
│   ├── projects.yml     # Portfolio + current projects
│   ├── live.yml         # Concerts (upcoming + past)
│   └── studio.yml       # Gear lists
├── _pages/
│   ├── about.md
│   ├── projects.md
│   ├── live.md
│   └── studio.md
├── assets/
│   ├── images/          # Put your photos here
│   └── css/main.scss    # Custom style overrides
├── index.html
└── Gemfile
```
