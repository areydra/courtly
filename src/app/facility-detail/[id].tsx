import { useLocalSearchParams } from 'expo-router';

import FacilityDetailScreen from '@/features/home/screens/FacilityDetailScreen';

export default function FacilityDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();

    return <FacilityDetailScreen id={id} />;
}
