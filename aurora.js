/* Aurora Glass — landing page hero.
   A WebGL approximation of what the real app does in Metal: domain-warped
   curl noise standing in for an advected velocity field, ramped through the
   app's own palettes. The real thing solves for pressure; this one fakes the
   look of it in a single fragment pass. */

const PALETTES = [
  { name: 'Classic Aurora',    stops: ['#0DFF8C', '#26F2CC', '#598CFF', '#D94DF2'] },
  { name: 'Solar Storm',       stops: ['#FF4729', '#FF9E33', '#F2338C', '#8C1FD9'] },
  { name: 'Arctic Ice',        stops: ['#33F2FF', '#59A6FF', '#8C73FF', '#D9EBFF'] },
  { name: 'Nebula',            stops: ['#591ABF', '#D933B3', '#408CFF', '#FFCC73'] },
  { name: 'Dragonfire',        stops: ['#FFD940', '#FF6614', '#CC1433', '#59054D'] },
  { name: 'Bioluminescence',   stops: ['#1AFFD9', '#0DB3F2', '#7340FF', '#E673FF'] },
  { name: 'Rose Quartz',       stops: ['#FF8CB3', '#FFBF8C', '#B380FF', '#FAE6F2'] },
  { name: 'Flurry',            stops: ['#FF338C', '#FFCC26', '#26E6FF', '#8C40FF'] },
  { name: 'Monochrome Glass',  stops: ['#A6C7F2', '#D9EBFF', '#738CBF', '#FFFFFF'] },
];

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAG = `
precision highp float;

varying vec2 vUv;
uniform float uTime;
uniform float uAspect;
uniform vec3  uC0, uC1, uC2, uC3;
uniform vec2  uPointer;
uniform float uPointerAmt;

vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

/* gradient noise — the field the warp is built from */
float gnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                 dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
             mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                 dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 5; i++) {
    s += a * gnoise(p);
    p = p * 2.03 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return s;
}

/* curl of the noise field: divergence free by construction, which is why the
   real solver uses it to force the fluid without adding sources or sinks */
vec2 curl(vec2 p) {
  float e = 0.09;
  float a = fbm(p + vec2(0.0, e));
  float b = fbm(p - vec2(0.0, e));
  float c = fbm(p + vec2(e, 0.0));
  float d = fbm(p - vec2(e, 0.0));
  return vec2(a - b, -(c - d)) / (2.0 * e);
}

vec3 ramp(float t) {
  t = clamp(t, 0.0, 1.0) * 3.0;
  if (t < 1.0) return mix(uC0, uC1, t);
  if (t < 2.0) return mix(uC1, uC2, t - 1.0);
  return mix(uC2, uC3, t - 2.0);
}

void main() {
  float t = uTime;
  vec2 p = vec2(vUv.x * uAspect, vUv.y);

  /* the curtains are tall and narrow, so squash the sampling in x */
  vec2 q = vec2(p.x * 1.35, p.y * 0.42 - t * 0.012);

  vec2 w = curl(q * 0.9 + vec2(t * 0.035, 0.0));

  /* pointer pushes the field, the way the "Push the fluid" mode does */
  vec2 toP = vec2((vUv.x - uPointer.x) * uAspect, vUv.y - uPointer.y);
  float pd = length(toP);
  float grab = exp(-pd * pd * 9.0) * uPointerAmt;
  w += normalize(toP + 1e-5) * grab * 2.6;

  vec2 wp = q + w * 0.22;

  /* broad curtain mass */
  float body = fbm(wp * 1.5 + vec2(t * 0.05, 0.0)) * 0.5 + 0.5;

  /* where a curtain exists at all — this is what opens dark gaps between
     them, and the difference between an aurora and a gradient wash */
  float presence = fbm(vec2(wp.x * 0.58 + t * 0.018, 11.3)) * 0.5 + 0.5;
  presence = smoothstep(0.24, 0.72, presence);

  /* the fine near-vertical rays inside a curtain */
  float rays = fbm(vec2(wp.x * 15.0 + w.y * 0.7, wp.y * 0.75 + t * 0.06)) * 0.5 + 0.5;

  float field = body * 0.58 + rays * 0.56;
  field = pow(max(field - 0.30, 0.0) * 2.5, 1.25) * mix(0.12, 1.0, presence);

  /* light gathers at the top, where the menu bar is, and spills downward */
  float yy = vUv.y;
  float height = pow(smoothstep(0.04, 0.98, yy), 1.45);
  height += exp(-pow((yy - 0.94) / 0.16, 2.0)) * 0.55;

  /* soft wide term, standing in for bloom */
  float halo = fbm(wp * 0.5 + vec2(t * 0.03, 0.0)) * 0.5 + 0.5;
  halo = pow(halo, 3.0) * 0.5 * mix(0.45, 1.0, presence);

  float inten = field * height + halo * height * 0.75 + grab * 0.55;
  inten = clamp(inten * 1.22, 0.0, 1.6);

  /* colour drifts across the strip, so the hue is not locked to brightness */
  float hue = fract(wp.x * 0.27 + w.x * 0.07 + t * 0.009 + body * 0.3);
  hue = abs(hue * 2.0 - 1.0);

  vec3 col = ramp(hue);
  col += vec3(0.55, 0.78, 0.7) * pow(clamp(inten - 0.5, 0.0, 1.0), 1.4) * 1.0;

  float a = clamp(inten * 0.92, 0.0, 1.0);
  gl_FragColor = vec4(col * a, a);
}`;

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function compile(gl, type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.warn('aurora shader:', gl.getShaderInfoLog(sh));
    return null;
  }
  return sh;
}

