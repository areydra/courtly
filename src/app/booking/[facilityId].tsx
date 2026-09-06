import { useLocalSearchParams } from 'expo-router';

import BookingScreen from '@/features/booking/screens/BookingScreen';

export default function Booking() {
    const { facilityId, facilityName } = useLocalSearchParams<{ facilityId: string; facilityName?: string }>();

    return (
        <BookingScreen
            facilityId={facilityId}
            facilityName={facilityName ?? ''}
        />
    );
}
