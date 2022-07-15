"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRelativeDate = exports.formatDate = void 0;
var Dayjs_1 = require("./Dayjs");
var getPattern = function (name) {
    if (name === 'datetime')
        return 'DD/MM/YYYY HH:mm:ss';
    if (name === 'time')
        return 'HH:mm:ss';
    if (name === 'shorttime')
        return 'HH:mm';
    throw new Error('Wrong pattern');
};
var formatDate = function (date, pattern) {
    if (pattern === void 0) { pattern = 'datetime'; }
    return (0, Dayjs_1.Dayjs)(date).format(getPattern(pattern));
};
exports.formatDate = formatDate;
var formatRelativeDate = function (date, reference) {
    return (0, Dayjs_1.Dayjs)(date)
        .calendar(reference, {
        sameDay: '[hoje]',
        nextDay: '[amanhã]',
        nextWeek: 'dddd',
    })
        .toLocaleLowerCase();
};
exports.formatRelativeDate = formatRelativeDate;
//# sourceMappingURL=formatters.js.map