import React, { useState, useContext, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

// lib

import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import "./date-range.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

// context
import { DialogContext, DIALOG } from "../../../context/dialog";
import {
  BookingRangeContext,
  BOOKING_ACTION,
} from "../../../context/bookingRange";

const cx = classnames.bind(styles);

DatePicker.propTypes = {
  price: PropTypes.object,
  roomId: PropTypes.string,
  booking: PropTypes.array,
};

const initDate = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

export default function DatePicker({ price, roomId, booking }) {
  const { dialogDispatch } = useContext(DialogContext);
  const { bookingRange, bookingRangeDispatch } =
    useContext(BookingRangeContext);

  const [btnState, setBtnState] = useState(true);
  const [date, setDate] = useState([initDate]);

  const dateRange = {
    startDate: date[0].startDate,
    endDate: date[0].endDate,
  };

  const handleClickOpen = () => {
    dialogDispatch({
      type: DIALOG.BOOKING,
      payload: { dateRange, price, roomId },
    });
  };

  const handleChange = (item) => {
    setDate([item.selection]);
    setBtnState(false);
  };

  useEffect(() => {
    bookingRangeDispatch({
      type: BOOKING_ACTION.INIT_DATA,
      payload: booking,
    });
  }, [booking, bookingRangeDispatch]);

  useEffect(() => {
    setBtnState(true);
    setDate([initDate]);
  }, [bookingRange]);

  return (
    <div className={cx("date-picker")}>
      <DateRange
        onChange={handleChange}
        ranges={date}
        scroll={{ enabled: true }}
        showDateDisplay={false}
        rangeColors={["#747474"]}
        showMonthAndYearPickers={false}
        minDate={addDays(new Date(), 1)}
        disabledDates={bookingRange}
      />

      <button
        className={cx("booking-btn", { disabled: btnState })}
        onClick={handleClickOpen}
        disabled={btnState}
      >
        預約時段
      </button>
    </div>
  );
}
