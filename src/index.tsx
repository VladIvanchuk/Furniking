import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/index.scss";
import "modern-normalize";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
