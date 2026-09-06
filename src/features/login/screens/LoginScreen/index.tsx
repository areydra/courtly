import { useCallback, useState } from 'react';

import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';
import BackIcon from '@/components/BackIcon';
import EyeIcon from '@/components/EyeIcon';
import { emailSchema, passwordSchema } from '@/utils/validation';

import styles from './styles';
import { useLogin } from '../../hooks/useLogin';

export default function LoginScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const loginMutation = useLogin();

    const handlePressBack = useCallback(() => {
        router.back();
    }, [router]);

    const handlePressSignUp = useCallback(() => {
        router.push('/register');
    }, [router]);

    const handleChangeEmail = useCallback((value: string) => {
        setEmail(value);
        setEmailError(null);
    }, []);

    const handleChangePassword = useCallback((value: string) => {
        setPassword(value);
        setPasswordError(null);
    }, []);

    const handleTogglePasswordVisibility = useCallback(() => {
        setIsPasswordVisible((visible) => !visible);
    }, []);

    const handlePressLogIn = useCallback(() => {
        const emailResult = emailSchema.safeParse(email);
        const passwordResult = passwordSchema.safeParse(password);

        setEmailError(emailResult.success ? null : emailResult.error.issues[0].message);
        setPasswordError(passwordResult.success ? null : passwordResult.error.issues[0].message);

        if (!emailResult.success || !passwordResult.success) {
            return;
        }

        loginMutation.mutate({ email, password });
    }, [loginMutation, email, password]);

    return (
        <View
            style={styles.screen}
            testID="login-screen"
        >
            <StatusBar style="dark" />

            <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
                <Pressable
                    style={({ pressed }) => [
                        styles.backButton,
                        pressed && styles.backButtonPressed,
                    ]}
                    onPress={handlePressBack}
                    testID="login-back-button"
                >
                    <BackIcon />
                </Pressable>
            </View>

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.copy}>
                    <Text style={styles.heading}>Welcome back</Text>
                    <Text style={styles.subheading}>
                        Log in to find and book your next court.
                    </Text>
                </View>

                {loginMutation.isSuccess ? (
                    <View
                        style={styles.successBox}
                        testID="login-success-message"
                    >
                        <Text style={styles.successTitle}>Logged in</Text>
                        <Text style={styles.successSubtitle}>
                            Welcome back, {loginMutation.data.user.name}.
                        </Text>
                    </View>
                ) : (
                    <>
                        <View style={styles.form}>
                            <View style={styles.field}>
                                <Text style={styles.fieldLabel}>Email address</Text>
                                <TextInput
                                    placeholder="jordan@email.com"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={email}
                                    onChangeText={handleChangeEmail}
                                    style={[
                                        styles.input,
                                        isEmailFocused && styles.inputFocused,
                                        emailError && styles.inputError,
                                    ]}
                                    onFocus={() => setIsEmailFocused(true)}
                                    onBlur={() => setIsEmailFocused(false)}
                                    testID="login-email-input"
                                />
                                {emailError ? (
                                    <Text
                                        style={styles.errorText}
                                        testID="login-email-error"
                                    >
                                        {emailError}
                                    </Text>
                                ) : null}
                            </View>

                            <View style={styles.field}>
                                <Text style={styles.fieldLabel}>Password</Text>
                                <View style={styles.passwordWrapper}>
                                    <TextInput
                                        placeholder="Enter your password"
                                        secureTextEntry={!isPasswordVisible}
                                        value={password}
                                        onChangeText={handleChangePassword}
                                        style={[
                                            styles.input,
                                            styles.passwordInput,
                                            isPasswordFocused && styles.inputFocused,
                                            passwordError && styles.inputError,
                                        ]}
                                        onFocus={() => setIsPasswordFocused(true)}
                                        onBlur={() => setIsPasswordFocused(false)}
                                        testID="login-password-input"
                                    />
                                    <Pressable
                                        style={styles.passwordToggle}
                                        onPress={handleTogglePasswordVisibility}
                                        testID="login-password-toggle-button"
                                    >
                                        <EyeIcon />
                                    </Pressable>
                                </View>
                                {passwordError ? (
                                    <Text
                                        style={styles.errorText}
                                        testID="login-password-error"
                                    >
                                        {passwordError}
                                    </Text>
                                ) : null}
                            </View>
                        </View>

                        <View style={{ flex: 1, minHeight: 24 }} />

                        <Pressable
                            style={({ pressed }) => [
                                styles.submitButton,
                                pressed && styles.submitButtonPressed,
                                loginMutation.isPending && styles.submitButtonDisabled,
                            ]}
                            onPress={handlePressLogIn}
                            disabled={loginMutation.isPending}
                            testID="login-submit-button"
                        >
                            {loginMutation.isPending ? (
                                <ActivityIndicator color={Colors.cream50} />
                            ) : (
                                <Text style={styles.submitButtonText}>Log in</Text>
                            )}
                        </Pressable>

                        {loginMutation.isError ? (
                            <Text
                                style={styles.errorText}
                                testID="login-error-message"
                            >
                                {loginMutation.error.message}
                            </Text>
                        ) : null}
                    </>
                )}

                <Text style={styles.footer}>
                    Don&apos;t have an account?{' '}
                    <Text
                        style={styles.footerLink}
                        onPress={handlePressSignUp}
                        testID="login-sign-up-link"
                    >
                        Sign up
                    </Text>
                </Text>
            </ScrollView>
        </View>
    );
}
