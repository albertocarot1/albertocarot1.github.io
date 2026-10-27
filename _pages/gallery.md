---
permalink: /gallery/
title: "Gallery"
layout: single
author_profile: true
toc: true
toc_label: "Gallery"
toc_sticky: true
---

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.gallery-item {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.gallery-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 22px rgba(0,0,0,0.25);
}

.gallery-item img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.gallery-item .caption {
  padding: 0.9rem 1rem 1.1rem;
}

.gallery-item h3 {
  margin: 0 0 0.35rem;
  font-size: 1rem;
}

.gallery-item p {
  margin: 0;
  opacity: 0.75;
  font-size: 0.9rem;
}
</style>

<p>Professional images and selected moments from performances, sessions, and artist portraits.</p>

<div class="gallery-grid">
  {% for image in site.data.gallery.gallery %}
    <figure class="gallery-item">
      <img src="{{ image.image | relative_url }}" alt="{{ image.title }}" loading="lazy">
      <figcaption class="caption">
        <h3>{{ image.title }}</h3>
        {% if image.caption and image.caption != "" %}
          <p>{{ image.caption }}</p>
        {% endif %}
      </figcaption>
    </figure>
  {% endfor %}
</div>
