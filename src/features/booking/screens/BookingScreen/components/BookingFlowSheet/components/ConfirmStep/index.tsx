import { Pressable, Text, View } from 'react-native';

import styles from './styles';

interface ConfirmStepProps {
    facilityName: string;
    courtName: string;
    dateLabel: string;
    timeLabel: string;
    priceLabel: string;
    onCancel: () => void;
    onConfirm: () => void;
}

export default function ConfirmStep({
    facilityName,
    courtName,
    dateLabel,
    timeLabel,
    priceLabel,
    onCancel,
    onConfirm,
}: ConfirmStepProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Confirm your booking</Text>

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
                    <Text style={styles.rowLabel}>Date</Text>
                    <Text style={styles.rowValue}>{dateLabel}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Time</Text>
                    <Text style={styles.rowValue}>{timeLabel}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.row}>
                    <Text style={styles.priceLabel}>Price</Text>
                    <Text style={styles.priceValue}>{priceLabel}</Text>
                </View>
            </View>

            <Text style={styles.note}>Final total (incl. service fee) will be shown after confirmation.</Text>

            <View style={styles.actionsRow}>
                <Pressable
                    style={styles.cancelButton}
                    onPress={onCancel}
                    testID="booking-confirm-cancel-button"
                >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </Pressable>
                <Pressable
                    style={styles.confirmButton}
                    onPress={onConfirm}
                    testID="booking-confirm-accept-button"
                >
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </Pressable>
            </View>
        </View>
    );
}
