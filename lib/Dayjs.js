"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dayjs = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
// @ts-ignore
require("dayjs/locale/pt");
const calendar_1 = __importDefault(require("dayjs/plugin/calendar"));
const customParseFormat_1 = __importDefault(require("dayjs/plugin/customParseFormat"));
const duration_1 = __importDefault(require("dayjs/plugin/duration"));
const isSameOrAfter_1 = __importDefault(require("dayjs/plugin/isSameOrAfter"));
const isSameOrBefore_1 = __importDefault(require("dayjs/plugin/isSameOrBefore"));
const relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
const updateLocale_1 = __importDefault(require("dayjs/plugin/updateLocale"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const weekday_1 = __importDefault(require("dayjs/plugin/weekday"));
dayjs_1.default.extend(updateLocale_1.default);
dayjs_1.default.updateLocale('pt', {
    weekStart: 1,
    calendar: {
        sameDay: '[hoje]',
        nextDay: '[amanhã]',
        nextWeek: 'dddd',
        sameElse: 'DD/MM/YYYY',
    },
});
dayjs_1.default.locale('pt');
dayjs_1.default.extend(calendar_1.default);
dayjs_1.default.extend(duration_1.default);
dayjs_1.default.extend(isSameOrAfter_1.default);
dayjs_1.default.extend(isSameOrBefore_1.default);
dayjs_1.default.extend(relativeTime_1.default);
dayjs_1.default.extend(timezone_1.default);
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(weekday_1.default);
dayjs_1.default.extend(customParseFormat_1.default);
exports.Dayjs = dayjs_1.default;
//# sourceMappingURL=Dayjs.js.map