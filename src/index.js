import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import reportWebVitals from "./reportWebVitals";

// components
import App from "./App";

// context
import DialogProvider from "./context/dialog";
import BookingRangeProvider from "./context/bookingRange";

// lib
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme,
} from "@material-ui/core/styles";

const theme = unstable_createMuiStrictModeTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BookingRangeProvider>
        <DialogProvider>
          <App />
        </DialogProvider>
      </BookingRangeProvider>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
