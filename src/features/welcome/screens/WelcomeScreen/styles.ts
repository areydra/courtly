import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.cream50,
    },
    hero: {
        position: 'relative',
        width: '100%',
        height: '56%',
        flexShrink: 0,
        overflow: 'hidden',
    },
    badge: {
        position: 'absolute',
        width: 66,
        height: 66,
        borderRadius: 18,
        backgroundColor: Colors.cream50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.25,
        shadowRadius: 24,
        elevation: 12,
    },
    logoRow: {
        position: 'absolute',
        left: 24,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    logoMark: {
        width: 32,
        height: 32,
        borderRadius: 9,
        backgroundColor: Colors.whiteOverlay16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        color: Colors.cream50,
        fontFamily: Fonts.ManropeExtraBold,
        fontSize: 17,
        letterSpacing: -0.2,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 28,
        paddingHorizontal: 24,
        paddingBottom: 32,
        backgroundColor: Colors.cream50,
    },
    copy: {
        marginBottom: 28,
    },
    heading: {
        marginBottom: 8,
        fontSize: 28,
        lineHeight: 34,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
        letterSpacing: -0.5,
    },
    subheading: {
        fontSize: 15,
        lineHeight: 22.5,
        color: Colors.slate600,
        fontFamily: Fonts.ManropeMedium,
    },
    actions: {
        flexDirection: 'column',
        gap: 12,
    },
    primaryButton: {
        width: '100%',
        paddingVertical: 16,
        borderRadius: 14,
        backgroundColor: Colors.teal700,
        alignItems: 'center',
    },
    primaryButtonPressed: {
        backgroundColor: Colors.teal800,
    },
    primaryButtonText: {
        color: Colors.cream50,
        fontSize: 16,
        fontFamily: Fonts.ManropeBold,
    },
    secondaryButton: {
        width: '100%',
        paddingVertical: 16,
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: Colors.gray200,
        backgroundColor: Colors.transparent,
        alignItems: 'center',
    },
    secondaryButtonPressed: {
        backgroundColor: Colors.gray100,
    },
    secondaryButtonText: {
        color: Colors.ink900,
        fontSize: 16,
        fontFamily: Fonts.ManropeBold,
    },
});

export default styles;
