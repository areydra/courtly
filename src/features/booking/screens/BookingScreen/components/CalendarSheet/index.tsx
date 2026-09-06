import { Pressable, Text, View } from 'react-native';
import DateTimePicker from '@expo/ui/community/datetime-picker';

import BottomSheet from '@/components/common/BottomSheet';
import { Colors } from '@/constants/theme';

import styles from './styles';
import CloseIcon from '../CloseIcon';

interface CalendarSheetProps {
    isOpen: boolean;
    onClose: () => void;
    selectedDate: Date;
    minimumDate: Date;
    onSelectDate: (date: Date) => void;
}

export default function CalendarSheet({ isOpen, onClose, selectedDate, minimumDate, onSelectDate }: CalendarSheetProps) {
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
                value={selectedDate}
                mode="date"
                display="inline"
                presentation="inline"
                minimumDate={minimumDate}
                accentColor={Colors.teal700}
                onValueChange={(_event, date) => onSelectDate(date)}
                testID="booking-calendar-picker"
            />
        </BottomSheet>
    );
}
