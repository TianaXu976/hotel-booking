import React, { useState, useEffect } from "react";

import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import "./calendar.scss"

export default function CalendarDialog({ dateValue, type, onClickAction }) {
  const handleChange = (item) => {
    onClickAction(type, item);
  };

  


  const disableDay =
    type === "endDate" ? addDays(dateValue.startDate, 1) : addDays(new Date(), 0);


  return (
    <Calendar
      onChange={handleChange}
      scroll={{ enabled: true }}
      showDateDisplay={false}
      color="#747474"
      showMonthAndYearPickers={false}
      date={dateValue[type]}
      minDate={disableDay}

    />
  );
}
