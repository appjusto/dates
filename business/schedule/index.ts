import { BusinessSchedule } from '@appjusto/types';
import { getDayIndex } from '../../days';

export const getDaySchedule = (schedule: BusinessSchedule, date: Date) => {
  return schedule[getDayIndex(date)];
};

export const scheduleFromDate = (schedule: BusinessSchedule, date: Date) => {
  const index = getDayIndex(date);
  return [...schedule.slice(index, 7), ...schedule.slice(0, index)];
};
