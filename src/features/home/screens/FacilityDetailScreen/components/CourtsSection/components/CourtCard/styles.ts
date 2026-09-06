import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        gap: 10,
        paddingVertical: 16,
        paddingHorizontal: 18,
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: Colors.gray150,
        backgroundColor: Colors.white,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    name: {
        fontSize: 14.5,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    price: {
        flexShrink: 0,
        fontSize: 14.5,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.teal700,
    },
    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    badge: {
        fontSize: 11,
        fontFamily: Fonts.ManropeBold,
        color: Colors.slate600,
        backgroundColor: Colors.gray100,
        paddingVertical: 4,
        paddingHorizontal: 9,
        borderRadius: 6,
    },
});

export default styles;
