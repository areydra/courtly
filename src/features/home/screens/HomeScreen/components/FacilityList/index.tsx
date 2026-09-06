import { useMemo } from 'react';

import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';
import { useSearchQuery } from '@/features/home/context/SearchQueryContext';
import { useSelectedCity } from '@/features/home/context/SelectedCityContext';
import { useSelectedSport } from '@/features/home/context/SelectedSportContext';
import { useFacilities } from '@/features/home/hooks/useFacilities';
import type { Facility } from '@/features/home/types/facility.types';

import styles from './styles';
import FacilityCard from './components/FacilityCard';
import FacilitySkeleton from './components/FacilitySkeleton';

const SKELETON_COUNT = 3;
const SKELETON_ITEMS = Array.from({ length: SKELETON_COUNT }, (_, index) => index);

export default function FacilityList() {
    const { selectedSport } = useSelectedSport();
    const { selectedCity } = useSelectedCity();
    const { searchQuery } = useSearchQuery();

    const {
        data,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useFacilities({
        sport: selectedSport?.slug,
        city: selectedCity ?? undefined,
        search: searchQuery.trim() || undefined,
    });

    const facilities = useMemo(() => data?.pages.flatMap((page) => page.data) ?? [], [data]);

    const handleEndReached = () => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    };

    if (isLoading) {
        return (
            <FlatList
                style={styles.list}
                contentContainerStyle={styles.listContent}
                data={SKELETON_ITEMS}
                keyExtractor={(item) => `facility-skeleton-${item}`}
                renderItem={() => <FacilitySkeleton />}
            />
        );
    }

    return (
        <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContent}
            data={facilities}
            keyExtractor={(facility: Facility) => facility.id}
            renderItem={({ item }: { item: Facility }) => <FacilityCard facility={item} />}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5}
            ListHeaderComponent={
                <Text style={styles.resultsLabel}>{facilities.length} facilities found</Text>
            }
            ListEmptyComponent={
                <Text
                    style={styles.noResultsText}
                    testID="home-no-results"
                >
                    No facilities match this filter.
                </Text>
            }
            ListFooterComponent={
                isFetchingNextPage ? (
                    <View
                        style={styles.footerLoading}
                        testID="home-facility-list-loading-more"
                    >
                        <ActivityIndicator color={Colors.teal700} />
                    </View>
                ) : null
            }
        />
    );
}
