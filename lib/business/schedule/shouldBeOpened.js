"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldBeOpened = void 0;
const lodash_1 = require("lodash");
const _1 = require(".");
const Dayjs_1 = require("../../Dayjs");
const time_1 = require("../../time");
const hours_1 = require("./hours");
const shouldBeOpened = (schedule, at = new Date(), tz = 'America/Sao_Paulo') => {
    if (!schedule)
        return false;
    const date = Dayjs_1.Dayjs.tz(at, tz);
    const daySchedule = (0, _1.getDaySchedule)(schedule, date);
    if (!daySchedule || !daySchedule.checked)
        return false;
    if ((0, lodash_1.isEmpty)(daySchedule.schedule))
        return true;
    return (daySchedule.schedule.find((value) => {
        const from = (0, time_1.dateWithUpdatedTime)(date, {
            hours: (0, hours_1.parseScheduleHour)(value.from)[0],
            minutes: (0, hours_1.parseScheduleHour)(value.from)[1],
        });
        const to = (0, time_1.dateWithUpdatedTime)(date, {
            hours: (0, hours_1.parseScheduleHour)(value.to)[0],
            minutes: (0, hours_1.parseScheduleHour)(value.to)[1],
        });
        return date.isSameOrAfter(from) && date.isSameOrBefore(to);
    }) !== undefined);
};
exports.shouldBeOpened = shouldBeOpened;
//# sourceMappingURL=shouldBeOpened.js.map