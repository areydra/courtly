import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';

import { useAvailability } from '@/features/booking/hooks/useAvailability';

jest.mock('@/lib/api-client', () => ({
    apiRequest: jest.fn(),
}));

import { apiRequest } from '@/lib/api-client';

describe('useAvailability', () => {
    beforeEach(() => {
        (apiRequest as jest.Mock).mockReset();
    });

    it('fetches /v1/facilities/:id/availability with the date query param', async () => {
        const facilityId = '9cc3a50a-dad2-4485-b3e9-e20685a1fb04';
        const date = '2026-09-05';
        const availability = {
            date,
            courts: [
                {
                    id: '0d1f785d-3f3f-4239-87b9-7a1e160ebdd0',
                    name: 'Badminton Hall 1',
                    type: 'INDOOR',
                    indoor: true,
                    slots: [{ startTime: '07:00', endTime: '08:00', price: 90000, available: false }],
                },
            ],
        };
        (apiRequest as jest.Mock).mockResolvedValue(availability);

        const queryClient = new QueryClient();
        const { result } = await renderHook(() => useAvailability(facilityId, date), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        await waitFor(() => {
            expect(result.current.data).toEqual(availability);
        });
        expect(apiRequest).toHaveBeenCalledWith(`/v1/facilities/${facilityId}/availability?date=${date}`);
    });

    it('does not fetch when facilityId or date is empty', async () => {
        const queryClient = new QueryClient();
        await renderHook(() => useAvailability('', '2026-09-05'), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        expect(apiRequest).not.toHaveBeenCalled();
    });
});
