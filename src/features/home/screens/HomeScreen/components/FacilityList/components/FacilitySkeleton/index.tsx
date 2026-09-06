import { View } from 'react-native';

import styles from './styles';

export default function FacilitySkeleton() {
    return (
        <View
            style={styles.card}
            testID="home-facility-skeleton"
        >
            <View style={styles.image} />

            <View style={styles.content}>
                <View style={[styles.bar, styles.barWide]} />
                <View style={[styles.bar, styles.barMedium]} />
                <View style={styles.tagsRow}>
                    <View style={styles.tag} />
                    <View style={styles.tag} />
                </View>
            </View>
        </View>
    );
}
