import { Pressable, Text, View } from 'react-native';

import styles from './styles';

interface ConfirmCancelStepProps {
    onKeepBooking: () => void;
    onConfirmCancel: () => void;
}

export default function ConfirmCancelStep({ onKeepBooking, onConfirmCancel }: ConfirmCancelStepProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cancel this booking?</Text>
            <Text style={styles.message}>
                This action can&apos;t be undone. Refund policy applies based on the facility&apos;s cancellation
                terms.
            </Text>

            <View style={styles.actionsRow}>
                <Pressable
                    style={styles.keepButton}
                    onPress={onKeepBooking}
                    testID="my-bookings-keep-button"
                >
                    <Text style={styles.keepButtonText}>Keep booking</Text>
                </Pressable>
                <Pressable
                    style={styles.confirmButton}
                    onPress={onConfirmCancel}
                    testID="my-bookings-confirm-cancel-button"
                >
                    <Text style={styles.confirmButtonText}>Cancel booking</Text>
                </Pressable>
            </View>
        </View>
    );
}
