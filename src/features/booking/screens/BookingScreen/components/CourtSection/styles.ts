import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    label: {
        fontSize: 13,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
        marginBottom: 10,
    },
    list: {
        flexDirection: 'row',
        gap: 8,
    },
    chip: {
        flexShrink: 0,
        paddingVertical: 5,
        paddingHorizontal: 11,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: Colors.gray250,
        backgroundColor: Colors.white,
    },
    chipActive: {
        borderColor: Colors.teal700,
        backgroundColor: Colors.teal700,
    },
    chipText: {
        fontSize: 11.5,
        fontFamily: Fonts.ManropeBold,
        color: Colors.ink900,
    },
    chipTextActive: {
        color: Colors.cream50,
    },
});

export default styles;
