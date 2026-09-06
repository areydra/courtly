import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';

import { useCreateBooking } from '@/features/booking/hooks/useCreateBooking';

jest.mock('@/lib/api-client', () => ({
    apiRequest: jest.fn(),
    ApiError: class ApiError extends Error {},
}));

import { apiRequest } from '@/lib/api-client';

describe('useCreateBooking', () => {
    beforeEach(() => {
        (apiRequest as jest.Mock).mockReset();
    });

    it('posts /v1/bookings with the payload and returns the booking on success', async () => {
        const payload = {
            courtId: 'ceda38d3-d943-4de1-9d37-e205f1e847d5',
            date: '2026-09-08',
            startTime: '09:00',
            endTime: '10:00',
        };
        const booking = {
            id: 'd166dfe1-7f7c-4c53-96ee-21623cfe7a25',
            bookingReference: 'CTL-PPDRVQ',
            status: 'CONFIRMED',
            facility: {
                id: '9cc3a50a-dad2-4485-b3e9-e20685a1fb04',
                name: 'Senayan Sports Arena',
                imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db7ac34ed?w=800',
            },
            court: { id: payload.courtId, name: 'Badminton Hall 2' },
            date: payload.date,
            startTime: payload.startTime,
            endTime: payload.endTime,
            price: 90000,
            serviceFee: 4500,
            totalPrice: 94500,
        };
        (apiRequest as jest.Mock).mockResolvedValue(booking);

        const queryClient = new QueryClient();
        const { result } = await renderHook(() => useCreateBooking(), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        result.current.mutate(payload);

        await waitFor(() => {
            expect(result.current.data).toEqual(booking);
        });
        expect(apiRequest).toHaveBeenCalledWith('/v1/bookings', {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    });

    it('surfaces the API error on failure', async () => {
        const apiError = new Error('This time slot is no longer available.');
        (apiRequest as jest.Mock).mockRejectedValue(apiError);

        const queryClient = new QueryClient();
        const { result } = await renderHook(() => useCreateBooking(), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        result.current.mutate({
            courtId: 'ceda38d3-d943-4de1-9d37-e205f1e847d5',
            date: '2026-09-08',
            startTime: '09:00',
            endTime: '10:00',
        });

        await waitFor(() => {
            expect(result.current.isError).toBe(true);
        });
        expect(result.current.error).toBe(apiError);
    });
});
