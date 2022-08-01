"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDayIndex = void 0;
var Dayjs_1 = require("./Dayjs");
var getDayIndex = function (date) { return (0, Dayjs_1.Dayjs)(date).weekday(); };
exports.getDayIndex = getDayIndex;
//# sourceMappingURL=days.js.map