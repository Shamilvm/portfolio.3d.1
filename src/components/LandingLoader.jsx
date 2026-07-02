import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { preloadSetup } from "./Setup";

const MIN_LOADER_MS = 2000;
const MAX_LOADER_MS = 15000;

const LandingLoader = ({ preload, children }) => {
  const { progress, active } = useProgress();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isReady, setIsReady] = useState(false);
  const [mobileProgress, setMobileProgress] = useState(0);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  const displayProgress = isMobile
    ? mobileProgress
    : Math.min(1000, Math.round(progress));

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeElapsed(true), MIN_LOADER_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      preloadSetup();
      return;
    }

    const sources = ["/assets/hero-poster.png", "/assets/grid3.png"];
    let loaded = 0;

    sources.forEach((src) => {
      const image = new Image();
      const onDone = () => {
        loaded += 1;
        setMobileProgress(Math.round((loaded / sources.length) * 100));
      };
      image.onload = onDone;
      image.onerror = onDone;
      image.src = src;
    });
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = isReady ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isReady]);

  useEffect(() => {
    if (isReady) return;

    const fallback = setTimeout(() => setIsReady(true), MAX_LOADER_MS);
    return () => clearTimeout(fallback);
  }, [isReady]);

  useEffect(() => {
    if (isReady) return;

    const assetsReady = !isMobile
      ? progress >= 100 && !active
      : mobileProgress >= 100;

    if (assetsReady && minTimeElapsed) {
      setIsReady(true);
    }
  }, [progress, active, isMobile, mobileProgress, isReady, minTimeElapsed]);

  return (
    <>
      <main className="max-w-7xl mx-auto">
        {preload}
        {isReady && children}
      </main>

      {!isReady && (
        <div
          className="fixed inset-0 bg-black flex flex-col justify-center items-center z-[999999] text-white font-extrabold"
          aria-live="polite"
          aria-busy="true"
        >
          <p className="mt-10 font-bold text-sm">
            {displayProgress > 0
              ? `${displayProgress.toFixed(2)}%`
              : "Loading..."}
          </p>
        </div>
      )}
    </>
  );
};

export default LandingLoader;
