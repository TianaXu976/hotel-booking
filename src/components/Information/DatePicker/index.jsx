import React, { useState, useContext } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";

import dayjs from "dayjs";
import { addDays } from "date-fns";
import "./date-range.scss";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DialogContext, DIALOG } from "../../../context/dialog";

const cx = classnames.bind(styles);

export default function DatePicker({ price, roomId, bookingDate }) {
  const [ btnState , setBtnState] = useState(true)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const { dialogDispatch } = useContext(DialogContext);

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

  const bookingRange = bookingDate.map((element) => (dayjs(element.date).toDate()));
  // console.log(bookingRange)
  

  return (
    <div className={cx("date-picker")}>
      <DateRange
        onChange={handleChange}
        // moveRangeOnFirstSelection={false}
        ranges={date}
        scroll={{ enabled: true }}
        showDateDisplay={false}
        rangeColors={["#747474"]}
        showMonthAndYearPickers={false}
        minDate={addDays(new Date(), 1)}
        disabledDates={bookingRange}

      />

      <button className={cx("booking-btn",{disabled: btnState})} onClick={handleClickOpen} disabled={btnState}>
        預約時段
      </button>
    </div>
  );
}
