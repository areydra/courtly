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
    card: {
        flexDirection: 'column',
        gap: 10,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 14,
        backgroundColor: Colors.mist50,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowLabel: {
        fontSize: 13,
        fontFamily: Fonts.ManropeSemiBold,
        color: Colors.slate600,
    },
    rowValue: {
        fontSize: 13,
        fontFamily: Fonts.ManropeBold,
        color: Colors.ink900,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.gray250,
        marginVertical: 2,
    },
    priceLabel: {
        fontSize: 14,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    priceValue: {
        fontSize: 14,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.teal700,
    },
    note: {
        fontSize: 11.5,
        fontFamily: Fonts.ManropeMedium,
        color: Colors.gray500,
    },
    actionsRow: {
        flexDirection: 'row',
        gap: 10,
    },
    cancelButton: {
        flex: 1,
        paddingVertical: 13,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: Colors.gray200,
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    cancelButtonText: {
        fontSize: 14,
        fontFamily: Fonts.ManropeBold,
        color: Colors.ink900,
    },
    confirmButton: {
        flex: 1,
        paddingVertical: 13,
        borderRadius: 12,
        backgroundColor: Colors.teal700,
        alignItems: 'center',
    },
    confirmButtonText: {
        fontSize: 14,
        fontFamily: Fonts.ManropeBold,
        color: Colors.cream50,
    },
});

export default styles;
