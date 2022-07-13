import { BusinessSchedule } from '@appjusto/types';

const getDayIndex = (date: Date) => {
  const day = date.getDay();
  // we use 0 for mondays instead of sundays;
  return day === 0 ? 6 : day - 1;
};

export const getDaySchedule = (schedule: BusinessSchedule, date: Date) => {
  return schedule[getDayIndex(date)];
};

export const scheduleFromDate = (schedule: BusinessSchedule, date: Date) => {
  const index = getDayIndex(date);
  return [...schedule.slice(index, 7), ...schedule.slice(0, index)];
};

// export const dayScheduleSlots = (
//   daySchedule: ScheduleObject,
//   interval: number = 60
// ) => {
//   const result: string[] = [];
//     daySchedule.schedule.forEach(({ from, to }) => {});

// };
