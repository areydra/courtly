import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.cream50,
    },
    scrollContent: {
        paddingTop: 18,
        paddingHorizontal: 24,
        paddingBottom: 140,
        flexDirection: 'column',
        gap: 20,
    },
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    errorText: {
        fontSize: 14,
        fontFamily: Fonts.ManropeMedium,
        color: Colors.slate600,
        textAlign: 'center',
    },
});

export default styles;
