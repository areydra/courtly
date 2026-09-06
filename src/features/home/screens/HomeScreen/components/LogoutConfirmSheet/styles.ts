import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    subtitle: {
        fontSize: 13,
        lineHeight: 19.5,
        color: Colors.slate600,
        fontFamily: Fonts.ManropeMedium,
    },
    actionsRow: {
        flexDirection: 'row',
        gap: 10,
    },
    cancelButton: {
        flex: 1,
        paddingVertical: 13,
        borderWidth: 1.5,
        borderColor: Colors.gray200,
        borderRadius: 12,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: Colors.ink900,
        fontSize: 14,
        fontFamily: Fonts.ManropeBold,
    },
    confirmButton: {
        flex: 1,
        paddingVertical: 13,
        borderRadius: 12,
        backgroundColor: Colors.red700,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmButtonText: {
        color: Colors.cream50,
        fontSize: 14,
        fontFamily: Fonts.ManropeBold,
    },
});

export default styles;
