import { useEffect, useRef } from 'react';

/* ============================================================
   PetalField — falling blue rose petals on <canvas>.

   Petal sprites are pre-rendered once at load: organic bezier
   silhouettes traced from real rose petals, layered gradient
   shading, vein structure, curl highlights and grain — then
   animated as a particle field with pointer physics (petals
   are pushed and swirled by cursor movement).

   Drop real photographs at /petals/petal-1.png … petal-4.png
   (transparent PNGs) and they are used instead automatically.
   ============================================================ */

const COLORWAYS = [
  // [base(deep), mid, edge(light)] — cobalt family
  ['#1a2170', '#2530c3', '#8fa8e8'],
  ['#232a8f', '#3a49d6', '#aebfef'],
  ['#2b3aa8', '#5468d8', '#c6d2f4'],
  ['#161b52', '#2027a0', '#7b8fd9'],
];

// Four petal silhouettes (normalized 0..1, base at bottom-center).
const SHAPES = [
  // Classic rounded rose petal with notched top
  (p) => {
    p.moveTo(0.5, 0.97);
    p.bezierCurveTo(0.28, 0.92, 0.04, 0.72, 0.05, 0.45);
    p.bezierCurveTo(0.06, 0.2, 0.22, 0.04, 0.42, 0.05);
    p.bezierCurveTo(0.47, 0.055, 0.49, 0.09, 0.5, 0.12);
    p.bezierCurveTo(0.51, 0.09, 0.54, 0.05, 0.6, 0.045);
    p.bezierCurveTo(0.8, 0.03, 0.95, 0.22, 0.955, 0.46);
    p.bezierCurveTo(0.96, 0.73, 0.72, 0.92, 0.5, 0.97);
  },
  // Slender curled petal
  (p) => {
    p.moveTo(0.5, 0.98);
    p.bezierCurveTo(0.3, 0.9, 0.12, 0.68, 0.14, 0.42);
    p.bezierCurveTo(0.155, 0.18, 0.3, 0.02, 0.5, 0.04);
    p.bezierCurveTo(0.72, 0.06, 0.88, 0.24, 0.86, 0.5);
    p.bezierCurveTo(0.84, 0.74, 0.68, 0.9, 0.5, 0.98);
  },
  // Wide ruffled petal, wavy margin
  (p) => {
    p.moveTo(0.5, 0.96);
    p.bezierCurveTo(0.24, 0.9, 0.02, 0.7, 0.05, 0.42);
    p.bezierCurveTo(0.07, 0.22, 0.18, 0.08, 0.32, 0.1);
    p.bezierCurveTo(0.38, 0.11, 0.4, 0.06, 0.47, 0.05);
    p.bezierCurveTo(0.53, 0.04, 0.57, 0.09, 0.63, 0.07);
    p.bezierCurveTo(0.78, 0.03, 0.93, 0.18, 0.95, 0.4);
    p.bezierCurveTo(0.98, 0.68, 0.76, 0.9, 0.5, 0.96);
  },
  // Heart-notched petal, asymmetric
  (p) => {
    p.moveTo(0.52, 0.97);
    p.bezierCurveTo(0.3, 0.93, 0.08, 0.75, 0.09, 0.48);
    p.bezierCurveTo(0.1, 0.24, 0.25, 0.06, 0.44, 0.08);
    p.bezierCurveTo(0.5, 0.09, 0.52, 0.13, 0.53, 0.16);
    p.bezierCurveTo(0.56, 0.11, 0.6, 0.07, 0.67, 0.07);
    p.bezierCurveTo(0.84, 0.08, 0.94, 0.26, 0.93, 0.5);
    p.bezierCurveTo(0.92, 0.76, 0.72, 0.93, 0.52, 0.97);
  },
];

function tracePetal(ctx, size, draw) {
  const p = new Path2D();
  const proxy = {
    moveTo: (x, y) => p.moveTo(x * size, y * size),
    bezierCurveTo: (a, b, c, d, e, f) =>
      p.bezierCurveTo(a * size, b * size, c * size, d * size, e * size, f * size),
  };
  draw(proxy);
  p.closePath();
  return p;
}

