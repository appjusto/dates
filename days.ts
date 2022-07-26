import dayjs from 'dayjs';

export const getDayIndex = (date: Date | dayjs.Dayjs) => {
  // using 0 for mondays instead of sundays
  const day = date instanceof Date ? date.getDay() : date.weekday();
  return day === 0 ? 6 : day - 1;
};
