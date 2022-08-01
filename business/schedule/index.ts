import { BusinessSchedule } from '@appjusto/types';
import dayjs from 'dayjs';
import { constant, flatten, times } from 'lodash';
import { getDayIndex } from '../../days';

export const getDaySchedule = (
  schedule: BusinessSchedule,
  date: Date | dayjs.Dayjs
) => {
  return schedule[getDayIndex(date)];
};

export const scheduleFromDate = (
  schedule: BusinessSchedule,
  date: Date | dayjs.Dayjs,
  weeks: number = 1
) => {
  const index = getDayIndex(date);
  const fromDate = [...schedule.slice(index, 7), ...schedule.slice(0, index)];
  if (weeks === 1) return fromDate;
  return [...flatten(times(weeks, constant(fromDate)))];
};
