import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';

import { useCities } from '@/features/home/hooks/useCities';

jest.mock('@/lib/api-client', () => ({
    apiRequest: jest.fn(),
}));

import { apiRequest } from '@/lib/api-client';

describe('useCities', () => {
    beforeEach(() => {
        (apiRequest as jest.Mock).mockReset();
    });

    it('fetches /v1/cities and returns the data array', async () => {
        const cities = ['Jakarta Barat', 'Jakarta Pusat', 'Tangerang Selatan'];
        (apiRequest as jest.Mock).mockResolvedValue({ data: cities });

        const queryClient = new QueryClient();
        const { result } = await renderHook(() => useCities(), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        await waitFor(() => {
            expect(result.current.data).toEqual(cities);
        });
        expect(apiRequest).toHaveBeenCalledWith('/v1/cities');
    });
});
