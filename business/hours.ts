import { toNumber } from 'lodash';
import { Dayjs } from '../Dayjs';

export const parseScheduleHour = (value: string) => {
  let hour = toNumber(value.slice(0, 2));
  let minute = toNumber(value.slice(2, 4));
  return [hour, minute];
};

export const formatScheduleHour = (date: Date) => Dayjs(date).format('HHmm');

export const dateWithScheduleHour = (date: Date, value: string) => {
  const [hour, minute] = parseScheduleHour(value);
  return Dayjs(date)
    .set('hour', hour)
    .set('minute', minute)
    .set('second', 0)
    .toDate();
};
