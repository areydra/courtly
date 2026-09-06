import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/theme';

const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.cream50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    content: {
        paddingHorizontal: 24,
        paddingTop: 22,
        paddingBottom: 14,
    },
    contentInner: {
        flexDirection: 'column',
        gap: 20,
    },
});

export default styles;
