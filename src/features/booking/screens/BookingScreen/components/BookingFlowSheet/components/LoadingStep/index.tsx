import { useEffect, useRef } from 'react';

import { Animated, Easing, Text, View } from 'react-native';

import styles from './styles';

export default function LoadingStep() {
    const rotation = useRef(new Animated.Value(0)).current;

    useEffect(function spinLoadingRing() {
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
            testID="booking-loading-step"
        >
            <Animated.View style={[styles.ring, { transform: [{ rotate }] }]} />
            <Text style={styles.text}>Confirming your booking...</Text>
        </View>
    );
}
