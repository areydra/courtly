import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    header: {
        flexShrink: 0,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 24,
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray150,
    },
    backButton: {
        flexShrink: 0,
        width: 36,
        height: 36,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: Colors.gray200,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    subtitle: {
        fontSize: 12.5,
        fontFamily: Fonts.ManropeMedium,
        color: Colors.gray500,
    },
});

export default styles;
