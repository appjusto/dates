import dayjs from 'dayjs';
import { Dayjs } from './Dayjs';

export const getDayIndex = (date: Date | dayjs.Dayjs) => Dayjs(date).weekday();
