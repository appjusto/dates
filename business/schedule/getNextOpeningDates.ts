import { BusinessSchedule } from '@appjusto/types';
import { Dayjs } from '../../Dayjs';
import { dateWithScheduleHour } from './hours';

export const getNextOpeningDates = (schedule: BusinessSchedule, date: Date) =>
  schedule.reduce<Date[]>((result, { checked, schedule: daySchedule }, i) => {
    if (!checked) return result;
    const dates = daySchedule
      .map(({ from }) => {
        return Dayjs(dateWithScheduleHour(date, from, 'America/Sao_Paulo'))
          .add(i, 'day')
          .toDate();
      })
      .filter((d) => Dayjs(d).isAfter(date));
    return [...result, ...dates];
  }, []);
