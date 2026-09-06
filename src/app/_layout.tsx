import { useEffect } from 'react';

import {
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
    useFonts,
} from '@expo-google-fonts/manrope';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useAuthRedirect } from '@/hooks/use-auth-redirect';
import { queryClient } from '@/lib/query-client';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, fontError] = useFonts({
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold,
        Manrope_800ExtraBold,
    });
    const { isCheckingAuth } = useAuthRedirect();

    useEffect(function hideSplashWhenReady() {
        if ((fontsLoaded || fontError) && !isCheckingAuth) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError, isCheckingAuth]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <QueryClientProvider client={queryClient}>
                <SafeAreaProvider>
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="index"
                            options={{ animation: 'slide_from_left' }}
                        />
                    </Stack>
                </SafeAreaProvider>
            </QueryClientProvider>
        </GestureHandlerRootView>
    );
}
