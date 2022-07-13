"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstDayOfCurrentMonth = void 0;
var getFirstDayOfCurrentMonth = function () {
    var now = new Date();
    return new Date(now.getUTCFullYear(), now.getUTCMonth(), 1);
};
exports.getFirstDayOfCurrentMonth = getFirstDayOfCurrentMonth;
//# sourceMappingURL=days.js.map