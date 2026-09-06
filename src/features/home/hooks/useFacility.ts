import { useQuery } from '@tanstack/react-query';

import { apiRequest } from '@/lib/api-client';

import type { FacilityDetail } from '../types/facility-detail.types';

export function useFacility(id: string) {
    return useQuery({
        queryKey: ['facility', id],
        queryFn: () => apiRequest<FacilityDetail>(`/v1/facilities/${id}`),
        enabled: !!id,
    });
}
