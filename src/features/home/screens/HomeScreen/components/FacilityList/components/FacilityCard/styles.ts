import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: 18,
        overflow: 'hidden',
        shadowColor: Colors.ink900,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 3,
        elevation: 2,
    },
    imageWrapper: {
        position: 'relative',
        width: '100%',
        height: 150,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    priceBadge: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        backgroundColor: Colors.ink900Overlay72,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    priceBadgeText: {
        color: Colors.cream50,
        fontSize: 11,
        fontFamily: Fonts.ManropeExtraBold,
    },
    content: {
        paddingTop: 14,
        paddingHorizontal: 16,
        paddingBottom: 16,
        flexDirection: 'column',
        gap: 8,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 8,
    },
    name: {
        flex: 1,
        fontSize: 15,
        lineHeight: 19.5,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
    },
    locationGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        flexShrink: 1,
    },
    locationText: {
        flexShrink: 1,
        fontSize: 13,
        color: Colors.slate600,
        fontFamily: Fonts.ManropeMedium,
    },
    ratingGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        flexShrink: 0,
    },
    ratingText: {
        fontSize: 13,
        fontFamily: Fonts.ManropeBold,
        color: Colors.ink900,
    },
    reviewCountText: {
        fontSize: 12,
        color: Colors.gray500,
        fontFamily: Fonts.ManropeMedium,
    },
    tagsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginTop: 2,
    },
    tag: {
        backgroundColor: Colors.teal50,
        paddingVertical: 4,
        paddingHorizontal: 9,
        borderRadius: 20,
    },
    tagText: {
        fontSize: 11,
        fontFamily: Fonts.ManropeBold,
        color: Colors.teal700,
    },
});

export default styles;
