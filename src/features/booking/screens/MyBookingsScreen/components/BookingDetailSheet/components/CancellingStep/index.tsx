import { useEffect, useRef } from 'react';

import { Animated, Easing, Text, View } from 'react-native';

import styles from './styles';

export default function CancellingStep() {
    const rotation = useRef(new Animated.Value(0)).current;

    useEffect(function spinCancellingRing() {
        const animation = Animated.loop(
            Animated.timing(rotation, {
                toValue: 1,
                duration: 800,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        );
        animation.start();

        return () => animation.stop();
    }, [rotation]);

    const rotate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View
            style={styles.container}
            testID="my-bookings-cancelling-step"
        >
            <Animated.View style={[styles.ring, { transform: [{ rotate }] }]} />
            <Text style={styles.text}>Cancelling your booking...</Text>
        </View>
    );
}
