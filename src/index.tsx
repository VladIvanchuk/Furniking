import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/index.scss";
import "modern-normalize";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Routers";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </React.StrictMode>
);
