import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 16,
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    message: {
        fontSize: 13,
        lineHeight: 19.5,
        fontFamily: Fonts.ManropeMedium,
        color: Colors.slate600,
    },
    actionsRow: {
        flexDirection: 'row',
        gap: 10,
    },
    keepButton: {
        flex: 1,
        paddingVertical: 13,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: Colors.gray200,
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    keepButtonText: {
        fontSize: 14,
        fontFamily: Fonts.ManropeBold,
        color: Colors.ink900,
    },
    confirmButton: {
        flex: 1,
        paddingVertical: 13,
        borderRadius: 12,
        backgroundColor: Colors.red700,
        alignItems: 'center',
    },
    confirmButtonText: {
        fontSize: 14,
        fontFamily: Fonts.ManropeBold,
        color: Colors.cream50,
    },
});

export default styles;
