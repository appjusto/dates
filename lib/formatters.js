"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const Dayjs_1 = require("./Dayjs");
const getPattern = (name) => {
    if (name === 'datetime')
        return 'DD/MM/YYYY HH:mm:ss';
    if (name === 'time')
        return 'HH:mm:ss';
    if (name === 'shorttime')
        return 'HH:mm';
    throw new Error('Wrong pattern');
};
const formatDate = (date, pattern = 'datetime') => (0, Dayjs_1.Dayjs)(date).format(getPattern(pattern));
exports.formatDate = formatDate;
//# sourceMappingURL=formatters.js.map