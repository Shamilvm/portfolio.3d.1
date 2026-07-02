import { useState } from "react";

const POSTER_SOURCES = ["/assets/hero-poster.png", "/assets/grid3.png"];

const HeroPoster = () => {
  const [sourceIndex, setSourceIndex] = useState(0);

  const handleError = () => {
    setSourceIndex((current) => {
      if (current < POSTER_SOURCES.length - 1) {
        return current + 1;
      }
      return current;
    });
  };

  const showImage = sourceIndex < POSTER_SOURCES.length;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(55,55,75,0.4),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,15,20,0.6),#010103)]" />
      {showImage && (
        <img
          src={POSTER_SOURCES[sourceIndex]}
          alt=""
          width={1200}
          height={800}
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          onError={handleError}
        />
      )}
    </div>
  );
};

export default HeroPoster;
