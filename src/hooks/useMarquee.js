import { useState } from "react";

export const useMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  return { isPaused, setIsPaused };
};
