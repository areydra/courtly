import { useMemo, useState } from 'react';

import { FlatList, Pressable, Text, View } from 'react-native';

import type { Court } from '@/features/home/types/facility-detail.types';
import { capitalize } from '@/utils/format';

import styles from './styles';
import CourtCard from './components/CourtCard';

interface CourtsSectionProps {
    courts: Court[];
    sports: string[];
}

export default function CourtsSection({ courts, sports }: CourtsSectionProps) {
    const [activeSport, setActiveSport] = useState('all');

    const filteredCourts = useMemo(
        () => courts.filter((court) => activeSport === 'all' || court.sport === activeSport),
        [courts, activeSport],
    );

    const isAllActive = activeSport === 'all';

    return (
        <View>
            <Text style={styles.heading}>Courts ({courts.length})</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={sports}
                keyExtractor={(sport) => sport}
                contentContainerStyle={styles.filterRow}
                ListHeaderComponent={
                    <Pressable
                        style={[styles.chip, isAllActive && styles.chipActive]}
                        onPress={() => setActiveSport('all')}
                        testID="facility-detail-court-filter-all"
                    >
                        <Text style={[styles.chipText, isAllActive && styles.chipTextActive]}>All</Text>
                    </Pressable>
                }
                renderItem={({ item: sport }: { item: string }) => {
                    const isActive = activeSport === sport;

                    return (
                        <Pressable
                            style={[styles.chip, isActive && styles.chipActive]}
                            onPress={() => setActiveSport(sport)}
                            testID={`facility-detail-court-filter-${sport}`}
                        >
                            <Text style={[styles.chipText, isActive && styles.chipTextActive]}>{capitalize(sport)}</Text>
                        </Pressable>
                    );
                }}
            />

            <FlatList
                scrollEnabled={false}
                data={filteredCourts}
                keyExtractor={(court) => court.id}
                contentContainerStyle={styles.list}
                renderItem={({ item: court }: { item: Court }) => <CourtCard court={court} />}
            />
        </View>
    );
}
