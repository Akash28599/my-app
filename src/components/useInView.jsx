// useInView.js
import { useRef, useState, useEffect } from "react";

export default function useInView(threshold = 0.25) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // uncomment next line if you want animation only once:
          // observer.unobserve(el);
        } else {
          // If you want it to hide again when scrolled out, uncomment:
          // setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, visible];
}
