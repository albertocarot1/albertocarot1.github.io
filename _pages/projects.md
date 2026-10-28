---
permalink: /projects/
title: "Projects — Alberto Caroli"
description: "Selected live and studio projects featuring Alberto Caroli as drummer, producer and recording engineer."
layout: single
author_profile: true
toc: true
toc_label: "Projects"
toc_sticky: true
---

<style>
/* ── Role badge colours ── */
.role-badge {
  display: inline-block;
  font-size: 0.72em;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 3px 9px;
  border-radius: 3px;
  margin: 2px 3px 2px 0;
  white-space: nowrap;
  text-transform: uppercase;
}
.role-drummer_live      { background:#1a3a5c; color:#8ecae6; }
.role-drummer_studio    { background:#193d2b; color:#80d4a0; }
.role-drummer_both      { background:#1c3050; color:#a8d5f7; }
.role-producer          { background:#3d1f5c; color:#d4aaff; }
.role-mixing_engineer   { background:#5c2c00; color:#ffb86c; }
.role-mastering_engineer{ background:#5c1a1a; color:#ff8a8a; }
.role-vocals    { background:#3d3000; color:#ffe066; }
.role-recording_engineer{ background:#002f5f; color:#a7d8ff; }
.role-lights_technician { background:#2d3d2d; color:#b7f1b0; }
.role-composer          { background:#123f4a; color:#7fe7d4; }
.role-lyricist          { background:#4a2438; color:#f4a6c8; }

/* ── Portfolio grid ── */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.6rem;
  margin: 1.5rem 0;
}
.portfolio-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}
.portfolio-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.35);
}
.portfolio-card img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
}
.portfolio-card .card-body {
  padding: 0.85rem 1rem 1rem;
}
.portfolio-card h3 {
  margin: 0 0 0.2rem;
  font-size: 1rem;
}
.portfolio-card .artist {
  font-size: 0.85em;
  opacity: 0.65;
  margin-bottom: 0.5rem;
}
.portfolio-card .roles { margin-top: 0.5rem; }

/* ── Current projects ── */
.current-project {
  background: rgba(255,255,255,0.03);
  border-left: 3px solid #f0a500;
  padding: 1rem 1.2rem;
  border-radius: 0 6px 6px 0;
  margin-bottom: 1.2rem;
}
.current-project h3 { margin: 0 0 0.3rem; }
.current-project .desc { opacity: 0.75; font-size: 0.92em; margin-bottom: 0.5rem; }
.portfolio-card .social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px; height: 32px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  margin-right: 6px;
  font-size: 1em;
  text-decoration: none;
  transition: background 0.2s;
}
.portfolio-card .social-icons a:hover { background: rgba(255,255,255,0.18); }

/* Role label helper */
{% assign role_labels = "drummer_live:Drummer (Live)|drummer_studio:Drummer (Studio)|drummer_both:Drummer (Live & Studio)|producer:Producer|mixing_engineer:Mixing Engineer|mastering_engineer:Mastering Engineer|vocals:Vocals|recording_engineer:Recording Engineer|lights_technician:Lights Technician|composer:Composer|lyricist:Lyricist" | split: "|" %}
</style>

{% assign role_labels_str = "drummer_live:Drummer (Live)|drummer_studio:Drummer (Studio)|drummer_both:Drummer (Live & Studio)|producer:Producer|mixing_engineer:Mixing Engineer|mastering_engineer:Mastering Engineer|vocals:Vocals|recording_engineer:Recording Engineer|lights_technician:Lights Technician|composer:Composer|lyricist:Lyricist" %}

## Portfolio

<div class="portfolio-grid">
{% for item in site.data.projects.portfolio %}
  <div class="portfolio-card">
    {% if item.art and item.art != "" %}
      {% if item.link and item.link != "" %}
        <a href="{{ item.link }}" target="_blank" rel="noopener">
          <img src="{{ item.art }}" alt="Cover artwork for {{ item.title }} by {{ item.artist }}" loading="lazy">
        </a>
      {% else %}
        <img src="{{ item.art }}" alt="Cover artwork for {{ item.title }} by {{ item.artist }}" loading="lazy">
      {% endif %}
    {% endif %}
    <div class="card-body">
      {% if item.link and item.link != "" %}
        <h3><a href="{{ item.link }}" target="_blank" rel="noopener">{{ item.title }}</a></h3>
      {% else %}
        <h3>{{ item.title }}</h3>
      {% endif %}
      <div class="artist">{{ item.artist }}</div>
      <div class="roles">
        {% for role in item.roles %}
          {% assign role_key = role %}
          {% assign role_label = role_key %}
          {% assign pairs = role_labels_str | split: "|" %}
          {% for pair in pairs %}
            {% assign kv = pair | split: ":" %}
            {% if kv[0] == role_key %}{% assign role_label = kv[1] %}{% endif %}
          {% endfor %}
          <span class="role-badge role-{{ role_key }}">{{ role_label }}</span>
        {% endfor %}
      </div>
    </div>
  </div>
{% endfor %}
</div>

---

## Current Projects

<p>Projects where Alberto is an active member.</p>

{% for project in site.data.projects.current_projects %}
<div class="current-project">
  <h3>
    {% if project.link and project.link != "" %}
      <a href="{{ project.link }}" target="_blank" rel="noopener">{{ project.name }}</a>
    {% else %}
      {{ project.name }}
    {% endif %}
  </h3>
  <p class="desc">{{ project.description }}</p>
  {% if project.roles and project.roles.size > 0 %}
  <div class="roles">
    {% for role in project.roles %}
      {% assign role_key = role %}
      {% assign role_label = role_key %}
      {% assign pairs = role_labels_str | split: "|" %}
      {% for pair in pairs %}
        {% assign kv = pair | split: ":" %}
        {% if kv[0] == role_key %}{% assign role_label = kv[1] %}{% endif %}
      {% endfor %}
      <span class="role-badge role-{{ role_key }}">{{ role_label }}</span>
    {% endfor %}
  </div>
  {% endif %}
  {% if project.socials and project.socials.size > 0 %}
  <div class="social-icons">
    {% for social in project.socials %}
      <a href="{{ social.url }}" target="_blank" rel="noopener" title="{{ social.platform | capitalize }}">
        <i class="{{ social.icon }}"></i>
      </a>
    {% endfor %}
  </div>
  {% endif %}
</div>
{% endfor %}

---
