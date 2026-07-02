export const canvasGl = {
  powerPreference: "high-performance",
  antialias: true,
};

export function getCanvasDpr() {
  if (typeof window === "undefined") return [1, 2];
  return window.innerWidth < 768 ? [1, 1.5] : [1, 2];
}
