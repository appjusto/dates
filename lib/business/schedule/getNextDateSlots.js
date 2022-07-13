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
exports.getNextDateSlots = void 0;
var Dayjs_1 = require("../../Dayjs");
var hours_1 = require("./hours");
var getNextDateSlots = function (schedule, date, interval) {
    if (interval === void 0) { interval = 30; }
    return schedule.reduce(function (result, _a, i) {
        var checked = _a.checked, daySchedule = _a.schedule;
        if (!checked)
            return result;
        var dates = daySchedule.reduce(function (r, _a) {
            var from = _a.from, to = _a.to;
            var f = (0, Dayjs_1.Dayjs)((0, hours_1.dateWithScheduleHour)(date, from, 'America/Sao_Paulo')).add(i, 'day');
            if (!f.isAfter(date))
                return r;
            var r2 = [];
            var t = (0, Dayjs_1.Dayjs)((0, hours_1.dateWithScheduleHour)(date, to, 'America/Sao_Paulo')).add(i, 'day');
            var n = f.clone().add(interval, 'minute');
            while (n.isBefore(t)) {
                r2.push(n.toDate());
                n = n.clone().add(interval, 'minute');
            }
            return __spreadArray(__spreadArray([], r, true), r2, true);
        }, []);
        return __spreadArray(__spreadArray([], result, true), [dates], false);
    }, []);
};
exports.getNextDateSlots = getNextDateSlots;
//# sourceMappingURL=getNextDateSlots.js.map