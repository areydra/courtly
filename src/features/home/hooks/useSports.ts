import { useQuery } from '@tanstack/react-query';

import { apiRequest } from '@/lib/api-client';

import type { Sport } from '../types/sport.types';

export function useSports() {
    return useQuery({
        queryKey: ['sports'],
        queryFn: async () => (await apiRequest<{ data: Sport[] }>('/v1/sports')).data,
    });
}
