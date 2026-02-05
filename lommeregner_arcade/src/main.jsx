import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>

);


export const themeColors = [
  "#232B2B", // back-sort
  "#1c2841", // blå
  "#f0f0f0", // hvid
  "#ffb3ba", // pastelfarve1
  "#ffdfba", // pastelfarve2
  "#ffffba", // pastelfarve3
  "#baffc9", // pastelfarve4
  "#bae1ff"  // pastelfarve5
];