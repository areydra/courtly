import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        paddingVertical: 36,
    },
    ring: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 3.5,
        borderColor: Colors.gray250,
        borderTopColor: Colors.teal700,
    },
    text: {
        fontSize: 14,
        fontFamily: Fonts.ManropeBold,
        color: Colors.slate600,
    },
});

export default styles;
