import { Pressable, Text, View } from 'react-native';

import styles from './styles';

interface DetailStepProps {
    statusLabel: string;
    facilityName: string;
    courtName: string;
    dateTimeLabel: string;
    bookingReference: string;
    priceLabel: string;
    showCancelButton: boolean;
    onPressCancel: () => void;
}

export default function DetailStep({
    statusLabel,
    facilityName,
    courtName,
    dateTimeLabel,
    bookingReference,
    priceLabel,
    showCancelButton,
    onPressCancel,
}: DetailStepProps) {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.title}>Booking details</Text>
                <Text style={styles.statusBadge}>{statusLabel}</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Facility</Text>
                    <Text style={styles.rowValue}>{facilityName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Court</Text>
                    <Text style={styles.rowValue}>{courtName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Date & time</Text>
                    <Text style={styles.rowValue}>{dateTimeLabel}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Reference</Text>
                    <Text style={styles.rowValue}>{bookingReference}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>{priceLabel}</Text>
                </View>
            </View>

            {showCancelButton && (
                <Pressable
                    style={styles.cancelButton}
                    onPress={onPressCancel}
                    testID="my-bookings-cancel-button"
                >
                    <Text style={styles.cancelButtonText}>Cancel booking</Text>
                </Pressable>
            )}
        </View>
    );
}
