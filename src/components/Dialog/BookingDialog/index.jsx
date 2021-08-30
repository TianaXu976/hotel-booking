import React, {
  useState,
  useReducer,
  useRef,
  useContext,
  useMemo,
} from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

// lib
import dayjs from "dayjs";
import "./dialog.scss";
import Popover from "@material-ui/core/Popover";
import Dialog from "@material-ui/core/Dialog";
import Modal from "@material-ui/core/Modal";

// components
import CalendarDialog from "./CalendarDialog";
import Loading from "../../base/Loading";

// utils
import dayCalculate from "./dayCalculate";

// api
import { bookingRoom } from "../../../api";

// context
import { DialogContext, DIALOG } from "../../../context/dialog";

const cx = classnames.bind(styles);

BookingDialog.propTypes = {
  dateRange: PropTypes.object,
  price: PropTypes.object,
  roomId: PropTypes.string,
};

const DATE_TYPE = {
  INITIAL_DATE: "initialDate",
  START_DATE: "startDate",
  END_DATE: "endDate",
};

function typeReducer(dateValue, action) {
  switch (action.type) {
    case DATE_TYPE.START_DATE:
      if (dayjs(action.payload).diff(dateValue.endDate, "day") > -1) {
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

export default function BookingDialog() {
  const { dialogState, dialogDispatch } = useContext(DialogContext);
  const { dateRange, price, roomId } = dialogState.info;

  const nameRef = useRef();
  const phoneRef = useRef();

  const [anchorEl, setAnchorEl] = useState(null);

  const [loading, setLoading] = useState(false);

  const [openCalendar, setOpenCalendar] = useState({
    open: false,
    type: DATE_TYPE.START_DATE,
  });

  const [dateValue, typeDispatch] = useReducer(typeReducer, {
    startDate: dateRange.startDate,
    endDate:
      dayjs(dateRange.startDate).diff(dateRange.endDate) === 0
        ? dayjs(dateRange.startDate).add(1, "day").toDate()
        : dateRange.endDate,
  });

  const days = useMemo(() => {
    return dayCalculate(dateValue);
  }, [dateValue]);

  const [errorState, setErrorState] = useState({
    name: false,
    tel: false,
  });

  const onClickAction = (type, value) => {
    typeDispatch({
      type,
      payload: value,
    });
    setOpenCalendar({ ...openCalendar, open: false });
  };

  const totalPrice =
    days.normalDay * price.normalDay + days.holiday * price.holiday;

  const handelConfirm = () => {
    const name = nameRef.current.value.trim();
    const tel = phoneRef.current.value.trim();

    if (!name || !tel) {
      setErrorState({ name: Boolean(!name), tel: Boolean(!tel) });
      return;
    }

    const bookingData = {
      name,
      tel,
      date: days.dateData,
    };

    setLoading(true);

    bookingRoom(roomId, bookingData)
      .then((response) => {
        dialogDispatch({
          type: DIALOG.SUCCESS,
          payload: response.data.booking
        });
        
      })
      .catch((error) =>{
        dialogDispatch({
          type: DIALOG.ERROR,
          payload: error.response.data.message,
        })}
      );
  };

  

  if (loading) {
    return (
      <Modal open={true} className="loading">
        <div>
          <Loading />
        </div>
      </Modal>
    );
  }

  return (
    <Dialog
      open={true}
      onClose={() => dialogDispatch({ type: DIALOG.CLOSE })}
      aria-labelledby="form-dialog-title"
      className="booking-dialog"
    >
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
        <input
          className={cx({ error: errorState.name })}
          type="text"
          id="name"
          ref={nameRef}
          onChange={() => setErrorState({ ...errorState, name: false })}
        />
      </label>
      <label className={cx("booking-info")}>
        <span>電話</span>
        <input
          className={cx({ error: errorState.tel })}
          type="text"
          id="phone"
          ref={phoneRef}
          onChange={() => setErrorState({ ...errorState, tel: false })}
        />
      </label>
      <label className={cx("booking-info")}>
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
          <span>{days.normalDay}夜</span>
        </div>
        <div>
          <span>假日時段</span>
          <span>{days.holiday}夜</span>
        </div>
      </div>
      <div className={cx("total-price")}>
        <span>NT. {totalPrice}</span>
      </div>
      <div className={cx("booking-btn")}>
        <button
          className={cx("cancel")}
          onClick={() => dialogDispatch({ type: DIALOG.CLOSE })}
        >
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
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transitionDuration={100}
      >
        <CalendarDialog
          dateValue={dateValue}
          type={openCalendar.type}
          onClickAction={onClickAction}
        />
      </Popover>
    </Dialog>
  );
}
