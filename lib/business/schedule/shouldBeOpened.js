"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldBeOpened = void 0;
var lodash_1 = require("lodash");
var _1 = require(".");
var Dayjs_1 = require("../../Dayjs");
var time_1 = require("../../time");
var hours_1 = require("./hours");
var shouldBeOpened = function (schedule, at, tz) {
    if (at === void 0) { at = new Date(); }
    if (tz === void 0) { tz = 'America/Sao_Paulo'; }
    if (!schedule)
        return false;
    var date = Dayjs_1.Dayjs.tz(at, tz);
    console.log('shouldBeOpened', date);
    var daySchedule = (0, _1.getDaySchedule)(schedule, date);
    if (!daySchedule || !daySchedule.checked)
        return false;
    if ((0, lodash_1.isEmpty)(daySchedule.schedule))
        return true;
    return (daySchedule.schedule.find(function (value) {
        var from = (0, time_1.dateWithUpdatedTime)(date, {
            hours: (0, hours_1.parseScheduleHour)(value.from)[0],
            minutes: (0, hours_1.parseScheduleHour)(value.from)[1],
        });
        var to = (0, time_1.dateWithUpdatedTime)(date, {
            hours: (0, hours_1.parseScheduleHour)(value.to)[0],
            minutes: (0, hours_1.parseScheduleHour)(value.to)[1],
        });
        console.log('shouldBeOpened', date.toISOString(), from.toISOString(), to.toISOString(), date.isSameOrAfter(from), date.isSameOrBefore(to));
        return date.isSameOrAfter(from) && date.isSameOrBefore(to);
    }) !== undefined);
};
exports.shouldBeOpened = shouldBeOpened;
//# sourceMappingURL=shouldBeOpened.js.map