import React, { useReducer, createContext } from "react";
import dayjs from "dayjs";

export const BookingRangeContext = createContext();

const initData = [];

export const BOOKING_ACTION = {
  INIT_DATA: "dateFromApi",
  BOOKING_DATE: "bookingDate",
};

function dateFormat(dateRange) {
  return dateRange.map((element) => dayjs(element.date).toDate());
}


function reducer(bookingRange, action) {
  switch (action.type) {
    case BOOKING_ACTION.INIT_DATA:
      return dateFormat(action.payload);

    case BOOKING_ACTION.BOOKING_DATE:
      return [...bookingRange, ...dateFormat(action.payload)]

    default:
      return bookingRange;
  }
}

export default function BookingRangeProvider({ children }) {
  const [bookingRange, bookingRangeDispatch] = useReducer(reducer, initData);

  return (
    <BookingRangeContext.Provider
      value={{ bookingRange, bookingRangeDispatch }}
    >
      {children}
    </BookingRangeContext.Provider>
  );
}
