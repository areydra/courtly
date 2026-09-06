import { useMutation } from '@tanstack/react-query';

import { apiRequest, ApiError } from '@/lib/api-client';

import type { BookingApiResponse, CreateBookingPayload } from '../types/booking.types';

export function useCreateBooking() {
    return useMutation<BookingApiResponse, ApiError, CreateBookingPayload>({
        mutationFn: (payload) =>
            apiRequest<BookingApiResponse>('/v1/bookings', {
                method: 'POST',
                body: JSON.stringify(payload),
            }),
    });
}
