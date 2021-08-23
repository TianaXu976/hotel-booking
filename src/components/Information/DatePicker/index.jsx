import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
import BookingDialog from "../BookingDialog";

import "./date-range.scss";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file


const cx = classnames.bind(styles);

export default function DatePicker({price}) {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleChange = (item) => {
    setDate([item.selection]);
  };


  return (
    <div className={cx("date-picker")}>
      <DateRange
        onChange={handleChange}
        moveRangeOnFirstSelection={false}
        ranges={date}
        scroll={{ enabled: true }}
        showDateDisplay={false}
        rangeColors={["#747474"]}
        showMonthAndYearPickers={false}
      />

      <button className={cx('booking-btn')} onClick={handleClickOpen}>
        預約時段
      </button>

      {open && <BookingDialog setOpen={setOpen} dateRange={date} price={price}/>}

      
 
    </div>
  );
}
