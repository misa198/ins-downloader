import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import GlobalStyled from "./shared/styles/globalStyled";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
