import { useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { deleteAccessToken } from '@/lib/secure-storage';

import BottomSheet from '@/components/common/BottomSheet';
import { useLogoutConfirmSheetStore } from '@/stores/useLogoutConfirmSheetStore';
import { useUserStore } from '@/stores/useUserStore';

import styles from './styles';

export default function LogoutConfirmSheet() {
    const router = useRouter();
    const isOpen = useLogoutConfirmSheetStore((state) => state.isOpen);
    const close = useLogoutConfirmSheetStore((state) => state.close);
    const clearUser = useUserStore((state) => state.clearUser);

    const handlePressConfirm = useCallback(() => {
        deleteAccessToken();
        clearUser();
        close();
        router.replace('/login');
    }, [close, clearUser, router]);

    return (
        <BottomSheet
            isOpen={isOpen}
            onClose={close}
            testID="home-logout-confirm-sheet"
        >
            <Text style={styles.title}>Log out of your account?</Text>
            <Text style={styles.subtitle}>You&apos;ll need to log in again to book courts.</Text>
            <View style={styles.actionsRow}>
                <Pressable
                    style={styles.cancelButton}
                    onPress={close}
                    testID="home-logout-cancel-button"
                >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </Pressable>
                <Pressable
                    style={styles.confirmButton}
                    onPress={handlePressConfirm}
                    testID="home-logout-confirm-button"
                >
                    <Text style={styles.confirmButtonText}>Log out</Text>
                </Pressable>
            </View>
        </BottomSheet>
    );
}
