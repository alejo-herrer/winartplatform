import { useState, useEffect } from "react";

export function useScrollProgress(multiplier=2) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(
        window.scrollY / (window.innerHeight * multiplier),
        1
      );
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [multiplier]);

  return scroll;
}