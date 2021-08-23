import dayjs from "dayjs";

export default function dayCalculate(dateRange){
  const dateArr = []
  const startDay = dayjs(dateRange.startDate)
  const endDay = dayjs(dateRange.endDate)


  const days = endDay.diff(startDay, 'day') 
  
  for(var i = 0 ; i < days ; i++){
    dateArr.push(startDay.add(i, 'day'))
  }

  const normalDay = dateArr.filter((ele) => ele.day() >= 0 && ele.day() < 5).length;
  const holiday = dateArr.length - normalDay;

  return {normalDay, holiday}
  
};