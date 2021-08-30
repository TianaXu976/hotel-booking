import React, { useContext } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";

// components
import { ReactComponent as Tick } from "../../../img/tick-inside-circle.svg";

// context
import { DialogContext, DIALOG } from "../../../context/dialog";
import {
  BookingRangeContext,
  BOOKING_ACTION,
} from "../../../context/bookingRange";

//lib
import Dialog from "@material-ui/core/Dialog";

const cx = classnames.bind(styles);

export default function SuccessDialog() {
  const { dialogState, dialogDispatch } = useContext(DialogContext);
  const { bookingRangeDispatch } = useContext(BookingRangeContext);


  const handleClose = () => {
    dialogDispatch({
      type: DIALOG.CLOSE,
    });
    bookingRangeDispatch({
      type: BOOKING_ACTION.BOOKING_DATE,
      payload: dialogState.info
    });
  }
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      className="success-dialog"
    >
      <div className={cx("title")}>
        <h2>預約成功</h2>
      </div>
      <div className={cx("divider")}>
        <div />
        <div />
        <div />
      </div>
      <Tick className={cx("tick")} />
      <button
        className={cx("back-btn")}
        onClick={handleClose}
      >
        回頁面
      </button>
    </Dialog>
  );
}
