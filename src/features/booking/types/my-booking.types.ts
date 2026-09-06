export type BookingStatus = 'CONFIRMED' | 'CANCELLED';

export interface BookingFacilitySummary {
    id: string;
    name: string;
    imageUrl: string;
}

export interface BookingCourtSummary {
    id: string;
    name: string;
}

export interface BookingListItem {
    id: string;
    bookingReference: string;
    status: BookingStatus;
    facility: BookingFacilitySummary;
    court: BookingCourtSummary;
    date: string;
    startTime: string;
    endTime: string;
    totalPrice: number;
}

export interface BookingDetail extends BookingListItem {
    price: number;
    serviceFee: number;
}

export interface CancelResult {
    bookingReference: string;
    facilityName: string;
    courtName: string;
    dateTimeLabel: string;
    priceLabel: string;
    serviceFeeLabel: string;
    totalLabel: string;
}
