import { View } from 'react-native';

import styles from './styles';

export default function BookingCardSkeleton() {
    return (
        <View
            style={styles.card}
            testID="my-bookings-skeleton"
        >
            <View style={styles.thumbnail} />
            <View style={styles.info}>
                <View style={[styles.bar, styles.barWide]} />
                <View style={[styles.bar, styles.barMedium]} />
                <View style={[styles.bar, styles.barMedium]} />
                <View style={styles.bottomRow}>
                    <View style={[styles.bar, styles.barNarrow]} />
                    <View style={[styles.bar, styles.barNarrow]} />
                </View>
            </View>
        </View>
    );
}
