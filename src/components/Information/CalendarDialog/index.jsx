import React, { useState, useEffect } from "react";

import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function CalendarDialog({ dateValue, type, onClickAction}) {
  const handleChange = (item) => {
    onClickAction(type ,item);
  };

  return (
    <Calendar
      onChange={handleChange}
      scroll={{ enabled: true }}
      showDateDisplay={false}
      color="#747474"
      showMonthAndYearPickers={false}
      date={dateValue[type]}
    />
  );
}
