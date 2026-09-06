import { Pressable, Text, View } from 'react-native';

import styles from './styles';
import AlertIcon from './AlertIcon';

interface ErrorStepProps {
    message: string;
    onDismiss: () => void;
}

export default function ErrorStep({ message, onDismiss }: ErrorStepProps) {
    return (
        <View
            style={styles.container}
            testID="booking-error-step"
        >
            <View style={styles.iconCircle}>
                <AlertIcon />
            </View>

            <View style={styles.headingBlock}>
                <Text style={styles.heading}>Booking failed</Text>
                <Text style={styles.message}>{message}</Text>
            </View>

            <Pressable
                style={styles.primaryButton}
                onPress={onDismiss}
                testID="booking-error-dismiss-button"
            >
                <Text style={styles.primaryButtonText}>Choose another time</Text>
            </Pressable>
        </View>
    );
}
