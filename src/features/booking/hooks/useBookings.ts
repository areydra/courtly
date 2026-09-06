import { useInfiniteQuery } from '@tanstack/react-query';

import { apiRequest } from '@/lib/api-client';

import type { BookingListItem } from '../types/my-booking.types';

export type BookingCategory = 'UPCOMING' | 'PAST' | 'CANCELLED';

interface BookingsResponse {
    data: BookingListItem[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export function useBookings(category?: BookingCategory) {
    return useInfiniteQuery({
        queryKey: ['bookings', category ?? 'ALL'],
        queryFn: async ({ pageParam }) => {
            const params = new URLSearchParams();
            if (category) {
                params.set('status', category);
            }
            params.set('page', String(pageParam));

            return apiRequest<BookingsResponse>(`/v1/bookings?${params.toString()}`);
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const { page, totalPages } = lastPage.pagination;
            return page < totalPages ? page + 1 : undefined;
        },
    });
}
