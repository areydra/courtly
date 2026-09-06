import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';

import { useRegister } from '@/features/register/hooks/useRegister';
import { useUserStore } from '@/stores/useUserStore';

jest.mock('@/lib/api-client', () => ({
    apiRequest: jest.fn(),
    ApiError: class ApiError extends Error {},
}));

jest.mock('@/lib/secure-storage', () => ({
    setAccessToken: jest.fn(),
}));

import { apiRequest } from '@/lib/api-client';

describe('useRegister', () => {
    beforeEach(() => {
        useUserStore.setState({ name: null, email: null });
        (apiRequest as jest.Mock).mockReset();
    });

    it('saves the returned user name and email to useUserStore on success', async () => {
        (apiRequest as jest.Mock).mockResolvedValue({
            accessToken: 'test-token',
            user: { id: '1', name: 'Jordan Lee', email: 'jordan@email.com', avatarUrl: null },
        });

        const queryClient = new QueryClient();
        const { result } = await renderHook(() => useRegister(), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        result.current.mutate({ name: 'Jordan Lee', email: 'jordan@email.com', password: 'password123' });

        await waitFor(() => {
            expect(useUserStore.getState().name).toBe('Jordan Lee');
        });
        expect(useUserStore.getState().email).toBe('jordan@email.com');
    });
});
