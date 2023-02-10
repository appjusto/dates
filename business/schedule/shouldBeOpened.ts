import { BusinessSchedule } from '@appjusto/types';
import { isEmpty } from 'lodash';
import { getDaySchedule } from '.';
import { Dayjs } from '../../Dayjs';
import { dateWithUpdatedTime } from '../../time';
import { parseScheduleHour } from './hours';

export const shouldBeOpened = (
  schedule: BusinessSchedule,
  at: Date = new Date(),
  tz: string = 'America/Sao_Paulo'
) => {
  if (!schedule) return false;
  const date = Dayjs.tz(at, tz);
  const daySchedule = getDaySchedule(schedule, date);
  if (!daySchedule || !daySchedule.checked) return false;
  if (isEmpty(daySchedule.schedule)) return true;
  return (
    daySchedule.schedule.find((value) => {
      const from = dateWithUpdatedTime(date, {
        hours: parseScheduleHour(value.from)[0],
        minutes: parseScheduleHour(value.from)[1],
      });
      const to = dateWithUpdatedTime(date, {
        hours: parseScheduleHour(value.to)[0],
        minutes: parseScheduleHour(value.to)[1],
      });
      return date.isSameOrAfter(from) && date.isSameOrBefore(to);
    }) !== undefined
  );
};
