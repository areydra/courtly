import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.mist50,
    },
    listContent: {
        paddingTop: 16,
        paddingHorizontal: 24,
        paddingBottom: 96,
        flexDirection: 'column',
        gap: 12,
    },
    emptyText: {
        textAlign: 'center',
        paddingTop: 60,
        paddingHorizontal: 20,
        fontSize: 14,
        fontFamily: Fonts.ManropeSemiBold,
        color: Colors.gray500,
    },
    footerLoading: {
        paddingVertical: 16,
        alignItems: 'center',
    },
});

export default styles;
