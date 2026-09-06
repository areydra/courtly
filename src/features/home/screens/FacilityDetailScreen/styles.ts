import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.cream50,
    },
    scrollContent: {
        paddingBottom: 130,
    },
    content: {
        paddingTop: 20,
        paddingHorizontal: 24,
        flexDirection: 'column',
        gap: 18,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.gray150,
    },
    aboutHeading: {
        margin: 0,
        marginBottom: 8,
        fontSize: 15,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    aboutText: {
        margin: 0,
        fontSize: 14,
        lineHeight: 22.4,
        fontFamily: Fonts.ManropeMedium,
        color: Colors.slate600,
    },
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    errorText: {
        fontSize: 14,
        fontFamily: Fonts.ManropeMedium,
        color: Colors.slate600,
        textAlign: 'center',
    },
    topBackButton: {
        position: 'absolute',
        left: 20,
        width: 38,
        height: 38,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.gray100,
    },
});

export default styles;
