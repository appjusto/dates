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
var _1 = require(".");
var Dayjs_1 = require("../../Dayjs");
var hours_1 = require("./hours");
var getNextDateSlots = function (business, reference, interval, weeks, limit) {
    var _a;
    if (interval === void 0) { interval = 30; }
    if (weeks === void 0) { weeks = 1; }
    if (limit === void 0) { limit = Number.MAX_SAFE_INTEGER; }
    var schedule = business.schedules
        ? (0, _1.scheduleFromDate)(business.schedules, reference, weeks)
        : [];
    var minHours = (_a = business.minHoursForScheduledOrders) !== null && _a !== void 0 ? _a : 0;
    var total = 0;
    return schedule.reduce(function (result, _a, i) {
        var checked = _a.checked, daySchedule = _a.schedule;
        if (!checked)
            return result;
        var dates = daySchedule.reduce(function (r, _a) {
            var from = _a.from, to = _a.to;
            if (total >= limit)
                return r;
            var f = (0, Dayjs_1.Dayjs)((0, hours_1.dateWithScheduleHour)(reference, from, 'America/Sao_Paulo')).add(i, 'day');
            var t = (0, Dayjs_1.Dayjs)((0, hours_1.dateWithScheduleHour)(reference, to, 'America/Sao_Paulo')).add(i, 'day');
            var r2 = [];
            var n = f.clone().add(interval, 'minute');
            while (n.isBefore(t)) {
                if (total >= limit)
                    break;
                var diff = n.diff(reference, 'minute');
                if (diff >= interval && diff > minHours * 60) {
                    total++;
                    r2.push(n.toDate());
                }
                n = n.clone().add(interval, 'minute');
            }
            return __spreadArray(__spreadArray([], r, true), r2, true);
        }, []);
        return __spreadArray(__spreadArray([], result, true), [dates], false);
    }, []);
};
exports.getNextDateSlots = getNextDateSlots;
//# sourceMappingURL=getNextDateSlots.js.map