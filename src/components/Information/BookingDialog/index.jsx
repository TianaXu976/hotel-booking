import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";

import "./dialog.scss";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const cx = classnames.bind(styles);

export default function BookingDialog({open, setOpen}) {


  const handleClose = () => {
    setOpen(false);
  };

  if(!open) {
    return null
  }

  return(

    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">預約時段</DialogTitle>
    <div className={cx("divider")}>
            <div />
            <div />
            <div />
    </div>
    <DialogContent>
      <DialogContentText>
        姓名
      </DialogContentText>
      <TextField
        // autoFocus
        margin="dense"
        id="name"
        // type="email"
      />
    </DialogContent>
    <DialogContent>
      <DialogContentText>
        電話
      </DialogContentText>
      <TextField
        // autoFocus
        margin="dense"
        id="phone"
        // type="email"
      />
    </DialogContent>
    {/* <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={handleClose} color="primary">
        Subscribe
      </Button>
    </DialogActions> */}
  </Dialog>
  )
}