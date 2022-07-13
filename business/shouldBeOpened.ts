import { BusinessSchedule } from '@appjusto/types';
import { isEmpty } from 'lodash';
import { Dayjs } from '../Dayjs';
import { dateWithScheduleHour } from './hours';
import { getDaySchedule } from './schedule';

export const shouldBeOpened = (schedule: BusinessSchedule, at?: Date) => {
  if (!schedule) return false;
  const date = Dayjs.tz(at ?? new Date(), 'America/Sao_Paulo');
  const daySchedule = getDaySchedule(schedule, date.toDate());
  if (!daySchedule) return false;
  return (
    (daySchedule.checked &&
      daySchedule.schedule.find((value) => {
        const from = Dayjs(dateWithScheduleHour(date.toDate(), value.from));
        const to = Dayjs(dateWithScheduleHour(date.toDate(), value.to));
        return date.isAfter(from) && date.isBefore(to);
      }) !== undefined) ||
    (daySchedule.checked && isEmpty(daySchedule.schedule))
  );
};
