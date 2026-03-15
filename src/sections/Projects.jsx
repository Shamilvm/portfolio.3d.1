import React, { Suspense, useState } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import AsusLaptop from "../components/AsusLaptop";
import { Leva, useControls } from "leva";
import HeroCamera from "../components/HeroCamera";

const Projects = () => {
  // const controls = useControls("Setup", {
  //   positionX: {
  //     value: 3.9,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: -6.1,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: -8.9,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: -2.8,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: -1.6,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 3.3,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 2.1,
  //     min: -10,
  //     max: 30,
  //   },
  // });
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const projectCount = myProjects.length;

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="work" className="c-space my-20">
      <p className="sm:text-4xl text-3xl font-semibold">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">
        <div className="cursor-target flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-gray-700">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt=""
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
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            {/* <a
              className="flex items-center gap-2 cursor-pointer text-gray-100"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="" className="w-3 h-3" />
            </a> */}
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className=" w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation("previous")}
            >
              <img src="/assets/left-arrow.png" alt="" className="w-4 h-4" />
            </button>
            <button
              className=" w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation("next")}
            >
              <img src="/assets/right-arrow.png" alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="cursor-target border border-gray-800 bg-black-950 rounded-lg h-96 md:h-full">
          {/* <Leva /> */}
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                <HeroCamera>
                  <AsusLaptop
                    texture={currentProject.texture}
                    position={[0.4, -2.5, 1.3]}
                    // position={[
                    //   controls.positionX,
                    //   controls.positionY,
                    //   controls.positionZ,
                    // ]}
                    rotation={[-3.0, 3.0, 3.1]}
                    // rotation={[
                    //   controls.rotationX,
                    //   controls.rotationY,
                    //   controls.rotationZ,
                    // ]}
                    scale={30}
                    // scale={controls.scale}
                  />
                </HeroCamera>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
