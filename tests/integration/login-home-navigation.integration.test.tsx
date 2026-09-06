import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, waitFor } from '@testing-library/react-native';
import { renderRouter } from 'expo-router/testing-library';

import HomeScreen from '@/features/home/screens/HomeScreen';
import LoginScreen from '@/features/login/screens/LoginScreen';

jest.mock('@/features/login/hooks/useLogin', () => ({
    useLogin: () => ({
        isPending: false,
        isSuccess: false,
        isError: false,
        mutate: (
            _payload: unknown,
            options?: { onSuccess?: (data: unknown) => void },
        ) =>
            options?.onSuccess?.({
                accessToken: 'test-access-token',
                user: { id: '1', name: 'Jordan Lee', email: 'jordan@email.com', avatarUrl: null },
            }),
    }),
}));

jest.mock('@/features/home/screens/HomeScreen', () => {
    const { View, Text } = require('react-native');
    return function MockHomeScreen() {
        return (
            <View testID="home-screen">
                <Text>Home</Text>
            </View>
        );
    };
});

describe('Login to Home navigation', () => {
    it('navigates to Home when login succeeds', async () => {
        const queryClient = new QueryClient();

        const rendered = renderRouter(
            { login: LoginScreen, home: HomeScreen },
            {
                initialUrl: '/login',
                wrapper: ({ children }) => (
                    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                ),
            },
        );
        const { getByTestId } = await rendered;

        expect(getByTestId('login-screen')).toBeTruthy();

        await fireEvent.changeText(getByTestId('login-email-input'), 'jordan@email.com');
        await fireEvent.changeText(getByTestId('login-password-input'), 'password123');
        await fireEvent.press(getByTestId('login-submit-button'));

        await waitFor(() => {
            expect(rendered.getPathname()).toBe('/home');
        });
        expect(getByTestId('home-screen')).toBeTruthy();
    });
});
