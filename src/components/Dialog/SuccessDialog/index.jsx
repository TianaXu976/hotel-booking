import React from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";


import Dialog from "@material-ui/core/Dialog";
import { ReactComponent as Tick}  from "../../../img/tick-inside-circle.svg"

const cx = classnames.bind(styles);

export default function SuccessDialog() {
  return (
    <Dialog
      open={true}
      // onClose={() => setOpen(false)}
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
      <Tick className={cx("tick")}/>
      <button className={cx("back-btn")}>回頁面</button>
    </Dialog>
  );
}
