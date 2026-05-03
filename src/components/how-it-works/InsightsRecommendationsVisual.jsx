import { useEffect, useRef } from "react";
import product1 from "/assets/images/hero/product-1.webp";
import product2 from "/assets/images/hero/product-2.webp";
import product3 from "/assets/images/hero/product-3.webp";
const pills = [
  "Veggie Spaghetti Squash",
  "Chhole (Chickpea Curry)",
  "Lentil and Spinach Soup",
  "Stuffed Bell Peppers with Rice",
  "Mediterranean Quinoa Salad",
];

// Duplicate pills 8x for seamless loop
const scrollingPills = [...pills, ...pills, ...pills, ...pills, ...pills, ...pills, ...pills, ...pills];

export default function InsightsRecommendationsVisual() {
  const pillContainerRef = useRef(null);

  // Scrolling pills animation
  useEffect(() => {
    let rafId;
    let lastTime = performance.now();
    let currentY = -54.4; // Start offset as specified
    const pillHeight = 32; // Approximate height of each pill
    const singleSetHeight = pillHeight * pills.length; // Height of one full set

    const tick = (now) => {
      const elapsed = (now - lastTime) / 1000;
      lastTime = now;
      
      currentY -= 30 * elapsed; // 30px per second upward
      
      // Loop: when scrolled one full set height, reset
      if (Math.abs(currentY) >= singleSetHeight)
        currentY += singleSetHeight;
      
      if (pillContainerRef.current) {
        pillContainerRef.current.style.transform = `translateY(${currentY}px)`;
      }
      
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);


  return (
    <div className="h-[200px] rounded-2xl overflow-hidden relative">
      
      {/* Layer 1 — scrolling pills (bottom) */}
      <div className="absolute inset-0 z-0 flex flex-col items-center gap-2 overflow-hidden">
        <div 
          ref={pillContainerRef}
          className="flex flex-col items-center gap-2"
          style={{ transform: 'translateY(-54.4px)' }}
        >
          {scrollingPills.map((pill, i) => (
            <div
              key={`${pill}-${i}`}
              className="relative flex items-center justify-center w-[100%] rounded-md px-6 py-4 h-[1rem] text-center bg-[#38664126] shrink-0"
            >
              <p className="text-sm font-normal text-neutral-400">{pill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Layer 2 — 3 fixed images (middle) */}
      <div className="relative z-10 h-full flex items-center justify-center pt-4">
        {/* LEFT image (product-2, rotated, scaled down, behind) */}
        <img
          src={product2}
          alt="Product 2"
          width={500}
          height={500}
          draggable={false}
          className="md:w-30 md:h-40 h-40 w-30 rounded-3xl border-2 border-white object-cover translate-x-20 -rotate-12 scale-90"
        />
        
        {/* CENTER image (product-1, front, z-20, no rotation) */}
        <img
          src={product1}
          alt="Product 1"
          width={500}
          height={500}
          draggable={false}
          className="md:w-30 md:h-40 h-40 w-30 rounded-3xl border-2 border-white object-cover relative z-20"
        />
        
        {/* RIGHT image (product-3, rotated opposite, scaled down, behind) */}
        <img
          src={product3}
          alt="Product 3"
          width={500}
          height={500}
          draggable={false}
          className="md:w-30 md:h-40 h-40 w-30 rounded-3xl border-2 border-white object-cover -translate-x-20 rotate-12 scale-90"
        />
      </div>

      {/* Layer 3 — fade gradients (top) */}
      <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-[#F5FAF6] to-transparent z-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-[#F5FAF6] to-transparent z-30 pointer-events-none" />

    </div>
  );
}
