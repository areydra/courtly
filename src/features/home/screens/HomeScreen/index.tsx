import { useCallback } from 'react';

import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SearchQueryProvider } from '@/features/home/context/SearchQueryContext';
import { SelectedCityProvider } from '@/features/home/context/SelectedCityContext';
import { SelectedSportProvider } from '@/features/home/context/SelectedSportContext';
import { useProfileSheetStore } from '@/stores/useProfileSheetStore';
import { useUserStore } from '@/stores/useUserStore';

import styles from './styles';
import BookingsTabIcon from './components/BookingsTabIcon';
import CityFilterList from './components/CityFilterList';
import FacilityList from './components/FacilityList';
import HomeTabIcon from './components/HomeTabIcon';
import LogoutConfirmSheet from './components/LogoutConfirmSheet';
import ProfileSheet from './components/ProfileSheet';
import SearchInput from './components/SearchInput';
import SportFilterList from './components/SportFilterList';

export default function HomeScreen() {
    return (
        <SelectedSportProvider>
            <SelectedCityProvider>
                <SearchQueryProvider>
                    <HomeScreenContent />
                </SearchQueryProvider>
            </SelectedCityProvider>
        </SelectedSportProvider>
    );
}

function HomeScreenContent() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const openProfileSheet = useProfileSheetStore((state) => state.open);
    const name = useUserStore((state) => state.name);

    const handlePressBookings = useCallback(() => {
        router.push('/my-bookings');
    }, [router]);

    return (
        <View
            style={styles.screen}
            testID="home-screen"
        >
            <StatusBar style="dark" />

            <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
                <View style={styles.searchRow}>
                    <SearchInput />
                    <Pressable
                        style={styles.avatarButton}
                        onPress={openProfileSheet}
                        testID="home-profile-button"
                    >
                        <Text style={styles.avatarButtonText}>{name?.charAt(0).toUpperCase() ?? '?'}</Text>
                    </Pressable>
                </View>

                <SportFilterList />

                <CityFilterList />
            </View>

            <FacilityList />

            <View style={[styles.tabBar, { paddingBottom: 8 + insets.bottom }]}>
                <View
                    style={styles.tabItem}
                    testID="home-tab-home"
                >
                    <HomeTabIcon />
                    <Text style={styles.tabLabelActive}>Home</Text>
                </View>
                <Pressable
                    style={styles.tabItem}
                    onPress={handlePressBookings}
                    testID="home-tab-bookings"
                >
                    <BookingsTabIcon />
                    <Text style={styles.tabLabelInactive}>Bookings</Text>
                </Pressable>
            </View>

            <ProfileSheet />
            <LogoutConfirmSheet />
        </View>
    );
}
