"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextOpeningDates = void 0;
const Dayjs_1 = require("../../Dayjs");
const hours_1 = require("./hours");
const getNextOpeningDates = (schedule, date) => schedule.reduce((result, { checked, schedule: daySchedule }, i) => {
    if (!checked)
        return result;
    const dates = daySchedule
        .map(({ from }) => {
        return (0, Dayjs_1.Dayjs)((0, hours_1.dateWithScheduleHour)(date, from, 'America/Sao_Paulo'))
            .add(i, 'day')
            .toDate();
    })
        .filter((d) => (0, Dayjs_1.Dayjs)(d).isAfter(date));
    return [...result, ...dates];
}, []);
exports.getNextOpeningDates = getNextOpeningDates;
//# sourceMappingURL=getNextOpeningDates.js.map