import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@mui/material/CssBaseline';
import App from "./App";

import './services/firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CssBaseline />
  </React.StrictMode>,
  document.getElementById("root")
);
