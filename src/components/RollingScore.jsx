import { useEffect, useRef } from 'react';

const CELL_H = 25; // px — must match font-size * 1.25

function DigitColumn({ stripId }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block', overflow: 'hidden', width: '0.65em', height: `${CELL_H}px` }}>
      <div style={{ visibility: 'hidden', height: `${CELL_H}px` }}>0</div>
      <div
        id={stripId}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', transform: 'translateY(0)' }}
      >
        {[0,1,2,3,4,5,6,7,8,9].map(n => (
          <div key={n} style={{ height: `${CELL_H}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

function setStrip(id, digit, duration, delay) {
  const strip = document.getElementById(id);
  if (!strip) return;
  strip.style.transition = `transform ${duration}ms cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`;
  strip.style.transform = `translateY(-${digit * CELL_H}px)`;
}

export default function RollingScore({ score = 96, label = "Excellent" }) {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const hasRunRef = useRef(false);

  function runAnimation() {
    cancelAnimationFrame(rafRef.current);
    startTimeRef.current = null;

    // Reset instantly
    setStrip('strip-tens', 0, 0, 0);
    setStrip('strip-units', 0, 0, 0);

    const DURATION = 2000;

function tick(ts) {
  if (!startTimeRef.current) startTimeRef.current = ts;
  const elapsed = ts - startTimeRef.current;
  const progress = Math.min(elapsed / DURATION, 1);

  // Linear roll, ease only in final 15%
  const eased = progress < 0.85
    ? (progress / 0.85) * 0.85
    : 0.85 + (1 - 0.85) * (1 - Math.pow(1 - ((progress - 0.85) / 0.15), 2));

  const value = Math.round(eased * score);

  if (progress < 1) {
    setStrip('strip-tens', Math.floor(value / 10), 100, 0);
    setStrip('strip-units', value % 10, 100, 0);
    rafRef.current = requestAnimationFrame(tick);
  } else {
    // Smooth final landing with cascade
    setStrip('strip-tens', Math.floor(score / 10), 600, 0);
    setStrip('strip-units', score % 10, 600, 100);
  }
}

    // 50ms gap so the reset translateY(0) renders before animation starts
    setTimeout(() => { rafRef.current = requestAnimationFrame(tick); }, 50);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRunRef.current) {
          hasRunRef.current = true;
          runAnimation();
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex gap-2 items-center">
      <div
        className="font-semibold text-sm md:text-xl font-inter flex items-center"
        style={{ color: 'rgba(31,56,36,0.6)', fontSize: '20px' }}
      >
        <DigitColumn stripId="strip-tens" />
        <DigitColumn stripId="strip-units" />
        /100
      </div>
      <span className="font-semibold text-sm font-inter" style={{ color: 'rgba(31,56,36,0.6)' }}>
        {label}
      </span>
    </div>
  );
}