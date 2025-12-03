import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const useGAPageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-7N4JBTFRLD", {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);
};
