import { Tabs, TabList, TabSlot, TabTrigger } from 'expo-router/ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BookingsIcon from '@/components/common/AppTabBar/BookingsIcon';
import HomeIcon from '@/components/common/AppTabBar/HomeIcon';
import tabBarStyles from '@/components/common/AppTabBar/styles';
import TabBarButton from '@/components/common/AppTabBar/TabBarButton';

export default function TabsLayout() {
    const { bottom } = useSafeAreaInsets();

    return (
        <Tabs style={{ flex: 1 }}>
            <TabSlot style={{ flex: 1 }} />
            <TabList style={[tabBarStyles.tabBar, { paddingBottom: 8 + bottom }]}>
                <TabTrigger
                    name="home"
                    href="/home"
                    asChild
                >
                    <TabBarButton
                        label="Home"
                        Icon={HomeIcon}
                        testID="app-tab-home"
                    />
                </TabTrigger>
                <TabTrigger
                    name="my-bookings"
                    href="/my-bookings"
                    asChild
                >
                    <TabBarButton
                        label="Bookings"
                        Icon={BookingsIcon}
                        testID="app-tab-bookings"
                    />
                </TabTrigger>
            </TabList>
        </Tabs>
    );
}
