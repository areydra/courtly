import { Text, View } from 'react-native';

import type { Court } from '@/features/home/types/facility-detail.types';
import { formatRupiah } from '@/utils/format';

import styles from './styles';

interface CourtCardProps {
    court: Court;
}

function titleCase(value: string): string {
    return value
        .split(' ')
        .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
        .join(' ');
}

export default function CourtCard({ court }: CourtCardProps) {
    return (
        <View
            style={styles.card}
            testID={`facility-detail-court-${court.id}`}
        >
            <View style={styles.headerRow}>
                <Text style={styles.name}>{court.name}</Text>
                <Text style={styles.price}>{formatRupiah(court.basePrice)}/hr</Text>
            </View>
            <View style={styles.badgeRow}>
                <Text style={styles.badge}>{titleCase(court.type)}</Text>
                <Text style={styles.badge}>{court.indoor ? 'Indoor' : 'Outdoor'}</Text>
            </View>
        </View>
    );
}
