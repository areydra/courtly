import { MONTH_LABELS, toIsoDate } from '@/features/booking/utils/date';

export { formatDateLabel, MONTH_LABELS, parseIsoDate, toIsoDate } from '@/features/booking/utils/date';

export const DOW_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export interface DateOption {
    iso: string;
    dow: string;
    day: number;
    month: string;
}

export function getDateOptions(referenceDate: Date, count: number): DateOption[] {
    return Array.from({ length: count }, (_, index) => {
        const date = new Date(referenceDate);
        date.setDate(date.getDate() + index);

        return {
            iso: toIsoDate(date),
            dow: index === 0 ? 'Today' : DOW_LABELS[date.getDay()],
            day: date.getDate(),
            month: MONTH_LABELS[date.getMonth()],
        };
    });
}
