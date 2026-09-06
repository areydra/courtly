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
    legendRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    legendSwatchOpen: {
        width: 9,
        height: 9,
        borderRadius: 3,
        backgroundColor: Colors.white,
        borderWidth: 1.5,
        borderColor: Colors.gray200,
    },
    legendSwatchBooked: {
        width: 9,
        height: 9,
        borderRadius: 3,
        backgroundColor: Colors.gray150,
    },
    legendText: {
        fontSize: 11,
        fontFamily: Fonts.ManropeSemiBold,
        color: Colors.slate600,
    },
    grid: {
        gap: 10,
    },
    row: {
        gap: 10,
    },
    slot: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        paddingVertical: 10,
        paddingHorizontal: 4,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: Colors.gray200,
        backgroundColor: Colors.white,
    },
    slotDisabled: {
        borderColor: Colors.mist50,
        backgroundColor: Colors.mist50,
    },
    slotSelected: {
        borderColor: Colors.teal700,
        backgroundColor: Colors.teal700,
    },
    slotTime: {
        fontSize: 13,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    slotPrice: {
        fontSize: 10.5,
        fontFamily: Fonts.ManropeSemiBold,
        color: Colors.ink900,
        opacity: 0.8,
    },
    slotTextDisabled: {
        color: Colors.gray350,
    },
    slotTextSelected: {
        color: Colors.cream50,
    },
});

export default styles;
