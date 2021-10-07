import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from '@material-ui/core';
import App from "./App";

import './services/firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CssBaseline />
  </React.StrictMode>,
  document.getElementById("root")
);
