# Changelog

What changed in each release of Aurora Glass, newest first. Downloads are at
[aurora.radiantmachines.com](https://aurora.radiantmachines.com).

## Unreleased

## 0.1.106 — 2026-10-31

- With an agent's details open in the panel, the list holds still instead of reshuffling every second, and only one agent's details are open at a time.

## 0.1.105 — 2026-10-31

- When your Mac is busy, the aurora eases off instead of stuttering: it skips a frame rather than holding up the app, and if it keeps falling behind it drops to an even half rate for a while, then tries the full rate again once things calm down. Performance says when it's doing this, and Settings › Performance can turn it off.

## 0.1.104 — 2026-10-31

- The Settings sidebar is the standard macOS sidebar again, with no animation behind it.
- The panel's "Aurora Glass" is a proper button now, with nothing written beside it.
- Performance says what Aurora Glass takes of your whole Mac: its share of all CPU cores (and of one core), its share of the GPU's time as macOS counts it, and its memory, beside how busy the whole Mac and GPU are. The verdict is judged on that share, so it no longer calls a real cost barely noticeable.

## 0.1.103 — 2026-10-31

- When you've walked away, the aurora can fill the screen: over your screen or covering it, with the time, what needs you, and a card for each agent, big enough to read across the room. Any key or mouse movement clears it. Off by default; Settings › Attention › When you're away, with a Preview button.
- The panel's title is the look menu: click "Aurora Glass" to change the look. The folded Look row is gone; colors are in Settings.
- Each agent in the panel has a "…" that unfolds its details (state, app, steps, what it was asked, session id) with buttons to go to it, open Activity, or open its page on the fleet dashboard. Right-click a row for the same.
- Anyone can join the default fleet now, free with GitHub. Settings › Agents points to it, and Settings › Fleet walks you through it with no Terminal needed. The website says how.

## 0.1.102 — 2026-10-31

- **Your fleet shows which agents worked together.** A machine in a fleet
  now sends each session's subagents and workflows — what each was asked,
  what it said, which workflow and phase it ran in — and, for a session the
  Claude app started from another, which one. The fleet's page for a
  session lists its team, each agent with its own page, and the sessions it
  started; the Sessions list sits each under the one that started it. It
  goes only to a fleet server that keeps it (1.1.0 or newer), under the
  switches you already have: an agent's description is a title, its type
  and phase are details, and its conversation follows prompts, replies,
  tool inputs and output.

## 0.1.101 — 2026-10-31

- Herdr: switching it on now starts it. It used to wait until some other setting changed, so nothing showed. Its section also lists agents that are open but idle.
- SidePulse's switch had the same problem and is fixed too.
- The Settings sidebar is a floating pane of clear glass over the aurora, and it shows what the bar is showing, agent colors included.
- Performance shows real frames a second, once a second, with a graph of the last minute and a half. It read about 200 because every screen and the sidebar were counted together.
- Frames a second is a ceiling now, and there is a Display choice that runs at your display's own rate (70 on a 70 Hz monitor).
- The look editor uses the system's text colors instead of a navy background.
- Launching no longer drops tails below the bar for a few seconds; the launch surge stays inside the bar.
- The panel shows each agent's app on the left, ringed by its state: a light runs round it while it works, and a badge says what kind of work. The motion can be turned off in Settings › Agents.
- Fleet: join a fleet from Settings, on our server or one you run yourself, and open the fleet's dashboard from there.

## 0.1.100 — 2026-10-31

- **Herdr has its own section in Settings.** Herdr now has its own page in
  the sidebar instead of being a card under Agents. It holds the switch, the
  Herdr terminals on the bar right now (click one to go to its pane), and
  whether Herdr's core and its desktop app were found.

## 0.1.99 — 2026-10-31

- **Run your own fleet server.** Companies that cannot send this to anyone
  else's cloud can now host the fleet themselves, with their own sign-in.
  `aurora login --server https://fleet.example.com` joins one, and IT can
  set the server for every Mac with a configuration profile (or
  `/etc/aurora/fleet.conf` on Linux), locked if they want, so nobody points
  a machine elsewhere by mistake.
- **Fleet servers must be https**, except on the machine itself. Joining a
  different server starts it back at states and times only, rather than
  carrying over what you chose to send to the last one.
- **`aurora fleet status` and Settings › Fleet show the server's version**,
  and say when the server does not keep something you switched on. A
  server that is too old or too new for this version is named as such,
  and nothing waiting to be sent is lost.
- **Linux machines say they are Linux** on the fleet's pages (they said
  macOS).
