"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateWithUpdatedTime = void 0;
const Dayjs_1 = require("./Dayjs");
const dateWithUpdatedTime = (date, { hours, minutes }) => {
    let day = (0, Dayjs_1.Dayjs)(date).set('second', 0).set('millisecond', 0);
    if (hours !== undefined)
        day = day.set('hours', hours);
    if (minutes !== undefined)
        day = day.set('minute', minutes);
    return day.toDate();
};
exports.dateWithUpdatedTime = dateWithUpdatedTime;
//# sourceMappingURL=time.js.map