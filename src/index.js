import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DialogProvider from "./context/dialog";

import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme,
} from "@material-ui/core/styles";

const theme = unstable_createMuiStrictModeTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DialogProvider>
        <App />
      </DialogProvider>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
