import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    heading: {
        margin: 0,
        marginBottom: 10,
        fontSize: 15,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: Colors.gray100,
    },
    itemText: {
        fontSize: 12,
        fontFamily: Fonts.ManropeSemiBold,
        color: Colors.ink900,
    },
});

export default styles;
