import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
    },
    errorText: {
        fontSize: 14,
        fontFamily: Fonts.ManropeMedium,
        color: Colors.slate600,
        textAlign: 'center',
    },
});

export default styles;
