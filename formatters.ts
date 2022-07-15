import { Dayjs } from './Dayjs';

type DateFormatPattern = 'datetime' | 'time' | 'shorttime';
const getPattern = (name: DateFormatPattern) => {
  if (name === 'datetime') return 'DD/MM/YYYY HH:mm:ss';
  if (name === 'time') return 'HH:mm:ss';
  if (name === 'shorttime') return 'HH:mm';
  throw new Error('Wrong pattern');
};

export const formatDate = (
  date: Date,
  pattern: DateFormatPattern = 'datetime'
) => Dayjs(date).format(getPattern(pattern));

export const formatRelativeDate = (date: Date, reference: Date) =>
  Dayjs(date)
    .calendar(reference, {
      sameDay: '[hoje]',
      nextDay: '[amanhã]',
      nextWeek: 'dddd',
    })
    .toLocaleLowerCase();
