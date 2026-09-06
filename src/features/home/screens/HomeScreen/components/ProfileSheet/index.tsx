import { useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';

import LogoutIcon from '../LogoutIcon';
import BottomSheet from '@/components/common/BottomSheet';
import { useLogoutConfirmSheetStore } from '@/stores/useLogoutConfirmSheetStore';
import { useProfileSheetStore } from '@/stores/useProfileSheetStore';
import { useUserStore } from '@/stores/useUserStore';

import styles from './styles';

export default function ProfileSheet() {
    const isOpen = useProfileSheetStore((state) => state.isOpen);
    const close = useProfileSheetStore((state) => state.close);
    const name = useUserStore((state) => state.name);
    const email = useUserStore((state) => state.email);

    const closeProfileSheet = useProfileSheetStore((state) => state.close);
    const openLogoutConfirmSheet = useLogoutConfirmSheetStore((state) => state.open);

    const handlePressLogout = useCallback(() => {
        closeProfileSheet();
        setTimeout(openLogoutConfirmSheet, 400);
    }, [closeProfileSheet, openLogoutConfirmSheet]);

    return (
        <BottomSheet
            isOpen={isOpen}
            onClose={close}
            testID="home-profile-sheet"
        >
            <View style={styles.profileSection}>
                <View style={styles.avatarLarge}>
                    <Text style={styles.avatarLargeText}>{name?.charAt(0).toUpperCase() ?? '?'}</Text>
                </View>
                <View style={styles.profileTextGroup}>
                    <Text style={styles.profileName}>{name}</Text>
                    <Text style={styles.profileEmail}>{email}</Text>
                </View>
            </View>
            <Pressable
                style={styles.logoutButton}
                onPress={handlePressLogout}
                testID="home-logout-button"
            >
                <LogoutIcon />
                <Text style={styles.logoutButtonText}>Log out</Text>
            </Pressable>
        </BottomSheet>
    );
}
