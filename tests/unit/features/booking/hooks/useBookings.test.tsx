import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';

import { useBookings } from '@/features/booking/hooks/useBookings';

jest.mock('@/lib/api-client', () => ({
    apiRequest: jest.fn(),
}));

import { apiRequest } from '@/lib/api-client';

describe('useBookings', () => {
    beforeEach(() => {
        (apiRequest as jest.Mock).mockReset();
    });

    it('fetches /v1/bookings without a status param for the "all" category', async () => {
        const response = {
            data: [],
            pagination: { page: 1, limit: 10, total: 0, totalPages: 1 },
        };
        (apiRequest as jest.Mock).mockResolvedValue(response);

        const queryClient = new QueryClient();
        const { result } = await renderHook(() => useBookings(undefined), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        await waitFor(() => {
            expect(result.current.data?.pages[0]).toEqual(response);
        });
        expect(apiRequest).toHaveBeenCalledWith('/v1/bookings?page=1');
    });

    it('fetches /v1/bookings with a status param for a given category', async () => {
        const response = {
            data: [],
            pagination: { page: 1, limit: 10, total: 0, totalPages: 1 },
        };
        (apiRequest as jest.Mock).mockResolvedValue(response);

        const queryClient = new QueryClient();
        const { result } = await renderHook(() => useBookings('UPCOMING'), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        await waitFor(() => {
            expect(result.current.data?.pages[0]).toEqual(response);
        });
        expect(apiRequest).toHaveBeenCalledWith('/v1/bookings?status=UPCOMING&page=1');
    });

    it('exposes a next page param when more pages are available', async () => {
        const response = {
            data: [],
            pagination: { page: 1, limit: 10, total: 25, totalPages: 3 },
        };
        (apiRequest as jest.Mock).mockResolvedValue(response);

        const queryClient = new QueryClient();
        const { result } = await renderHook(() => useBookings(undefined), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        await waitFor(() => {
            expect(result.current.hasNextPage).toBe(true);
        });
    });
});
