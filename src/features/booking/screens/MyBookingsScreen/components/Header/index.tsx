import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { TabKey } from '../../utils';
import { TAB_DEFS } from '../../utils';
import styles from './styles';

interface HeaderProps {
    activeTab: TabKey;
    onSelectTab: (tab: TabKey) => void;
}

export default function Header({ activeTab, onSelectTab }: HeaderProps) {
    const { top } = useSafeAreaInsets();

    return (
        <View style={[styles.header, { paddingTop: top + 16 }]}>
            <Text style={styles.title}>My bookings</Text>
            <View style={styles.tabsRow}>
                {TAB_DEFS.map((tab) => {
                    const isActive = tab.key === activeTab;

                    return (
                        <Pressable
                            key={tab.key}
                            style={[styles.tab, isActive && styles.tabActive]}
                            onPress={() => onSelectTab(tab.key)}
                            testID={`my-bookings-tab-${tab.key}`}
                        >
                            <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{tab.label}</Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
}
