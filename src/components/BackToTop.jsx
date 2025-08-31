import { useEffect, useState } from "react";
import styles from "../styles/BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`${styles.btn} ${!visible ? styles.btnHidden : ""}`}
    >
      {/* simple up arrow to match your style */}
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12 5l-7 7h4v7h6v-7h4l-7-7z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
