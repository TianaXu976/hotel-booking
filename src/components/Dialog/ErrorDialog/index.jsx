import React, { useContext } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";

// context
import { DialogContext, DIALOG } from "../../../context/dialog";

// lib
import Dialog from "@material-ui/core/Dialog";

const cx = classnames.bind(styles);

export default function ErrorDialog() {
  const { dialogState, dialogDispatch } = useContext(DialogContext);
  return (
    <Dialog
      open={true}
      onClose={() =>
        dialogDispatch({
          type: DIALOG.CLOSE,
        })
      }
      aria-labelledby="form-dialog-title"
      className="error-dialog"
    >
      <div className={cx("title")}>
        <h2>預約失敗</h2>
      </div>
      <div className={cx("divider")}>
        <div />
        <div />
        <div />
      </div>
      <div className={cx("message")}>{dialogState.info}</div>
      <button
        className={cx("back-btn")}
        onClick={() =>
          dialogDispatch({
            type: DIALOG.CLOSE,
          })
        }
      >
        返回
      </button>
    </Dialog>
  );
}
