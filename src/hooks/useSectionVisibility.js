import { useEffect, useRef, useState } from "react";

export function useSectionVisibility(rootMargin = "200px") {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
        if (visible) {
          setHasBeenVisible(true);
        }
      },
      { rootMargin, threshold: 0.05 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isVisible, hasBeenVisible };
}
