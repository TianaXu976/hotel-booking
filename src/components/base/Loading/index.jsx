import React from "react";

// lib
import { CircularProgress } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[300],
    },
  },
});

export default function Loading() {
  return (
    <ThemeProvider theme={theme}>
      <CircularProgress size={30} />
    </ThemeProvider>
  );
}