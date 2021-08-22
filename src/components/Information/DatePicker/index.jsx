import React, { useState, useEffect } from "react";
// import classnames from "classnames/bind";
// import styles from "./style.module.scss";
import "./date-range.scss";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

// const cx = classnames.bind(styles);

export default function DatePicker() {
  const [day, setDay] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const atChange = (item) => {
    setDay([item.selection]);
    console.log(item);
  };

  return (
    <DateRange
      onChange={atChange}
      moveRangeOnFirstSelection={false}
      ranges={day}
      scroll={{ enabled: true }}
      showDateDisplay={false}
      rangeColors={["#747474"]}
      showMonthAndYearPickers={false}
    />
  );
}
