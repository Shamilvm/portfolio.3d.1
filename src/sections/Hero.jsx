import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Button from "../components/Button";
import HeroCanvas from "../components/HeroCanvas";
import { useSectionVisibility } from "../hooks/useSectionVisibility";
const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const { ref, isVisible } = useSectionVisibility("100px");

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section
      ref={ref}
      id="home"
      className="h-[90vh] sm:min-h-screen w-full flex flex-col relative"
    >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-32 c-space gap-3 relative z-10">
        <h1 className="sm:text-3xl text-xl font-medium text-gray-400 text-center">
          Hi, I am Shamil Vm <span className="waving-hand">👋</span>
        </h1>
        <p className="text-center sm:text-lg text-xs text-gray-500 !leading-normal">
          Full-Stack Developer | Turning ideas into Experience
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <HeroCanvas
          sizes={sizes}
          isMobile={isMobile}
          isVisible={isVisible}
        />
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button
            name={`Let's work together`}
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
