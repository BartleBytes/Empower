import { useEffect, useRef } from "react";
import styles from "../styles/Spacer.module.css";

function Spacer() {
  const spacerRef = useRef(null);

  useEffect(() => {
    const spacerEl = spacerRef.current;
    if (!spacerEl) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      spacerEl.style.removeProperty("--parallax-offset");
      return;
    }

    const updateParallax = () => {
      const rect = spacerEl.getBoundingClientRect();
      const offset = rect.top * 0.25;
      spacerEl.style.setProperty("--parallax-offset", `${offset}px`);
    };

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);

    return () => {
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
    };
  }, []);

  return <div ref={spacerRef} className={styles.spacer} aria-hidden="true" />;
}

export default Spacer;
