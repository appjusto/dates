import { BusinessSchedule } from '@appjusto/types';
import { isEmpty } from 'lodash';
import { getDaySchedule } from '.';
import { Dayjs } from '../../Dayjs';
import { dateWithScheduleHour } from './hours';

export const shouldBeOpened = (
  schedule: BusinessSchedule,
  at: Date = new Date(),
  tz: string = 'America/Sao_Paulo'
) => {
  if (!schedule) return false;
  const daySchedule = getDaySchedule(schedule, at);
  if (!daySchedule || !daySchedule.checked) return false;
  if (isEmpty(daySchedule.schedule)) return true;
  return (
    daySchedule.schedule.find((value) => {
      const from = Dayjs(dateWithScheduleHour(at, value.from)).tz(tz, true);
      const to = Dayjs(dateWithScheduleHour(at, value.to)).tz(tz, true);
      const date = Dayjs.tz(at);
      console.log(
        'shouldBeOpened',
        date.toISOString(),
        from.toISOString(),
        to.toISOString(),
        date.isSameOrAfter(from),
        date.isSameOrBefore(to)
      );
      return date.isSameOrAfter(from) && date.isSameOrBefore(to);
    }) !== undefined
  );
};
