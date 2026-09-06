import { formatDateLabel, parseIsoDate } from '@/features/booking/utils/date';
import type { BookingCategory } from '@/features/booking/hooks/useBookings';
import type { BookingDetail, BookingListItem, CancelResult } from '@/features/booking/types/my-booking.types';
import { formatRupiah } from '@/utils/format';

export type TabKey = 'all' | 'upcoming' | 'past' | 'cancelled';
export type StatusLabel = 'Upcoming' | 'Past' | 'Cancelled';

export const TAB_DEFS: { key: TabKey; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'upcoming', label: 'Upcoming' },
    { key: 'past', label: 'Past' },
    { key: 'cancelled', label: 'Cancelled' },
];

const TAB_TO_CATEGORY: Record<TabKey, BookingCategory | undefined> = {
    all: undefined,
    upcoming: 'UPCOMING',
    past: 'PAST',
    cancelled: 'CANCELLED',
};

export function getCategoryForTab(tab: TabKey): BookingCategory | undefined {
    return TAB_TO_CATEGORY[tab];
}

export function isUpcoming(booking: BookingListItem, today: Date): boolean {
    if (booking.status === 'CANCELLED') {
        return false;
    }
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return parseIsoDate(booking.date) >= startOfToday;
}

export function getStatusLabel(booking: BookingListItem, today: Date): StatusLabel {
    if (booking.status === 'CANCELLED') {
        return 'Cancelled';
    }
    return isUpcoming(booking, today) ? 'Upcoming' : 'Past';
}

export function formatDateTimeLabel(booking: { date: string; startTime: string; endTime: string }): string {
    return `${formatDateLabel(parseIsoDate(booking.date))} · ${booking.startTime}-${booking.endTime}`;
}

export function buildCancelResult(booking: BookingDetail): CancelResult {
    return {
        bookingReference: booking.bookingReference,
        facilityName: booking.facility.name,
        courtName: booking.court.name,
        dateTimeLabel: formatDateTimeLabel(booking),
        priceLabel: formatRupiah(booking.price),
        serviceFeeLabel: formatRupiah(booking.serviceFee),
        totalLabel: formatRupiah(booking.totalPrice),
    };
}
