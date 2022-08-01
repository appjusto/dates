import { BusinessSchedule } from '@appjusto/types';
import dayjs from 'dayjs';
import { getDayIndex } from '../../days';

export const getDaySchedule = (
  schedule: BusinessSchedule,
  date: Date | dayjs.Dayjs
) => {
  return schedule[getDayIndex(date)];
};

export const scheduleFromDate = (
  schedule: BusinessSchedule,
  date: Date | dayjs.Dayjs
) => {
  const index = getDayIndex(date);
  return [...schedule.slice(index, 7), ...schedule.slice(0, index)];
};
