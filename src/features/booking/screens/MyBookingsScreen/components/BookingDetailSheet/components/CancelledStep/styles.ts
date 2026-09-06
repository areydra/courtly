import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 18,
    },
    iconCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.redTint100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingBlock: {
        alignItems: 'center',
    },
    heading: {
        fontSize: 18,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    refText: {
        fontSize: 13,
        fontFamily: Fonts.ManropeMedium,
        color: Colors.slate600,
        marginTop: 4,
    },
    card: {
        width: '100%',
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
        color: Colors.red700,
    },
    doneButton: {
        width: '100%',
        paddingVertical: 14,
        borderRadius: 12,
        backgroundColor: Colors.teal700,
        alignItems: 'center',
    },
    doneButtonText: {
        fontSize: 14,
        fontFamily: Fonts.ManropeBold,
        color: Colors.cream50,
    },
});

export default styles;
