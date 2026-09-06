import { useCallback } from 'react';

import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { formatRupiah } from '@/utils/format';

import styles from './styles';

interface BookingFooterProps {
    facilityId: string;
    facilityName: string;
    startingPrice: number;
}

export default function BookingFooter({ facilityId, facilityName, startingPrice }: BookingFooterProps) {
    const router = useRouter();
    const { bottom } = useSafeAreaInsets();

    const handlePressBook = useCallback(() => {
        router.push({
            pathname: '/booking/[facilityId]',
            params: { facilityId, facilityName },
        });
    }, [router, facilityId, facilityName]);

    return (
        <View style={[styles.footer, { paddingBottom: 14 + bottom }]}>
            <View>
                <Text style={styles.label}>Starting from</Text>
                <Text style={styles.price}>{formatRupiah(startingPrice)}/hr</Text>
            </View>
            <Pressable
                style={styles.button}
                onPress={handlePressBook}
                testID="facility-detail-book-button"
            >
                <Text style={styles.buttonText}>Book a court</Text>
            </Pressable>
        </View>
    );
}
