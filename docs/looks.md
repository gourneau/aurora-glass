# Looks as files: the `.aurora` language

Every look in Aurora Glass can be written out as a short text file, a
`.aurora` file. You can read it, change it, and send it to someone. The
built-in presets are written in the same language, so Starlight and Fairy Dust
are good examples to copy from.

This page is the whole reference. It is also on the website at
[aurora.radiantmachines.com/docs.html](https://aurora.radiantmachines.com/docs.html).
The tables at the end are generated from the app itself by `./docs.sh`, so
they list exactly what the app accepts.

## Using one

Open the panel and go to **Look**. The **This look** card is for the look on
show:

- **Its options** are sliders: the knobs the look offers, such as Starlight's
  star count and shooting stars.
- **Edit as text** opens the look as a file. Change it, then press
  **Apply**. Anything the app could not read is listed under the editor, and
  the rest still applies.
- **Copy** puts the look on the clipboard as text. **Paste** applies a look
  someone sent you.
- **Save…** writes a `.aurora` file. **Open…** reads one.

Not there yet: a Looks folder the app watches, double-clicking a `.aurora`
file to install it, and `auroraglass://` links. They are the next steps in
[the plan](mods.md).

## A whole file

This is Starlight, as the app writes it:

```text
look    "Starlight"
author  "Aurora Glass"
about   "Nebula colors, a field of stars, and the odd shooting star."
format  1

palette "Starlight" #120d2e #6b2ea8 #e661b8 #85dbfa
set exposure      1
set saturation    1.5
set glow          1.6
set rays          0.18
set sparkle       0.5
set stars         1
set meteors       5
set speed         0.35
set curtains      0.6

option exposure      "Brightness" 0.3 2.5
option glow          "Glow"
option starcount     "How many stars"
option starspacing   "Star spacing" 0.4 3
option meteors       "Shooting stars a minute"
```

(Shortened. The real file sets a few more values.)

## The lines

One statement per line. Blank lines are ignored. A comment starts with `#`,
`;` or `//`, except that `#` followed by a hex digit is a color, not a
comment.

### The header

| Line | Meaning |
|---|---|
| `look "Name"` | The look's name. |
| `author "You"` | Who made it. Optional. |
| `about "One sentence."` | What it looks like. Shown under the name. Optional. |
| `format 1` | Which version of these rules the file was written for. A newer number still loads; this version reads what it knows and notes the rest. |

### `palette`: the colors

```text
palette "Fairy Dust" #85339e #f273c7 #ffc7eb #fff2b3   # a built-in, by name and colors
palette #0b1d2e #1f8a70 #bedb39 #fd7400                # colors of its own
palette wallpaper                                     # follow the desktop
```

Four colors, lowest first. **The first color is the color of the whole
bar.** On a band this short the bar's bed is mostly that color, and the
others are the light on top of it. So design a palette from the first color
outwards.

Two or three colors are filled out to four by repeating the last. A built-in
palette is written with its name *and* its colors: the name keeps the look up
to date if the palette is refined, and the colors make the file work in an
older version of the app that does not have it.

### `set`: a value

```text
set exposure 1.2
```

Sets one of the look's values. The names are in the reference below. A value
out of range is clamped into it, with a note. A file lists only what differs
from a fresh look; everything else takes its default.

### `option`: a knob the look offers

Options are a look's own settings, like the options screensavers used to
have. Each one appears as a slider in **This look**.

```text
option stars       "Star brightness"            # one of the look's values
option meteors     "Shooting stars" 0 20        # ...over a narrower range
option breathe     "Breathing" 0 1 0.3          # a value of the look's own
```

- **Named after a value in the reference**, an option *is* that value, shown
  as a slider. Its default is whatever the look `set`s it to, wherever in the
  file that is. Two numbers after the label narrow the slider's range. A
  third number sets the value too, like a `set` line.
- **Any other name** is a value of the look's own. It needs a range and
  usually a default: `option name "Label" min max default`. It does nothing
  by itself. A `bind` line reads it by name, the way it reads a channel.

  ```text
  option breathe "Breathing" 0 0.5 0.2
  bind sparkle = 0.5 + breathe * sin(t * 0.4)
  ```

An option of the look's own cannot be called `t`, `level`, `bass`, `mid`,
`treble`, `beat`, `busy`, `wait`, `ok`, `err`, `temp`, `wind`, `gust`,
`cloud` or `rain`, because a bind already reads those names. A slider for a
value that a `bind` also drives does nothing, since the bind wins every
frame. Expose a value of the look's own and use it in the bind instead, as
above.

### `bind`: a value that moves

```text
bind sparkle = 0.5 + 0.2 * sin(t * 0.4)
```

`bind <value> = <expression>` recomputes a value every frame. A look's binds
run underneath the Drive tab's mode. Where both drive the same value, the
Drive mode wins, so Music still reacts to music on any look.

**Expressions** use numbers, the names below, `+ - * / % ^`, `<` and `>`
(1 if true, 0 if not), and parentheses.

**Functions:** `sin`, `cos`, `abs`, `sqrt`, `floor`, `min(a, b)`, `max(a, b)`,
`pow(a, b)`, `clamp(x, lo, hi)`, `lerp(a, b, t)` and `smoothstep(e0, e1, x)`.

**Names an expression can read:**

| Name | What it is |
|---|---|
| `t` | Seconds since the app started. |
| `level`, `bass`, `mid`, `treble`, `beat` | The music, 0 to 1. These only have values while the Drive tab is set to Music, which the person has to choose themselves. |
| `temp`, `wind`, `gust`, `cloud`, `rain` | The weather, in Weather and Wind modes. |
| `busy`, `wait`, `ok`, `err` | What `aurora busy`, `aurora wait`, `aurora ok` and `aurora fail` last said. |
| any name set with `aurora set <name> <value>` | Whatever a script or program wrote. |
| your options | Each option of the look's own, by name. |

A name with no value reads as 0, so a bind on the music simply sits still
until Music is on.

## What a look can never do

A look file can never make the app ask for a permission. It has no way to
name the Music visualizer, which taps system audio, or the menu-bar text
mask, which needs Screen Recording, and neither can a `bind` or an `option`
reach them. It cannot run code: there is no Swift, no plug-in and no file or
network access, only the values below. A test in the app holds this line.

## Reading is lenient

A file someone shared should show as much of itself as your version
understands. An unknown line, a typo, a value out of range or a newer file's
extras are noted and skipped, never fatal. The notes appear under the editor
when you press Apply.

## Reference

### Values

<!-- generated:parameters -->
**Color**

| Name | What it does | Range |
|---|---|---|
| `exposure` | overall brightness of the aurora's light | 0 – 6 |
| `opacity` | how much of the bar the aurora covers, 0 to 1 | 0 – 1 |
| `contrast` | tonal contrast: below 1 is softer, above 1 punchier | 0.1 – 3 |
| `saturation` | color intensity; the menu bar's glass mutes color, so above 1 is usual | 0 – 3 |
| `hue` | turns every color around the color wheel, 0 to 1 | 0 – 1 |
| `cycle` | turns the colors around the wheel over time, per second | -0.2 – 0.2 |
| `tint` | blends toward a vertical gradient — green low, violet high, as real aurora is | 0 – 1 |
| `huespread` | how many hues show across the bar at once; 0 puts it all on one color | 0 – 0.5 |
| `huescale` | how quickly the color changes along the bar | 0.1 – 16 |
| `huedrift` | how fast the color regions wander | 0 – 1 |
| `variety` | how different one curtain's color is from the next | 0 – 3 |

**Light**

| Name | What it does | Range |
|---|---|---|
| `glow` | how much bloom surrounds the light | 0 – 4 |
| `glowspread` | how far the bloom spreads | 0.2 – 6 |
| `ambient` | an always-on floor of light, so the bar is never fully dark | 0 – 0.4 |
| `additive` | how much the light adds to what is behind it rather than covering it | 0 – 1 |
| `cover` | how strongly the light covers what is behind it | 0 – 3 |

**Rays, sparkle and sky**

| Name | What it does | Range |
|---|---|---|
| `rays` | strength of the vertical rays, 0 to 1 | 0 – 1 |
| `raysharp` | how sharp-edged the rays are | 0.1 – 6 |
| `rayscale` | how many rays fit across the bar | 0.5 – 30 |
| `rayspeed` | how fast the rays drift | 0 – 1 |
| `rayflow` | how much the fluid drags the rays along with it | 0 – 0.5 |
| `detail` | layers of ray detail, 1 to 7: fewer is broader and calmer | 1 – 7 |
| `shimmer` | a fine flicker over the whole bar | 0 – 2 |
| `sparkle` | twinkling motes in the aurora | 0 – 2 |
| `motes` | how many motes across the bar | 20 – 400 |
| `twinkle` | how fast the motes twinkle | 0.1 – 6 |
| `stars` | stars in the dark between the curtains | 0 – 1.5 |
| `meteors` | shooting stars, roughly how many a minute | 0 – 30 |
| `starcount` | what share of the sky holds a star | 0 – 1 |
| `starspacing` | how far apart the stars are; 1 is the usual spacing | 0.4 – 4 |
| `startwinkle` | how deeply the stars twinkle; 0 holds them steady | 0 – 2 |
| `meteorlength` | how long a shooting star's tail is | 0.3 – 3 |

**Motion**

| Name | What it does | Range |
|---|---|---|
| `tempo` | the one pace control, over everything that moves | 0.15 – 2.5 |
| `speed` | how fast the fluid runs | 0.02 – 4 |
| `wind` | sideways drift of the fluid; negative blows the other way | -6 – 6 |
| `shear` | how differently the top and bottom of the bar drift | 0 – 8 |
| `curl` | strength of the turbulence | 0 – 10 |
| `curlscale` | size of the turbulence | 0.2 – 12 |
| `curlspeed` | how fast the turbulence changes | 0 – 1 |
| `curloctaves` | layers of turbulence detail, 1 to 6 | 1 – 6 |
| `vorticity` | how well swirls hold together | 0 – 6 |
| `buoyancy` | how fast the light rises | -3 – 4 |
| `velfade` | how long motion lasts; nearer 1 keeps the fluid moving longer | 0.9 – 1 |
| `drift` | how fast the curtains travel along the bar | 0 – 0.5 |

**Curtains**

| Name | What it does | Range |
|---|---|---|
| `emit` | how bright new curtains are | 0 – 5 |
| `emitspread` | how many curtains there are | 0.3 – 14 |
| `emitspeed` | how fast curtains are born and change | 0 – 1 |
| `emitheight` | how tall the band where new light is born is | 0.01 – 1 |
| `emitcenter` | where new light is born, from 0 at the bottom of the band to 1 at the top | 0 – 1 |
| `emitthreshold` | how much of the band stays dark between curtains | 0 – 0.95 |
| `curtains` | how much dark sky opens between curtains, 0 to 1 | 0 – 1 |
| `fade` | how long color lingers; nearer 1 lingers longer | 0.9 – 0.9999 |
<!-- end generated:parameters -->

### Palettes

<!-- generated:palettes -->
| Palette | Colors, bar first |
|---|---|
| Classic Aurora | `#0dff8c #26f2cc #598cff #d94df2` |
| Solar Storm | `#ff4729 #ff9e33 #f2338c #8c1fd9` |
| Arctic Ice | `#33f2ff #59a6ff #8c73ff #d9ebff` |
| Nebula | `#591abf #d933b3 #408cff #ffcc73` |
| Dragonfire | `#ffd940 #ff6614 #cc1433 #59054d` |
| Bioluminescence | `#1affd9 #0db3f2 #7340ff #e673ff` |
| Fairy Dust | `#85339e #f273c7 #ffc7eb #fff2b3` |
| Pumpkin Spice | `#944214 #ed731f #d9944d #ffebcc` |
| Starlight | `#120d2e #6b2ea8 #e661b8 #85dbfa` |
| Rose Quartz | `#ff8cb3 #ffbf8c #b380ff #fae6f2` |
| Flurry | `#ff338c #ffcc26 #26e6ff #8c40ff` |
| STEVE | `#7340b3 #c78cf2 #f2d9ff #66f299` |
| SAR Arc | `#d91a1f #ff4d38 #730814 #ff8c66` |
| Solar Wind | `#4df2ff #e6ffff #3380ff #1accd9` |
| Sunset | `#ff5742 #ffa842 #db3d99 #6642c7` |
| Pumpkin | `#ff5c08 #ff9e1a #851f9e #8cf226` |
| Fir and Tinsel | `#1fa347 #eb1f29 #ffd16b #f5faff` |
| Harvest | `#a34d21 #fa9e2e #bd2433 #ffdb8c` |
| Monochrome Glass | `#a6c7f2 #d9ebff #738cbf #ffffff` |
<!-- end generated:palettes -->

### The built-in looks

<!-- generated:looks -->
| Look | About | Options |
|---|---|---|
| Northern Lights | Calm green curtains with violet tips. | Brightness, Glow |
| Glacier Drift | Slow, wide, pale blue. | Brightness, Glow |
| Deep Nebula | Rich swirling color, slow bloom. | Brightness, Glow |
| Whisper | Barely there. For when you want it subtle. | Brightness, Glow |
| Flurry | The old OS X screensaver: bright hue-cycling streamers. | Brightness, Glow |
| STEVE | The mauve ribbon, with its green picket fence. | Brightness, Glow |
| Red Arc | A stable red arc. Deep, still, barely moving. | Brightness, Glow |
| Solar Wind | Swirling strands of cyan and white. | Brightness, Glow |
| Lava Lamp | Fat warm blobs, rising and folding. | Brightness, Glow |
| Plasma | Swirling patches of color, no rays at all. | Brightness, Glow |
| Sunset | Warm coral, with gold and dusk violet drifting through. | Brightness, Glow |
| Halloween | Pumpkin orange, guttering like a candle. | Brightness, Glow |
| Christmas | A fir-green bar, with holly red and tinsel in the bright parts. | Brightness, Glow |
| Thanksgiving | Deep russet and cranberry, as slow as it gets. | Brightness, Glow |
| Fairy Dust | Rose and lilac, with gold motes that twinkle. | Brightness, Glow, Fairy dust, How many motes, Twinkle speed |
| Pumpkin Spice | Pumpkin, caramel and cinnamon under whipped cream — slow, warm and cozy. | Brightness, Glow, Glints |
| Starlight | Nebula colors, a field of stars, and the odd shooting star. | Brightness, Glow, Star brightness, How many stars, Star spacing, Twinkle, Shooting stars a minute, Shooting star tails, Motes in the nebula |
| Rave | Loud, fast, hue-cycling. You asked for cool. | Brightness, Glow |
<!-- end generated:looks -->
