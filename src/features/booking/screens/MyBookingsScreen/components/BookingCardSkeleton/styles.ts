import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/theme';

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        gap: 12,
        padding: 14,
        borderRadius: 16,
        backgroundColor: Colors.white,
    },
    thumbnail: {
        width: 64,
        height: 64,
        borderRadius: 12,
        flexShrink: 0,
        backgroundColor: Colors.gray150,
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        gap: 8,
        justifyContent: 'center',
    },
    bar: {
        height: 11,
        borderRadius: 6,
        backgroundColor: Colors.gray150,
    },
    barWide: {
        width: '70%',
    },
    barMedium: {
        width: '50%',
    },
    barNarrow: {
        width: 60,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
    },
});

export default styles;
