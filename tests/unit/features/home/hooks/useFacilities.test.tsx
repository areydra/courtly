import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';

import { useFacilities } from '@/features/home/hooks/useFacilities';

jest.mock('@/lib/api-client', () => ({
    apiRequest: jest.fn(),
}));

import { apiRequest } from '@/lib/api-client';

function createWrapper() {
    const queryClient = new QueryClient();
    return ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
}

describe('useFacilities', () => {
    beforeEach(() => {
        (apiRequest as jest.Mock).mockReset();
    });

    it('omits sport/city query params by default', async () => {
        (apiRequest as jest.Mock).mockResolvedValue({
            data: [],
            pagination: { page: 1, limit: 10, total: 0, totalPages: 0 },
        });

        const { result } = await renderHook(() => useFacilities({}), {
            wrapper: createWrapper(),
        });

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(apiRequest).toHaveBeenCalledWith('/v1/facilities?page=1');
    });

    it('includes sport/city query params when provided', async () => {
        (apiRequest as jest.Mock).mockResolvedValue({
            data: [],
            pagination: { page: 1, limit: 10, total: 0, totalPages: 0 },
        });

        const { result } = await renderHook(
            () => useFacilities({ sport: 'tennis', city: 'Jakarta Barat' }),
            { wrapper: createWrapper() },
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        const calledUrl = (apiRequest as jest.Mock).mock.calls[0][0] as string;
        expect(calledUrl).toContain('sport=tennis');
        expect(calledUrl).toContain('city=Jakarta+Barat');
    });

    it('includes the search query param when provided', async () => {
        (apiRequest as jest.Mock).mockResolvedValue({
            data: [],
            pagination: { page: 1, limit: 10, total: 0, totalPages: 0 },
        });

        const { result } = await renderHook(() => useFacilities({ search: 'Senayan' }), {
            wrapper: createWrapper(),
        });

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        const calledUrl = (apiRequest as jest.Mock).mock.calls[0][0] as string;
        expect(calledUrl).toContain('search=Senayan');
    });

    it('exposes hasNextPage based on the pagination response', async () => {
        (apiRequest as jest.Mock).mockResolvedValue({
            data: [{ id: '1', name: 'Court A', location: 'Jakarta', distanceKm: 1, rating: 4.5, reviewCount: 10, sports: ['tennis'], startingPrice: 1000, imageUrl: 'x' }],
            pagination: { page: 1, limit: 10, total: 15, totalPages: 2 },
        });

        const { result } = await renderHook(() => useFacilities({}), {
            wrapper: createWrapper(),
        });

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.hasNextPage).toBe(true);
    });
});
