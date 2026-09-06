import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles';
import BookingsIcon from './BookingsIcon';
import HomeIcon from './HomeIcon';
import ProfileIcon from './ProfileIcon';

interface BottomTabBarProps {
    onPressHome: () => void;
}

export default function BottomTabBar({ onPressHome }: BottomTabBarProps) {
    const { bottom } = useSafeAreaInsets();

    return (
        <View style={[styles.tabBar, { paddingBottom: 8 + bottom }]}>
            <Pressable
                style={styles.tabItem}
                onPress={onPressHome}
                testID="my-bookings-tab-home"
            >
                <HomeIcon />
                <Text style={styles.tabLabelInactive}>Home</Text>
            </Pressable>

            <View
                style={styles.tabItem}
                testID="my-bookings-tab-bookings"
            >
                <BookingsIcon />
                <Text style={styles.tabLabelActive}>Bookings</Text>
            </View>

            <View
                style={styles.tabItem}
                testID="my-bookings-tab-profile"
            >
                <ProfileIcon />
                <Text style={styles.tabLabelInactive}>Profile</Text>
            </View>
        </View>
    );
}
