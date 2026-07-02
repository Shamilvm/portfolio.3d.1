import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const loadBuyMeACoffee = () => {
  const script = document.createElement("script");
  script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
  script.setAttribute("data-name", "BMC-Widget");
  script.setAttribute("data-cfasync", "false");
  script.setAttribute("data-id", "shamilvm");
  script.setAttribute(
    "data-description",
    "Support me on Buy me a coffee!"
  );
  script.setAttribute("data-color", "#BD5FFF");
  script.setAttribute("data-position", "Right");
  script.setAttribute("data-x_margin", "18");
  script.setAttribute("data-y_margin", "18");
  script.async = true;
  document.body.appendChild(script);
};

if ("requestIdleCallback" in window) {
  requestIdleCallback(loadBuyMeACoffee, { timeout: 3000 });
} else {
  window.addEventListener("load", loadBuyMeACoffee, { once: true });
}
