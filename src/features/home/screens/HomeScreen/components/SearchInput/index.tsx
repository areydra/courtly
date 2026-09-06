import { useCallback, useState } from 'react';

import { Pressable, TextInput, View } from 'react-native';

import { Colors } from '@/constants/theme';
import { useSearchQuery } from '@/features/home/context/SearchQueryContext';

import styles from './styles';
import SearchIcon from '../SearchIcon';

export default function SearchInput() {
    const { searchQuery, setSearchQuery } = useSearchQuery();
    const [inputValue, setInputValue] = useState(searchQuery);

    const handleSubmit = useCallback(() => {
        setSearchQuery(inputValue);
    }, [inputValue, setSearchQuery]);

    return (
        <View style={styles.searchBar}>
            <Pressable
                onPress={handleSubmit}
                testID="home-search-icon-button"
            >
                <SearchIcon />
            </Pressable>
            <TextInput
                placeholder="Search facilities, area..."
                placeholderTextColor={Colors.gray500}
                value={inputValue}
                onChangeText={setInputValue}
                onSubmitEditing={handleSubmit}
                returnKeyType="search"
                style={styles.searchInput}
                testID="home-search-input"
            />
        </View>
    );
}
