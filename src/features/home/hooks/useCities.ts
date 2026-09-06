import { useQuery } from '@tanstack/react-query';

import { apiRequest } from '@/lib/api-client';

export function useCities() {
    return useQuery({
        queryKey: ['cities'],
        queryFn: async () => (await apiRequest<{ data: string[] }>('/v1/cities')).data,
    });
}
