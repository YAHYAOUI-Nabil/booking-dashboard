import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const Root = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <React.Suspense fallback={null}>
          <App />
        </React.Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default Root;
