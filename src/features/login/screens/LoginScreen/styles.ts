import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.cream50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 8,
        flexShrink: 0,
    },
    backButton: {
        width: 36,
        height: 36,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: Colors.gray200,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButtonPressed: {
        backgroundColor: Colors.gray100,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingTop: 12,
        paddingHorizontal: 24,
        paddingBottom: 24,
    },
    copy: {
        marginBottom: 32,
    },
    heading: {
        marginBottom: 8,
        fontSize: 26,
        lineHeight: 31.2,
        fontFamily: Fonts.ManropeExtraBold,
        color: Colors.ink900,
        letterSpacing: -0.4,
    },
    subheading: {
        fontSize: 15,
        lineHeight: 22.5,
        color: Colors.slate600,
        fontFamily: Fonts.ManropeMedium,
    },
    form: {
        flexDirection: 'column',
        gap: 16,
    },
    field: {
        flexDirection: 'column',
        gap: 6,
    },
    fieldLabel: {
        fontSize: 13,
        fontFamily: Fonts.ManropeBold,
        color: Colors.ink900,
    },
    input: {
        height: 52,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: Colors.gray200,
        backgroundColor: Colors.white,
        fontFamily: Fonts.ManropeRegular,
        fontSize: 15,
        color: Colors.ink900,
    },
    inputFocused: {
        borderColor: Colors.teal700,
    },
    inputError: {
        borderColor: Colors.red600,
    },
    passwordWrapper: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
        paddingRight: 44,
    },
    passwordToggle: {
        position: 'absolute',
        right: 12,
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText: {
        marginTop: 8,
        fontSize: 13,
        color: Colors.red600,
        fontFamily: Fonts.ManropeMedium,
    },
    submitButton: {
        width: '100%',
        paddingVertical: 16,
        borderRadius: 14,
        backgroundColor: Colors.teal700,
        alignItems: 'center',
    },
    submitButtonPressed: {
        backgroundColor: Colors.teal800,
    },
    submitButtonDisabled: {
        opacity: 0.6,
    },
    submitButtonText: {
        color: Colors.cream50,
        fontSize: 16,
        fontFamily: Fonts.ManropeBold,
    },
    successBox: {
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: Colors.gray100,
        alignItems: 'center',
        gap: 4,
    },
    successTitle: {
        fontSize: 16,
        fontFamily: Fonts.ManropeBold,
        color: Colors.ink900,
    },
    successSubtitle: {
        fontSize: 14,
        fontFamily: Fonts.ManropeMedium,
        color: Colors.slate600,
        textAlign: 'center',
    },
    footer: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 14,
        color: Colors.slate600,
        fontFamily: Fonts.ManropeMedium,
    },
    footerLink: {
        fontFamily: Fonts.ManropeBold,
        color: Colors.teal700,
    },
});

export default styles;
