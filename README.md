# Aurora Glass

A macOS menu bar app that paints a live GPU fluid simulation across your menu
bar.

### [aurora.radiantmachines.com](https://aurora.radiantmachines.com)

That is the site, the download and the help — it is self-hosted on its own
domain, not on GitHub Pages. This repository holds the published builds and
the issue tracker; the application source is private.

## Download

**[Download Aurora Glass](https://aurora.radiantmachines.com)** — requires
macOS 26 (Tahoe) or later, Apple silicon.

Every build is signed with a Developer ID certificate, notarized by Apple and
stapled, so it opens without a Gatekeeper warning and works offline on first
launch. Each release here has the same notarized `AuroraGlass.dmg` attached as
an archive:

[all releases](https://github.com/gourneau/aurora-glass/releases)

## If it draws nothing

Turn off **System Settings → Control Center → Menu Bar → "Show menu bar
background"**. The aurora is painted behind everything and shows through a
transparent menu bar; with that setting on, the bar paints straight over it.

The [Help section](https://aurora.radiantmachines.com/#faq) covers the rest,
including the one command that says which of them it is.

## Problems and ideas

**The quickest route needs no account and no Terminal.** Open the panel from
the menu bar icon, go to the **System** tab, and find the self-check — the
first card when nothing is drawing, the last one otherwise: it says whether the aurora is being drawn and, if not, what
stopped it. Press **Send this to the developer** and it comes straight to me,
carrying the version, the Mac and what the renderer is doing.

It is sent only when you press that button — never on its own — and what
leaves is exactly the text shown above it: no account, no file names, nothing
from your screen. If the app cannot reach the network, press **Copy** and
paste it at <https://aurora.radiantmachines.com/report.html>.

Otherwise, [open an issue](https://github.com/gourneau/aurora-glass/issues/new/choose).
The bug form asks for the version, the Mac and the macOS build, because
nothing visual can be worked out without them, and it gives you the command
that prints all three.
