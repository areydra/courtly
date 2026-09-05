import { render } from '@testing-library/react-native';

import WelcomeScreen from '@/features/welcome/screens/WelcomeScreen';

describe('WelcomeScreen', () => {
    it('should render correctly', async () => {
        const { getByTestId, getByText } = await render(<WelcomeScreen />);

        expect(getByTestId('welcome-screen')).toBeTruthy();
        expect(getByText('Book your court in seconds')).toBeTruthy();
        expect(getByTestId('welcome-get-started-button')).toBeTruthy();
        expect(getByTestId('welcome-log-in-button')).toBeTruthy();
    });
});
