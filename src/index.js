import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Kommentera ut Strict mode vid presentation, skapar dubbel iteration i useEffect sedan react 18.
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
