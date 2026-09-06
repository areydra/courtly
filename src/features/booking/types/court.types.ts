export interface Slot {
    startTime: string;
    endTime: string;
    price: number;
    available: boolean;
}

export interface Court {
    id: string;
    name: string;
    type: string;
    indoor: boolean;
    slots: Slot[];
}

export interface BookingResult {
    bookingReference: string;
    status: string;
    facilityName: string;
    courtName: string;
    dateLabel: string;
    timeLabel: string;
    priceLabel: string;
    serviceFeeLabel: string;
    totalLabel: string;
}
