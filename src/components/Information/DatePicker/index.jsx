import React, { useState, useContext } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
import BookingDialog from "../BookingDialog";

import "./date-range.scss";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DialogContext, DIALOG } from "../../../context/dialog";

const cx = classnames.bind(styles);

export default function DatePicker({ price }) {
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
      payload: { dateRange, price },
    });
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

      <button className={cx("booking-btn")} onClick={handleClickOpen}>
        預約時段
      </button>
    </div>
  );
}
