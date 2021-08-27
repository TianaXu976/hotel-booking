import React from "react";
import "./calendar.scss";
import PropTypes from "prop-types";

// lib
import { addDays } from "date-fns";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

CalendarDialog.propTypes = {
  dateValue: PropTypes.object,
  type: PropTypes.string,
  onClickAction: PropTypes.func,
  bookingRange: PropTypes.array,
};

export default function CalendarDialog(props) {
  const { dateValue, type, onClickAction, bookingRange } = props;
  
  const handleChange = (item) => {
  onClickAction(type, item);
  };

  const disableDay =
    type === "endDate"
      ? addDays(dateValue.startDate, 1)
      : addDays(new Date(), 1);


  return (
    <Calendar
      onChange={handleChange}
      scroll={{ enabled: true }}
      showDateDisplay={false}
      color="#747474"
      showMonthAndYearPickers={false}
      date={dateValue[type]}
      minDate={disableDay}
      disabledDates={bookingRange}
    />
  );
}
