import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { preloadSetup } from "./Setup";

const MIN_LOADER_MS = 2000;
const MAX_LOADER_MS = 15000;

const LandingLoader = ({ preload, children }) => {
  const { progress, active } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  const displayProgress = Math.min(100, Math.round(progress));

  useEffect(() => {
    preloadSetup();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeElapsed(true), MIN_LOADER_MS);
    return () => clearTimeout(timer);
  }, []);

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

    const assetsReady = progress >= 100 && !active;

    if (assetsReady && minTimeElapsed) {
      setIsReady(true);
    }
  }, [progress, active, isReady, minTimeElapsed]);

  return (
    <>
      <main className="max-w-7xl mx-auto">
        {preload}
        {isReady && children}
      </main>

      {!isReady && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm flex flex-col justify-center items-center z-[999999] text-white"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="loader">
            {/* <p>Shamil</p>
            <div className="words">
              <span className="word">Vm</span>
              <span className="word">Vm</span>
              <span className="word">Vm</span>
            </div> */}
          </div>
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
