import { useMutation } from '@tanstack/react-query';

import { apiRequest, ApiError } from '@/lib/api-client';

import type { BookingDetail } from '../types/my-booking.types';

export function useCancelBooking() {
    return useMutation<BookingDetail, ApiError, string>({
        mutationFn: (id) =>
            apiRequest<BookingDetail>(`/v1/bookings/${id}`, {
                method: 'DELETE',
            }),
    });
}
