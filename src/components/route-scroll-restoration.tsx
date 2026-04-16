import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function RouteScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.hash, location.pathname]);

  return null;
}
