import React from "react";
import { CircularProgress } from "@material-ui/core";
import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core/styles";
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles({
  root:{
    width: '40px'
  }
});

const theme = createTheme({
  palette: {
    primary: {
      main: grey[300],
    },
  },
})


export default function Loading() {
  
  

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CircularProgress size={30}/>
    </ThemeProvider>
  );
}
