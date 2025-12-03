import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function useGAPageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag("config", "G-7N4JBTFRLD", {
      page_path: location.pathname + location.search,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);
}
