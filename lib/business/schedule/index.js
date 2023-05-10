"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleFromDate = exports.getDaySchedule = void 0;
const lodash_1 = require("lodash");
const days_1 = require("../../days");
const getDaySchedule = (schedule, date) => {
    return schedule[(0, days_1.getDayIndex)(date)];
};
exports.getDaySchedule = getDaySchedule;
const scheduleFromDate = (schedule, date, weeks = 1) => {
    const index = (0, days_1.getDayIndex)(date);
    const fromDate = [...schedule.slice(index, 7), ...schedule.slice(0, index)];
    if (weeks === 1)
        return fromDate;
    return [...(0, lodash_1.flatten)((0, lodash_1.times)(weeks, (0, lodash_1.constant)(fromDate)))];
};
exports.scheduleFromDate = scheduleFromDate;
//# sourceMappingURL=index.js.map