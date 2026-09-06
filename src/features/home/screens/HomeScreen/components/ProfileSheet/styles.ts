import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    profileSection: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
    },
    avatarLarge: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: Colors.teal700,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarLargeText: {
        color: Colors.cream50,
        fontFamily: Fonts.ManropeExtraBold,
        fontSize: 24,
    },
    profileTextGroup: {
        alignItems: 'center',
    },
    profileName: {
        fontSize: 16,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    profileEmail: {
        marginTop: 2,
        fontSize: 13,
        color: Colors.slate600,
        fontFamily: Fonts.ManropeMedium,
    },
    logoutButton: {
        width: '100%',
        paddingVertical: 14,
        borderWidth: 1.5,
        borderColor: Colors.redTint200,
        borderRadius: 12,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    logoutButtonText: {
        color: Colors.red700,
        fontSize: 14,
        fontFamily: Fonts.ManropeBold,
    },
});

export default styles;
