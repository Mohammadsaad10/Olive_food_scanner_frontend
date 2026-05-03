import { useState } from "react";

export const useCarousel = (total = 1) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % total);
  const prev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  return { activeIndex, setActiveIndex, next, prev };
};
