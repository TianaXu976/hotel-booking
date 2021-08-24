import React, { useState, useReducer, useRef } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
import dayjs from "dayjs";

import "./dialog.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Popover from '@material-ui/core/Popover';
import PropTypes from "prop-types";
import CalendarDialog from "../CalendarDialog";
import dayCalculate from "./dayCalculate";

const cx = classnames.bind(styles);

BookingDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  date: PropTypes.any,
};

const DATE_TYPE = {
  START_DATE: "startDate",
  END_DATE: "endDate",
};

export default function BookingDialog({ setOpen, dateRange, price }) {
  const nameRef = useRef();
  const [anchorEl, setAnchorEl] = useState(null);

  const [openCalendar, setOpenCalendar] = useState({
    open: false,
    type: DATE_TYPE.START_DATE,
  });

  const [dateValue, dispatch] = useReducer(reducer, {
    startDate: dateRange[0].startDate,
    endDate: dateRange[0].endDate,
  });

  function reducer(dateValue, action) {
    switch (action.type) {
      case DATE_TYPE.START_DATE:
        if (dayjs(action.payload).diff(dateValue.endDate, "day") >= 0) {
          return {
            startDate: action.payload,
            endDate: dayjs(action.payload).add(1, "day").toDate(),
          };
        } else {
          return { ...dateValue, startDate: action.payload };
        }

      case DATE_TYPE.END_DATE:
        return { ...dateValue, endDate: action.payload };

      default:
        return dateValue;
    }
  }

  const onClickAction = (type, value) => {
    dispatch({
      type,
      payload: value,
    });
    setOpenCalendar({ ...openCalendar, open: false });
  };


  const handelConfirm = () => {
    const nameValue = nameRef.current.value.trim();
  };

  const totalPrice =
    dayCalculate(dateValue).normalDay * price.normalDay +
    dayCalculate(dateValue).holiday * price.holiday;

  return (
    <Dialog
      open={true}
      onClose={() => setOpen(false)}
      aria-labelledby="form-dialog-title"
      className="booking-dialog"
    >
      {/* <DialogTitle id="form-dialog-title" >預約時段</DialogTitle> */}
      <div className={cx("title")}>
        <h2>預約時段</h2>
      </div>
      <div className={cx("divider")}>
        <div />
        <div />
        <div />
      </div>
      <label className={cx("booking-info")}>
        <span>姓名</span>
        <input type="text" id="name" required ref={nameRef} />
        {/* <TextField
          error
          id="name"
          // label="Error"
          // defaultValue="Hello World"
          // helperText= "此欄位必填"
          variant="outlined" 
          required={true}
          inputRef={nameRef}
        /> */}
      </label>
      <label className={cx("booking-info")}>
        <span>電話</span>
        <input type="text" id="phone" />
      </label>
      <label className={cx("booking-info")} >
        <span>預約起訖</span>
        <div className={cx("time-btn")}>
          <input
            type="button"
            id="startDate"
            defaultValue={dayjs(dateValue.startDate).format("YYYY/MM/DD")}
            onClick={(e) => {
              setOpenCalendar({ open: true, type: DATE_TYPE.START_DATE });
              setAnchorEl(e.currentTarget);
            }}
          />
          ~
          <input
            type="button"
            id="endDate"
            defaultValue={dayjs(dateValue.endDate).format("YYYY/MM/DD")}
            onClick={(e) => {
              setOpenCalendar({ open: true, type: DATE_TYPE.END_DATE });
              setAnchorEl(e.currentTarget);
            }}
          />
        </div>
      </label>
      <div className={cx("date-detail")}>
        <div>
          <span>平日時段</span>
          <span>{dayCalculate(dateValue).normalDay}夜</span>
        </div>
        <div>
          <span>假日時段</span>
          <span>{dayCalculate(dateValue).holiday}夜</span>
        </div>
      </div>
      <div className={cx("total-price")}>
        <span>NT. {totalPrice}</span>
      </div>
      <div className={cx("booking-btn")}>
        <button className={cx("cancel")} onClick={() => setOpen(false)}>
          取消
        </button>
        <button className={cx("confirm")} onClick={handelConfirm}>
          確定預定
        </button>
      </div>

      <Popover

      anchorEl={anchorEl}
        open={openCalendar.open}
        onClose={() => setOpenCalendar({ ...openCalendar, open: false })}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transitionDuration={100}
  
    
 >
   <CalendarDialog
        dateValue={dateValue}
        type={openCalendar.type}
        onClickAction={onClickAction}
      />

      </Popover>

    
      {/* <Dialog
        open={openCalendar.open}
        onClose={() => setOpenCalendar({ ...openCalendar, open: false })}
        aria-labelledby="form-dialog-title"
        className="calendar-dialog"
        fullScreen={false}
      >
      <CalendarDialog
        dateValue={dateValue}
        type={openCalendar.type}
        onClickAction={onClickAction}
      />
      </Dialog> */}
    </Dialog>
  );
}
