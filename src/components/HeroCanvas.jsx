import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import Setup, { preloadSetup } from "./Setup";
import CanvasLoader from "./CanvasLoader";
import HeroCamera from "./HeroCamera";
import { canvasGl, getCanvasDpr } from "../utils/canvasConfig";

const HeroCanvas = ({ sizes, isMobile, isVisible }) => {
  useEffect(() => {
    preloadSetup();
  }, []);

  return (
    <Canvas
      className="w-full h-full"
      dpr={getCanvasDpr()}
      gl={canvasGl}
      frameloop={isVisible ? "always" : "demand"}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
        <HeroCamera isMobile={isMobile}>
          <Setup
            position={sizes.deskPosition}
            rotation={sizes.deskRotation}
            scale={sizes.deskScale}
          />
        </HeroCamera>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
      </Suspense>
    </Canvas>
  );
};

export default HeroCanvas;