- **The website has a section on fleets**, and one on SidePulse: agents
  running across several machines folded into the one bar, exactly what a
  machine sends when it joins, and the bar's state on the lights beside your
  keyboard.
- **The website says what the app actually does.** The pointer stopped
  moving the aurora by default in 0.1.64 and the page still invited you to
  stir it; joining a fleet is the one part that wants an account, which the
  privacy answer left out; a verdict ripples until you have seen it, not
  once; and the Drive tab has been called Agents for a while.

## 0.1.98 — 2026-10-30

- **The panel is about your agents now.** The look and colors fold into one
  quiet line that says what is on the bar; click it to change them.
- **Agent rows read properly when Claude starts a turn itself.** A
  background task finishing, a message from another session or a session
  reporting back used to show as `<system-reminder>` or
  `<task-notification>`. The Activity log now says what it was ("Background
  command … completed", "Message from …"), and those turns no longer
  replace the last thing you actually asked. Commands read as typed
  (`/loop 30 mins …`).
- **Fill the bottom corners of a full-size window.** New in Display ›
  Corners and notch, off by default: while a window fills the screen, the
  two slivers of desktop beside its rounded bottom corners take the bar's
  color, like the top corners do. It looks only at where windows are,
  never at what is in them, and asks for no permission.

## 0.1.97 — 2026-10-30

- **Right-click the menu bar icon to see which version you're running**:
  it's the first line of the menu.
- **A look's own colors are called Default** in the colors list, instead
  of "This look’s own".

## 0.1.96 — 2026-10-30

- **Herdr's agents show on the bar.** Switch on Settings › Agents › Herdr
  and every Herdr terminal whose agent reports what it is doing lights the
  bar like a Claude Code session does: working, needs you, done or failed,
  on this Mac and on the machines Herdr reaches. Clicking one in the panel
  brings Herdr forward on that agent's pane. Off by default; nothing of
  Herdr's runs until it is on. Claude Code running inside Herdr shows once,
  not twice, and its row also goes straight to its pane.
- **The panel's on/off switch works on the first click.** It used to take
  two the first time after opening the panel, and so did "Show agents on
  the bar".
- **Pausing no longer makes the panel's header taller**: "Paused" now sits
  beside the title instead of on a line of its own.

## 0.1.95 — 2026-10-30

- **The `aurora` command runs on Linux**, so a Linux machine's Claude Code
  sessions can show in your fleet too. One line installs it, for x86_64 and
  arm64, with nothing else needed and no root:
  `curl -fsSL https://aurora.radiantmachines.com/install.sh | sh`, then
  `aurora hooks --install` and `aurora login`. The download is checked
  against its published SHA-256 before anything is installed.
- **Settings has a Fleet section** that says exactly what this Mac sends to
  your fleet, with a switch for each kind of data: the project folder's
  name, tool names, session titles, model and version, token usage, your
  prompts, Claude's replies, tool call inputs and tool output, each with an
  example. Minimal, Details, Content and Everything set them in one click,
  and Show What's Sent shows the next batch exactly as it will go. The
  same switches are `aurora fleet send prompts off` on the command line.
- **A Mac newly added to a fleet sends only its agents' states and their
  times** until you turn more on. Macs already in a fleet keep sending what
  they did.

## 0.1.94 — 2026-10-30

- **Choose how much a machine sends to your fleet** with `aurora fleet
  level`. Status (states and times, as before) is where every machine
  starts. Details adds each session's title, model, branch and the tokens of
  every API call. Content adds the conversation, and full adds what each
  tool returned. `aurora fleet preview` shows the next batch exactly.
- **The fleet site shows sessions by their titles**, tokens per turn,
  project and machine, and each session's conversation, for machines that
  send them. Each finished turn's step count reaches the fleet too.

## 0.1.93 — 2026-10-30

- **An agent running in the Claude app opens its own conversation** when you
  click its row in the panel or its icon in Settings' Now table, not just
  the app. Agents in a terminal or an editor still bring that app forward.

## 0.1.92 — 2026-10-30

- **Your other machines' agents show on this bar too.** Once a Mac is
  logged in to your fleet with `aurora login`, the bar works, waits and
  finishes for agents on every machine, and the panel lists each one with
  the machine it is on. Settings › Agents has a switch to show only this
  Mac's.

## 0.1.91 — 2026-10-30

- **Click an agent in the panel to bring its app forward**: Terminal,
  Ghostty, iTerm, VS Code, Cursor or the Claude app. The row shows that
  app's icon. It brings the app forward, not the exact tab or conversation,
  which would need permission to control other apps. The Now table in
  Settings has the same icon to click.
- **The panel closes when you click another app after choosing a look.**
  It used to stay open over whatever you clicked.
- **Brightness and Pace are no longer in the panel**; they are in Settings,
  with the rest of the look's controls.

## 0.1.90 — 2026-10-29

- **`aurora login` puts this Mac's agents on a fleet page**, where the
  agents on all your machines show together. It is invite-only for now.
  Nothing is sent from a Mac that has not logged in, and from one that has,
  only what each agent is doing at a glance: its state, the tool's name and
  the project folder's name. Prompts, file paths and commands stay on the
  Mac; `aurora fleet preview` prints exactly what would be sent. Sending
  happens in the background, so hooks are no slower. `aurora fleet` says
  whether it is connected, and `aurora logout` stops it.

## 0.1.89 — 2026-10-29

- **The Settings sidebar follows your look and colors.** Its live aurora
  paused whenever macOS said the window was covered — even for a moment, or
  after the window was closed and opened again — and stayed paused, frozen
  on whatever it last drew. It now runs whenever Settings is open.
- **STEVE is now Lavender Ribbon.** Same look, a name that says what it is.
  If you were on it, you still are.
- **The scripts examples are just the aurora command** — busy, wait, done or
  fail, say — in the app and on the website alike, without a test runner
  you might not have.

## 0.1.88 — 2026-10-29

- **The panel's agent list stays current.** A finished agent you have seen
  leaves after ten minutes rather than an hour. One still marked working but
  silent for three minutes says "No activity for …" with a hollow dot, so a
  stalled agent looks different from a busy one. The list shows the five
  that matter most and links to the rest, instead of scrolling inside the
  panel.

## 0.1.87 — 2026-10-29

- **No more flash when the panel's Look or Colors menu opens.** The first
  click after the panel opens now lets the app come forward before the menu
  appears — about a third of a second — instead of opening it, losing it and
  opening it again. Later clicks open at once.

## 0.1.86 — 2026-10-29

- **Look and Colors are plain menus with still pictures.** The moving
  previews are gone: they came out low and muddy.
- **The panel's Look and Colors menus open on the first click.** macOS
  closed a menu opened with the panel's first click as it brought the app
  forward; the menu now opens again by itself when that happens.
- **Questions count as needing you.** When Claude asks you something, waits
  for you to approve a plan, or asks to control your screen, the bar shows
  "needs you" until you answer — the screen-control dialog fires no hook of
  its own, so the call that raises it is what the bar goes by.

## 0.1.85 — 2026-10-29


## 0.1.84 — 2026-10-29

- **Choose the color of each attention state.** In Settings › States, Needs
  you, Done and Failed each have a color well: Auto (the color picked to
  stand out from your look, shown as it is) or one you pick. It is that
  state's color everywhere — the bar, the menu bar icon and SidePulse.
- **The Settings sidebar follows your look again.** Its live aurora could
  stop drawing when the window was shown again and sit on the first look
  it drew.

## 0.1.83 — 2026-10-29

- **The panel's Look and Colors menus open on the first click.** The first
  click used to close the panel instead.
- **Settings shows SidePulse live.** The strip in Settings › SidePulse plays
  the very program the device is sent, as the device plays it.
- **"What scripts can read now"** shows the four states and the music
  levels, not the state file's timestamps.
- The colors line under the look's name in Settings shows only when the
  colors are not the look's own.

## 0.1.82 — 2026-10-29


## 0.1.81 — 2026-10-29

- **SidePulse plays nice with the SidePulse app.** When its `sidepulse`
  command is installed, Aurora sends each program through `sidepulse write`
  — its checks, its lock, its way of writing — and writes to the device
  itself only when it is not (or if that ever fails). Settings › SidePulse
  lets you choose Automatic, Through the SidePulse app, or Directly, and
  says what it found: the app, whether its service is running, and whether
  its own Claude Code hooks are lighting the strip too.

## 0.1.80 — 2026-10-29

- **SidePulse.** Switch it on in Settings › SidePulse and any SidePulse
  plugged in shows what the bar shows — the look's colors rolling slowly
  along it, a light running round while an agent works, a breath while one
  waits, a ripple when one is done, a double blink when one fails — on the
  Pro's 8 LEDs or the Dot's 2. Plug one in or out and it is found. Off by
  default; macOS asks once, when it is first switched on, to let the app
  write to the SidePulse.

## 0.1.79 — 2026-10-29

- **Acknowledge one agent at a time.** Each agent that is waiting on you or
  has a result has its own ✓, in the panel and in Activity's Now; the bar
  then shows the next thing that wants you. The button under the list
  acknowledges everything, and says "Acknowledge All" when there is more
  than one. `aurora ack --session ID` does the same from a script.

## 0.1.78 — 2026-10-29

- **The Settings sidebar can be resized** by dragging its edge — wider or
  slimmer, between 190 and 360 points, so never out of sight — and keeps
  its width.

## 0.1.77 — 2026-10-29

- **Choose which state wins when agents disagree.** Settings › States has
  an order you can rearrange — by default a failure, then whoever needs
  you, then done, then working. The bar and the icon show the first that is
  true, and the panel lists agents in the same order. Before, a later
  success elsewhere hid a failure, and anyone working hid every result.
- **The icon's color is per state**, with an "In color" box on each row.
- **Many agents at once stay tidy.** Past four, the panel's list scrolls
  and says how many there are.
- **The panel's look and colors are two compact menus**, each with pictures
  — nothing opens or folds inside the panel any more.
- **Trying a look shows it as it is for a few seconds**, then whatever
  state was showing comes back. It no longer acknowledges anything.
- **Activity has search and Clear**, and a row's detail says where it came
  from — which hook, through what — and why it set that state.
- **The Settings sidebar is a fixed column** — it could still be dragged
  away — and its header names the colors on the look.

## 0.1.76 — 2026-10-29

- **The menu bar icon has a motion for every state.** Working, needs you,
  done and failed each have their own — light along the lines, breathing,
  swaying, drawn in light, blinking, or still — in Settings › States, each
  with a live preview and a ▶ that plays it on the real icon. The pair of
  eyes is gone.
- **The look editor is in color**, as the website's is, and types straight
  quotes.
- **Agents is three sections:** Agents (setting up), States (how each state
  shows on the bar and the icon) and Attention (getting your attention and
  acknowledging).
- **Activity shows the date, and everything about a row.** The table keeps
  to when, project, state and what; select a row for the folder, prompt,
  tool, message, agent, Mac and session, with Copy. Now has no stripes.
- **The Settings sidebar can no longer be hidden** — there was no way to
  bring it back — and the line under the switch is the look's name alone,
  on a line of its own, so it fits.

## 0.1.75 — 2026-10-29

- **The look editor has its own section.** Settings › Look Editor shows the
  look on the bar in the look language, follows it as you choose others, and
  applies your edits with Apply (⌘Return), with Revert, Copy, Paste, Import
  and Export beside it. It used to open small inside the look's card, from
  a menu nobody found.
- **Try the menu bar icon where it lives.** Playing a state in Agents, or
  choosing an icon motion, now plays it on the real menu bar icon too.
- **Now is a table**, like the activity log under it, and both tables are as
  tall as their rows.

## 0.1.74 — 2026-10-29

- **Rave no longer strobes on the menu bar.** Its rays were dragged by the
  most turbulent fluid of any look, so they jumped back and forth every frame
  — recorded on a real bar, a quarter of it flipping and flipping back — and
  cut the bar into hard-edged blocks. They drift smoothly now, still fast.
- **Trying looks shows them as they are.** Choosing a look or colors while
  a done or failed color is holding on the bar acknowledges it, so you see
  the look itself, not the verdict's tint over it. A "needs you" stays.

## 0.1.73 — 2026-10-29

- **Looks and colors are picked the same way, side by side.** Two columns
  of the same rows — a strip of the look or the colors, and its name — with
  the one showing highlighted. Nothing opens or closes as you choose, so you
  can flip between two looks, or two sets of colors, one click each way. The
  panel and Settings both have it, and in Settings, Looks and Colors are now
  one section.
- **Acknowledging no longer makes things disappear.** A session you have
  acknowledged stays in the panel, dimmed with a check, and what finished in
  the last hour stays listed while all is quiet, with how long ago.
- **No more strobing in the Settings sidebar.** The flowing rays flipped
  whole stripes of the tall sidebar from frame to frame on some looks — Rave
  badly, Solar Wind, Plasma and Deep Nebula less. The sidebar's aurora keeps
  its rays still now, follows your Pace, and runs a little slower than the
  bar; measured on all eighteen looks, none strobes.

## 0.1.72 — 2026-10-29

- **The menu bar panel says what each agent is doing.** Every session that
  is working, waiting or just finished gets a row: its project, what it is
  on right now ("Editing QuickPanel.swift", "Run the site tests", "Claude
  needs your permission to use Bash"), the prompt that started it and how
  long it has been at it. Click one for the full activity.
- **The icon can ask for you, gently.** Choose how the menu bar icon moves
  while something waits on you: a light running along its lines, breathing,
  swaying, drawing itself in light, or turning into a pair of eyes — or
  stay still. It can take the state's color too. Settings › Agents › Menu
  Bar Icon, with a live preview.
- **The look shows itself in the panel.** The look is your aurora, live,
  with its colors on it; click it for every look as a picture. All your
  colors are there now, wallpaper included, and the name beside them no
  longer changes as the pointer moves.
- **Quit is a button again**, and Acknowledge is a big one in the state's
  color — Return presses it.
- **Settings is calmer.** The glass and the live aurora are in the sidebar
  only, and resizing the window no longer makes it flash. The sidebar has
  colored icons and the on switch at its top.
- **Settings uses its room.** Sliders sit on one line with their values;
  each slider's explanation opens in a popover; colors are big, named tiles;
  Adjust Colors and This Look's Motion are open instead of folded; the
  stars' and sparkle's own sliders are always there, dimmed until they do
  something.
- **Activity is a table** you can sort by time, project, state or agent,
  with what is happening right now above it.
- **The visor and the swell have their own sections in Messages,** each
  with a Try It — so "Letter by letter" or "All at once" is always in view,
  whatever your default style.
- Exposure is called Brightness everywhere, and Pace reads in words in the
  panel as in Settings. A state you preview stops when you close Settings.

## 0.1.71 — 2026-10-29

- **Settings is glassier.** The cards are Liquid Glass, and your look
  itself, live, flows under the sidebar and behind the window. The window
  opens a little larger too.
- **More sections, easier to find.** The sidebar has three groups:
  - Appearance: Looks, Colors, Light & Sky, Motion, Display;
  - Agents: Agents, Activity, Messages;
  - System: General, Performance, About.
- **Activity records more about each event:** which agent sent it (Claude
  Code or the aurora command), the project folder, the tool in use, why it
  needs you, and which Mac it came from. It's all kept on your Mac, ready
  for the day many agents on many machines report to one place.
- **The menu bar panel is simpler.** It shows your agents' status with
  Acknowledge, links to Activity and Agent Settings, the look and colors,
  Brightness and Pace, and a large Open Settings button. It has no tooltips.
- **The right-click menu no longer lists looks.** They're in the panel and
  in Settings.
- **Clearer speeds.** Pace is the master speed. Motion's Fluid speed and
  Display's Edge drift each set one part of the motion, and Pace multiplies
  them all.
- **The colors' name sits right beside the Colors heading.**

## 0.1.70 — 2026-10-29

- **Settings is a window now.** It has a sidebar (Look, Agents, Motion,
  Display, General), it resizes, and it stays open while you watch the bar.
  Open it from the menu bar panel, the right-click menu, ⌘, or by opening
  Aurora Glass again. While it's open Aurora Glass shows in the Dock and has
  a menu bar of its own.
- **The menu bar panel is quick and about your agents.** It shows what they
  are doing right now, with Acknowledge, and the last few things that
  happened. It also has a quick change of look and colors, Brightness, and a
  way into Settings.
- **Tooltips work**, now that settings live in a window.
- **Edit colors with the Mac's own color picker.** Each color is a color
  well with its hex value beside it.

## 0.1.69 — 2026-10-29

- **Hover over a look to see what it is.** A small card opens under the tile
  with its name and description. The usual tooltips never appeared in the
  panel, because macOS shows them only while an app is in front, which a
  menu bar app almost never is.
- **Colors say their name beside the heading.** Point at a swatch and its
  name appears next to "Colors": the look it comes from, a built-in set's
  name, or the name you gave your own. Nothing is called "Custom" any more.
- **The look's title stays put** when you change its colors or a slider.
- **Save as New Look is in the look's ⋯ menu**, beside Export and Import. The
  name box that sat under the looks grid is gone.
- **Agent styles have descriptive names**: Comet trail, Back and forth, Two
  lights chasing, Slow drift, Glass glint, Rising line; Breathing glow,
  Bouncing band, Steady glow; Ripple outward, Wave upward, Whole-bar glow;
  Double blink, Single flash. The short names still work with `aurora style`.

## 0.1.68 — 2026-10-29

- **More ways to acknowledge, to try.** The Agents tab has a new
  Acknowledging card with five, all off until you switch them on:
  - a dot on the menu bar icon (green, red or amber) until you acknowledge;
  - clicking the icon to acknowledge, where the next click opens the panel;
  - resting the pointer on the menu bar for a second;
  - ⌃⌥⌘A from any app;
  - opening the panel.

  None of them needs a permission.
- **Acknowledging quiets needs you as well,** until the agent asks again,
  not only done and failed.

## 0.1.67 — 2026-10-29

- **Check for Updates.** It's in General › About, and only runs when you
  press it. It asks the website which version is newest, sends nothing about
  you or your Mac, and offers the download when there's a newer one.
- **Colors are their own card.** Brightness and Glow now sit on the look's
  own card, where they belong, and the color sliders sit under the swatches
  as Adjust colors.
- **Descriptions moved into tooltips.** A look's description, and the name
  of each set of colors, now show when you hover over them, instead of as
  extra lines of text in the panel.

## 0.1.66 — 2026-10-29

- **Done and failed keep playing until you see them.** Done ripples again
  every few seconds, and failed blinks again, for as long as their color
  holds or until you acknowledge it. Played once, they were easy to miss.
- **Failed holds for 30 minutes by default** (it was 5), so it is still
  there when you come back to your desk.
- **Needs you is bolder.** Breathe is deeper and quicker, and the new Bounce
  sends a band of light up and down the whole bar until you answer.
- **Up and down as well as along.** New vertical styles:
  - working can **Rise**, a line of light climbing the bar;
  - done can **Rise**, a wave sweeping up;
  - failed can **Bounce**.

## 0.1.65 — 2026-10-29

- **Choose how each agent state looks.** In the Agents tab, or from a shell:
  - working is a Comet, Scanner, Chase, Flow or Glint;
  - needs you breathes or holds steady;
  - done ripples, glows or just changes color;
  - failed blinks twice, flashes once or just changes color.

  `aurora style done glow` and the like set them from a shell.
- **Choose how long a verdict holds.** Done and failed each hold their color
  for a time you set (done 45 seconds and failed 5 minutes by default), or
  until you acknowledge it. One verdict can bring its own:
  `aurora done --hold 30s`, `aurora fail --until-ack`. `aurora busy --hold 2h`
  keeps a long job showing as working.
- **Acknowledge.** Let a verdict go with the button in the Agents tab,
  Acknowledge in the right-click menu, or `aurora ack`.
- **Activity.** Everything that reaches the bar is kept in a short log:
  which agent, what it said, and when. See it in the Agents tab or with
  `aurora log`.
- **Showing a state stays on until you stop it.** Press ▶ beside a state in
  the Agents tab and it shows on your bar until you press it again, choose
  another, or close the panel. It used to play for a few seconds with no
  sign of how long.
- **Done is a bright color, never gray.** On a green look it used to drain
  to a near-white that read as gray. It is now green wherever green stands
  out, and a bright sky blue where your look is already green.

## 0.1.64 — 2026-10-29

- **Your look's colors come back after an agent finishes.** Done used to hold
  its pale, drained colors until the next prompt, so with Claude Code
  connected the bar looked dull on every look, Red Arc included, most of
  the day. Now done holds for 45 seconds after its ripple and then eases back
  into your look. Failed holds for five minutes. Needs you stays until you
  answer.
- **Changing colors ripples the bar**, as changing looks does, so you can see
  the change happen.
- **A look's description opens right under the row you clicked**, not at the
  bottom of the grid, and shows when you hover over a tile.
- **Setting up agents is two clear steps** at the top of the Agents tab:
  install the aurora command, then connect Claude Code.
- **The pointer no longer moves the aurora by default.** Turn it back on
  under Motion.
- Quit is a proper button, Restart Animation is back in the right-click menu,
  and Over the menu bar says what it is for.

## 0.1.63 — 2026-10-29

A design review of every pane, page and pixel, and a release built around
what Aurora Glass is best at: showing you what your agents are doing.

- **Working finally looks like working.** The old sweep was faint and spent
  a third of each pass off the end of the bar, so a working bar often looked
  idle. Now a light travels the bar the whole time an agent works. Choose how
  in the new Agents tab: **Comet** (the default, one for each agent at work,
  up to two), **Scanner**, **Chase**, **Flow** (the calmest) or **Glint**.
  It shows on dark looks too, and with Reduce Motion on it drifts slowly.
- **Agents show on the bar out of the box.** There is nothing to switch on:
  the bar looks like your look until an agent works, needs you or finishes.
  To have the aurora and nothing else, turn off Show what your agents are
  doing at the top of the Agents tab.
- **An Agents tab.** Connect Claude Code with one button, play any state on
  your own bar to see what it looks like, choose the working motion, decide
  how loudly it asks for you, and set up messages, all in one place.
- **The AI agent mode is gone, because it made things worse.** Choosing it
  switched off the done ripple, the working light and the waiting state and
  replaced your look's colors. Agents now show over any look, whatever else
  is set. If you had it chosen, you are moved back to On its own.
- **The status light tells the truth with Claude Code.** Opening a session,
  `/clear` or resuming no longer shows working before you have asked for
  anything. The bar no longer turns amber a minute after every finished
  reply: needs you now means a permission prompt, a question or a usage
  limit. A subagent finishing no longer plays done while the main agent is
  still working. Failed means a turn ended on an error from Claude's
  servers. Run `aurora hooks --install` again, or press Connect in the Agents
  tab, to pick these up; your own hooks are kept.
- **Choosing a look no longer wipes your agents' state.** Pick a look while
  Claude was working and the bar used to say idle.
- **Failed never looks like needs you.** On a purple look the two came out
  nearly the same amber.
- **Defaults can no longer wipe your saved looks.** It was one unconfirmed
  click in the footer of every tab. It is now Reset All Settings at the
  bottom of General, it asks first, and your saved looks and colors are kept.
- **A cleaner panel.** Five tabs: Look, Agents, Motion, Display, General.
  The looks are a compact grid with your own looks among them, and the
  look's sharing and color actions are one menu. Sliders read clearly, their
  reset arrows appear only once you have moved them and now go back to the
  look's own value, and text is never smaller than 10 points. About twenty
  engineering controls left the panel; every one is still in look files.
  Glass compensation is gone.
- **The header says what your agents are doing**, not the frame rate.
- **A new install starts on Northern Lights**, a real look, rather than an
  unnamed set of defaults.
- **Opening Aurora Glass again opens its settings**, for when macOS hides the
  menu bar icon. Copy and Paste work in the panel's text fields.
- **The right-click menu** shows what your agents are doing and can clear it,
  lists your saved looks, has About Aurora Glass, and restarts the animation
  with Option held.
- `aurora --help` is rewritten: setup first, each state as it looks now, and
  it fits an 80-column terminal.
- **The website** leads with the agents, says up front that the app asks for
  no permissions, describes each state as it really looks, and no longer
  scrolls sideways on a phone.

## 0.1.62 — 2026-10-29

- **Pause on battery now looks like a pause.** Unplugged, the aurora holds
  still where it is instead of disappearing, and uses no GPU. It wakes for a
  moment to show an agent's state, a new look or a message, then holds again.
  The panel says whether you are plugged in, because on a plugged-in Mac the
  switch did nothing you could see, and the header reads "Paused on battery"
  while it is.
- **The visor has options.** Under General → Messages with Visor chosen: type
  the line letter by letter or show it all at once, how fast it types, the
  blinking cursor, the › prompt mark and the colored edge along its bottom.
  The defaults are the visor as it was.
- **The look language reference is versioned.** The docs say which format of
  the language they describe and when it last changed, every value says
  which release added it, and a new Language versions section lists what each
  release changed. Format 1 only ever grows, so a look you write today keeps
  working.

## 0.1.61 — 2026-10-28

- **Fairy flights in Fairy Dust.** Now and then a point of light flies across
  the bar in an arc, leaving a trail of sparkles that twinkle, drift down and
  go out. How often, and how long the trail lingers, are sliders on the look
  itself, and any look can have them under Fine-tune. On the website too.
- **Every slider explains itself.** Click the info icon next to a slider's
  name and a line underneath says what it does. Brightness, glow, rays,
  turbulence and the rest all have one now.
- **Live inputs shows up with the rest of the Drive tab**, instead of a beat
  later.
- **Resizing the website's window no longer makes the bar flicker.** The
  live bar used to restart its aurora on every frame of the drag and keep
  flickering for a moment after; it now carries on through the resize.

## 0.1.60 — 2026-10-28

- **Saying done again ripples again.** A second `aurora done` (or a second
  `aurora fail`) in a row used to change nothing, because the state had not
  changed. Each one now plays its ripple or blink again, and a fail pulses
  again if you have that switched on.
- **`aurora --version`** says which version of Aurora Glass the command
  belongs to (also `aurora -v` and `aurora version`).

## 0.1.59 — 2026-10-28

- **`aurora reset` is immediate.** It used to hold the done or failed colors
  for about a second and a half before letting go, while setting a state was
  instant. Both now show within a frame or two: measured at 12 to 68 ms from
  the command to the bar.

## 0.1.58 — 2026-10-28

- **The looks come first in the Look tab**, where you see them without
  scrolling, with the look you are on and its colors below them.

## 0.1.57 — 2026-10-28

- **Colors are part of the look.** The Look tab opens on the look you are
  on, with its colors as a row of swatches right under its name: its own
  first, then every other look's, your own, your wallpaper, and + to make
  some. Pick one and the look keeps its motion with the new colors, and its
  name says so. Picking a different look brings that look's colors. The old
  colors list lacked half the looks' colors and shared names with looks it
  did not match, and is gone. The fine color, brightness, ray and star
  controls are folded under Fine-tune. The header names the look, not its
  palette.

## 0.1.56 — 2026-10-28

- **Changing looks ripples the bar.** Picking a new look sends two rings out
  from the middle of the bar, bending the aurora like a wave passing through
  water, and then it settles into the new look. The same happens when you
  pick a look on the website. Skipped when Reduce Motion is on.

## 0.1.55 — 2026-10-28

- **No more flash of the wrong colors when macOS adjusts the screen.** When
  the system said the screen had changed, the app rebuilt its window and drew
  a frame or two with your bare look, dropping whatever the bar was showing
  over it, such as an agent's done or waiting colors. It now keeps the colors
  on screen, and ignores those notices when nothing about the screen changed.

## 0.1.54 — 2026-10-28

- **Each preset shows its look** as a small piece of its bar, rendered by the
  app itself, so you can see what you are choosing before you choose it; the
  look you are on is outlined.
- **A simpler panel.** The Drive tab offers On its own, Music and AI agent;
  the Weather, Wind and custom script modes are gone (anything else can drive
  the bar from the `aurora` command, in any mode), and anyone who was on one
  is moved to On its own. Live inputs are folded away until you open them.
- **Pace is on the Motion tab only.** It was on Look as well, which made one
  slider look like two different speeds.
- **System is now General**, with an **About** card: who made it, how to
  reach us, and links to the website, docs, help and editor. The report is folded into **Report and diagnostics** at the
  bottom while the aurora is drawing, and still opens first when it is not.
- **The right-click menu is shorter**: pause, pick a look, settings, quit.
  Color, pointer and restarting the fluid live in the panel.
- **The swell has no wisps by default**, a clean edge. Anyone still on the old
  default is moved once; a value you chose is kept. The swell's own Preview
  button is gone, since Try it shows a swell when Swell is chosen.

## 0.1.53 — 2026-10-28

- **The menu bar stays smooth while an agent is working.** The working state
  used to speed the aurora up and stir it harder as well as sweeping a band of
  light across it, and macOS redraws the menu bar over a fast-moving aurora in
  patches that flicker. Working now keeps the look's own pace; the sweep is
  what says "working". On the menu bar, flickering patches went from about one
  every two frames to none. The burst of life at launch is unchanged.
- **The website looks right on a phone.** The live menu bar and the live look
  card were squeezing a whole desktop bar's worth of aurora into a phone's
  width, so looks blurred into one flat strip and switching between them
  barely showed. They now draw at a desktop's scale and show the middle of it.
  The page no longer scrolls sideways on a phone either.
- **The look you pick on the website comes alive in its card** as well as in
  the menu bar at the top of the page.
## 0.1.52 — 2026-10-28

- **The report finds more on its own.** The System tab's report now says
  whether your display is at its default resolution or scaled (like More
  Space), its refresh range, whether the menu bar hides itself, Reduce Motion,
  light or dark mode, Low Power Mode, which look and edge you are using, and
  how smoothly frames are actually arriving. Still nothing personal, and it is
  only sent when you press the button.
## 0.1.51 — 2026-10-28

- **Working is calmer.** While an agent works, a soft glow now drifts across
  the bar every three seconds, and the aurora speeds up much less than before.
  The brighter, faster version read as flicker on a bar you look at all day.
## 0.1.50 — 2026-10-28

- **No more flash when tails draw back up.** As the launch's arrival or an
  attention pulse ended, the bar brightened for a moment and the bottom of it
  dimmed in one frame. It now fades out smoothly.
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
