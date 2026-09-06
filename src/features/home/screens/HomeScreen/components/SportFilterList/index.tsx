import { FlatList, Pressable, Text } from 'react-native';

import { useSelectedSport } from '@/features/home/context/SelectedSportContext';
import { useSports } from '@/features/home/hooks/useSports';
import type { Sport } from '@/features/home/types/sport.types';

import styles from './styles';

export default function SportFilterList() {
    const { data: sports } = useSports();
    const { selectedSport, setSelectedSport } = useSelectedSport();

    const isAllActive = !selectedSport;

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={sports ?? []}
            keyExtractor={(sport) => sport.id}
            contentContainerStyle={styles.listContent}
            ListHeaderComponent={
                <Pressable
                    style={[styles.chip, isAllActive && styles.chipActive]}
                    onPress={() => setSelectedSport(null)}
                    testID="home-sport-filter-all"
                >
                    <Text style={[styles.chipText, isAllActive && styles.chipTextActive]}>All</Text>
                </Pressable>
            }
            renderItem={({ item }: { item: Sport }) => {
                const isActive = selectedSport?.id === item.id;

                return (
                    <Pressable
                        style={[styles.chip, isActive && styles.chipActive]}
                        onPress={() => setSelectedSport(item)}
                        testID={`home-sport-filter-${item.slug}`}
                    >
                        <Text style={[styles.chipText, isActive && styles.chipTextActive]}>{item.name}</Text>
                    </Pressable>
                );
            }}
        />
    );
}
