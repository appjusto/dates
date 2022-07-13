import { Dayjs } from './Dayjs';

interface DateWithUpdatedTimeOptions {
  hours?: number;
  minutes?: number;
}

export const dateWithUpdatedTime = (
  date: Date,
  { hours, minutes }: DateWithUpdatedTimeOptions
) => {
  let day = Dayjs(date).set('second', 0).set('millisecond', 0);
  if (hours) day = day.set('minute', hours);
  if (minutes) day = day.set('minute', minutes);
  return day.toDate();
};
