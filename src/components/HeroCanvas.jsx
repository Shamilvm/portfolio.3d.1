import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import Setup, { preloadSetup } from "./Setup";
import CanvasLoader from "./CanvasLoader";
import HeroCamera from "./HeroCamera";
import { getCanvasDpr, getCanvasGl } from "../utils/canvasConfig";

const HeroCanvas = ({ sizes, isMobile, isVisible }) => {
  useEffect(() => {
    preloadSetup();
  }, []);

  return (
    <Canvas
      className="w-full h-full touch-none"
      dpr={getCanvasDpr()}
      gl={getCanvasGl(isMobile, true)}
      frameloop={isVisible ? "always" : "demand"}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
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
