export interface CreateBookingPayload {
    courtId: string;
    date: string;
    startTime: string;
    endTime: string;
}

export interface BookingApiResponse {
    id: string;
    bookingReference: string;
    status: string;
    facility: {
        id: string;
        name: string;
        imageUrl: string;
    };
    court: {
        id: string;
        name: string;
    };
    date: string;
    startTime: string;
    endTime: string;
    price: number;
    serviceFee: number;
    totalPrice: number;
}
