# Session audio samples

Put the MP3 files referenced by `_data/session_samples.yml` in this folder:

- `01.mp3`
- `02.mp3`
- `03.mp3`

Update the titles, `mix` (`raw` or `mixed`), and `grid` (`true` or `false`) in that data file to describe each recording. Entries with the same title appear as one player with buttons for the available variations. A button is disabled if that value does not change, or if there is no matching file for the other selected tag.

For each title, provide every MP3 variant at the same duration so switching versions preserves the playback position:

```yaml
- title: "01"
  file: /samples/01-raw-no-grid.mp3
  mix: raw
  grid: false
- title: "01"
  file: /samples/01-raw-grid.mp3
  mix: raw
  grid: true
```

The same grouped player list appears in the Session homepage preview and the full Session page.

If a browser reports a media read error for an MP3 that plays in desktop software, remux it to rebuild its browser-compatible seek metadata without re-encoding the audio:

```powershell
ffmpeg -i input.mp3 -map_metadata -1 -c:a copy output.mp3
```
