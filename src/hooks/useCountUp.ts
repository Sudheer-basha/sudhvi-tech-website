import { useEffect, useRef, useState } from 'react';

/**
 * Counts from 0 to `target` over `duration` ms once element is in view.
 */
export function useCountUp(target: number, duration = 1500) {
  const [count, setCount]       = useState(0);
  const [started, setStarted]   = useState(false);
  const ref                     = useRef<HTMLElement | null>(null);

  // Trigger when element enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Animate counter
  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}
