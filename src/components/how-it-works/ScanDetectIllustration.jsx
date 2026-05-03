import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import barcodeImg from "/assets/images/how-it-works/barcode-image.webp";

const SPARKLE_COUNT = 12;
/** Decompiled: 0.8s; slightly longer for a softer glow pulse. */
const SPARKLE_CYCLE_SEC = 1.0;
const LIFECYCLE_TICK_MS = 2000;

function randomSparkle() {
  const x = `${(80 * Math.random()).toFixed(4)}%`;
  const y = `${(80 * Math.random()).toFixed(4)}%`;
  const color = "#1F3824";
  const delay = 2 * Math.random();
  const scale = Math.random() + 0.3;
  const lifespan = 10 * Math.random() + 5;
  return {
    id: `${x}-${y}-${Date.now()}-${Math.random()}`,
    x,
    y,
    color,
    delay,
    scale,
    lifespan,
  };
}

export default function ScanDetectIllustration() {
  const reduceMotion = useReducedMotion();
  const [sparkles, setSparkles] = useState(() =>
    Array.from({ length: SPARKLE_COUNT }, randomSparkle),
  );

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setSparkles((prev) =>
        prev.map((s) =>
          s.lifespan <= 0 ? randomSparkle() : { ...s, lifespan: s.lifespan - 0.1 },
        ),
      );
    }, LIFECYCLE_TICK_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="relative h-[200px] rounded-2xl">
      <div className="relative h-full w-full overflow-hidden rounded-[32px]">
        <span className="absolute top-4 left-4 z-30 h-8 w-8 rounded-tl-xl border-t-[3px] border-l-[3px] border-[#1F3824]/30" />
        <span className="absolute top-4 right-4 z-30 h-8 w-8 rounded-tr-xl border-t-[3px] border-r-[3px] border-[#1F3824]/30" />
        <span className="absolute bottom-4 left-4 z-30 h-8 w-8 rounded-bl-xl border-b-[3px] border-l-[3px] border-[#1F3824]/30" />
        <span className="absolute bottom-4 right-4 z-30 h-8 w-8 rounded-br-xl border-b-[3px] border-r-[3px] border-[#1F3824]/30" />

        <div className="relative flex h-full w-full items-center justify-center p-8">
          <img
            src={barcodeImg}
            alt="Barcode"
            width={300}
            height={300}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="w-auto h-auto max-h-[147px]"
            style={{ color: 'transparent' }}
          />

          {/* Anchor at (x,y); transforms only scale/opacity/rotate — position fixed until lifespan respawn */}
          {sparkles.map((s) => (
            <div
              key={s.id}
              className="pointer-events-none absolute z-20"
              style={{
                left: s.x,
                top: s.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              {reduceMotion ? (
                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" aria-hidden className="opacity-[30]">
                  <path
                    opacity="0.6"
                    fill="#1F3824"
                    d="M11.3013 13.0702C10.537 13.1467 9.4709 12.8266 8.04671 12.1297L8.02026 12.1172L8.00061 12.1368C6.85364 13.2321 5.9347 13.8592 5.18172 14.0174L5.07559 14.0368C3.43069 14.2913 2.97659 12.7429 3.37591 9.85826L3.39176 9.74667L3.32493 9.71102C-0.730973 7.49471 -0.423501 5.47902 4.10718 4.64456L4.22767 4.62286L4.26634 4.417C4.66689 2.31333 5.24804 1.14741 6.19681 0.935047L6.28976 0.917604C7.29215 0.762556 8.22342 1.69761 9.27529 3.64222L9.37374 3.82687L9.49636 3.81097C14.0674 3.23758 14.9695 5.06618 11.7721 8.40381L11.718 8.45817L11.7674 8.55966C12.9937 11.1364 13.0512 12.737 11.5062 13.0391L11.4089 13.056L11.3013 13.0702Z"
                  />
                </svg>
              ) : (
                <motion.svg
                  width={21}
                  height={21}
                  viewBox="0 0 21 21"
                  fill="none"
                  aria-hidden
                  style={{ overflow: "visible", transformOrigin: "50% 50%" }}
                  initial={{ opacity: 0, scale: 0, rotate: 75 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, s.scale, 0],
                    rotate: [75, 120, 150],
                  }}
                  transition={{
                    duration: SPARKLE_CYCLE_SEC,
                    repeat: Infinity,
                    delay: s.delay,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    opacity="0.6"
                    fill="#1F3824"
                    d="M11.3013 13.0702C10.537 13.1467 9.4709 12.8266 8.04671 12.1297L8.02026 12.1172L8.00061 12.1368C6.85364 13.2321 5.9347 13.8592 5.18172 14.0174L5.07559 14.0368C3.43069 14.2913 2.97659 12.7429 3.37591 9.85826L3.39176 9.74667L3.32493 9.71102C-0.730973 7.49471 -0.423501 5.47902 4.10718 4.64456L4.22767 4.62286L4.26634 4.417C4.66689 2.31333 5.24804 1.14741 6.19681 0.935047L6.28976 0.917604C7.29215 0.762556 8.22342 1.69761 9.27529 3.64222L9.37374 3.82687L9.49636 3.81097C14.0674 3.23758 14.9695 5.06618 11.7721 8.40381L11.718 8.45817L11.7674 8.55966C12.9937 11.1364 13.0512 12.737 11.5062 13.0391L11.4089 13.056L11.3013 13.0702Z"
                  />
                </motion.svg>
              )}
            </div>
          ))}

          <motion.div
            className="pointer-events-none absolute left-1/2 z-20 h-1 w-[80%] -translate-x-1/2 rounded-full bg-[#1F3824]"
            animate={
              reduceMotion ? { top: "50%" } : { top: ["15%", "85%", "15%"] }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
          />
        </div>
      </div>
    </div>
  );
}
