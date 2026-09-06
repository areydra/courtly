import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, waitFor } from '@testing-library/react-native';
import { renderRouter } from 'expo-router/testing-library';

import RegisterScreen from '@/features/register/screens/RegisterScreen';
import WelcomeScreen from '@/features/welcome/screens/WelcomeScreen';

describe('Welcome to Register navigation', () => {
    it('navigates to Register when Get started is pressed', async () => {
        const queryClient = new QueryClient();

        const rendered = renderRouter(
            { index: WelcomeScreen, register: RegisterScreen },
            {
                initialUrl: '/',
                wrapper: ({ children }) => (
                    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                ),
            },
        );
        const { getByTestId } = await rendered;

        expect(getByTestId('welcome-screen')).toBeTruthy();

        await fireEvent.press(getByTestId('welcome-get-started-button'));

        await waitFor(() => {
            expect(rendered.getPathname()).toBe('/register');
        });
        expect(getByTestId('register-screen')).toBeTruthy();
    });
});
