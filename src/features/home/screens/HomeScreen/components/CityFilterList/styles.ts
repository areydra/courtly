import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    listContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    chip: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: Colors.gray250,
        backgroundColor: Colors.white,
    },
    chipActive: {
        borderColor: Colors.teal700,
        backgroundColor: Colors.teal50,
    },
    chipText: {
        fontSize: 12,
        fontFamily: Fonts.ManropeBold,
        color: Colors.slate600,
    },
    chipTextActive: {
        color: Colors.teal700,
    },
});

export default styles;
