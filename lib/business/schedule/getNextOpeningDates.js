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
exports.getNextOpeningDates = void 0;
var Dayjs_1 = require("../../Dayjs");
var hours_1 = require("./hours");
var getNextOpeningDates = function (schedule, date) {
    return schedule.reduce(function (result, _a, i) {
        var checked = _a.checked, daySchedule = _a.schedule;
        if (!checked)
            return result;
        var dates = daySchedule
            .map(function (_a) {
            var from = _a.from;
            return (0, Dayjs_1.Dayjs)((0, hours_1.dateWithScheduleHour)(date, from, 'America/Sao_Paulo'))
                .add(i, 'day')
                .toDate();
        })
            .filter(function (d) { return (0, Dayjs_1.Dayjs)(d).isAfter(date); });
        return __spreadArray(__spreadArray([], result, true), dates, true);
    }, []);
};
exports.getNextOpeningDates = getNextOpeningDates;
//# sourceMappingURL=getNextOpeningDates.js.map