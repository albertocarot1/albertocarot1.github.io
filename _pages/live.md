---
permalink: /live/
title: "Live"
layout: single
author_profile: true
toc: true
toc_label: "Live"
toc_sticky: true
---

<style>
.concert-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0 2rem;
  font-size: 0.93em;
}
.concert-table th {
  text-align: left;
  padding: 0.5rem 0.75rem;
  border-bottom: 2px solid rgba(255,255,255,0.15);
  font-size: 0.78em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.55;
}
.concert-table td {
  padding: 0.6rem 0.75rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  vertical-align: middle;
}
.concert-table tr:hover td {
  background: rgba(255,255,255,0.03);
}
.concert-date {
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  font-size: 0.88em;
  opacity: 0.7;
}
.concert-project {
  font-size: 0.82em;
  opacity: 0.6;
  display: block;
  margin-top: 1px;
}
.concert-location {
  font-size: 0.82em;
  opacity: 0.6;
  display: block;
  margin-top: 1px;
}
.yt-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #ff4444;
  text-decoration: none;
  font-size: 0.85em;
  white-space: nowrap;
}
.yt-link:hover { color: #ff2222; }
.concert-notes {
  font-size: 0.82em;
  opacity: 0.6;
  font-style: italic;
}
.next-badge {
  display: inline-block;
  background: #f0a500;
  color: #111;
  font-size: 0.65em;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 2px 7px;
  border-radius: 3px;
  text-transform: uppercase;
  vertical-align: middle;
  margin-left: 6px;
}
</style>

## Next Dates

{% if site.data.live.upcoming and site.data.live.upcoming.size > 0 %}
<table class="concert-table">
  <thead>
    <tr>
      <th>Date</th>
      <th>Venue / Location</th>
      <th>Project</th>
      <th>Notes / Video</th>
    </tr>
  </thead>
  <tbody>
    {% assign sorted_upcoming = site.data.live.upcoming | sort: "date" %}
    {% for concert in sorted_upcoming %}
    <tr>
      <td class="concert-date">
        {{ concert.date | date: "%d %b %Y" }}
      </td>
      <td>
        <strong>{{ concert.venue }}</strong>
        <span class="concert-location">{{ concert.city }}, {{ concert.country }}</span>
      </td>
      <td>
        <span class="concert-project">{{ concert.project }}</span>
      </td>
      <td>
        {% if concert.notes and concert.notes != "" %}
          <span class="concert-notes">{{ concert.notes }}</span>
        {% endif %}
        {% if concert.youtube_url and concert.youtube_url != "" %}
          <a href="{{ concert.youtube_url }}" target="_blank" rel="noopener" class="yt-link">
            <i class="fab fa-youtube"></i> Watch
          </a>
        {% endif %}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>
{% else %}
<p><em>No upcoming dates at the moment. Stay tuned!</em></p>
{% endif %}

---

## Past Concerts

{% if site.data.live.past and site.data.live.past.size > 0 %}
<table class="concert-table">
  <thead>
    <tr>
      <th>Date</th>
      <th>Venue / Location</th>
      <th>Project</th>
      <th>Notes / Video</th>
    </tr>
  </thead>
  <tbody>
    {% assign sorted_past = site.data.live.past | sort: "date" | reverse %}
    {% for concert in sorted_past %}
    <tr>
      <td class="concert-date">{{ concert.date | date: "%d %b %Y" }}</td>
      <td>
        <strong>{{ concert.venue }}</strong>
        <span class="concert-location">{{ concert.city }}, {{ concert.country }}</span>
      </td>
      <td>
        <span class="concert-project">{{ concert.project }}</span>
      </td>
      <td>
        {% if concert.notes and concert.notes != "" %}
          <span class="concert-notes">{{ concert.notes }}</span><br>
        {% endif %}
        {% if concert.youtube_url and concert.youtube_url != "" %}
          <a href="{{ concert.youtube_url }}" target="_blank" rel="noopener" class="yt-link">
            <i class="fab fa-youtube"></i> Watch
          </a>
        {% endif %}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>
{% else %}
<p><em>No past concerts listed yet.</em></p>
{% endif %}

