import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/theme';

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: 18,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: Colors.gray150,
    },
    content: {
        paddingTop: 14,
        paddingHorizontal: 16,
        paddingBottom: 16,
        flexDirection: 'column',
        gap: 10,
    },
    bar: {
        height: 12,
        borderRadius: 6,
        backgroundColor: Colors.gray150,
    },
    barWide: {
        width: '70%',
    },
    barMedium: {
        width: '45%',
    },
    tagsRow: {
        flexDirection: 'row',
        gap: 6,
        marginTop: 2,
    },
    tag: {
        width: 60,
        height: 20,
        borderRadius: 20,
        backgroundColor: Colors.gray150,
    },
});

export default styles;
