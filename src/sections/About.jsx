import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("shanushamil086@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about" aria-labelledby="about-heading">
      <h2 id="about-heading" className="sr-only">About Shamil Vm</h2>
      <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="cursor-target col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-gray-700 bg-gray-950 rounded-lg sm:p-7 p-4 flex flex-col justify-between items-center gap-5">
            <img
              src="/assets/image/shanu.png"
              alt="Shamil portrait"
              width={150}
              height={170}
              loading="lazy"
              decoding="async"
              className="sm:w-[150px] h-[170px] border border-gray-800 rounded-2xl object-contain"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                I'm Shamil
              </p>
              <p className="text-[#afb0b6] text-base">
                I'm a passionate software developer based in Dubai, UAE.
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-target col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-gray-700 bg-gray-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/image/man.png"
              alt="Developer illustration"
              width={200}
              height={200}
              loading="lazy"
              decoding="async"
              className="h-[200px] object-contain"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">What I Do</p>
              <p className="text-[#afb0b6] text-base">
                Turning concepts into dynamic full-stack web and app
                experiences..
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-target col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-gray-700 bg-gray-950 rounded-lg p-4 flex flex-col">
            <img
              src="/assets/image/icons.png"
              alt="Technology icons"
              width={600}
              height={440}
              loading="lazy"
              decoding="async"
              className="w-full sm:h-[440px] h-fit object-contain"
            />
          </div>
        </div>
        <div className="cursor-target xl:col-span-2 xl:row-span-3">
          <div className="w-full h-full border border-gray-700 bg-gray-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/grid3.png"
              alt="Code workspace"
              width={800}
              height={150}
              loading="lazy"
              decoding="async"
              className="w-full sm:h-[150px] h-fit object-contain"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">About Me</p>
              <p className="text-[#afb0b6] text-base">
                Curious to dive deeper into building scalable, distributed
                systems, I thrive on solving complex problems. 🖥️ Always eager
                to explore, learn, and take on the next tech challenge. 🎯
                Collaboration fuels innovation, and I enjoy turning ideas into
                reality through teamwork and creative problem-solving. 💡 Let's
                complete the puzzle together and create something extraordinary.
                🧩
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-target xl:col-span-1 xl:row-span-2">
          <div className="w-full h-full border border-gray-700 bg-gray-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/grid4.png"
              alt="Globe illustration"
              width={400}
              height={276}
              loading="lazy"
              decoding="async"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="text-[#afb0b6] text-base text-center">Contact Me</p>
              <div
                className="cursor-pointer flex justify-center items-center gap-2"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt={hasCopied ? "Copied" : "Copy email"}
                  width={20}
                  height={20}
                />
                <p className="lg:text-lg md:text-xl font-medium text-white">
                  shamilvilakkumadathil@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
