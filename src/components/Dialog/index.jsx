import React from "react";
import BookingDialog from "./BookingDialog";
import SuccessDialog from "./SuccessDialog";

const components = {
  BookingDialog,
  SuccessDialog,
};

export default function Dialog({ dialogState }) {
  const {dialogName } = dialogState

  return React.createElement(components[dialogName]);
}
