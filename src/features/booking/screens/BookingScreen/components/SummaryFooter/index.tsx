import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles';

interface SummaryFooterProps {
    summaryLabel: string;
    summaryValue: string;
    continueDisabled: boolean;
    onContinue: () => void;
}

export default function SummaryFooter({ summaryLabel, summaryValue, continueDisabled, onContinue }: SummaryFooterProps) {
    const { bottom } = useSafeAreaInsets();

    return (
        <View style={[styles.footer, { paddingBottom: 14 + bottom }]}>
            <View>
                <Text style={styles.label}>{summaryLabel}</Text>
                <Text style={styles.value}>{summaryValue}</Text>
            </View>
            <Pressable
                style={[styles.button, continueDisabled && styles.buttonDisabled]}
                disabled={continueDisabled}
                onPress={onContinue}
                testID="booking-continue-button"
            >
                <Text style={[styles.buttonText, continueDisabled && styles.buttonTextDisabled]}>Continue</Text>
            </Pressable>
        </View>
    );
}
