import { FlatList, Pressable, Text } from 'react-native';

import { useSelectedCity } from '@/features/home/context/SelectedCityContext';
import { useCities } from '@/features/home/hooks/useCities';

import styles from './styles';

export default function CityFilterList() {
    const { data: cities } = useCities();
    const { selectedCity, setSelectedCity } = useSelectedCity();

    const isAllActive = !selectedCity;

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={cities ?? []}
            keyExtractor={(city) => city}
            contentContainerStyle={styles.listContent}
            ListHeaderComponent={
                <Pressable
                    style={[styles.chip, isAllActive && styles.chipActive]}
                    onPress={() => setSelectedCity(null)}
                    testID="home-city-filter-all"
                >
                    <Text style={[styles.chipText, isAllActive && styles.chipTextActive]}>All areas</Text>
                </Pressable>
            }
            renderItem={({ item }: { item: string }) => {
                const isActive = selectedCity === item;

                return (
                    <Pressable
                        style={[styles.chip, isActive && styles.chipActive]}
                        onPress={() => setSelectedCity(item)}
                        testID={`home-city-filter-${item}`}
                    >
                        <Text style={[styles.chipText, isActive && styles.chipTextActive]}>{item}</Text>
                    </Pressable>
                );
            }}
        />
    );
}
