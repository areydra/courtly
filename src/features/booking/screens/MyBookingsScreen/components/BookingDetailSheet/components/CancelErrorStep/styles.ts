import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 18,
        paddingVertical: 8,
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
    message: {
        fontSize: 13,
        fontFamily: Fonts.ManropeMedium,
        color: Colors.slate600,
        textAlign: 'center',
        marginTop: 4,
    },
    primaryButton: {
        width: '100%',
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
