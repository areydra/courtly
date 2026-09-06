import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackIcon from '@/components/BackIcon';

import styles from './styles';

interface HeaderProps {
    facilityName: string;
}

export default function Header({ facilityName }: HeaderProps) {
    const router = useRouter();
    const { top } = useSafeAreaInsets();

    return (
        <View style={[styles.header, { paddingTop: top + 12 }]}>
            <Pressable
                style={styles.backButton}
                onPress={() => router.back()}
                testID="booking-back-button"
            >
                <BackIcon />
            </Pressable>
            <View>
                <Text style={styles.title}>Book a court</Text>
                <Text style={styles.subtitle}>{facilityName}</Text>
            </View>
        </View>
    );
}
