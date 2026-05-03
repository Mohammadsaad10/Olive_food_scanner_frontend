import { useState } from "react";

const AVATARS = [
  {
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
    alt: "John Doe",
  },
  {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    alt: "Robert Johnson",
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    alt: "Jane Smith",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    alt: "Emily Davis",
  },
];

const HeroTrustAvatars = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col items-center text-[oklch(0.129_0.042_264.695)]">
      <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center md:justify-center">
        <div className="mb-4 flex flex-row items-center justify-center sm:mb-0 md:justify-start">
          {AVATARS.map((a, i) => (
            <div
              key={a.alt}
              className="group relative -mr-3"
              style={{ zIndex: hoveredIndex === i ? 20 : i + 1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-full border-2 border-neutral-200">
                <img
                  alt={a.alt}
                  draggable={false}
                  loading="lazy"
                  width={100}
                  height={100}
                  decoding="async"
                  src={a.src}
                  className="h-8 w-8 object-cover object-top"
                />
              </div>
            </div>
          ))}
          <div
            className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-200 bg-[linear-gradient(135deg,_rgba(231,_230,_230,_0.5)_0%,_rgba(203,_203,_203,_0.5)_97%)]"
            style={{ zIndex: hoveredIndex !== null ? 5 : 10 }}
          >
            <span className="text-xs font-medium text-black/30">3k+</span>
          </div>
        </div>
        <span className="font-dm-sans text-xs text-neutral-600">
          Trusted by thousands of healthy families
        </span>
      </div>
    </div>
  );
};

export default HeroTrustAvatars;
