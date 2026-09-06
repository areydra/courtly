import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    listContent: {
        flexDirection: 'row',
        gap: 8,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingVertical: 9,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: Colors.gray250,
        backgroundColor: Colors.white,
    },
    chipActive: {
        borderColor: Colors.teal700,
        backgroundColor: Colors.teal700,
    },
    chipText: {
        fontSize: 13,
        fontFamily: Fonts.ManropeBold,
        color: Colors.ink900,
    },
    chipTextActive: {
        color: Colors.cream50,
    },
});

export default styles;
