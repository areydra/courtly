import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 15,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    closeButton: {
        width: 30,
        height: 30,
        borderRadius: 9,
        borderWidth: 1.5,
        borderColor: Colors.gray250,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
