import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.cream50,
        borderTopWidth: 1,
        borderTopColor: Colors.gray150,
        paddingTop: 14,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 14,
    },
    label: {
        fontSize: 11,
        fontFamily: Fonts.ManropeSemiBold,
        color: Colors.gray500,
    },
    value: {
        fontSize: 16,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    button: {
        flexShrink: 0,
        width: 150,
        paddingVertical: 9,
        borderRadius: 10,
        backgroundColor: Colors.teal700,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDisabled: {
        backgroundColor: Colors.gray200,
    },
    buttonText: {
        fontSize: 12,
        fontFamily: Fonts.ManropeBold,
        color: Colors.cream50,
    },
    buttonTextDisabled: {
        color: Colors.gray500,
    },
});

export default styles;
