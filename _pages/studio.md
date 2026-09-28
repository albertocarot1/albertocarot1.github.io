---
permalink: /studio/
title: "The Studio"
layout: single
author_profile: true
toc: true
toc_label: "The Studio"
toc_sticky: true
---

<style>
.studio-section { margin-bottom: 3rem; }

.gear-category { margin-bottom: 1.6rem; }
.gear-category h4 {
  font-size: 0.78em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 0.4rem;
}
.gear-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1rem;
}
.gear-list li {
  position: relative;
  padding-left: 1em;
  font-size: 0.92em;
  line-height: 1.5;
}
.gear-list li::before {
  content: "–";
  position: absolute;
  left: 0;
  opacity: 0.4;
}

.gear-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.2rem;
}
.gear-block {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 6px;
  padding: 1rem 1.2rem;
}

blockquote.philosophy {
  border-left: 3px solid #f0a500;
  padding: 0.6rem 1.2rem;
  margin: 1.5rem 0;
  font-style: italic;
  font-size: 1.1em;
  opacity: 0.85;
}
</style>

## The Room

The studio is a purpose-built recording and mixing space, acoustically treated from the ground up. It features a live room capable of capturing full drum kits with natural ambience, alongside a control room designed for critical listening and detailed mixing work.

The acoustic design prioritises a flat, neutral frequency response — essential for making mixing and mastering decisions that translate faithfully across any playback system. Broadband absorption, corner bass traps, and strategic diffusion work together to create a space that is both accurate and inspiring to work in.

{% include figure image_path="/assets/images/studio-room.jpg" alt="The studio room" caption="Control room — Alberto Caroli Studio" %}

The room is comfortable and productive for long sessions, with a deliberate separation between the technical environment and the creative atmosphere.

---

## Philosophy

<blockquote class="philosophy">
  "The best technology is the one you stop noticing."
</blockquote>

Alberto's approach to recording, mixing, and mastering is built on a few core principles:

**Serve the music.** Every decision — from microphone placement to the final limiter setting — must serve the song and the artist's intention. Technique is never an end in itself.

**Trust your ears.** Specs, measurements, and presets are useful starting points. But the reference that matters most is what you actually hear — and what the listener will feel.

**Less is more, until it isn't.** The goal is always clarity and impact. Sometimes that means extreme restraint; sometimes it means pushing something to the edge. Knowing the difference is the craft.

**Analogue warmth, digital precision.** The studio blends a curated selection of outboard hardware with modern DAW workflows, seeking the best of both worlds without dogma.

---

## Studio Gear

<div class="gear-grid">
{% for cat in site.data.studio.gear %}
<div class="gear-block">
  <h4>{{ cat.category }}</h4>
  <ul class="gear-list">
    {% for item in cat.items %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
</div>
{% endfor %}
</div>

---

## Drum Gear

Equipment Alberto uses for live and studio drumming performances.

<div class="gear-grid">
{% for cat in site.data.studio.drum_gear %}
<div class="gear-block">
  <h4>{{ cat.category }}</h4>
  <ul class="gear-list">
    {% for item in cat.items %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
</div>
{% endfor %}
</div>

---

*Gear lists updated periodically. For session inquiries, use the contact links in the sidebar.*
