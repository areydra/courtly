import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.mist50,
    },
    header: {
        flexShrink: 0,
        backgroundColor: Colors.cream50,
        paddingHorizontal: 24,
        paddingBottom: 16,
        flexDirection: 'column',
        gap: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray150,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    avatarButton: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: Colors.teal700,
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    avatarButtonText: {
        color: Colors.cream50,
        fontFamily: Fonts.ManropeExtraBold,
        fontSize: 15,
    },
});

export default styles;
