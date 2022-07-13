"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateWithScheduleHour = exports.formatScheduleHour = exports.parseScheduleHour = void 0;
var lodash_1 = require("lodash");
var Dayjs_1 = require("../Dayjs");
var parseScheduleHour = function (value) {
    var hour = (0, lodash_1.toNumber)(value.slice(0, 2));
    var minute = (0, lodash_1.toNumber)(value.slice(2, 4));
    return [hour, minute];
};
exports.parseScheduleHour = parseScheduleHour;
var formatScheduleHour = function (date) { return (0, Dayjs_1.Dayjs)(date).format('HHmm'); };
exports.formatScheduleHour = formatScheduleHour;
var dateWithScheduleHour = function (date, value) {
    var _a = (0, exports.parseScheduleHour)(value), hour = _a[0], minute = _a[1];
    return (0, Dayjs_1.Dayjs)(date)
        .set('hour', hour)
        .set('minute', minute)
        .set('second', 0)
        .toDate();
};
exports.dateWithScheduleHour = dateWithScheduleHour;
//# sourceMappingURL=hours.js.map