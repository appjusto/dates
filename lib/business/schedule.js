"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleFromDate = exports.getDaySchedule = void 0;
var getDayIndex = function (date) {
    var day = date.getDay();
    // we use 0 for mondays instead of sundays;
    return day === 0 ? 6 : day - 1;
};
var getDaySchedule = function (schedule, date) {
    return schedule[getDayIndex(date)];
};
exports.getDaySchedule = getDaySchedule;
var scheduleFromDate = function (schedule, date) {
    var index = getDayIndex(date);
    return __spreadArray(__spreadArray([], schedule.slice(index, 7), true), schedule.slice(0, index), true);
};
exports.scheduleFromDate = scheduleFromDate;
// export const dayScheduleSlots = (
//   daySchedule: ScheduleObject,
//   interval: number = 60
// ) => {
//   const result: string[] = [];
//     daySchedule.schedule.forEach(({ from, to }) => {});
// };
//# sourceMappingURL=schedule.js.map