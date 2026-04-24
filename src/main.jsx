import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/700.css";
import "@fontsource/cinzel/800.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter } from "react-router-dom";

// reverted to previous stage

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/carrent/">
    <App />
  </BrowserRouter>,
);
