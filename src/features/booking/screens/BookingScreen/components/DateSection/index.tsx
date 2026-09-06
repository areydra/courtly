import { FlatList, Pressable, Text, View } from 'react-native';

import type { DateOption } from '../../utils';
import styles from './styles';
import CalendarIcon from '../CalendarIcon';

interface DateSectionProps {
    dateOptions: DateOption[];
    selectedDateStr: string;
    selectedDateLabel: string;
    onSelectDate: (iso: string) => void;
    onOpenCalendar: () => void;
}

export default function DateSection({
    dateOptions,
    selectedDateStr,
    selectedDateLabel,
    onSelectDate,
    onOpenCalendar,
}: DateSectionProps) {
    return (
        <View>
            <View style={styles.labelRow}>
                <Text style={styles.label}>Date</Text>
                <Pressable
                    style={styles.toggleButton}
                    onPress={onOpenCalendar}
                    testID="booking-toggle-calendar"
                >
                    <CalendarIcon />
                    <Text style={styles.toggleButtonText}>{selectedDateLabel}</Text>
                </Pressable>
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dateOptions}
                keyExtractor={(option) => option.iso}
                contentContainerStyle={styles.list}
                renderItem={({ item }: { item: DateOption }) => {
                    const isActive = item.iso === selectedDateStr;

                    return (
                        <Pressable
                            style={[styles.chip, isActive && styles.chipActive]}
                            onPress={() => onSelectDate(item.iso)}
                            testID={`booking-date-${item.iso}`}
                        >
                            <Text style={[styles.chipDow, isActive && styles.chipTextActive]}>{item.dow}</Text>
                            <Text style={[styles.chipDay, isActive && styles.chipTextActive]}>{item.day}</Text>
                            <Text style={[styles.chipMonth, isActive && styles.chipTextActive]}>{item.month}</Text>
                        </Pressable>
                    );
                }}
            />
        </View>
    );
}
