"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStartOfTheWeek = exports.getStartOfTheMonth = exports.getDayIndex = void 0;
var Dayjs_1 = require("./Dayjs");
var getDayIndex = function (date) {
    // using 0 for mondays instead of sundays
    var day = date instanceof Date ? date.getDay() : date.weekday();
    return day === 0 ? 6 : day - 1;
};
exports.getDayIndex = getDayIndex;
var getStartOfTheMonth = function (date, timezone) {
    if (date === void 0) { date = new Date(); }
    if (timezone === void 0) { timezone = 'America/Sao_Paulo'; }
    var d = (0, Dayjs_1.Dayjs)(date).tz(timezone).date(1);
    return Dayjs_1.Dayjs.tz(d.format('YYYY-MM-DD'), timezone).toDate();
};
exports.getStartOfTheMonth = getStartOfTheMonth;
var getStartOfTheWeek = function (date, timezone) {
    if (date === void 0) { date = new Date(); }
    if (timezone === void 0) { timezone = 'America/Sao_Paulo'; }
    var d = (0, Dayjs_1.Dayjs)(date).tz(timezone);
    return Dayjs_1.Dayjs.tz(d.subtract((0, exports.getDayIndex)(d), 'day').format('YYYY-MM-DD'), timezone).toDate();
};
exports.getStartOfTheWeek = getStartOfTheWeek;
//# sourceMappingURL=days.js.map