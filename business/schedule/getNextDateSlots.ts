import { BusinessSchedule } from '@appjusto/types';
import { Dayjs } from '../../Dayjs';
import { dateWithScheduleHour } from './hours';

export const getNextDateSlots = (
  schedule: BusinessSchedule,
  date: Date,
  interval: number = 30,
  limit: number = Number.MAX_SAFE_INTEGER
) => {
  let total = 0;
  return schedule.reduce<Date[][]>(
    (result, { checked, schedule: daySchedule }, i) => {
      if (!checked) return result;
      const dates = daySchedule.reduce((r, { from, to }) => {
        if (total >= limit) return r;
        const f = Dayjs(
          dateWithScheduleHour(date, from, 'America/Sao_Paulo')
        ).add(i, 'day');
        const t = Dayjs(
          dateWithScheduleHour(date, to, 'America/Sao_Paulo')
        ).add(i, 'day');
        const r2: Date[] = [];
        let n = f.clone().add(interval, 'minute');
        while (n.isBefore(t)) {
          if (total >= limit) break;
          if (n.diff(date, 'minute') >= interval) {
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
