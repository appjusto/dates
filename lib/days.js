"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDayIndex = void 0;
const Dayjs_1 = require("./Dayjs");
const getDayIndex = (date) => (0, Dayjs_1.Dayjs)(date).weekday();
exports.getDayIndex = getDayIndex;
//# sourceMappingURL=days.js.map