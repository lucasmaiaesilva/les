import * as React from "react";

interface UseParallaxOptions {
  speed?: number;
  disabled?: boolean;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: UseParallaxOptions = {}
) {
  const { speed = 0.5, disabled = false } = options;
  const ref = React.useRef<T>(null);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    if (disabled || typeof window === "undefined") return;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const elementCenter = elementTop + elementHeight / 2;
      const viewportCenter = windowHeight / 2;

      // Calculate parallax offset based on distance from viewport center
      // The further from center, the more offset
      const distanceFromCenter = viewportCenter - elementCenter;
      const parallaxOffset = distanceFromCenter * speed;

      setOffset(parallaxOffset);
    };

    // Initial calculation
    handleScroll();

    // Throttle scroll events for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed, disabled]);

  return { ref, offset };
}