function renderPetalSprite(shapeFn, colors, size = 240) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const [deep, mid, light] = colors;
  const path = tracePetal(ctx, size, shapeFn);

  ctx.save();
  ctx.clip(path);

  // Base vertical gradient: deep at the stem, luminous at the tip
  const g1 = ctx.createLinearGradient(size * 0.5, size, size * 0.5, 0);
  g1.addColorStop(0, deep);
  g1.addColorStop(0.42, mid);
  g1.addColorStop(1, light);
  ctx.fillStyle = g1;
  ctx.fillRect(0, 0, size, size);

  // Off-center silk sheen
  const g2 = ctx.createRadialGradient(
    size * 0.38, size * 0.3, size * 0.04,
    size * 0.42, size * 0.38, size * 0.62
  );
  g2.addColorStop(0, 'rgba(255,255,255,0.5)');
  g2.addColorStop(0.35, 'rgba(255,255,255,0.16)');
  g2.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, size, size);

  // Deep pocket where the petal cups, right side
  const g3 = ctx.createRadialGradient(
    size * 0.72, size * 0.62, size * 0.02,
    size * 0.7, size * 0.6, size * 0.5
  );
  g3.addColorStop(0, 'rgba(10,12,60,0.34)');
  g3.addColorStop(1, 'rgba(10,12,60,0)');
  ctx.fillStyle = g3;
  ctx.fillRect(0, 0, size, size);

  // Base shadow (attachment point is always darkest on a real petal)
  const g4 = ctx.createRadialGradient(
    size * 0.5, size * 0.99, size * 0.01,
    size * 0.5, size * 0.95, size * 0.4
  );
  g4.addColorStop(0, 'rgba(8,10,45,0.55)');
  g4.addColorStop(1, 'rgba(8,10,45,0)');
  ctx.fillStyle = g4;
  ctx.fillRect(0, 0, size, size);

  // Central crease + branching veins
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'rgba(12,15,70,0.22)';
  ctx.lineWidth = size * 0.012;
  ctx.beginPath();
  ctx.moveTo(size * 0.5, size * 0.96);
  ctx.quadraticCurveTo(size * 0.49, size * 0.55, size * 0.5, size * 0.14);
  ctx.stroke();

  ctx.lineWidth = size * 0.006;
  for (let i = 0; i < 7; i++) {
    const t = 0.2 + i * 0.11;
    const y0 = size * (0.95 - t * 0.8);
    const spread = size * (0.16 + t * 0.32);
    for (const dir of [-1, 1]) {
      ctx.strokeStyle = `rgba(15,18,80,${0.16 - i * 0.014})`;
      ctx.beginPath();
      ctx.moveTo(size * 0.5, y0);
      ctx.quadraticCurveTo(
        size * 0.5 + dir * spread * 0.55, y0 - size * 0.1,
        size * 0.5 + dir * spread, y0 - size * (0.16 + t * 0.1)
      );
      ctx.stroke();
    }
  }

  // Light vein highlights (embossed feel)
  ctx.strokeStyle = 'rgba(255,255,255,0.14)';
  ctx.lineWidth = size * 0.004;
  for (let i = 0; i < 5; i++) {
    const t = 0.25 + i * 0.14;
    const y0 = size * (0.92 - t * 0.75);
    const spread = size * (0.14 + t * 0.3);
    for (const dir of [-1, 1]) {
      ctx.beginPath();
      ctx.moveTo(size * 0.505, y0 + size * 0.008);
      ctx.quadraticCurveTo(
        size * 0.5 + dir * spread * 0.5, y0 - size * 0.08,
        size * 0.5 + dir * spread * 0.94, y0 - size * (0.13 + t * 0.09)
      );
      ctx.stroke();
    }
  }

  // Fine organic grain
  for (let i = 0; i < 340; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const a = Math.random() * 0.05;
    ctx.fillStyle = Math.random() > 0.5
      ? `rgba(255,255,255,${a})`
      : `rgba(10,12,60,${a})`;
    ctx.fillRect(x, y, 1.4, 1.4);
  }

  ctx.restore();

  // Rim light along the top-left margin (curled edge catching light)
  ctx.save();
  ctx.clip(path);
  ctx.strokeStyle = 'rgba(255,255,255,0.55)';
  ctx.lineWidth = size * 0.018;
  ctx.filter = `blur(${size * 0.012}px)`;
  ctx.stroke(path);
  ctx.restore();

  // Soft outer edge darkening for silhouette definition
  ctx.save();
  ctx.clip(path);
  ctx.strokeStyle = 'rgba(10,12,55,0.28)';
  ctx.lineWidth = size * 0.01;
  ctx.stroke(path);
  ctx.restore();

  return cv;
}

function buildSprites() {
  const sprites = [];
  SHAPES.forEach((shape) => {
    COLORWAYS.forEach((colors) => {
      sprites.push(renderPetalSprite(shape, colors));
    });
  });
  return sprites;
}

async function loadPhotoSprites() {
  const tryLoad = (src) =>
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });
  const imgs = await Promise.all(
    [1, 2, 3, 4].map((i) => tryLoad(`${import.meta.env.BASE_URL}petals/petal-${i}.png`))
  );
  const found = imgs.filter(Boolean);
  return found.length ? found : null;
}

