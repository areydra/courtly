import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        gap: 12,
        padding: 14,
        borderRadius: 16,
        backgroundColor: Colors.white,
        shadowColor: Colors.ink900,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 3,
        elevation: 2,
    },
    thumbnail: {
        width: 64,
        height: 64,
        borderRadius: 12,
        flexShrink: 0,
    },
    info: {
        flex: 1,
        minWidth: 0,
        flexDirection: 'column',
        gap: 5,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 8,
    },
    facilityName: {
        flex: 1,
        fontSize: 14,
        lineHeight: 18.2,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    badge: {
        flexShrink: 0,
        fontSize: 10.5,
        fontFamily: Fonts.ManropeExtraBold,
        paddingVertical: 3,
        paddingHorizontal: 9,
        borderRadius: 20,
        overflow: 'hidden',
    },
    badgeUpcoming: {
        backgroundColor: Colors.teal50,
    },
    badgeTextUpcoming: {
        color: Colors.teal700,
    },
    badgePast: {
        backgroundColor: Colors.gray100,
    },
    badgeTextPast: {
        color: Colors.slate600,
    },
    badgeCancelled: {
        backgroundColor: Colors.redTint100,
    },
    badgeTextCancelled: {
        color: Colors.red700,
    },
    courtName: {
        fontSize: 12.5,
        fontFamily: Fonts.ManropeSemiBold,
        color: Colors.slate600,
    },
    dateTime: {
        fontSize: 12.5,
        fontFamily: Fonts.ManropeMedium,
        color: Colors.slate600,
    },
    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 2,
    },
    reference: {
        fontSize: 11,
        fontFamily: Fonts.ManropeSemiBold,
        color: Colors.gray500,
    },
    price: {
        fontSize: 13,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
});

export default styles;