function startAurora(canvas, getPalette) {
  const gl = canvas.getContext('webgl', {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    powerPreference: 'low-power',
  });
  if (!gl) return null;

  const vs = compile(gl, gl.VERTEX_SHADER, VERT);
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return null;

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.warn('aurora link:', gl.getProgramInfoLog(prog));
    return null;
  }
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(prog, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const u = {};
  for (const k of ['uTime', 'uAspect', 'uC0', 'uC1', 'uC2', 'uC3', 'uPointer', 'uPointerAmt']) {
    u[k] = gl.getUniformLocation(prog, k);
  }

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  let w = 0, h = 0;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const nw = Math.max(1, Math.round(canvas.clientWidth * dpr));
    const nh = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (nw === w && nh === h) return;
    w = nw; h = nh;
    canvas.width = w;
    canvas.height = h;
    gl.viewport(0, 0, w, h);
    gl.uniform1f(u.uAspect, Math.max(w / h, 0.0001));
  }

  const pointer = { x: 0.5, y: 0.62, amt: 0 };
  let target = 0;

  const host = canvas.parentElement;
  host.addEventListener('pointermove', (e) => {
    const r = host.getBoundingClientRect();
    pointer.x = (e.clientX - r.left) / r.width;
    pointer.y = 1 - (e.clientY - r.top) / r.height;
    target = 1;
  });
  host.addEventListener('pointerleave', () => { target = 0; });

  function draw(timeSec) {
    resize();
    const pal = getPalette();
    gl.uniform3fv(u.uC0, hexToRgb(pal.stops[0]));
    gl.uniform3fv(u.uC1, hexToRgb(pal.stops[1]));
    gl.uniform3fv(u.uC2, hexToRgb(pal.stops[2]));
    gl.uniform3fv(u.uC3, hexToRgb(pal.stops[3]));
    gl.uniform1f(u.uTime, timeSec);
    gl.uniform2f(u.uPointer, pointer.x, pointer.y);
    gl.uniform1f(u.uPointerAmt, pointer.amt);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let raf = 0;
  let visible = true;
  let enabled = true;
  let last = performance.now();
  let clock = 0;

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    clock += dt;
    pointer.amt += (target - pointer.amt) * Math.min(dt * 5, 1);
    draw(clock);
  }

  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  function sync() {
    stop();
    if (!enabled) return;
    if (reduced.matches) {
      /* one frame, held still — a static aurora rather than a looping one */
      pointer.amt = 0;
      draw(18.0);
      return;
    }
    if (!visible) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  if (reduced.addEventListener) reduced.addEventListener('change', sync);

  /* stop burning GPU once the hero scrolls away */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      sync();
    }, { threshold: 0 }).observe(canvas);
  }
  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
    sync();
  });
  window.addEventListener('resize', () => { if (reduced.matches) sync(); });

  sync();
  return {
    repaint: sync,
    setEnabled(on) {
      if (on === enabled) return;
      enabled = on;
      sync();
    },
  };
}

/* ------------------------------------------------------------------ */

