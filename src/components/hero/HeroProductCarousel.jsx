import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import { HERO_SLIDER_PRODUCTS } from "../../data/heroProductSliderData";

const ITEM_PX = 120; /* 6.25rem */
const GAP_PX = 8;
const STEP = ITEM_PX + GAP_PX;
/** Softer spring for horizontal track + per-slide crossfade (less snappy). */
const CAROUSEL_SPRING = { type: "spring", stiffness: 170, damping: 34, mass: 1.15 };
const SLIDE_VISUAL_SPRING = { type: "spring", stiffness: 200, damping: 36, mass: 1 };
const DETAIL_SPRING = { type: "spring", stiffness: 280, damping: 32, mass: 1 };
/** After carousel lands on a slide, show the hero thumb clearly before the sheet. */
const HOLD_PRODUCT_CLEAR_MS = 950;
/** Detail image stays readable before sliding away. */
const HOLD_DETAIL_VISIBLE_MS = 2600;

const START_INDEX = 10;
const WRAP_AT = 20;

function tripleProducts(list) {
  return [...list, ...list, ...list].map((p, i) => ({ ...p, key: `${i}-${p.alt}` }));
}

function centerPaddingX(viewportW) {
  if (viewportW <= 0) return 0;
  return viewportW / 2 - ITEM_PX / 2;
}

function targetXForIndex(viewportW, index) {
  return centerPaddingX(viewportW) - index * STEP;
}

function nearestCenterIndex(xVal, viewportW, totalItems) {
  if (viewportW <= 0) return 0;
  const cx = viewportW / 2;
  const raw = (cx - ITEM_PX / 2 - xVal) / STEP;
  const i = Math.round(raw);
  return Math.max(0, Math.min(totalItems - 1, i));
}

/** Center sharp; ±1 and ±2 share the same masked/blurred neighbor look. */
function itemVisualState(distance) {
  const abs = Math.abs(distance);
  if (abs === 0) return { opacity: 1, scale: 1, blur: 0 };
  if (abs === 1 || abs === 2) return { opacity: 0.34, scale: 0.82, blur: 1.8 };
  return { opacity: 0, scale: 0.82, blur: 1.8 };
}

const detailVariants = {
  closed: { y: "100%" },
  open: { y: 0 },
};

