import { Pressable, Text, View } from 'react-native';

import type { CancelResult } from '@/features/booking/types/my-booking.types';

import styles from './styles';
import CancelIcon from './CancelIcon';

interface CancelledStepProps {
    cancelResult: CancelResult;
    onDone: () => void;
}

export default function CancelledStep({ cancelResult, onDone }: CancelledStepProps) {
    return (
        <View
            style={styles.container}
            testID="my-bookings-cancelled-step"
        >
            <View style={styles.iconCircle}>
                <CancelIcon />
            </View>

            <View style={styles.headingBlock}>
                <Text style={styles.heading}>Booking cancelled</Text>
                <Text style={styles.refText}>Ref no. {cancelResult.bookingReference}</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Facility</Text>
                    <Text style={styles.rowValue}>{cancelResult.facilityName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Court</Text>
                    <Text style={styles.rowValue}>{cancelResult.courtName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Date & time</Text>
                    <Text style={styles.rowValue}>{cancelResult.dateTimeLabel}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Price</Text>
                    <Text style={styles.rowValue}>{cancelResult.priceLabel}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Service fee</Text>
                    <Text style={styles.rowValue}>{cancelResult.serviceFeeLabel}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>{cancelResult.totalLabel}</Text>
                </View>
            </View>

            <Pressable
                style={styles.doneButton}
                onPress={onDone}
                testID="my-bookings-cancel-done-button"
            >
                <Text style={styles.doneButtonText}>Done</Text>
            </Pressable>
        </View>
    );
}
