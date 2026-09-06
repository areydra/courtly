import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    listContent: {
        paddingTop: 20,
        paddingHorizontal: 24,
        paddingBottom: 96,
        gap: 16,
    },
    resultsLabel: {
        fontSize: 16,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
    },
    noResultsText: {
        textAlign: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
        color: Colors.gray500,
        fontSize: 14,
        fontFamily: Fonts.ManropeSemiBold,
    },
    footerLoading: {
        paddingVertical: 20,
    },
});

export default styles;
