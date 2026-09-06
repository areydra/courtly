import { useQuery } from '@tanstack/react-query';

import { apiRequest } from '@/lib/api-client';

import type { Court } from '../types/court.types';

interface AvailabilityResponse {
    date: string;
    courts: Court[];
}

export function useAvailability(facilityId: string, date: string) {
    return useQuery({
        queryKey: ['facility-availability', facilityId, date],
        queryFn: () => apiRequest<AvailabilityResponse>(`/v1/facilities/${facilityId}/availability?date=${date}`),
        enabled: !!facilityId && !!date,
    });
}
