# Changelog

What changed in each release of Aurora Glass, newest first. Downloads are at
[aurora.radiantmachines.com](https://aurora.radiantmachines.com).

## Unreleased

## 0.1.49 — 2026-10-28

- **Agent states move the way you expect.** Working is a soft light sweeping
  across the bar, over and over, like a progress bar. Waiting breathes,
  slowly brighter and dimmer, until you answer. Done is one ripple spreading
  out from the middle, then calm. Failed is two quick red blinks. The colors
  are as before, so each still stands out against any look.
- **Shape the aurora swell.** With the swell chosen in System → Messages, new
  sliders set how far it drops, how much it drips (from a clean band to a
  rounded drop; it is less drippy than before by default), how long its wisps
  trail and how wide it is, with a Preview button.
- **Examples need nothing installed.** The command-line examples use `ping`
  instead of a made-up script.
- **Homebrew is current again.** `brew install --cask gourneau/tap/aurora-glass`
  had been installing 0.1.5. It installs the newest build now, and every
  release updates it.
## 0.1.48 — 2026-10-28

- **A new icon.** The app has an icon of its own at last — the two arcs of the
  website's logo, in aurora colors — and the same mark replaces the sparkles in
  the menu bar and at the top of the settings panel.
- **One Edge choice: Clean, Wispy or Tails.** The Layout tab used to have a
  Wispy edge switch and a Tails slider, and the two together looked broken.
  Now it is one choice. If you had both on, you keep the tails.
- **Tails that get your attention.** The Drive tab has a new card, When an
  agent needs you: color only as before, drop tails of light below the bar for
  a few seconds when an agent starts waiting or something fails, or keep
  dropping them every 20 seconds until it is answered. Tails show behind your
  windows only.
- **`aurora hooks --install` wires the command into Claude Code in one go.**
  It adds `aurora hook` to `~/.claude/settings.json` (or the one in
  `$CLAUDE_CONFIG_DIR`) without touching anything already there, backs the
  file up first, and does nothing the second time. A file that is not valid
  JSON is left alone. `aurora hooks --uninstall` takes out only what it added.
  The help no longer suggests appending to the file with `>>`, which broke it.
- **Edit looks in the browser.** [aurora.radiantmachines.com/editor.html](https://aurora.radiantmachines.com/editor.html)
  runs the app's own renderer in a WebGPU browser, with every built-in look,
  their options as sliders and the `.aurora` text beside them. Paste a look in
  or copy one out.
- **The look editor is friendlier.** The built-in looks are tiles with their
  pictures instead of a drop-down, the text is colored as you type (a name a
  look does not have is underlined, and so is any line that is skipped), and a
  Live badge on the preview flashes each time an edit takes effect. Click a
  color in the text for the system's color chooser, or a number for a slider.
- **The website's menu bar behaves like one.** The page or section you are in
  is lit like an open menu, and it follows you as you scroll. The light hanging
  below the bar fades away wisp by wisp as you scroll down, instead of being
  cut off.
- **A new website.** The menu bar at the top of
  [aurora.radiantmachines.com](https://aurora.radiantmachines.com) is the app
  itself, running in your browser, and a gallery of every look switches it.
  Help has its own page, the docs cover the `aurora` command, and every page
  shares one header.
- **The look editor is gentler on your browser.** It no longer queues frames
  faster than the graphics card can draw them, warms up over a few frames
  instead of all at once, and shows a loader until it is ready.
- **The look editor and the website show the light as the app does.** The
  wispy edge and tails were nearly invisible in the browser, because its
  colors were not encoded the way your Mac's screen output is. They now match.

## 0.1.47 — 2026-10-27

- **Looks have options, like screensavers used to.** The Look tab has a new
  card for the look on show, with the knobs it offers as sliders. Starlight
  offers how many stars, how far apart, how deeply they twinkle, how many
  shooting stars and how long their tails are; Fairy Dust its motes; every
  look its brightness and glow.
- **Edit a look as text.** The same card opens the look as a short `.aurora`
  file to edit and apply, and copies, pastes, saves and opens them, so a look
  can be sent to someone. The language, including how a look declares its
  own options, is documented at
  [aurora.radiantmachines.com/docs.html](https://aurora.radiantmachines.com/docs.html).
- **The aurora swell.** `aurora say --swell`, or *Aurora swell* in System →
  Messages: a bold piece of aurora bulges down out of the bar in the look's
  own colors with the line in it, then sinks back in.
- **Put the text where there is room.** On a smaller screen the app menus can
  reach the notch. Messages can now go left of the notch, right of it, or
  anywhere along the bar, and `aurora say --place right` moves one message.

## 0.1.46 — 2026-10-27

- **No more flicker.** On XDR displays the bar would now and then dip darker
  and whiter for a frame or two. Recorded and counted: 11 flickers in 20
  seconds with HDR glow on, none with it off. No look ever puts light beyond
  ordinary white, so HDR glow added nothing to see. It is off by default now
  and switched off once for everyone who had it; the toggle is still in
  Look if you want it back.
- **The settings panel switches tabs at once.** Layout took 0.6 s to open and
  System 0.4 s. A slider with steps draws a tick for every one (241 for the
  bleed), and the font menu built an entry for every installed font each time.
  Every tab now opens in under a tenth of a second.
- **Pumpkin Spice**, a new look: pumpkin, caramel and cinnamon under whipped
  cream, slow and warm, with a few glints.

## 0.1.45 — 2026-10-27

- **A look is the same look whatever you chose before it.** The gaps between
  curtains, and the Travel setting, were not part of a look, so a look that
  did not set them kept the previous one's — Northern Lights chosen after
  Starlight was not quite Northern Lights — and saving a look did not keep
  them either. Both are part of a look now.
- **Scripts can drive the sky.** A custom script (Drive → Custom script) can
  now `bind` `sparkle`, `motes`, `twinkle`, `stars`, `meteors` and
  `curtains`, so stars can brighten with the music or motes breathe on their
  own.

## 0.1.44 — 2026-10-27

- **A new look moves the moment you choose it.** Choosing a look restarts the
  fluid, and it used to start empty and still: measured, it moved at a tenth
  of its usual rate for the first few seconds, so the colors changed at once
  and then nothing seemed to happen. It now runs a few seconds of the fluid
  on the spot, so the bar is already moving — at about three quarters of its
  settled rate a fifth of a second later. The same goes for launch.

## 0.1.43 — 2026-10-27

- **Wash away burns the words into light.** The letters lean and bend with
  the flow, catch fire along a front that eats through them, and break into
  glowing sparks that the fluid scatters — while a stream of the look's color
  pours out of them. It takes a little under two seconds.
- **Choose the font for text in the bar.** The default is now the menu bar's
  own font, exactly as the system draws it, for both text in the bar and the
  visor (which was monospaced). System → Messages offers Rounded, Serif,
  Monospaced, or any font on your Mac, and `aurora say "…" --font "Avenir
  Next"` picks one for a single message.

## 0.1.42 — 2026-10-27

- **Starlight**, a new look: nebula colors — deep indigo, violet and pink,
  with the pale cyan of starlight — a field of stars in the dark between the
  curtains, and every so often a shooting star across the bar. With tails on,
  the stars carry on into the sky the tails hang in.
- **Stars** and **Shooting stars** are settings of their own (Look tab, under
  Sparkle), so any look can have a night sky. The stars hold still while the
  aurora drifts past them, and dim behind a bright curtain.
- **New blank** starts a palette of your own from plain grays, alongside
  *New from this*.
- American spelling throughout the app, the command line and the website:
  color, not colour.

## 0.1.41 — 2026-10-27

- **Make your own palettes.** In Look → Color, *New from this* copies the
  palette on show into one you can edit, with the bar itself as the preview.
  The first color is labeled *Bar*, because it very nearly is: the aurora is
  highlights on top of it, so it is the color to change first. Each color
  has hue, saturation and brightness sliders and a hex field. Palettes can be
  renamed and deleted, and a saved look that used one follows it through a
  rename.
- **Share a palette as one line of text.** *Copy as text* gives
  `aurora palette "#5a0c12" "#c2361f" "#f08a24" "#ffd27a"  # Ember` — a
  working command in any shell, with the name riding along as a comment.
  *Paste* turns a line like that, or any two to four `#rrggbb` colors, back
  into a saved palette.

## 0.1.40 — 2026-10-27

- **The wispy edge moves with the aurora.** It travels along the bar at the
  pace the curtains drift, keeps reshaping, and hangs lower under a bright
  curtain than under the dark sky beside it. Before, it barely moved at all:
  measured, its tips now move about eleven times as much, and the pattern
  travels where it used to stand still. Tails move with it and keep the
  shape you set them to.
- **`aurora say "text"`** puts a line of text in the menu bar from any shell,
  script or agent, and takes it down by itself. It scrolls through by
  default; `--fade` holds it and fades, `--wash` lets the fluid drag the
  letters away and break them up into the aurora, and `--visor` drops a
  console down from under the notch that types the line out. Style and
  placement are in System → Messages, with a button to try it.

## 0.1.39 — 2026-10-27

- **Tails.** The aurora's light can now hang down into the desktop below the
  bar, in streamers of uneven length, like curtains in a night sky. Set the
  length in the Layout tab; zero is off. Tail brightness, sway and streaks
  are adjustable, and the tails move with the aurora and with the edge pace.
  They are drawn at desktop level only, never over your windows, and cost
  about a tenth of a millisecond a frame at 300 pt.

## 0.1.38 — 2026-10-27

- The notch no longer has a dark band down its sides or square shoulders at
  its corners. The mask now follows the notch's real rounded shape, and is
  most visible as a fix with the wispy edge on.
- The wispy edge's movement keeps step with the aurora's own pace. A new
  **Edge pace** setting speeds it up or slows it down relative to the rest,
  and the Music visualizer moves it faster when the music is louder.
- The self-check no longer says "renderer ok" when one of two displays has
  failed to start.

## 0.1.37 — 2026-10-27

- The self-check moved to the bottom of the System tab, since it is a
  debugging aid — except when nothing is drawing, when it stays first.
- Corner fangs are on by default for new installs.

## 0.1.36 — 2026-10-27

- **Fixed: on macOS 26 Tahoe the aurora drew nothing at all.** Every build
  from 0.1.26 to 0.1.35 was affected. The shaders were being built for
  whatever macOS the build machine ran, and Macs on the version the app
  says it supports refused them. 0.1.33 and 0.1.34 each fixed half of this.
  The build now checks both halves and refuses to ship if either slips.

## 0.1.35 — 2026-10-27

- **Sparkle**: twinkling motes through the aurora, with settings for amount,
  how many, and how fast they twinkle.
- **Fairy Dust**, a new look: rose and lilac, with gold motes.
- Fixed a fault that would have reset everyone's settings the next time a
  setting was added to a saved look. It never shipped.

## 0.1.34 — 2026-10-27

- **The app explains a blank menu bar by itself.** The System tab shows a
  self-check of what the renderer is doing and why it might not be drawing,
  and one button sends it to the developer — no Terminal, no account. Sent
  only when you press it; nothing personal in it.
- A page to paste a report by hand, at
  [aurora.radiantmachines.com/report.html](https://aurora.radiantmachines.com/report.html).

## 0.1.33 — 2026-10-27

- First half of the Tahoe fix (see 0.1.36).
- Bug reports ask for the version and the Mac up front.
- A Help section on the website, with what to try when nothing draws.

## 0.1.32 — 2026-10-26

- Fixed: clicking the menu bar icon quickly sometimes needed two clicks to
  bring the panel back.

## 0.1.31 — 2026-10-26

- Agent verdicts (passed, failed) choose a color that stands out from the
  look they are laid over, and change how the aurora moves, so they read on
  any look — including one that is already green or red.

## 0.1.30 — 2026-10-26

- The `aurora` command is worth wiring into a coding agent: `aurora hook`
  reads a Claude Code hook and shows busy, waiting, passed or failed, across
  several sessions at once.
- A reorganized website.

## 0.1.29 — 2026-10-26

- Fixed: a second click on the menu bar icon reopened the panel instead of
  closing it.

## 0.1.28 — 2026-10-26

- A second click on the menu bar icon closes the panel.

## 0.1.27 — 2026-10-26

- Faster frames.

## 0.1.26 — 2026-10-26

- Faster frames: a 6016-pixel-wide bar went from 4.0 to 3.4 ms of GPU.
- *This build and every one up to 0.1.35 drew nothing on macOS 26 Tahoe —
  fixed in 0.1.36.*

## 0.1.25 — 2026-10-25

- Corner fangs stay pinned under the menu bar however far the band reaches.

## 0.1.24 — 2026-10-25

- The band's edges fade properly, and switching the wispy edge off gives back
  the room it took.

## 0.1.23 — 2026-10-25

- New looks: Sunset, Halloween, Christmas and Thanksgiving.

## 0.1.22 — 2026-10-25

- Fixed: corner fangs cut a hole that the background then filled in.

## 0.1.21 — 2026-10-25

- **Corner fangs**: cover the slivers of desktop beside a window's rounded
  top corners.

## 0.1.20 — 2026-10-25

- Fixed: opening the System tab quit the app.

## 0.1.19 — 2026-10-25

- The far ends of the bar move as much as the middle.

## 0.1.18 — 2026-10-25

- A look you have not changed takes up improvements to it automatically.

## 0.1.17 — 2026-10-25

- Smoother motion: each frame is held for a full refresh.

## 0.1.16 — 2026-10-25

- Even motion frame to frame, at the same apparent speed on any display.

## 0.1.15 — 2026-10-24

- Frames are paced to your display's refresh rate rather than to 60.
- Real dark sky between the curtains.

## 0.1.14 — 2026-10-24

- Fixed: upgrading reset your settings.
- Fixed: the fluid gathered against the ends of the bar.

## 0.1.13 — 2026-10-24

- Calmer looks, and you can save your own.

## 0.1.12 — 2026-10-24

- Gentler presets; background and bleed controls are easier to find.

## 0.1.11 — 2026-10-24

- Fixed: rays combed into stripes. `aurora set` sets things.

## 0.1.10 — 2026-10-24

- Fixed a bright sliver beside the notch. Reset works. Choose which display
  the aurora is on.

## 0.1.9 — 2026-10-24

- The `aurora` command drives the aurora in every mode, and can flash an
  alert.

## 0.1.8 — 2026-10-24

- The `aurora` command installs without a password.

## 0.1.7 — 2026-10-24

- The website shows the version it offers.

## 0.1.6 — 2026-10-24

- The `aurora` command can be found from a shell.
- The download moved to its own site.

## 0.1.5 — 2026-10-24

- The app shows its version.

## 0.1.2 — 2026-10-24

- **Fixed: the app asked for Screen Recording at launch.** It asks for no
  permissions at all.
