import { useCallback } from 'react';

import { Pressable, StyleSheet, Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

import styles from './styles';
import BallIcon from './components/BallIcon';
import CourtLinesBackdrop from './components/CourtLinesBackdrop';
import CourtlyLogoIcon from './components/CourtlyLogoIcon';
import GlobeBallIcon from './components/GlobeBallIcon';
import RacketIcon from './components/RacketIcon';

export default function WelcomeScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const handlePressGetStarted = useCallback(() => {
        router.push('/register');
    }, [router]);

    const handlePressLogIn = useCallback(() => {
        router.push('/login');
    }, [router]);

    return (
        <View
            style={styles.screen}
            testID="welcome-screen"
        >
            <StatusBar style="light" />

            <View style={styles.hero}>
                <LinearGradient
                    colors={[Colors.teal700, Colors.teal800, Colors.teal900]}
                    locations={[0, 0.55, 1]}
                    start={{ x: 0.329, y: 0.0301 }}
                    end={{ x: 0.671, y: 0.9699 }}
                    style={StyleSheet.absoluteFill}
                />

                <CourtLinesBackdrop />

                <View style={[styles.badge, { left: 24, top: 130, transform: [{ rotate: '-6deg' }] }]}>
                    <BallIcon />
                </View>
                <View style={[styles.badge, { right: 32, top: 210, transform: [{ rotate: '7deg' }] }]}>
                    <RacketIcon />
                </View>
                <View style={[styles.badge, { left: 120, top: 290, transform: [{ rotate: '-3deg' }] }]}>
                    <GlobeBallIcon />
                </View>

                <LinearGradient
                    colors={[Colors.transparent, Colors.blackOverlay65]}
                    locations={[0.55, 1]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={StyleSheet.absoluteFill}
                    pointerEvents="none"
                />

                <View style={[styles.logoRow, { top: insets.top + 24 }]}>
                    <View style={styles.logoMark}>
                        <CourtlyLogoIcon />
                    </View>
                    <Text style={styles.logoText}>Courtly</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.copy}>
                    <Text style={styles.heading}>Book your court in seconds</Text>
                    <Text style={styles.subheading}>
                        Find tennis, padel, badminton and more nearby — check availability and reserve
                        instantly.
                    </Text>
                </View>

                <View style={{ flex: 1 }} />

                <View style={styles.actions}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.primaryButton,
                            pressed && styles.primaryButtonPressed,
                        ]}
                        onPress={handlePressGetStarted}
                        testID="welcome-get-started-button"
                    >
                        <Text style={styles.primaryButtonText}>Get started</Text>
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [
                            styles.secondaryButton,
                            pressed && styles.secondaryButtonPressed,
                        ]}
                        onPress={handlePressLogIn}
                        testID="welcome-log-in-button"
                    >
                        <Text style={styles.secondaryButtonText}>Log in</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
