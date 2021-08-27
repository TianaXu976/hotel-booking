import React, { useState, useContext } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

// lib
import dayjs from "dayjs";
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import "./date-range.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

// context
import { DialogContext, DIALOG } from "../../../context/dialog";

const cx = classnames.bind(styles);

DatePicker.propTypes = {
  price: PropTypes.object,
  roomId: PropTypes.string,
  bookingDate: PropTypes.array,
};

export default function DatePicker({ price, roomId, bookingDate }) {
  const { dialogDispatch } = useContext(DialogContext);
  
  const [btnState, setBtnState] = useState(true);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);


  const dateRange = {
    startDate: date[0].startDate,
    endDate: date[0].endDate,
  };

  const handleClickOpen = () => {
    dialogDispatch({
      type: DIALOG.BOOKING,
      payload: { dateRange, price, roomId, bookingRange },
    });
  };

  const handleChange = (item) => {
    setDate([item.selection]);
    setBtnState(false);
  };

  const bookingRange = bookingDate.map((element) =>
    dayjs(element.date).toDate()
  );

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
