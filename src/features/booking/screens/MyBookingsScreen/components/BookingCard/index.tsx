import { Image, Pressable, Text, View } from 'react-native';

import type { BookingListItem } from '@/features/booking/types/my-booking.types';
import { formatRupiah } from '@/utils/format';

import type { StatusLabel } from '../../utils';
import { formatDateTimeLabel } from '../../utils';
import styles from './styles';

interface BookingCardProps {
    booking: BookingListItem;
    statusLabel: StatusLabel;
    onPress: () => void;
}

const STATUS_BADGE_STYLES = {
    Upcoming: { badge: styles.badgeUpcoming, text: styles.badgeTextUpcoming },
    Past: { badge: styles.badgePast, text: styles.badgeTextPast },
    Cancelled: { badge: styles.badgeCancelled, text: styles.badgeTextCancelled },
} as const;

export default function BookingCard({ booking, statusLabel, onPress }: BookingCardProps) {
    const badgeStyle = STATUS_BADGE_STYLES[statusLabel];

    return (
        <Pressable
            style={styles.card}
            onPress={onPress}
            testID={`my-bookings-card-${booking.id}`}
        >
            <Image
                source={{ uri: booking.facility.imageUrl }}
                style={styles.thumbnail}
            />

            <View style={styles.info}>
                <View style={styles.titleRow}>
                    <Text
                        style={styles.facilityName}
                        numberOfLines={1}
                    >
                        {booking.facility.name}
                    </Text>
                    <Text style={[styles.badge, badgeStyle.badge, badgeStyle.text]}>{statusLabel}</Text>
                </View>

                <Text style={styles.courtName}>{booking.court.name}</Text>
                <Text style={styles.dateTime}>{formatDateTimeLabel(booking)}</Text>

                <View style={styles.bottomRow}>
                    <Text style={styles.reference}>{booking.bookingReference}</Text>
                    <Text style={styles.price}>{formatRupiah(booking.totalPrice)}</Text>
                </View>
            </View>
        </Pressable>
    );
}
