import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontSize: 13,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    toggleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    toggleButtonText: {
        fontSize: 12.5,
        fontFamily: Fonts.ManropeBold,
        color: Colors.teal700,
    },
    list: {
        flexDirection: 'row',
        gap: 8,
    },
    chip: {
        flexShrink: 0,
        width: 56,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        paddingVertical: 10,
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: Colors.gray250,
        backgroundColor: Colors.white,
    },
    chipActive: {
        borderColor: Colors.teal700,
        backgroundColor: Colors.teal700,
    },
    chipDow: {
        fontSize: 11,
        fontFamily: Fonts.ManropeBold,
        color: Colors.ink900,
        opacity: 0.75,
    },
    chipDay: {
        fontSize: 16,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    chipMonth: {
        fontSize: 10,
        fontFamily: Fonts.ManropeSemiBold,
        color: Colors.ink900,
        opacity: 0.75,
    },
    chipTextActive: {
        color: Colors.cream50,
    },
});

export default styles;
