import { toNumber } from 'lodash';
import { Dayjs } from '../../Dayjs';
import { dateWithUpdatedTime } from '../../time';

export const parseScheduleHour = (value: string) => {
  let hour = toNumber(value.slice(0, 2));
  let minute = toNumber(value.slice(2, 4));
  return [hour, minute];
};

export const formatScheduleHour = (date: Date) => Dayjs(date).format('HHmm');

export const dateWithScheduleHour = (
  date: Date,
  value: string,
  offsetTimezone?: string
) => {
  const [hours, minutes] = parseScheduleHour(value);
  let day = Dayjs(dateWithUpdatedTime(date, { hours, minutes }));
  if (offsetTimezone) day = day.tz(offsetTimezone, true);
  return day.toDate();
};
