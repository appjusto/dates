"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextDateSlots = void 0;
const _1 = require(".");
const Dayjs_1 = require("../../Dayjs");
const hours_1 = require("./hours");
const getNextDateSlots = (business, reference, interval = 30, weeks = 1, limit = 1000000) => {
    const schedule = business.schedules
        ? (0, _1.scheduleFromDate)(business.schedules, reference, weeks)
        : [];
    const minHours = business.minHoursForScheduledOrders ?? 0;
    let total = 0;
    return schedule.reduce((result, { checked, schedule: daySchedule }, i) => {
        if (!checked)
            return result;
        const dates = daySchedule.reduce((r, { from, to }) => {
            if (total >= limit)
                return r;
            const f = (0, Dayjs_1.Dayjs)((0, hours_1.dateWithScheduleHour)(reference, from, 'America/Sao_Paulo')).add(i, 'day');
            const t = (0, Dayjs_1.Dayjs)((0, hours_1.dateWithScheduleHour)(reference, to, 'America/Sao_Paulo')).add(i, 'day');
            const r2 = [];
            let n = business.averageCookingTime
                ? f.clone().add(business.averageCookingTime, 'second')
                : f.clone().add(interval, 'minute');
            while (n.isBefore(t)) {
                if (total >= limit)
                    break;
                const diff = n.diff(reference, 'minute');
                if (diff > minHours * 60) {
                    total++;
                    r2.push(n.toDate());
                }
                n = n.clone().add(interval, 'minute');
            }
            return [...r, ...r2];
        }, []);
        return [...result, dates];
    }, []);
};
exports.getNextDateSlots = getNextDateSlots;
//# sourceMappingURL=getNextDateSlots.js.map