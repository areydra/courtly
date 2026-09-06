import { Text } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';

import { SearchQueryProvider, useSearchQuery } from '@/features/home/context/SearchQueryContext';
import SearchInput from '@/features/home/screens/HomeScreen/components/SearchInput';

function SearchQueryProbe() {
    const { searchQuery } = useSearchQuery();
    return <Text testID="search-query-probe">{searchQuery}</Text>;
}

function renderSearchInput() {
    return render(
        <SearchQueryProvider>
            <SearchInput />
            <SearchQueryProbe />
        </SearchQueryProvider>,
    );
}

describe('SearchInput', () => {
    it('does not commit the search query while typing', async () => {
        const { getByTestId } = await renderSearchInput();

        await fireEvent.changeText(getByTestId('home-search-input'), 'Senayan');

        expect(getByTestId('home-search-input').props.value).toBe('Senayan');
        expect(getByTestId('search-query-probe').props.children).toBe('');
    });

    it('commits the search query when the search icon is pressed', async () => {
        const { getByTestId } = await renderSearchInput();

        await fireEvent.changeText(getByTestId('home-search-input'), 'Senayan');
        await fireEvent.press(getByTestId('home-search-icon-button'));

        expect(getByTestId('search-query-probe').props.children).toBe('Senayan');
    });

    it('commits the search query on keyboard submit', async () => {
        const { getByTestId } = await renderSearchInput();

        await fireEvent.changeText(getByTestId('home-search-input'), 'Senayan');
        await fireEvent(getByTestId('home-search-input'), 'submitEditing');

        expect(getByTestId('search-query-probe').props.children).toBe('Senayan');
    });
});
