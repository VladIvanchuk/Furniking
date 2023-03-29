import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/global.scss";
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
