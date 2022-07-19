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
var days_1 = require("../../days");
var getDaySchedule = function (schedule, date) {
    return schedule[(0, days_1.getDayIndex)(date)];
};
exports.getDaySchedule = getDaySchedule;
var scheduleFromDate = function (schedule, date) {
    var index = (0, days_1.getDayIndex)(date);
    return __spreadArray(__spreadArray([], schedule.slice(index, 7), true), schedule.slice(0, index), true);
};
exports.scheduleFromDate = scheduleFromDate;
//# sourceMappingURL=index.js.map