---
permalink: /session/
title: "Session"
layout: section
section_slug: session
has_detail: true
hero_image: /assets/images/session-recording-studio.jpg
image_darkness: 0.55
---

<div class="session-overview" markdown="1">
Need a drummer for a recording? I’m available for **in-person studio sessions** at your studio or mine, and for **remote drum tracks** recorded in my own studio and delivered online. I record acoustic drum parts for rock, pop, punk and metal songs, tailored to your music.
</div>

My drums are on releases by Gremlin Special, Effigy and P(a)fanner's Flying Donkeys.

<!-- home-cut -->

## How I Work

I write and record drum parts for **rock**, **pop**, **punk** and **metal** songs on a real acoustic kit. I've been drumming since 2006, but that was only the beginning: wanting to release my own songs pushed me to learn guitar, bass and singing too.

It shows in my drum parts, which leave space for each instrument but step forward when the song calls for it. Fast and heavy, slow and soft, or slow and heavy? Your song gets the drum part it needs to sound even more authentic.

<blockquote class="philosophy">
  <p>Nobody ever left a gig saying, “That song really needed more fills!”</p>
</blockquote>

My approach to writing, recording, and mixing drums is built on a few core principles:

<ul class="core-principles">
  <li><strong>Serve the music.</strong> Every decision — from the part I write to the way it is recorded — must serve the song and the artist's intention. Technique is never an end in itself.</li>
  <li><strong>Trust the ears.</strong> Drum tuning frequencies, drum shell materials, mic frequency responses, loudness meters, EQ or compressor presets: they are all useful starting points. But the reference that matters most is what you actually hear — and what the listener will feel.</li>
  <li><strong>Less is more, until it isn’t.</strong> The goal is always clarity and impact. Sometimes that means minimal drum parts; sometimes it means pushing a section to the edge. Learning the difference has been a process for me, and it’s what I love most about composing. You can also just tell me what you hear, and I’ll find where your song wants to breathe and where it wants to hit.</li>
  <li><strong>Acoustic rawness, digital precision.</strong> I avoid samples and triggers: what you hear is a real kit played in a real room. I give your song its groove, with a metronome or without one, so the feel comes from the performance. If you want it tighter, I do DAW-assisted grid alignment, never losing the groove.</li>
</ul>

<section class="session-feature session-feature--image-right">
  <div class="session-feature__media">{% include figure.html image_path="/assets/images/session-drum-chart.jpg" alt="Placeholder photo of Alberto writing a drum chart with song sections" caption="Placeholder for Alberto writing a drum chart with song sections" %}</div>
  <div class="session-feature__content" markdown="1">
### What I need from you

Two things get me started: your **drumless track** and a **BPM** or **BPM tempo chart**, if it changes throughout the song. I also work with tracks recorded without a metronome.

Anything else that helps me hear the drums you have in mind is welcome, and gets you there faster:

- a previous drum track or programmed drums
- a reference groove and reference sounds
- written indications

MIDI guitar/bass or Guitar Pro and other tablature programs are more than welcome!
  </div>
</section>

## Remote drum tracks

Raw, transparent, high-quality drum tracks, recorded at **48 kHz/24bit** and delivered online as WAV files, as a multitrack of 8 phase-aligned channels.

If you want it, I can also **grid-align** the performance and/or deliver **pre-mixed stems**, so you start from the sound we agreed the song needs.

Turnaround is typically 3 days, with 2 revisions included. If you're on a tighter deadline, just ask.

{% include session-audio-samples.html id="session-page" heading="Listen to drum examples" %}

## Track record

### On record

{% assign released = '' | split: '' %}
{% for i in site.data.projects.portfolio %}
  {% if i.roles contains 'drummer_studio' or i.roles contains 'drummer_both' %}
    {% assign released = released | push: i %}
  {% endif %}
{% endfor %}
{% if released.size > 0 %}
My drums are on {% for i in released %}{% if forloop.first %}{% elsif forloop.last %} and {% else %}, {% endif %}{% if i.link and i.link != "" %}<a href="{{ i.link }}" target="_blank" rel="noopener"><em>{{ i.title }}</em></a>{% else %}<em>{{ i.title }}</em>{% endif %} by {{ i.artist }}{% endfor %}.
{% endif %}

{% include credits.html testimonials=true home_strip=true heading="What clients and bandmates say" level=3 %}

---

## Styles

I'm comfortable with all types of rock: soft rock and pop, hard rock, blues, punk, and metal both slow and fast, up to power and thrash beats. Heavy blast beats are the one thing I leave out.

Want a taste of my drumming style? Have a look at [my YouTube channel](https://www.youtube.com/@albecarolimusic).

<section class="session-feature session-feature--image-left">
  <div class="session-feature__media">{% include figure.html image_path="/assets/images/session-drums.jpg" alt="Placeholder photo of Alberto's drum kit" caption="Placeholder for Alberto's drum kit" %}</div>
  <div class="session-feature__content" markdown="1">
## The Drums

My recording kit is a **Gretsch Catalina Maple** (22/10/12/16") with **Evans** heads. For the snare I use either a **Gretsch** 14x6 maple, a **Pearl** 14x5.5 steel or a **Dixon** 14x3.5 maple piccolo when a song needs a more in-your-face sound. I play a wide array of cymbals, including **Paiste**, **UFIP**, **Zildjian** and **Zultan**, and I alternate between a **Pearl Eliminator** double pedal and a **DW7000** single pedal.

The complete list of what I play, live and in the studio:

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
  </div>
</section>

## In-person studio sessions

Need a drummer in the room? I can join you at your studio or host the session in my own. Get in touch with the location, dates and project details to arrange an in-person recording.

## Recording Setup

For remote sessions, I record in my own studio, which I've been using since 2022, then deliver the tracks online. For in-person sessions, we can record at your studio or mine.

I make sure that the sound of the drums is good from the get-go, tuning the snare and shells according to the song (I use the TuneBOT for specific tunings), and taking care of any resonances or noises **before** they are captured by the microphones.

The mics go through an **8-channel** audio interface and its transparent preamps. I record and mix in Reaper, but can export the audio tracks for compatibility with any DAW.

## Studio Gear

The complete list of the recording gear:

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

<section class="session-feature session-feature--image-right">
  <div class="session-feature__media">{% include figure.html image_path="/assets/images/session-studio-room.jpg" alt="Placeholder photo of Alberto's studio room" caption="Placeholder for Alberto's studio room" %}</div>
  <div class="session-feature__content" markdown="1">
## The Room

My studio is a dedicated drum recording space, **acoustically treated** with the natural sound of the instrument in mind.

The treatment controls unwanted low-frequency buildup without making the room excessively dry or dull. This preserves the depth and punch of the shells, along with the openness and detail of the cymbals.

The result is a balanced, natural drum sound, with controlled resonances and just the right amount of room character — giving you recordings that are easy to work with and sit naturally in the mix.
  </div>
</section>

## Ready to start?

Send me your drumless track and BPM chart through the [Contact page](/contact/). You can also find me on [Fiverr](https://www.fiverr.com/albertocaroli/write-and-record-drum-parts-for-your-rock-song). Not sure yet? [Book a call](https://calendly.com/acaroli1990/30min) and tell me about your song.

*Gear lists updated periodically.*
