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
        backgroundColor: Colors.teal50,
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
    statusValue: {
        fontSize: 13,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.teal700,
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
    actionsRow: {
        flexDirection: 'row',
        gap: 10,
        width: '100%',
    },
    secondaryButton: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: Colors.gray200,
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    secondaryButtonText: {
        fontSize: 14,
        fontFamily: Fonts.ManropeBold,
        color: Colors.ink900,
    },
    primaryButton: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 12,
        backgroundColor: Colors.teal700,
        alignItems: 'center',
    },
    primaryButtonText: {
        fontSize: 14,
        fontFamily: Fonts.ManropeBold,
        color: Colors.cream50,
    },
});

export default styles;
