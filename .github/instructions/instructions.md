---
description: Describe when these instructions should be loaded by the agent based on task context
# applyTo: 'Describe when these instructions should be loaded by the agent based on task context' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

<!-- Tip: Use /create-instructions in chat to generate content with agent assistance -->

This is my personal website (Jekyll; minimal-mistakes theme, check how it is built). Standing rules for all work in this repo:
- Work on a branch named rework/<topic>. Small commits, one per task.
- Preview locally and tell me the command you used. Fix any build warnings you introduce.
- Never invent facts about me (dates, venues, prices, mic positions, testimonials, numbers). Where a fact is missing, leave a marker in the source, <!-- TODO(alberto): question -->, and list all markers at the end of the task.
- docs/rework-plan.md is the source of truth for wording and structure. If you change wording, tell me.
- Third-party embeds must load only on click. No secrets in the repo. No new dependencies without asking me first.
- When adding or editing entries under `past` in `_data/live.yml`, use Copilot to refresh `_data/home_highlights.yml` in the same change. Prompt: “Review every past entry in `_data/live.yml`. Using only each show's `project` and `notes`, select up to four concise live highlights most relevant to an artist hiring a drummer. Prioritize recognizable supporting acts and distinctive performance experiences, but do not claim popularity or add facts absent from the source. Update the title, summary and source dates in `_data/home_highlights.yml`; keep every statement traceable to its source dates.” Review the result for accuracy.
- After each task, list the files you changed, how to preview, and anything you need from me.