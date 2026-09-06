import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';

import { useFacility } from '@/features/home/hooks/useFacility';

jest.mock('@/lib/api-client', () => ({
    apiRequest: jest.fn(),
}));

import { apiRequest } from '@/lib/api-client';

describe('useFacility', () => {
    beforeEach(() => {
        (apiRequest as jest.Mock).mockReset();
    });

    it('fetches /v1/facilities/:id and returns the facility detail', async () => {
        const facility = {
            id: '9cc3a50a-dad2-4485-b3e9-e20685a1fb04',
            name: 'Senayan Sports Arena',
            description: 'Multi-sport complex in Central Jakarta near Senayan.',
            address: 'Jl. Asia Afrika, Gelora Bung Karno, Jakarta Pusat',
            rating: 4.6,
            reviewCount: 256,
            imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db7ac34ed?w=800',
            sports: ['tennis', 'badminton', 'basketball'],
            amenities: ['Parking', 'Showers', 'Locker Room', 'Cafe'],
            courts: [
                {
                    id: '0d1f785d-3f3f-4239-87b9-7a1e160ebdd0',
                    name: 'Badminton Hall 1',
                    type: 'INDOOR',
                    indoor: true,
                    basePrice: 90000,
                    sport: 'badminton',
                },
            ],
        };
        (apiRequest as jest.Mock).mockResolvedValue(facility);

        const queryClient = new QueryClient();
        const { result } = await renderHook(() => useFacility(facility.id), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        await waitFor(() => {
            expect(result.current.data).toEqual(facility);
        });
        expect(apiRequest).toHaveBeenCalledWith(`/v1/facilities/${facility.id}`);
    });

    it('does not fetch when id is empty', async () => {
        const queryClient = new QueryClient();
        await renderHook(() => useFacility(''), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        expect(apiRequest).not.toHaveBeenCalled();
    });
});
