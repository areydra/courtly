import { FlatList, Pressable, Text, View } from 'react-native';

import type { Slot } from '@/features/booking/types/court.types';
import { formatRupiah } from '@/utils/format';

import styles from './styles';

interface TimeSlotsSectionProps {
    slots: Slot[];
    selectedTime: string | null;
    onSelectSlot: (startTime: string) => void;
}

export default function TimeSlotsSection({ slots, selectedTime, onSelectSlot }: TimeSlotsSectionProps) {
    return (
        <View>
            <View style={styles.labelRow}>
                <Text style={styles.label}>Available times</Text>
                <View style={styles.legendRow}>
                    <View style={styles.legendItem}>
                        <View style={styles.legendSwatchOpen} />
                        <Text style={styles.legendText}>Open</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={styles.legendSwatchBooked} />
                        <Text style={styles.legendText}>Booked</Text>
                    </View>
                </View>
            </View>

            <FlatList
                scrollEnabled={false}
                numColumns={3}
                data={slots}
                keyExtractor={(slot) => slot.startTime}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.grid}
                renderItem={({ item: slot }: { item: Slot }) => {
                    const isSelected = selectedTime === slot.startTime;
                    const isDisabled = !slot.available;

                    return (
                        <Pressable
                            style={[styles.slot, isDisabled && styles.slotDisabled, isSelected && styles.slotSelected]}
                            disabled={isDisabled}
                            onPress={() => onSelectSlot(slot.startTime)}
                            testID={`booking-slot-${slot.startTime}`}
                        >
                            <Text
                                style={[
                                    styles.slotTime,
                                    isDisabled && styles.slotTextDisabled,
                                    isSelected && styles.slotTextSelected,
                                ]}
                            >
                                {slot.startTime}
                            </Text>
                            <Text
                                style={[
                                    styles.slotPrice,
                                    isDisabled && styles.slotTextDisabled,
                                    isSelected && styles.slotTextSelected,
                                ]}
                            >
                                {formatRupiah(slot.price)}
                            </Text>
                        </Pressable>
                    );
                }}
            />
        </View>
    );
}
