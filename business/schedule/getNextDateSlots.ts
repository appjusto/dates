import { Business } from '@appjusto/types';
import { scheduleFromDate } from '.';
import { Dayjs } from '../../Dayjs';
import { dateWithScheduleHour } from './hours';

export const getNextDateSlots = (
  business: Business,
  reference: Date,
  interval: number = 30,
  weeks: number = 1,
  limit: number = 1000000
) => {
  const schedule = business.schedules
    ? scheduleFromDate(business.schedules, reference, weeks)
    : [];
  const minHours = business.minHoursForScheduledOrders ?? 0;
  let total = 0;
  return schedule.reduce<Date[][]>(
    (result, { checked, schedule: daySchedule }, i) => {
      if (!checked) return result;
      const dates = daySchedule.reduce((r, { from, to }) => {
        if (total >= limit) return r;
        const f = Dayjs(
          dateWithScheduleHour(reference, from, 'America/Sao_Paulo')
        ).add(i, 'day');
        const t = Dayjs(
          dateWithScheduleHour(reference, to, 'America/Sao_Paulo')
        ).add(i, 'day');
        const r2: Date[] = [];
        let n = business.averageCookingTime
          ? f.clone().add(business.averageCookingTime, 'second')
          : f.clone().add(interval, 'minute');
        while (n.isBefore(t)) {
          if (total >= limit) break;
          const diff = n.diff(reference, 'minute');
          if (diff > minHours * 60) {
            total++;
            r2.push(n.toDate());
          }
          n = n.clone().add(interval, 'minute');
        }
        return [...r, ...r2];
      }, [] as Date[]);
      return [...result, dates];
    },
    []
  );
};
