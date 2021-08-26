import React, { createContext, useReducer } from "react";

export const DialogContext = createContext();

const initState = {
  state: false,
  dialogName: "",
  info: {},
};

export const DIALOG = {
  BOOKING: "BookingDialog",
  CLOSE: "CloseDialog"
};

function reducer(dialogState, action) {
  switch (action.type) {
    case DIALOG.BOOKING:
      return {
        state: true,
        dialogName: DIALOG.BOOKING,
        info: action.payload,
      };

      case DIALOG.CLOSE:
        return {
          ...dialogState,
          state: false,
        };

    default:
      return dialogState;
  }
}

export default function DialogProvider({ children }) {
  const [dialogState, dialogDispatch] = useReducer(reducer, initState);

  return (
    <DialogContext.Provider value={{ dialogState, dialogDispatch }}>
      {children}
    </DialogContext.Provider>
  );
}
