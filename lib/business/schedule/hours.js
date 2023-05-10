"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateWithScheduleHour = exports.formatScheduleHour = exports.parseScheduleHour = void 0;
const lodash_1 = require("lodash");
const Dayjs_1 = require("../../Dayjs");
const time_1 = require("../../time");
const parseScheduleHour = (value) => {
    let hour = (0, lodash_1.toNumber)(value.slice(0, 2));
    let minute = (0, lodash_1.toNumber)(value.slice(2, 4));
    return [hour, minute];
};
exports.parseScheduleHour = parseScheduleHour;
const formatScheduleHour = (date) => (0, Dayjs_1.Dayjs)(date).format('HHmm');
exports.formatScheduleHour = formatScheduleHour;
const dateWithScheduleHour = (date, value, offsetTimezone) => {
    const [hours, minutes] = (0, exports.parseScheduleHour)(value);
    let day = (0, Dayjs_1.Dayjs)((0, time_1.dateWithUpdatedTime)(date, { hours, minutes }));
    if (offsetTimezone)
        day = day.tz(offsetTimezone, true);
    return day.toDate();
};
exports.dateWithScheduleHour = dateWithScheduleHour;
//# sourceMappingURL=hours.js.map