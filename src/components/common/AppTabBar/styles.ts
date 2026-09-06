import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    tabBar: {
        flexShrink: 0,
        paddingTop: 12,
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
