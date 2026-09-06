import { Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SearchQueryProvider } from '@/features/home/context/SearchQueryContext';
import { SelectedCityProvider } from '@/features/home/context/SelectedCityContext';
import { SelectedSportProvider } from '@/features/home/context/SelectedSportContext';
import { useProfileSheetStore } from '@/stores/useProfileSheetStore';
import { useUserStore } from '@/stores/useUserStore';

import styles from './styles';
import CityFilterList from './components/CityFilterList';
import FacilityList from './components/FacilityList';
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
    const insets = useSafeAreaInsets();
    const openProfileSheet = useProfileSheetStore((state) => state.open);
    const name = useUserStore((state) => state.name);

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

            <ProfileSheet />
            <LogoutConfirmSheet />
        </View>
    );
}
