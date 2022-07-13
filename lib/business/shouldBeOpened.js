"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldBeOpened = void 0;
var lodash_1 = require("lodash");
var Dayjs_1 = require("../Dayjs");
var hours_1 = require("./hours");
var schedule_1 = require("./schedule");
var shouldBeOpened = function (schedule, at) {
    if (!schedule)
        return false;
    var date = Dayjs_1.Dayjs.tz(at !== null && at !== void 0 ? at : new Date(), 'America/Sao_Paulo');
    var daySchedule = (0, schedule_1.getDaySchedule)(schedule, date.toDate());
    if (!daySchedule)
        return false;
    return ((daySchedule.checked &&
        daySchedule.schedule.find(function (value) {
            var from = (0, Dayjs_1.Dayjs)((0, hours_1.dateWithScheduleHour)(date.toDate(), value.from));
            var to = (0, Dayjs_1.Dayjs)((0, hours_1.dateWithScheduleHour)(date.toDate(), value.to));
            return date.isAfter(from) && date.isBefore(to);
        }) !== undefined) ||
        (daySchedule.checked && (0, lodash_1.isEmpty)(daySchedule.schedule)));
};
exports.shouldBeOpened = shouldBeOpened;
//# sourceMappingURL=shouldBeOpened.js.map