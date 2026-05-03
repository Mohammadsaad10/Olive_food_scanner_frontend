import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HOW_IT_WORKS_PRODUCTS } from "../../data/howItWorksProductData";

const STRIDE = 72;        // 64px item + 8px gap

function CarouselItem({ item, index, x, f }) {
  const scale = useTransform(
    x,
    [f-(index-1)*72, f-index*72, f-(index+1)*72],
    [0.8, 1.2, 0.8]
  );
  
  const opacity = useTransform(
    x,
    [f-(index-1)*72, f-index*72, f-(index+1)*72],
    [0.3, 1, 0.3]
  );

  return (
    <motion.div
      className="relative w-16 h-16 shrink-0"
      style={{ scale, opacity }}
    >
      <img
        className="rounded-2xl object-cover w-full h-full"
        src={item.src}
        alt={item.title}
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
}

function SafeConsumeBadge() {
  return (
    <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center">
      <div className="bg-[#D4E8D8] font-nueu font-[500] flex items-center gap-2 w-fit px-3 py-1 rounded-2xl shadow-[0px_0px_1.699px_rgba(31,56,36,0.30)]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="19" 
          viewBox="0 0 18 19" 
          fill="none"
        >
          <path 
            fill="#1F3824" 
            d="M9.104 2.58c.545 0 1.07.198 1.48.558l.108.102.488.488a.84.84 0 0 0 .497.239l.095.006h.7a2.24 2.24 0 0 1 2.237 2.112l.003.128v.7c0 .189.065.373.18.52l.064.07.488.489a2.24 2.24 0 0 1 .103 3.068l-.102.107-.488.49a.84.84 0 0 0-.24.496l-.005.095v.7a2.24 2.24 0 0 1-2.113 2.236l-.127.004h-.7a.84.84 0 0 0-.52.18l-.07.064-.489.488a2.24 2.24 0 0 1-3.068.103l-.108-.102-.488-.489a.84.84 0 0 0-.497-.238l-.095-.006h-.7A2.24 2.24 0 0 1 3.5 13.075l-.003-.127v-.7a.84.84 0 0 0-.18-.52l-.064-.07-.488-.49a2.24 2.24 0 0 1-.103-3.067l.102-.108.488-.488a.84.84 0 0 0 .24-.498l.005-.094v-.7l.003-.128a2.24 2.24 0 0 1 2.11-2.109l.127-.003h.7a.84.84 0 0 0 .52-.181l.07-.063.489-.488a2.24 2.24 0 0 1 1.588-.66Zm2.589 5.098a.7.7 0 0 0-.99 0L8.397 9.983l-.905-.905-.066-.058a.7.7 0 0 0-.924 1.048l1.4 1.4.066.059a.7.7 0 0 0 .924-.059l2.8-2.8.059-.066a.7.7 0 0 0-.058-.924Z"
          />
        </svg>
        Safe to consume
      </div>
    </div>
  );
}

export default function DataAnalysisStrip() {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  
  // Duplicate products 4× = 40 total items
  const items = [...HOW_IT_WORKS_PRODUCTS, ...HOW_IT_WORKS_PRODUCTS, ...HOW_IT_WORKS_PRODUCTS, ...HOW_IT_WORKS_PRODUCTS];
  const TOTAL = STRIDE * items.length;  // 2880px
  
  // f = center offset = (containerWidth - 64) / 2
  const f = (containerWidth - 64) / 2;
  
  const x = useMotionValue(0);

  // ResizeObserver for container width
  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      setContainerWidth(entries[0]?.contentRect.width ?? 0);
    });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Constant velocity scroll via requestAnimationFrame
  useEffect(() => {
    let rafId;
    let lastTime = performance.now();
    
    rafId = requestAnimationFrame(function tick(now) {
      const elapsed = (now - lastTime) / 1000;  // to seconds
      lastTime = now;
      
      let current = x.get();
      current -= 40 * elapsed;          // 40px per second, always left
      
      // Seamless loop — no reverse, just teleport forward
      if (Math.abs(current) >= TOTAL / 2)
        current += TOTAL / 2;
      
      x.set(current);
      rafId = requestAnimationFrame(tick);
    });
    
    return () => cancelAnimationFrame(rafId);
  }, [x, TOTAL]);

  return (
    <div className="h-[200px] rounded-2xl overflow-hidden">
      <div 
        className="h-full w-full overflow-hidden relative mask-l-from-50% mask-r-from-50%"
        ref={containerRef}
      >
        <motion.div
          className="absolute z-2 top-1/2 -translate-y-1/2 flex gap-2 items-center"
          style={{ x }}
        >
          {items.map((item, t) => (
            <CarouselItem
              key={`${t}-${item.src}`}
              item={item}
              index={t}
              x={x}
              f={f}
            />
          ))}
        </motion.div>

        {/* Center beam indicator */}
        <div className="pointer-events-none absolute flex items-center justify-center inset-0 z-10">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="161" 
            height="239" 
            viewBox="0 0 161 239" 
            fill="none"
          >
            <g opacity="0.3" filter="url(#filter0_f_205_3121)">
              <path 
                d="M87.7123 119.475C87.7123 62.5882 113.331 16.4727 
                144.934 16.4727H16.1855C47.7881 16.4728 73.4072 62.5883 
                73.4072 119.475C73.4072 176.361 47.7881 222.476 16.1855 
                222.476H144.934C113.331 222.476 87.7123 176.361 87.7123 
                119.475Z" 
                fill="url(#paint0_linear_205_3121)"
              />
            </g>
            <defs>
              <filter 
                id="filter0_f_205_3121" 
                x="0.185547" 
                y="0.472656" 
                width="160.748" 
                height="238.004" 
                filterUnits="userSpaceOnUse" 
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend 
                  mode="normal" 
                  in="SourceGraphic" 
                  in2="BackgroundImageFix" 
                  result="shape"
                />
                <feGaussianBlur 
                  stdDeviation="8" 
                  result="effect1_foregroundBlur_205_3121"
                />
              </filter>
              <linearGradient 
                id="paint0_linear_205_3121" 
                x1="80.5598" 
                y1="16.4727" 
                x2="80.5598" 
                y2="222.476" 
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1F3824" stop-opacity="0"/>
                <stop offset="0.5" stop-color="#1F3824"/>
                <stop offset="1" stop-color="#1F3824" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <SafeConsumeBadge />
      </div>
    </div>
  );
}
