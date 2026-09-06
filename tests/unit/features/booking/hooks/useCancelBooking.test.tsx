import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';

import { useCancelBooking } from '@/features/booking/hooks/useCancelBooking';

jest.mock('@/lib/api-client', () => ({
    apiRequest: jest.fn(),
    ApiError: class ApiError extends Error {},
}));

import { apiRequest } from '@/lib/api-client';

describe('useCancelBooking', () => {
    beforeEach(() => {
        (apiRequest as jest.Mock).mockReset();
    });

    it('sends a DELETE request to /v1/bookings/:id and returns the cancelled booking', async () => {
        const bookingId = 'd166dfe1-7f7c-4c53-96ee-21623cfe7a25';
        const cancelled = {
            id: bookingId,
            bookingReference: 'CTL-PPDRVQ',
            status: 'CANCELLED',
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
        (apiRequest as jest.Mock).mockResolvedValue(cancelled);

        const queryClient = new QueryClient();
        const { result } = await renderHook(() => useCancelBooking(), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        result.current.mutate(bookingId);

        await waitFor(() => {
            expect(result.current.data).toEqual(cancelled);
        });
        expect(apiRequest).toHaveBeenCalledWith(`/v1/bookings/${bookingId}`, { method: 'DELETE' });
    });

    it('surfaces the API error on failure', async () => {
        const apiError = new Error('Booking not found.');
        (apiRequest as jest.Mock).mockRejectedValue(apiError);

        const queryClient = new QueryClient();
        const { result } = await renderHook(() => useCancelBooking(), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        result.current.mutate('some-id');

        await waitFor(() => {
            expect(result.current.isError).toBe(true);
        });
        expect(result.current.error).toBe(apiError);
    });
});
