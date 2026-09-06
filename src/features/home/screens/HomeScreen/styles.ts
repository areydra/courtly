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
    tabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 12,
        paddingBottom: 8,
        backgroundColor: Colors.cream50,
        borderTopWidth: 1,
        borderTopColor: Colors.gray150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
    },
    tabLabelActive: {
        fontSize: 11,
        fontFamily: Fonts.ManropeBold,
        color: Colors.teal700,
    },
    tabLabelInactive: {
        fontSize: 11,
        fontFamily: Fonts.ManropeSemiBold,
        color: Colors.gray500,
    },
});

export default styles;
