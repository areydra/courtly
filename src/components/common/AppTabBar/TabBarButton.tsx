import { forwardRef } from 'react';

import { Pressable, Text, View } from 'react-native';
import type { PressableProps } from 'react-native';

import styles from './styles';

interface TabBarButtonProps extends PressableProps {
    label: string;
    Icon: React.ComponentType<{ active: boolean }>;
    isFocused?: boolean;
}

const TabBarButton = forwardRef<View, TabBarButtonProps>(function TabBarButton(
    { label, Icon, isFocused, style, ...pressableProps },
    ref,
) {
    return (
        <Pressable
            ref={ref}
            {...pressableProps}
            style={(state) => [typeof style === 'function' ? style(state) : style, styles.tabItem]}
        >
            <Icon active={!!isFocused} />
            <Text style={isFocused ? styles.tabLabelActive : styles.tabLabelInactive}>{label}</Text>
        </Pressable>
    );
});

export default TabBarButton;
