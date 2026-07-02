import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TargetCursor = lazy(() => import("./ui/target-cursor"));

const DeferredTargetCursor = () => {
  const location = useLocation();
  const [shouldLoad, setShouldLoad] = useState(false);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(() => setShouldLoad(true), {
        timeout: 2000,
      });
      return () => cancelIdleCallback(id);
    }

    const timeout = setTimeout(() => setShouldLoad(true), 1500);
    return () => clearTimeout(timeout);
  }, [isHomePage]);

  if (!isHomePage || !shouldLoad) return null;

  return (
    <Suspense fallback={null}>
      <TargetCursor />
    </Suspense>
  );
};

export default DeferredTargetCursor;
