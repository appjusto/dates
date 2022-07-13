"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldBeOpened = void 0;
var lodash_1 = require("lodash");
var _1 = require(".");
var Dayjs_1 = require("../../Dayjs");
var hours_1 = require("./hours");
var shouldBeOpened = function (schedule, at, tz) {
    if (at === void 0) { at = new Date(); }
    if (tz === void 0) { tz = 'America/Sao_Paulo'; }
    if (!schedule)
        return false;
    var daySchedule = (0, _1.getDaySchedule)(schedule, at);
    if (!daySchedule || !daySchedule.checked)
        return false;
    if ((0, lodash_1.isEmpty)(daySchedule.schedule))
        return true;
    return (daySchedule.schedule.find(function (value) {
        var from = (0, Dayjs_1.Dayjs)((0, hours_1.dateWithScheduleHour)(at, value.from)).tz(tz, true);
        var to = (0, Dayjs_1.Dayjs)((0, hours_1.dateWithScheduleHour)(at, value.to)).tz(tz, true);
        var date = Dayjs_1.Dayjs.tz(at);
        return date.isSameOrAfter(from) && date.isSameOrBefore(to);
    }) !== undefined);
};
exports.shouldBeOpened = shouldBeOpened;
//# sourceMappingURL=shouldBeOpened.js.map