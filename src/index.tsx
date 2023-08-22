import React from "react";
import ReactDOM from "react-dom/client";
import "./globalStyles.css";

import { BrowserRouter } from "react-router-dom";
import Application from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </BrowserRouter>
);
