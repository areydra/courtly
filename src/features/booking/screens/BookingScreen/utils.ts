export const DOW_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export interface DateOption {
    iso: string;
    dow: string;
    day: number;
    month: string;
}

export function toIsoDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function parseIsoDate(iso: string): Date {
    const [year, month, day] = iso.split('-').map(Number);
    return new Date(year, month - 1, day);
}

export function formatDateLabel(date: Date): string {
    return `${MONTH_LABELS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
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
