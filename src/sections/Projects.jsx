import { Suspense, useEffect, useState } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import AsusLaptop, { preloadAsusModel } from "../components/AsusLaptop";
import { useSectionVisibility } from "../hooks/useSectionVisibility";
import { canvasGl, getCanvasDpr } from "../utils/canvasConfig";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const { ref, isVisible, hasBeenVisible } = useSectionVisibility("200px");
  const currentProject = myProjects[selectedProjectIndex];
  const projectCount = myProjects.length;

  useEffect(() => {
    if (hasBeenVisible) {
      preloadAsusModel();
    }
  }, [hasBeenVisible]);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      }
      return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <section ref={ref} id="work" className="c-space my-20">
      <h2 className="sm:text-4xl text-3xl font-semibold">My Work</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">
        <div className="cursor-target flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-gray-700">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt=""
              width={800}
              height={384}
              loading="lazy"
              decoding="async"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-blur-3xl rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              decoding="async"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-gray-300 my-5">
            <p className="text-white font-semibold text-2xl">
              {currentProject.title}
            </p>
            <p>{currentProject.desc}</p>
            <p>{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div
                  className="w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center"
                  key={index}
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    width={24}
                    height={24}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className=" w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation("previous")}
              aria-label="Previous project"
            >
              <img
                src="/assets/left-arrow.png"
                alt=""
                width={16}
                height={16}
                loading="lazy"
                decoding="async"
                className="w-4 h-4"
              />
            </button>
            <button
              className=" w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation("next")}
              aria-label="Next project"
            >
              <img
                src="/assets/right-arrow.png"
                alt=""
                width={16}
                height={16}
                loading="lazy"
                decoding="async"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div className="cursor-target border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-lg h-96 md:h-full">
          {hasBeenVisible ? (
            <Canvas
              className="touch-none"
              dpr={getCanvasDpr()}
              gl={canvasGl}
              frameloop={isVisible ? "always" : "demand"}
            >
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                  <AsusLaptop
                    texture={currentProject.texture}
                    position={[0.4, -2.5, 1.3]}
                    rotation={[-3.0, 3.0, 3.1]}
                    scale={40}
                  />
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 10]} intensity={0.5} />
                </Suspense>
              </Center>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minAzimuthAngle={-Infinity}
                maxAzimuthAngle={Infinity}
                minPolarAngle={0.1}
                maxPolarAngle={Math.PI - 0.1}
              />
            </Canvas>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
              Loading 3D preview...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
