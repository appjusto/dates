"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dayjs = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
// @ts-ignore
require("dayjs/locale/pt");
var duration_1 = __importDefault(require("dayjs/plugin/duration"));
var relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
var timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
var utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.locale('pt');
dayjs_1.default.extend(duration_1.default);
dayjs_1.default.extend(relativeTime_1.default);
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
exports.Dayjs = dayjs_1.default;
var pt = {
    date: {
        formats: {
            default: '%d/%m/%Y',
            monthYear: '%B, %-y',
        },
        day_names: [
            'Domingo',
            'Segunda',
            'Terça',
            'Quarta',
            'Quinta',
            'Sexta',
            'Sábado',
        ],
        abbr_day_names: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        month_names: [
            null,
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ],
        abbr_month_names: [
            null,
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez',
        ],
    },
    time: {
        formats: {
            default: '%Hh%M',
            schedule: '%H%M',
        },
    },
};
//# sourceMappingURL=Dayjs.js.map