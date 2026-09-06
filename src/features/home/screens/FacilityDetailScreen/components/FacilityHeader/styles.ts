import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 10,
    },
    name: {
        flex: 1,
        fontSize: 22,
        lineHeight: 27.5,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
        letterSpacing: -0.3,
    },
    ratingGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        flexShrink: 0,
        marginTop: 3,
    },
    ratingText: {
        fontSize: 14,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 6,
    },
    addressText: {
        flexShrink: 1,
        fontSize: 13,
        fontFamily: Fonts.ManropeMedium,
        color: Colors.slate600,
    },
    dotSeparator: {
        fontSize: 13,
        color: Colors.gray200,
    },
    reviewsText: {
        flexShrink: 0,
        fontSize: 13,
        fontFamily: Fonts.ManropeBold,
        color: Colors.ink900,
        textDecorationLine: 'underline',
    },
    tagsRow: {
        flexDirection: 'row',
        gap: 6,
        marginTop: 12,
    },
    tag: {
        fontSize: 11,
        fontFamily: Fonts.ManropeBold,
        color: Colors.teal700,
        backgroundColor: Colors.teal50,
        paddingVertical: 5,
        paddingHorizontal: 11,
        borderRadius: 20,
    },
});

export default styles;
