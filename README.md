# Aurora Glass — website and downloads

The landing page for [Aurora Glass](https://gourneau.github.io/aurora-glass/),
a macOS menu bar app that paints a live GPU fluid simulation across the menu
bar, and the place its signed builds are published.

The application source lives in a private repository. This repository holds
only the site and the release downloads.

## The site

Static HTML, CSS and a little JavaScript. No build step. Open `index.html`,
or serve it:

```bash
python3 -m http.server 8777
```

Served by GitHub Pages from the repository root.

## Downloads

Each release has a notarized `AuroraGlass.dmg` attached, signed with a
Developer ID certificate and stapled, so it opens without a Gatekeeper
warning and works offline on first launch.

**Requires macOS 26 (Tahoe) or later, Apple silicon.**

After installing, turn off **System Settings → Menu Bar → "Show menu bar
background"**. That makes the bar transparent so the aurora shows through,
with your real menu bar text drawn crisply on top. Without it the bar stays
opaque and you will see nothing.
