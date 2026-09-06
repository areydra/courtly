import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, waitFor } from '@testing-library/react-native';
import { renderRouter } from 'expo-router/testing-library';

import LoginScreen from '@/features/login/screens/LoginScreen';
import WelcomeScreen from '@/features/welcome/screens/WelcomeScreen';

describe('Login back button fallback', () => {
    it('falls back to Welcome when there is no navigation history to go back to', async () => {
        const queryClient = new QueryClient();

        const rendered = renderRouter(
            { index: WelcomeScreen, login: LoginScreen },
            {
                initialUrl: '/login',
                wrapper: ({ children }) => (
                    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                ),
            },
        );
        const { getByTestId } = await rendered;

        expect(getByTestId('login-screen')).toBeTruthy();

        await fireEvent.press(getByTestId('login-back-button'));

        await waitFor(() => {
            expect(rendered.getPathname()).toBe('/');
        });
        expect(getByTestId('welcome-screen')).toBeTruthy();
    });
});
