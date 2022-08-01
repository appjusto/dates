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
var lodash_1 = require("lodash");
var days_1 = require("../../days");
var getDaySchedule = function (schedule, date) {
    return schedule[(0, days_1.getDayIndex)(date)];
};
exports.getDaySchedule = getDaySchedule;
var scheduleFromDate = function (schedule, date, weeks) {
    if (weeks === void 0) { weeks = 1; }
    var index = (0, days_1.getDayIndex)(date);
    var fromDate = __spreadArray(__spreadArray([], schedule.slice(index, 7), true), schedule.slice(0, index), true);
    if (weeks === 1)
        return fromDate;
    return __spreadArray([], (0, lodash_1.flatten)((0, lodash_1.times)(weeks, (0, lodash_1.constant)(fromDate))), true);
};
exports.scheduleFromDate = scheduleFromDate;
//# sourceMappingURL=index.js.map