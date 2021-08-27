import dayjs from "dayjs";

export default function dayCalculate(dateRange) {
  const nightsArr = [];
  const dateData = [];
  const startDay = dayjs(dateRange.startDate);
  const endDay = dayjs(dateRange.endDate);

  const days = endDay.diff(startDay, "day");

  for (let i = 0; i < days; i++) {
    nightsArr.push(startDay.add(i, "day"));
  }

  for (let i = 0; i <= days; i++) {
    dateData.push(startDay.add(i, "day").format("YYYY-MM-DD"));
  }

  const normalDay = nightsArr.filter(
    (ele) => ele.day() >= 0 && ele.day() < 5
  ).length;
  const holiday = nightsArr.length - normalDay;


  return { normalDay, holiday, dateData };
}
