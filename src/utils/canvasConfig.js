export const canvasGl = {
  powerPreference: "high-performance",
  antialias: true,
};

export function getCanvasGl(isMobile = false, transparent = false) {
  return {
    powerPreference: "high-performance",
    antialias: !isMobile,
    alpha: transparent,
  };
}

export function getCanvasDpr() {
  if (typeof window === "undefined") return [1, 2];
  return window.innerWidth < 768 ? [1, 1.25] : [1, 2];
}