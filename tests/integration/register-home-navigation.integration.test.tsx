import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, waitFor } from '@testing-library/react-native';
import { renderRouter } from 'expo-router/testing-library';

import HomeScreen from '@/features/home/screens/HomeScreen';
import RegisterScreen from '@/features/register/screens/RegisterScreen';

jest.mock('@/features/register/hooks/useRegister', () => ({
    useRegister: () => ({
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

describe('Register to Home navigation', () => {
    it('navigates to Home when registration succeeds', async () => {
        const queryClient = new QueryClient();

        const rendered = renderRouter(
            { register: RegisterScreen, home: HomeScreen },
            {
                initialUrl: '/register',
                wrapper: ({ children }) => (
                    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                ),
            },
        );
        const { getByTestId } = await rendered;

        expect(getByTestId('register-screen')).toBeTruthy();

        await fireEvent.changeText(getByTestId('register-full-name-input'), 'Jordan Lee');
        await fireEvent.changeText(getByTestId('register-email-input'), 'jordan@email.com');
        await fireEvent.changeText(getByTestId('register-password-input'), 'password123');
        await fireEvent.press(getByTestId('register-create-account-button'));

        await waitFor(() => {
            expect(rendered.getPathname()).toBe('/home');
        });
        expect(getByTestId('home-screen')).toBeTruthy();
    });
});