export default function PetalField({ density = 1, className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let sprites = buildSprites();
    let raf = 0;
    let running = false;
    let visible = true;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let petals = [];
    let t = 0;
    let disposed = false;

    loadPhotoSprites().then((photos) => {
      if (photos && !disposed) sprites = photos;
    });

    const pointer = { x: -9999, y: -9999, vx: 0, vy: 0, px: -9999, py: -9999 };

    const rand = (a, b) => a + Math.random() * (b - a);

    function makePetal(spawnAnywhere) {
      const z = Math.random(); // depth: 0 far … 1 near
      const base = w < 768 ? 46 : 64;
      const size = base + z * (w < 768 ? 60 : 105); // big petals
      return {
        sprite: sprites[(Math.random() * sprites.length) | 0],
        x: rand(-60, w + 60),
        y: spawnAnywhere ? rand(-h * 0.2, h) : rand(-h * 0.35, -80),
        z,
        size,
        vy: rand(16, 30) * (0.45 + z * 0.85), // px/s
        windPhase: rand(0, Math.PI * 2),
        windFreq: rand(0.18, 0.4),
        swayAmp: rand(14, 42),
        rot: rand(0, Math.PI * 2),
        rotVel: rand(-0.5, 0.5),
        tumblePhase: rand(0, Math.PI * 2),
        tumbleFreq: rand(0.4, 0.9),
        fx: 0, // pointer-imparted velocity
        fy: 0,
        spin: 0,
        alpha: 0.5 + z * 0.5,
      };
    }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const count = Math.round((w < 768 ? 12 : 24) * density);
      petals = Array.from({ length: count }, () => makePetal(true));
      // Far petals draw first
      petals.sort((a, b) => a.z - b.z);
    }

    function drawPetal(p) {
      const tumble = Math.sin(t * p.tumbleFreq * Math.PI * 2 + p.tumblePhase);
      const squash = 0.35 + 0.65 * Math.abs(tumble); // pseudo-3D flip
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x * dpr, p.y * dpr);
      ctx.rotate(p.rot);
      ctx.scale((tumble >= 0 ? 1 : -1) * squash, 1);
      const s = p.size * dpr;
      ctx.drawImage(p.sprite, -s / 2, -s / 2, s, s);
      ctx.restore();
    }

    let last = performance.now();
    function frame(now) {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      t += dt;

      // Pointer velocity (smoothed)
      pointer.vx += (((pointer.x - pointer.px) / Math.max(dt, 0.016)) - pointer.vx) * 0.3;
      pointer.vy += (((pointer.y - pointer.py) / Math.max(dt, 0.016)) - pointer.vy) * 0.3;
      pointer.px = pointer.x;
      pointer.py = pointer.y;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const R = Math.min(w, h) * 0.28; // pointer influence radius

      for (const p of petals) {
        // Ambient drift
        const wind = Math.sin(t * p.windFreq * Math.PI * 2 + p.windPhase);
        const driftX = wind * p.swayAmp * dt;

        // Pointer interaction: push + swirl, stronger for near petals
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < R && dist > 0.001) {
          const f = (1 - dist / R) ** 2 * (0.4 + p.z);
          const nx = dx / dist;
          const ny = dy / dist;
          // radial push away from cursor
          p.fx += nx * f * 620 * dt;
          p.fy += ny * f * 420 * dt;
          // drag along with cursor motion
          p.fx += pointer.vx * f * 0.55 * dt * 60;
          p.fy += pointer.vy * f * 0.35 * dt * 60;
          // swirl (perpendicular) + extra spin
          p.fx += -ny * f * 240 * dt;
          p.fy += nx * f * 160 * dt;
          p.spin += f * (nx * pointer.vy - ny * pointer.vx) * 0.00035;
        }

        // Damp imparted forces back to calm fall
        p.fx *= Math.exp(-2.2 * dt);
        p.fy *= Math.exp(-2.2 * dt);
        p.spin *= Math.exp(-1.6 * dt);

        p.x += driftX + (8 + wind * 6) * dt + p.fx * dt;
        p.y += p.vy * dt + p.fy * dt;
        p.rot += (p.rotVel + p.spin) * dt * Math.PI;

        // Recycle
        if (p.y - p.size > h + 40) {
          Object.assign(p, makePetal(false), { sprite: p.sprite });
        }
        if (p.x < -p.size - 80) p.x = w + p.size;
        if (p.x > w + p.size + 80) p.x = -p.size;

        drawPetal(p);
      }
    }

    function start() {
      if (!running && visible && !reduced) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    function drawStatic() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of petals) drawPetal(p);
    }

    resize();
    if (reduced) {
      drawStatic();
    } else {
      start();
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onVis = () => (document.hidden ? stop() : start());

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        visible ? start() : stop();
      },
      { threshold: 0.02 }
    );
    io.observe(canvas);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVis);

    return () => {
      disposed = true;
      stop();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    />
  );
}
