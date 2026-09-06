import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackIcon from '@/components/BackIcon';
import { Colors } from '@/constants/theme';
import { useFacility } from '@/features/home/hooks/useFacility';

import styles from './styles';
import AmenitiesSection from './components/AmenitiesSection';
import BookingFooter from './components/BookingFooter';
import CourtsSection from './components/CourtsSection';
import FacilityHeader from './components/FacilityHeader';
import HeroImage from './components/HeroImage';

interface FacilityDetailScreenProps {
    id: string;
}

export default function FacilityDetailScreen({ id }: FacilityDetailScreenProps) {
    const router = useRouter();
    const { top } = useSafeAreaInsets();
    const { data: facility, isLoading, isError } = useFacility(id);

    if (isLoading) {
        return (
            <View
                style={styles.screen}
                testID="facility-detail-screen"
            >
                <StatusBar style="dark" />
                <View style={styles.centered}>
                    <ActivityIndicator
                        color={Colors.teal700}
                        testID="facility-detail-loading"
                    />
                </View>
            </View>
        );
    }

    if (isError || !facility) {
        return (
            <View
                style={styles.screen}
                testID="facility-detail-screen"
            >
                <StatusBar style="dark" />
                <Pressable
                    style={[styles.topBackButton, { top: top + 12 }]}
                    onPress={() => router.back()}
                    testID="facility-detail-back-button"
                >
                    <BackIcon />
                </Pressable>
                <View style={styles.centered}>
                    <Text
                        style={styles.errorText}
                        testID="facility-detail-error"
                    >
                        Failed to load facility details.
                    </Text>
                </View>
            </View>
        );
    }

    const startingPrice = Math.min(...facility.courts.map((court) => court.basePrice));

    return (
        <View
            style={styles.screen}
            testID="facility-detail-screen"
        >
            <StatusBar style="light" />

            <ScrollView
                style={styles.screen}
                contentContainerStyle={styles.scrollContent}
            >
                <HeroImage imageUrl={facility.imageUrl} />

                <View style={styles.content}>
                    <FacilityHeader
                        name={facility.name}
                        rating={facility.rating}
                        address={facility.address}
                        reviewCount={facility.reviewCount}
                        sports={facility.sports}
                    />

                    <View style={styles.divider} />

                    <View>
                        <Text style={styles.aboutHeading}>About</Text>
                        <Text style={styles.aboutText}>{facility.description}</Text>
                    </View>

                    <AmenitiesSection amenities={facility.amenities} />

                    <CourtsSection
                        courts={facility.courts}
                        sports={facility.sports}
                    />
                </View>
            </ScrollView>

            <BookingFooter
                facilityId={facility.id}
                facilityName={facility.name}
                startingPrice={startingPrice}
            />
        </View>
    );
}
