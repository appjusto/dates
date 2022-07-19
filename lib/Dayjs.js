"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dayjs = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
// @ts-ignore
require("dayjs/locale/pt");
var calendar_1 = __importDefault(require("dayjs/plugin/calendar"));
var duration_1 = __importDefault(require("dayjs/plugin/duration"));
var isSameOrAfter_1 = __importDefault(require("dayjs/plugin/isSameOrAfter"));
var isSameOrBefore_1 = __importDefault(require("dayjs/plugin/isSameOrBefore"));
var relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
var timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
var utc_1 = __importDefault(require("dayjs/plugin/utc"));
var weekday_1 = __importDefault(require("dayjs/plugin/weekday"));
dayjs_1.default.locale('pt');
dayjs_1.default.extend(calendar_1.default);
dayjs_1.default.extend(duration_1.default);
dayjs_1.default.extend(isSameOrAfter_1.default);
dayjs_1.default.extend(isSameOrBefore_1.default);
dayjs_1.default.extend(relativeTime_1.default);
dayjs_1.default.extend(timezone_1.default);
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(weekday_1.default);
exports.Dayjs = dayjs_1.default;
//# sourceMappingURL=Dayjs.js.map