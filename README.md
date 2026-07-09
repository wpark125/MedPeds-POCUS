# POCUS Cases

A case-based point-of-care ultrasound curriculum for residents. Pure HTML/CSS/JS
— no build step, no server required.

## Running it

Just open `index.html` in a browser, or host the folder anywhere static
(GitHub Pages, Netlify, a hospital intranet file share, etc). Everything is
client-side.

## Structure

```
index.html          entry point
css/styles.css       all styling
js/data.js            <-- ALL your content lives here (cases, labs, findings)
js/app.js              routing + rendering logic (rarely needs edits)
assets/gifs/           drop your ultrasound clips here
```

## Adding your ultrasound GIFs

1. Copy your clip into `assets/gifs/` (any subfolder naming you like, e.g.
   `assets/gifs/chest-pain/cp1-psax.gif`).
2. Open `js/data.js`, find the relevant case and finding, and set:
   ```js
   psax: { normal: false, gif: "assets/gifs/chest-pain/cp1-psax.gif", ... }
   ```
3. Refresh the page. Leaving `gif: ""` shows a "NO CLIP LOADED" placeholder,
   so you can build out case text before the media is ready.

Any image format a browser can show works (`.gif`, `.mp4` won't autoplay as
an `<img>` — if you want video clips instead of GIFs, ask and the `<img>` tag
in `js/app.js` can be swapped for a `<video autoplay loop muted>`).

## Adding a new case

Open `js/data.js` and duplicate an existing case object inside the relevant
indication's array in `DATA.cases`. Give it a unique `id`. Every case needs:

- `title`, `teaser`
- `hpi` (prose)
- `vitals` (hr, bp, rr, spo2, temp)
- `exam` (prose)
- `labs` (array of `{name, value, unit, flag}` — flag is `"normal"`, `"high"`,
  or `"low"`)
- `findings.cardiac` — `pslax`, `psax`, `apical4`, `subcostal4`
- `findings.lung` — `anteriorRight`, `anteriorLeft`, `posteriorRight` (PLAPS),
  `posteriorLeft` (PLAPS)
- `findings.abdomen` — `ruq`, `luq`, `suprapubic`, `ivc`

Each finding needs `normal` (true/false), `gif` (path or `""`), `label`
(one-line finding name shown as the header), and `interpretation` (the
teaching point, a sentence or two).

## Adding a new indication (chief complaint)

Add an entry to `DATA.indications` (id, name, accent color, tagline, blurb),
then add a matching `DATA.cases["your-id"] = [...]` array. The landing page
and navigation pick it up automatically — no other file needs to change.
