import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 16,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    statusBadge: {
        flexShrink: 0,
        fontSize: 10.5,
        fontFamily: Fonts.ManropeExtraBold,
        paddingVertical: 3,
        paddingHorizontal: 9,
        borderRadius: 20,
        backgroundColor: Colors.teal50,
        color: Colors.teal700,
        overflow: 'hidden',
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
    totalLabel: {
        fontSize: 14,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    totalValue: {
        fontSize: 14,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.teal700,
    },
    cancelButton: {
        width: '100%',
        paddingVertical: 13,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: Colors.redTint200,
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    cancelButtonText: {
        fontSize: 14,
        fontFamily: Fonts.ManropeBold,
        color: Colors.red700,
    },
});

export default styles;
