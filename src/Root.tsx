import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { AppContextProvider } from "./app/contexts/AppContext";

const Root = () => {
  return (
    <AppContextProvider>
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <React.Suspense fallback={null}>
              <App />
            </React.Suspense>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    </AppContextProvider>
  );
};

export default Root;
