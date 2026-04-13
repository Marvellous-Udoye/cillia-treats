import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function RouteScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}
