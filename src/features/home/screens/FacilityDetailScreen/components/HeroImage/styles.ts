import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/theme';

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        width: '100%',
        height: 260,
        flexShrink: 0,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    overlayRow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    backButton: {
        width: 38,
        height: 38,
        borderRadius: 11,
        backgroundColor: Colors.ink900Overlay55,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
