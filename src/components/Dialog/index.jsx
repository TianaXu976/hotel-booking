import React from "react";
import PropTypes from "prop-types";

// components
import BookingDialog from "./BookingDialog";
import SuccessDialog from "./SuccessDialog";
import ErrorDialog from "./ErrorDialog";

Dialog.propTypes = {
  dialogState: PropTypes.object,
}

const components = {
  BookingDialog,
  SuccessDialog,
  ErrorDialog,
};

export default function Dialog({ dialogState }) {
  const { dialogName } = dialogState;

  return React.createElement(components[dialogName]);
}
