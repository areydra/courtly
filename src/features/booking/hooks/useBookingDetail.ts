import { useQuery } from '@tanstack/react-query';

import { apiRequest } from '@/lib/api-client';

import type { BookingDetail } from '../types/my-booking.types';

export function useBookingDetail(id: string) {
    return useQuery({
        queryKey: ['booking-detail', id],
        queryFn: () => apiRequest<BookingDetail>(`/v1/bookings/${id}`),
        enabled: !!id,
    });
}
