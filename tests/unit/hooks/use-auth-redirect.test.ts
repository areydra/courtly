import { renderHook, waitFor } from '@testing-library/react-native';

import { useAuthRedirect } from '@/hooks/use-auth-redirect';

const mockReplace = jest.fn();

jest.mock('expo-router', () => ({
    useRouter: () => ({ replace: mockReplace }),
}));

jest.mock('@/lib/secure-storage', () => ({
    getAccessToken: jest.fn(),
}));

import { getAccessToken } from '@/lib/secure-storage';

describe('useAuthRedirect', () => {
    beforeEach(() => {
        mockReplace.mockClear();
        (getAccessToken as jest.Mock).mockReset();
    });

    it('redirects to /home when an access token exists', async () => {
        (getAccessToken as jest.Mock).mockResolvedValue('a-token');

        const { result } = await renderHook(() => useAuthRedirect());

        await waitFor(() => {
            expect(result.current.isCheckingAuth).toBe(false);
        });

        expect(mockReplace).toHaveBeenCalledWith('/home');
    });

    it('does not redirect when there is no access token', async () => {
        (getAccessToken as jest.Mock).mockResolvedValue(null);

        const { result } = await renderHook(() => useAuthRedirect());

        await waitFor(() => {
            expect(result.current.isCheckingAuth).toBe(false);
        });

        expect(mockReplace).not.toHaveBeenCalled();
    });
});
