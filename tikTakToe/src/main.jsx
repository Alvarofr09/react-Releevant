import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "./index.css";

const container = createRoot(document.querySelector("#root"));

container.render(<App />);
