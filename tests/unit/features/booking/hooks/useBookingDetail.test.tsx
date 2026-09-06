import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';

import { useBookingDetail } from '@/features/booking/hooks/useBookingDetail';

jest.mock('@/lib/api-client', () => ({
    apiRequest: jest.fn(),
}));

import { apiRequest } from '@/lib/api-client';

describe('useBookingDetail', () => {
    beforeEach(() => {
        (apiRequest as jest.Mock).mockReset();
    });

    it('fetches /v1/bookings/:id and returns the booking detail', async () => {
        const bookingId = 'd166dfe1-7f7c-4c53-96ee-21623cfe7a25';
        const booking = {
            id: bookingId,
            bookingReference: 'CTL-PPDRVQ',
            status: 'CONFIRMED',
            facility: {
                id: '9cc3a50a-dad2-4485-b3e9-e20685a1fb04',
                name: 'Senayan Sports Arena',
                imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db7ac34ed?w=800',
            },
            court: { id: 'ceda38d3-d943-4de1-9d37-e205f1e847d5', name: 'Badminton Hall 2' },
            date: '2026-09-08',
            startTime: '09:00',
            endTime: '10:00',
            price: 90000,
            serviceFee: 4500,
            totalPrice: 94500,
        };
        (apiRequest as jest.Mock).mockResolvedValue(booking);

        const queryClient = new QueryClient();
        const { result } = await renderHook(() => useBookingDetail(bookingId), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        await waitFor(() => {
            expect(result.current.data).toEqual(booking);
        });
        expect(apiRequest).toHaveBeenCalledWith(`/v1/bookings/${bookingId}`);
    });

    it('does not fetch when id is empty', async () => {
        const queryClient = new QueryClient();
        await renderHook(() => useBookingDetail(''), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        expect(apiRequest).not.toHaveBeenCalled();
    });
});
