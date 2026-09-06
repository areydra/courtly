import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        height: 46,
        paddingHorizontal: 14,
        borderRadius: 12,
        backgroundColor: Colors.gray100,
    },
    searchInput: {
        flex: 1,
        padding: 0,
        fontSize: 14,
        color: Colors.ink900,
        fontFamily: Fonts.ManropeRegular,
    },
});

export default styles;
