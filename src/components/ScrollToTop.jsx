import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // Stop the browser from trying to restore the old scroll position
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => (window.history.scrollRestoration = prev);
    }
  }, []);

  useEffect(() => {
    // If you're using hash links (#section), scroll to that element
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    // Otherwise always go to the top
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}