document.addEventListener('DOMContentLoaded', () => {
  let active = 0;
  const canvas = document.getElementById('aurora-canvas');
  const engine = canvas ? startAurora(canvas, () => PALETTES[active]) : null;

  /* Honour reduced motion for the screen recording too. Autoplay is set in
     the markup so the video still works with JS disabled; here we stop it and
     leave the poster frame showing for anyone who asked for less movement. */
  const capture = document.querySelector('.capture-video');
  if (capture) {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    const applyCalm = () => {
      if (calm.matches) {
        capture.pause();
        capture.removeAttribute('autoplay');
        capture.currentTime = 0;
        capture.setAttribute('controls', '');
      } else {
        capture.removeAttribute('controls');
        capture.play().catch(() => {});
      }
    };
    if (calm.addEventListener) calm.addEventListener('change', applyCalm);
    applyCalm();
  }

  /* The nav runs the same shader behind a glass scrim, so scrolling hands the
     aurora from the hero up into what is, in effect, a mock menu bar. It reads
     the same `active` palette, which is why picking a colour while scrolled
     down recolours the bar you are looking at. */
  const navCanvas = document.getElementById('nav-aurora');
  const navEngine = navCanvas ? startAurora(navCanvas, () => PALETTES[active]) : null;
  const nav = document.getElementById('site-nav');
  const heroVisual = document.querySelector('.device') || document.querySelector('.hero');

  if (navEngine) navEngine.setEnabled(false);

  if (nav && navEngine) {
    let live = false;
    const update = () => {
      const navH = nav.getBoundingClientRect().height || 58;
      const heroBottom = heroVisual
        ? heroVisual.getBoundingClientRect().bottom
        : 420 - window.scrollY;
      const next = heroBottom <= navH;
      if (next === live) return;
      live = next;
      nav.classList.toggle('is-live', live);
      /* Only animate while it is actually showing. */
      navEngine.setEnabled(live);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  if (!engine && canvas) {
    /* no WebGL: fall back to a plain CSS gradient on the screen surface */
    document.querySelector('.device').classList.add('is-static');
  }

  /* palette specimen sheet — picking one recolours the live hero and the
     simulated SidePulse strip, which is the whole point of showing it */
  const sheet = document.getElementById('palette-sheet');
  const leds = document.querySelectorAll('.led');
  const nameOut = document.getElementById('palette-name');

  function paintFallback(pal) {
    document.documentElement.style.setProperty(
      '--fallback-aurora',
      `linear-gradient(104deg, ${pal.stops[0]} 2%, ${pal.stops[1]} 32%, ${pal.stops[2]} 64%, ${pal.stops[3]} 96%)`
    );
  }

  function paintLeds(pal) {
    leds.forEach((led, i) => {
      const f = leds.length > 1 ? i / (leds.length - 1) : 0;
      const seg = f * 3;
      const lo = Math.min(Math.floor(seg), 2);
      const mix = seg - lo;
      const a = hexToRgb(pal.stops[lo]);
      const b = hexToRgb(pal.stops[lo + 1]);
      const c = a.map((v, k) => Math.round((v + (b[k] - v) * mix) * 255));
      const css = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
      led.style.setProperty('--led', css);
    });
  }

  function select(i) {
    active = i;
    const pal = PALETTES[i];
    if (sheet) {
      sheet.querySelectorAll('.swatch').forEach((el, k) => {
        el.setAttribute('aria-checked', k === i ? 'true' : 'false');
        el.tabIndex = k === i ? 0 : -1;
      });
    }
    if (nameOut) nameOut.textContent = pal.name;
    paintFallback(pal);
    paintLeds(pal);
    if (engine) engine.repaint();
  }

  if (sheet) {
    PALETTES.forEach((pal, i) => {
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'swatch';
      el.setAttribute('role', 'radio');
      el.setAttribute('aria-checked', i === 0 ? 'true' : 'false');
      el.tabIndex = i === 0 ? 0 : -1;
      el.innerHTML =
        `<span class="swatch-chip" style="background:linear-gradient(100deg,${pal.stops[0]},${pal.stops[1]} 36%,${pal.stops[2]} 70%,${pal.stops[3]})"></span>` +
        `<span class="swatch-name">${pal.name}</span>`;
      el.addEventListener('click', () => select(i));
      el.addEventListener('keydown', (e) => {
        const n = PALETTES.length;
        let next = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % n;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + n) % n;
        if (next === null) return;
        e.preventDefault();
        select(next);
        sheet.querySelectorAll('.swatch')[next].focus();
      });
      sheet.appendChild(el);
    });
  }

  select(0);

  /* live clock in the mock menu bar — small honesty, costs nothing */
  const clockEl = document.getElementById('mb-clock');
  if (clockEl) {
    const tick = () => {
      clockEl.textContent = new Date().toLocaleTimeString([], {
        hour: 'numeric', minute: '2-digit',
      });
    };
    tick();
    setInterval(tick, 20000);
  }
});
