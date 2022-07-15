import dayjs from 'dayjs';
// @ts-ignore
import 'dayjs/locale/pt';
import calendar from 'dayjs/plugin/calendar';
import duration from 'dayjs/plugin/duration';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.locale('pt');
dayjs.extend(calendar);
dayjs.extend(duration);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);

export const Dayjs = dayjs;
