import dayjs from 'dayjs';
import { Dayjs } from './Dayjs';

export const getDayIndex = (date: Date | dayjs.Dayjs) => {
  // using 0 for mondays instead of sundays
  const day = date instanceof Date ? date.getDay() : date.weekday();
  return day === 0 ? 6 : day - 1;
};

export const getStartOfTheMonth = (
  date: Date = new Date(),
  timezone: string = 'America/Sao_Paulo'
) => {
  const d = Dayjs(date).tz(timezone).date(1);
  return Dayjs.tz(d.format('YYYY-MM-DD'), timezone).toDate();
};

export const getStartOfTheWeek = (
  date: Date = new Date(),
  timezone: string = 'America/Sao_Paulo'
) => {
  const d = Dayjs(date).tz(timezone);
  return Dayjs.tz(
    d.subtract(getDayIndex(d), 'day').format('YYYY-MM-DD'),
    timezone
  ).toDate();
};
