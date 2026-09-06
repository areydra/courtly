import { useInfiniteQuery } from '@tanstack/react-query';

import { apiRequest } from '@/lib/api-client';

import type { Facility } from '../types/facility.types';

interface FacilitiesResponse {
    data: Facility[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

interface UseFacilitiesParams {
    sport?: string;
    city?: string;
    search?: string;
}

export function useFacilities({ sport, city, search }: UseFacilitiesParams) {
    return useInfiniteQuery({
        queryKey: ['facilities', { sport, city, search }],
        queryFn: async ({ pageParam }) => {
            const params = new URLSearchParams();
            if (search) {
                params.set('search', search);
            }
            if (sport) {
                params.set('sport', sport);
            }
            if (city) {
                params.set('city', city);
            }
            params.set('page', String(pageParam));

            return apiRequest<FacilitiesResponse>(`/v1/facilities?${params.toString()}`);
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const { page, totalPages } = lastPage.pagination;
            return page < totalPages ? page + 1 : undefined;
        },
    });
}
