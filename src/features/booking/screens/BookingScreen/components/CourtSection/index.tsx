import { FlatList, Pressable, Text, View } from 'react-native';

import type { Court } from '@/features/booking/types/court.types';

import styles from './styles';

interface CourtSectionProps {
    courts: Court[];
    activeCourtId: string;
    onSelectCourt: (id: string) => void;
}

export default function CourtSection({ courts, activeCourtId, onSelectCourt }: CourtSectionProps) {
    return (
        <View>
            <Text style={styles.label}>Court</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={courts}
                keyExtractor={(court) => court.id}
                contentContainerStyle={styles.list}
                renderItem={({ item: court }: { item: Court }) => {
                    const isActive = court.id === activeCourtId;

                    return (
                        <Pressable
                            style={[styles.chip, isActive && styles.chipActive]}
                            onPress={() => onSelectCourt(court.id)}
                            testID={`booking-court-${court.id}`}
                        >
                            <Text style={[styles.chipText, isActive && styles.chipTextActive]}>{court.name}</Text>
                        </Pressable>
                    );
                }}
            />
        </View>
    );
}