const HeroProductCarousel = () => {
  const n = HERO_SLIDER_PRODUCTS.length;
  const setWidth = n * STEP;
  const items = useMemo(() => tripleProducts(HERO_SLIDER_PRODUCTS), []);

  const maskRef = useRef(null);
  const indexRef = useRef(START_INDEX);
  const viewportWRef = useRef(0);
  const holdDetailTimerRef = useRef(0);
  const allowAdvanceAfterCloseRef = useRef(false);

  const [viewportW, setViewportW] = useState(0);
  const [liveX, setLiveX] = useState(0);
  /** Mirrors `indexRef` so detail `src` / labels update when the carousel advances. */
  const [focusIndex, setFocusIndex] = useState(START_INDEX);
  /** Bumps after each full cycle so we wait on a clear hero frame before the next sheet. */
  const [slideEpoch, setSlideEpoch] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);

  const targetX = useMotionValue(0);
  const springX = useSpring(targetX, CAROUSEL_SPRING);

  useMotionValueEvent(springX, "change", (v) => {
    setLiveX(v);
  });

  const advanceCarousel = useCallback(() => {
    const vw = viewportWRef.current;
    if (vw <= 0) return;

    if (indexRef.current >= WRAP_AT) {
      indexRef.current = START_INDEX;
      const cur = targetX.get();
      const snapped = cur + setWidth;
      targetX.jump(snapped);
      springX.jump(snapped);
      setLiveX(snapped);
    } else {
      indexRef.current += 1;
    }
    targetX.set(targetXForIndex(vw, indexRef.current));
    setFocusIndex(indexRef.current);
  }, [setWidth, springX, targetX]);

  useLayoutEffect(() => {
    const el = maskRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      viewportWRef.current = w;
      setViewportW(w);
    });
    ro.observe(el);
    const w = el.clientWidth;
    viewportWRef.current = w;
    setViewportW(w);
    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (viewportW <= 0) return;
    const t = targetXForIndex(viewportW, indexRef.current);
    targetX.jump(t);
    springX.jump(t);
    setLiveX(t);
  }, [viewportW, targetX, springX]);

  useEffect(() => {
    if (viewportW <= 0) return undefined;
    const t = window.setTimeout(() => {
      setDetailOpen(true);
    }, HOLD_PRODUCT_CLEAR_MS);
    return () => window.clearTimeout(t);
  }, [slideEpoch, viewportW]);

  const onDetailAnimationComplete = useCallback(
    (definition) => {
      if (definition === "open") {
        allowAdvanceAfterCloseRef.current = true;
        window.clearTimeout(holdDetailTimerRef.current);
        holdDetailTimerRef.current = window.setTimeout(() => {
          setDetailOpen(false);
        }, HOLD_DETAIL_VISIBLE_MS);
        return;
      }
      if (definition === "closed" && allowAdvanceAfterCloseRef.current) {
        allowAdvanceAfterCloseRef.current = false;
        window.clearTimeout(holdDetailTimerRef.current);
        advanceCarousel();
        setSlideEpoch((e) => e + 1);
      }
    },
    [advanceCarousel],
  );

  useEffect(() => {
    return () => {
      window.clearTimeout(holdDetailTimerRef.current);
    };
  }, []);

  const centerIdx = useMemo(
    () => nearestCenterIndex(liveX, viewportW, items.length),
    [liveX, viewportW, items.length],
  );

  const activeProduct =
    HERO_SLIDER_PRODUCTS[focusIndex % n] ?? HERO_SLIDER_PRODUCTS[0];
  const detailSrc = activeProduct?.details;

  return (
    <div className="relative z-50 mx-auto min-h-[500px] w-full max-w-6xl overflow-hidden text-[oklch(0.129_0.042_264.695)] leading-6">
      <div
        className="absolute inset-0 z-[3] mx-auto h-[600px] w-[300px] rounded-[38px] shadow-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(88, 88, 88, 0.24) 0%, rgba(255, 255, 255, 0.24) 100%)",
        }}
      />

      <div className="absolute top-[10px] left-1/2 z-[4] h-[600px] w-[280px] -translate-x-1/2 overflow-visible rounded-tl-[36px] rounded-tr-[36px] bg-white shadow-xl">
        <div className="pointer-events-none absolute left-1/2 top-2.5 z-40 flex h-[26px] w-[100px] -translate-x-1/2 items-center justify-end rounded-full bg-black">
          <div
            className="absolute right-0 mr-[5px] h-4 w-4 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.04)_72%,rgba(255,255,255,0.16)_100%)]"
            aria-hidden
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[60px] z-10 h-[7.5rem] w-[31rem] -translate-x-1/2 overflow-hidden bg-transparent">
          <div
            ref={maskRef}
            className="hero-carousel-mask relative h-full w-full overflow-hidden"
          >
            <motion.div
              className="absolute top-1/2 left-0 z-[1] flex gap-2 bg-transparent will-change-transform"
              style={{
                x: springX,
                y: "-50%",
              }}
            >
              {items.map((p, i) => {
                const dist = Math.abs(i - centerIdx);
                const { opacity, scale, blur } = itemVisualState(dist);
                return (
                  <motion.img
                    key={p.key}
                    alt={p.alt}
                    src={p.thumb}
                    loading="lazy"
                    decoding="async"
                    sizes="100px"
                    width={100}
                    height={100}
                    className="h-[7.5rem] w-[7.5rem] shrink-0 rounded-2xl object-cover will-change-transform"
                    initial={false}
                    animate={{
                      opacity,
                      scale,
                      filter: `blur(${blur}px)`,
                    }}
                    transition={SLIDE_VISUAL_SPRING}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>

        {detailSrc ? (
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex max-h-[75%] justify-center rounded-t-3xl bg-white shadow-[0_-8px_32px_rgba(0,0,0,0.12)]"
            initial={false}
            animate={detailOpen ? "open" : "closed"}
            variants={detailVariants}
            transition={DETAIL_SPRING}
            onAnimationComplete={onDetailAnimationComplete}
          >
            <img
              alt={activeProduct.alt}
              loading="lazy"
              decoding="async"
              src={detailSrc}
              className="h-full w-full max-h-full] object-cover object-top"
            />
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default HeroProductCarousel;
