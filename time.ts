import dayjs from 'dayjs';
import { Dayjs } from './Dayjs';

interface DateWithUpdatedTimeOptions {
  hours?: number;
  minutes?: number;
}

export const dateWithUpdatedTime = (
  date: Date | dayjs.Dayjs,
  { hours, minutes }: DateWithUpdatedTimeOptions
) => {
  let day = Dayjs(date).set('second', 0).set('millisecond', 0);
  if (hours !== undefined) day = day.set('hours', hours);
  if (minutes !== undefined) day = day.set('minute', minutes);
  return day.toDate();
};
