import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { formatRupiah } from '@/utils/format';

import styles from './styles';

interface BookingFooterProps {
    startingPrice: number;
}

export default function BookingFooter({ startingPrice }: BookingFooterProps) {
    const { bottom } = useSafeAreaInsets();

    return (
        <View style={[styles.footer, { paddingBottom: 14 + bottom }]}>
            <View>
                <Text style={styles.label}>Starting from</Text>
                <Text style={styles.price}>{formatRupiah(startingPrice)}/hr</Text>
            </View>
            <Pressable
                style={styles.button}
                testID="facility-detail-book-button"
            >
                <Text style={styles.buttonText}>Book a court</Text>
            </Pressable>
        </View>
    );
}
