import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';

const Dots = () => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);

  const a = 20; // how many dots to have
  const b = 5; // how fast to spin
  const c = 0.1; // how much to fade. 1 all, 0.5 half, 0 none
  const d = 100; // distance from the mouse

  const m = useRef({ x: null, y: null });
  const r = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const points = pointsRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    m.current.x = canvas.width / 2;
    m.current.y = canvas.height / 2;

    const listenerAction = function (e) {
        TweenMax.to(m.current, 0.3, { x: e.clientX, y: e.clientY, ease: 'linear' });
      }
    window.addEventListener('mousemove', listenerAction);

    for (let i = 0; i < a; i++) {
      points.push({
        r: (360 / a) * i,
        p: { x: null, y: null },
        w: Math.random() * 5,
        c: '#fff',
        d: Math.random() * (d + 5) - 5,
        s: Math.random() * (b + 5) - 5,
      });
    }

    function render() {
      if (m.current.x == null || m.current.y == null) return;

      ctx.fillStyle = `rgba(0,0,0,${c})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineCap = 'round';

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        p.r += p.s;
        if (p.r >= 360) p.r = p.r - 360;

        const vel = {
          x: p.d * Math.cos((p.r * Math.PI) / 180),
          y: p.d * Math.sin((p.r * Math.PI) / 180),
        };

        if (p.p.x != null && p.p.y != null) {
          ctx.strokeStyle = p.c;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p.p.x, p.p.y);
          ctx.lineTo(m.current.x + vel.x, m.current.y + vel.y);
          ctx.stroke();
          ctx.closePath();
        }

        p.p.x = m.current.x + vel.x;
        p.p.y = m.current.y + vel.y;
      }
    }

    function animloop() {
      requestAnimationFrame(animloop);
      render();
    }

    animloop();

    return () => {
      window.removeEventListener('mousemove', listenerAction);
    };
  }, []);

  return <canvas id="c" className="canvas" width={"100%"} ref={canvasRef} />;
};

export default Dots;
