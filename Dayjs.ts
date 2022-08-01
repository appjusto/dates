import dayjs from 'dayjs';
// @ts-ignore
import 'dayjs/locale/pt';
import calendar from 'dayjs/plugin/calendar';
import duration from 'dayjs/plugin/duration';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import updateLocale from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(updateLocale);
dayjs.updateLocale('pt', {
  weekStart: 1,
  calendar: {
    sameDay: '[hoje]',
    nextDay: '[amanhã]',
    nextWeek: 'dddd',
    sameElse: 'DD/MM/YYYY',
  },
});
dayjs.locale('pt');
dayjs.extend(calendar);
dayjs.extend(duration);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(weekday);

export const Dayjs = dayjs;
