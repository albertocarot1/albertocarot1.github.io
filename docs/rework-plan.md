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
