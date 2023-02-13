import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { App } from "./App";
import { GlobalStyle } from "./style/globalstyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App>
        <ToastContainer
          position="top-center"
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
