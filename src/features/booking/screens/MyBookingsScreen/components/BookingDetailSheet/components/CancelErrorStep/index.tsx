import { Pressable, Text, View } from 'react-native';

import styles from './styles';
import AlertIcon from './AlertIcon';

interface CancelErrorStepProps {
    message: string;
    onDismiss: () => void;
}

export default function CancelErrorStep({ message, onDismiss }: CancelErrorStepProps) {
    return (
        <View
            style={styles.container}
            testID="my-bookings-cancel-error-step"
        >
            <View style={styles.iconCircle}>
                <AlertIcon />
            </View>

            <View style={styles.headingBlock}>
                <Text style={styles.heading}>Cancellation failed</Text>
                <Text style={styles.message}>{message}</Text>
            </View>

            <Pressable
                style={styles.primaryButton}
                onPress={onDismiss}
                testID="my-bookings-cancel-error-dismiss-button"
            >
                <Text style={styles.primaryButtonText}>Back to details</Text>
            </Pressable>
        </View>
    );
}
