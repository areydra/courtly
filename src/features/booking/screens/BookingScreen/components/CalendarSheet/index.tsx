import { useEffect, useRef } from 'react';

import { Pressable, Text, View } from 'react-native';
import DateTimePicker from '@expo/ui/community/datetime-picker';

import BottomSheet from '@/components/common/BottomSheet';
import { Colors } from '@/constants/theme';
import { fromUtcMidnight, toUtcMidnight } from '@/features/booking/utils/date';

import styles from './styles';
import CloseIcon from '../CloseIcon';

interface CalendarSheetProps {
    isOpen: boolean;
    onClose: () => void;
    selectedDate: Date;
    minimumDate: Date;
    onSelectDate: (date: Date) => void;
}

// Android's native picker fires onValueChange once on mount with its own initial value,
// before any user interaction. A real tap can't land within this window, so ignore it.
const MOUNT_SYNC_GUARD_MS = 500;

export default function CalendarSheet({ isOpen, onClose, selectedDate, minimumDate, onSelectDate }: CalendarSheetProps) {
    const isReadyRef = useRef(false);

    useEffect(function guardAgainstInitialSyncEvent() {
        if (!isOpen) {
            isReadyRef.current = false;
            return;
        }

        const timer = setTimeout(() => {
            isReadyRef.current = true;
        }, MOUNT_SYNC_GUARD_MS);

        return () => clearTimeout(timer);
    }, [isOpen]);

    const handleValueChange = (_event: unknown, date: Date) => {
        if (!isReadyRef.current) {
            return;
        }
        onSelectDate(fromUtcMidnight(date));
    };

    return (
        <BottomSheet
            isOpen={isOpen}
            onClose={onClose}
            testID="booking-calendar-sheet"
        >
            <View style={styles.headerRow}>
                <Text style={styles.title}>Select date</Text>
                <Pressable
                    style={styles.closeButton}
                    onPress={onClose}
                    testID="booking-calendar-close-button"
                >
                    <CloseIcon />
                </Pressable>
            </View>

            <DateTimePicker
                value={toUtcMidnight(selectedDate)}
                mode="date"
                display="inline"
                presentation="inline"
                minimumDate={toUtcMidnight(minimumDate)}
                accentColor={Colors.teal700}
                onValueChange={handleValueChange}
                testID="booking-calendar-picker"
            />
        </BottomSheet>
    );
}
