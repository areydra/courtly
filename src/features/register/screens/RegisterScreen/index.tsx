import { useCallback, useState } from 'react';

import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';
import { nameSchema, emailSchema, passwordSchema } from '@/utils/validation';

import styles from './styles';
import BackIcon from './components/BackIcon';
import EyeIcon from './components/EyeIcon';
import { useRegister } from '../../hooks/useRegister';

export default function RegisterScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const [isFullNameFocused, setIsFullNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const registerMutation = useRegister();

    const handlePressBack = useCallback(() => {
        router.back();
    }, [router]);

    const handleChangeName = useCallback((value: string) => {
        setName(value);
        setNameError(null);
    }, []);

    const handleChangeEmail = useCallback((value: string) => {
        setEmail(value);
        setEmailError(null);
    }, []);

    const handleChangePassword = useCallback((value: string) => {
        setPassword(value);
        setPasswordError(null);
    }, []);

    const handlePressCreateAccount = useCallback(() => {
        const nameResult = nameSchema.safeParse(name);
        const emailResult = emailSchema.safeParse(email);
        const passwordResult = passwordSchema.safeParse(password);

        setNameError(nameResult.success ? null : nameResult.error.issues[0].message);
        setEmailError(emailResult.success ? null : emailResult.error.issues[0].message);
        setPasswordError(passwordResult.success ? null : passwordResult.error.issues[0].message);

        if (!nameResult.success || !emailResult.success || !passwordResult.success) {
            return;
        }

        registerMutation.mutate({ name, email, password });
    }, [registerMutation, name, email, password]);

    return (
        <View
            style={styles.screen}
            testID="register-screen"
        >
            <StatusBar style="dark" />

            <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
                <Pressable
                    style={({ pressed }) => [
                        styles.backButton,
                        pressed && styles.backButtonPressed,
                    ]}
                    onPress={handlePressBack}
                    testID="register-back-button"
                >
                    <BackIcon />
                </Pressable>
            </View>

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.copy}>
                    <Text style={styles.heading}>Create your account</Text>
                    <Text style={styles.subheading}>
                        Join to browse courts and book facilities near you.
                    </Text>
                </View>

                {registerMutation.isSuccess ? (
                    <View
                        style={styles.successBox}
                        testID="register-success-message"
                    >
                        <Text style={styles.successTitle}>Account created</Text>
                        <Text style={styles.successSubtitle}>
                            Welcome, {registerMutation.data.user.name}. Your account is ready.
                        </Text>
                    </View>
                ) : (
                    <>
                        <View style={styles.form}>
                            <View style={styles.field}>
                                <Text style={styles.fieldLabel}>Full name</Text>
                                <TextInput
                                    placeholder="Jordan Lee"
                                    value={name}
                                    onChangeText={handleChangeName}
                                    style={[
                                        styles.input,
                                        isFullNameFocused && styles.inputFocused,
                                        nameError && styles.inputError,
                                    ]}
                                    onFocus={() => setIsFullNameFocused(true)}
                                    onBlur={() => setIsFullNameFocused(false)}
                                    testID="register-full-name-input"
                                />
                                {nameError ? (
                                    <Text
                                        style={styles.errorText}
                                        testID="register-full-name-error"
                                    >
                                        {nameError}
                                    </Text>
                                ) : null}
                            </View>

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
                                    testID="register-email-input"
                                />
                                {emailError ? (
                                    <Text
                                        style={styles.errorText}
                                        testID="register-email-error"
                                    >
                                        {emailError}
                                    </Text>
                                ) : null}
                            </View>

                            <View style={styles.field}>
                                <Text style={styles.fieldLabel}>Password</Text>
                                <View style={styles.passwordWrapper}>
                                    <TextInput
                                        placeholder="At least 8 characters"
                                        secureTextEntry
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
                                        testID="register-password-input"
                                    />
                                    <Pressable
                                        style={styles.passwordToggle}
                                        testID="register-password-toggle-button"
                                    >
                                        <EyeIcon />
                                    </Pressable>
                                </View>
                                {passwordError ? (
                                    <Text
                                        style={styles.errorText}
                                        testID="register-password-error"
                                    >
                                        {passwordError}
                                    </Text>
                                ) : (
                                    <Text style={styles.helperText}>
                                        Use 8+ characters with a number and a symbol.
                                    </Text>
                                )}
                            </View>
                        </View>

                        <View style={{ flex: 1, minHeight: 16 }} />

                        <Pressable
                            style={({ pressed }) => [
                                styles.submitButton,
                                pressed && styles.submitButtonPressed,
                                registerMutation.isPending && styles.submitButtonDisabled,
                            ]}
                            onPress={handlePressCreateAccount}
                            disabled={registerMutation.isPending}
                            testID="register-create-account-button"
                        >
                            {registerMutation.isPending ? (
                                <ActivityIndicator color={Colors.cream50} />
                            ) : (
                                <Text style={styles.submitButtonText}>Create account</Text>
                            )}
                        </Pressable>

                        {registerMutation.isError ? (
                            <Text
                                style={styles.errorText}
                                testID="register-error-message"
                            >
                                {registerMutation.error.message}
                            </Text>
                        ) : null}
                    </>
                )}

                <Text style={styles.footer}>
                    Already have an account?{' '}
                    <Text
                        style={styles.footerLink}
                        testID="register-login-link"
                    >
                        Log in
                    </Text>
                </Text>
            </ScrollView>
        </View>
    );
}
