import { Pressable, Text, View } from 'react-native';

import type { BookingResult } from '@/features/booking/types/court.types';

import styles from './styles';
import CheckCircleIcon from './CheckCircleIcon';

interface SuccessStepProps {
    bookingResult: BookingResult;
    onDone: () => void;
    onSeeBookings: () => void;
}

export default function SuccessStep({ bookingResult, onDone, onSeeBookings }: SuccessStepProps) {
    return (
        <View
            style={styles.container}
            testID="booking-success-step"
        >
            <View style={styles.iconCircle}>
                <CheckCircleIcon />
            </View>

            <View style={styles.headingBlock}>
                <Text style={styles.heading}>Booking confirmed</Text>
                <Text style={styles.refText}>Ref no. {bookingResult.bookingReference}</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Status</Text>
                    <Text style={styles.statusValue}>{bookingResult.status}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Facility</Text>
                    <Text style={styles.rowValue}>{bookingResult.facilityName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Court</Text>
                    <Text style={styles.rowValue}>{bookingResult.courtName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Date</Text>
                    <Text style={styles.rowValue}>{bookingResult.dateLabel}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Time</Text>
                    <Text style={styles.rowValue}>{bookingResult.timeLabel}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Price</Text>
                    <Text style={styles.rowValue}>{bookingResult.priceLabel}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Service fee</Text>
                    <Text style={styles.rowValue}>{bookingResult.serviceFeeLabel}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.totalLabel}>Total paid</Text>
                    <Text style={styles.totalValue}>{bookingResult.totalLabel}</Text>
                </View>
            </View>

            <View style={styles.actionsRow}>
                <Pressable
                    style={styles.secondaryButton}
                    onPress={onSeeBookings}
                    testID="booking-see-bookings-button"
                >
                    <Text style={styles.secondaryButtonText}>See bookings</Text>
                </Pressable>
                <Pressable
                    style={styles.primaryButton}
                    onPress={onDone}
                    testID="booking-done-button"
                >
                    <Text style={styles.primaryButtonText}>Done</Text>
                </Pressable>
            </View>
        </View>
    );
}
