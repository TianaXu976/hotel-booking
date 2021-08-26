import React from "react";
import BookingDialog from "./BookingDialog";
import SuccessDialog from "./SuccessDialog";
import ErrorDialog from "./ErrorDialog";

const components = {
  BookingDialog,
  SuccessDialog,
  ErrorDialog
  
};

export default function Dialog({ dialogState }) {
  const {dialogName } = dialogState

  return React.createElement(components[dialogName]);
}
