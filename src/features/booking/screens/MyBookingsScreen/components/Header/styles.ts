import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    header: {
        flexShrink: 0,
        backgroundColor: Colors.cream50,
        paddingHorizontal: 24,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray150,
    },
    title: {
        fontSize: 17,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
        marginBottom: 10,
    },
    tabsRow: {
        flexDirection: 'row',
        gap: 6,
    },
    tab: {
        flex: 1,
        paddingVertical: 6,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: Colors.gray250,
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    tabActive: {
        borderColor: Colors.teal700,
        backgroundColor: Colors.teal700,
    },
    tabText: {
        fontSize: 11,
        fontFamily: Fonts.ManropeBold,
        color: Colors.ink900,
    },
    tabTextActive: {
        color: Colors.cream50,
    },
});

export default styles;
