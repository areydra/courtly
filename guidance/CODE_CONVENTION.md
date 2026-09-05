# Code Convention - Courtly App

> Comprehensive code standards and conventions for React Native Expo project

## Table of Contents

- [Project Structure](#project-structure)
- [Naming Conventions](#naming-conventions)
- [File Organization](#file-organization)
- [Component Patterns](#component-patterns)
- [State Management](#state-management)
- [Styling Guidelines](#styling-guidelines)
- [TypeScript Conventions](#typescript-conventions)
- [Import/Export Patterns](#importexport-patterns)
- [Routing & Navigation](#routing--navigation)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Git Commit Guidelines](#git-commit-guidelines)

---

## Project Structure

```
courtly-app/
├── src/
│   ├── app/                        # Expo Router files (file-based routing)
│   │   ├── _layout.tsx            # Root layout with Stack navigation
│   │   ├── (auth)/                # Auth route group (unauthenticated)
│   │   │   ├── _layout.tsx
│   │   │   ├── index.tsx
│   │   │   ├── privacy-policy.tsx
│   │   │   └── terms-of-service.tsx
│   │   └── (home)/                # Home route group (authenticated)
│   │       ├── _layout.tsx
│   │       └── index.tsx
│   │
│   ├── components/                # Global/shared components
│   │   ├── AnimatedIcon.tsx
│   │   ├── WebView.tsx
│   │   └── ...
│   │
│   ├── constants/                 # Global constants
│   │   ├── theme.ts               # Colors, Fonts, Spacing
│   │   └── config.ts              # App configuration
│   │
│   ├── features/                  # Feature-based modules
│   │   ├── auth/
│   │   │   ├── screens/           # Full-page screens
│   │   │   │   ├── OnboardingScreen/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── styles.ts
│   │   │   │   │   └── components/
│   │   │   │   └── SignInScreen/
│   │   │   ├── components/        # Feature-specific components
│   │   │   │   ├── EmailSection.tsx
│   │   │   │   └── PasswordSection.tsx
│   │   │   ├── hooks/             # Feature-specific hooks
│   │   │   │   └── useAuthForm.ts
│   │   │   ├── services/          # API/business logic
│   │   │   │   └── authService.ts
│   │   │   ├── types/             # TypeScript types/interfaces
│   │   │   │   └── auth.types.ts
│   │   │   └── utils/             # Helper functions
│   │   │       └── validation.ts
│   │   └── home/
│   │       └── ...
│   │
│   ├── hooks/                     # Global custom hooks
│   │   ├── use-theme.ts
│   │   ├── use-color-scheme.ts
│   │   └── ...
│   │
│   ├── lib/                       # Library utilities
│   │   ├── axios.ts               # Axios configuration
│   │   ├── storage.ts             # AsyncStorage utilities
│   │   └── ...
│   │
│   ├── stores/                    # Global Zustand stores
│   │   ├── useAuthStore.ts
│   │   ├── useModalStore.ts
│   │   └── ...
│   │
│   └── services/                  # Global services
│       ├── api.ts
│       └── queryOptions/          # Tanstack Query options
│           ├── useUserQuery.ts
│           └── ...
│
├── assets/                        # Static assets
│   ├── images/
│   ├── fonts/
│   └── ...
│
├── app.json                       # Expo configuration
├── package.json
└── tsconfig.json
```

---

## Naming Conventions

### Files

| Type | Convention | Example |
|------|------------|---------|
| React Components | **PascalCase** | `EmailSection.tsx`, `AnimatedIcon.tsx` |
| Screens | **PascalCase** + `Screen` suffix | `OnboardingScreen/`, `SignInScreen/` |
| Hooks | **kebab-case** with `use-` prefix | `use-theme.ts`, `use-auth-form.ts` |
| Utilities | **kebab-case** | `validation.ts`, `format-date.ts` |
| Stores | **camelCase** with `use` prefix + `Store` suffix | `useAuthStore.ts`, `useModalStore.ts` |
| Types | **kebab-case** with `.types` suffix | `auth.types.ts`, `user.types.ts` |
| Styles | **kebab-case** or match component name | `styles.ts`, `onboarding-styles.ts` |
| Constants | **kebab-case** | `theme.ts`, `config.ts` |
| Services | **kebab-case** with `Service` suffix | `authService.ts`, `apiService.ts` |

### Variables & Functions

| Type | Convention | Example |
|------|------------|---------|
| React Components | **PascalCase** | `const EmailSection = () => {}` |
| Custom Hooks | **camelCase** with `use` prefix | `const useTheme = () => {}` |
| Functions | **camelCase** | `const handleSubmit = () => {}` |
| Constants | **SCREAMING_SNAKE_CASE** | `const API_BASE_URL = '...'` |
| Boolean variables | **is/has/should** prefix | `const isLoading = false` |
| Event handlers | **handle/on** prefix | `const handlePress = () => {}` |
| Async functions | Descriptive verb | `const fetchUserData = async () => {}` |

### Constants

```typescript
// Global constants use PascalCase for object names
export const Colors = { ... } as const;
export const Fonts = { ... };
export const Spacing = { ... } as const;

// Component-level constants use SCREAMING_SNAKE_CASE
const MAX_LENGTH = 50;
const DEFAULT_TIMEOUT = 3000;
```

---

## File Organization

### Feature-Based Organization

Each feature should be self-contained with all related code:

```
features/
└── auth/
    ├── screens/           # Full-page screens
    ├── components/        # Feature-specific components
    ├── hooks/             # Feature-specific hooks
    ├── services/          # API calls, business logic
    ├── types/             # TypeScript types
    ├── utils/             # Helper functions
    └── constants/         # Feature-specific constants (if needed)
```

### Component Co-location

Co-locate styles and sub-components with their parent:

```
OnboardingScreen/
├── index.tsx              # Main screen component
├── styles.ts              # Screen styles
└── components/            # Screen-specific components
    ├── CarouselItem.tsx
    └── NavigationButtons.tsx
```

### When to Use Global vs Feature-Specific

**Use `src/components/` (global) when:**
- Component is used across multiple features
- Component is a core UI primitive
- Component has no feature-specific logic

**Use the shared icon component for icons:**
- Use `Icon` from `@/components/Icon` for incoming/new feature icons.
- Do not create feature-specific icon wrapper components unless they add feature business behavior.
- Import it with `import Icon from '@/components/Icon';`.

**Use `src/features/{feature}/components/` when:**
- Component is only used within that feature
- Component contains feature-specific business logic
- Component is tightly coupled to feature requirements

### Extracting Shared Components (DRY Principle)

When you find the same UI pattern or logic duplicated across multiple components, extract it into a shared component to follow the DRY (Don't Repeat Yourself) principle.

**Signs that code should be extracted:**
- The same UI elements (e.g., rating displays, badges, cards) appear in 2+ places
- The same styling pattern is copy-pasted across components
- Minor prop variations are the only difference between implementations
- You find yourself updating the same code in multiple files

**How to extract:**
1. Create a new component in `src/components/common/` for cross-feature reuse
2. Add props for variations (e.g., `size`, `variant`, `theme`)
3. Update all usage sites to use the shared component
4. Remove duplicate code and styles from the original locations

**Example:**

Before extraction, rating display was duplicated:
```typescript
// In DestinationCard.tsx
<View style={{
    backgroundColor: Colors.darkGray,
    borderRadius: 20,
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
}}>
    <Icon image={require('@/assets/images/icons/star.png')} size={10} />
    <Text style={styles.ratingText}>
        {rating.toFixed(1)} {reviewCount}
    </Text>
</View>

// In RatingBadgeRow.tsx - same pattern with different sizes
<View style={styles.ratingContainer}>
    <Icon image={require('@/assets/images/icons/star.png')} size={14} />
    <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
    <Text style={styles.reviewText}>{reviewCount}</Text>
</View>
```

After extraction to shared component:
```typescript
// components/common/RatingBadge.tsx
interface RatingBadgeProps {
    rating: number;
    reviewCount: string;
    size?: 'small' | 'medium';
}

const RatingBadge: React.FC<RatingBadgeProps> = ({
    rating,
    reviewCount,
    size = 'medium'
}) => {
    const iconSize = size === 'small' ? 10 : 14;
    const fontSize = size === 'small' ? 11 : 13;

    return (
        <View style={styles.container}>
            <Icon
                image={require('@/assets/images/icons/star.png')}
                size={iconSize}
            />
            <Text style={[styles.ratingText, { fontSize }]}>
                {rating.toFixed(1)} {reviewCount}
            </Text>
        </View>
    );
};

// Usage in both components
<RatingBadge rating={rating} reviewCount={reviewCount} size="small" />
```

**Benefits:**
- **Single source of truth**: Changes to the pattern only need to happen in one place
- **Easier maintenance**: Bug fixes and improvements benefit all usage sites
- **Consistency**: Guaranteed identical behavior across the app
- **Reduced code duplication**: Cleaner, more maintainable codebase
- **Better testing**: Test the component once, all usage sites benefit

---

## Component Patterns

### Standard Component Structure

```typescript
// 1. Imports - External libraries first
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// 2. Imports - Local (absolute paths with @/ alias)
import { Colors, Fonts } from '@/constants/theme';
import styles from './styles';

// 3. Imports - Types
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

// 4. Type definitions
interface EmailSectionProps {
    onPressNext: () => void;
    onPressSignIn?: () => void;
}

// 5. Component implementation
const EmailSection: React.FC<EmailSectionProps> = ({
    onPressNext,
    onPressSignIn
}) => {
    // a. Hooks
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);
    const inputRef = useRef<TextInput>(null);

    // b. Effects
    useEffect(function initAPI() {
        // Effect logic
    }, []);

    // c. Event handlers
    const handleSubmit = () => {
        // Handler logic
    };

    // d. Render helpers (optional)
    const renderError = () => {
        if (!isError) return null;
        return <Text style={styles.error}>Invalid email</Text>;
    };

    // e. Return JSX
    return (
        <View style={styles.container}>
            {/* Component JSX */}
        </View>
    );
};

// 6. Styles (if not in separate file)
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

// 7. Export
export default EmailSection;
```

### useEffect Naming

`useEffect` callbacks must be named functions that describe the effect's purpose.
Avoid anonymous callbacks so stack traces and component intent are easier to read.

```typescript
useEffect(function initAPI() {
    // Initialize API dependencies
}, []);

useEffect(function syncAuthState() {
    // Sync authentication state
}, [auth]);
```

Use concise, purpose-driven names such as `initAPI`, `syncAuthState`, `subscribeKeyboardEvents`, or `resetFormOnClose`.

### Component Naming & Export

**Default export for components:**
```typescript
// EmailSection.tsx
const EmailSection = () => { ... };
export default EmailSection;
```

**Named export for utilities/hooks:**
```typescript
// use-theme.ts
export function useTheme() { ... }
export const useColorScheme = () => { ... };
```

### Props Pattern

**Simple components - inline types:**
```typescript
const WebView = ({ uri }: { uri: string }) => { ... };
```

**Complex components - interface:**
```typescript
interface ModalProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, title, children }) => { ... };
```

### Screen vs Component Ownership

Before passing a value or function through props, check where it is actually used and where it can be safely derived.

**Keep values at screen level when they coordinate screen behavior:**
- navigation or routing
- refs shared by sibling components
- API mutations and business workflows
- global stores
- state used by multiple sibling components
- handlers that combine UI events with auth, data, persistence, or navigation side effects

**Move values to component level when they are only used by that component and can be derived locally:**
- `useSafeAreaInsets()` values used only for that component's layout
- `Platform.OS` checks used only for that component's UI
- loading booleans derived only for local display state
- formatting or label values only rendered by that component
- display-only conditional values

Prefer this:

```tsx
const AuthActions = ({
    activeProvider,
    isGooglePending,
    isApplePending,
}: AuthActionsProps) => {
    const { bottom } = useSafeAreaInsets();
    const isIos = Platform.OS === 'ios';
    const isLoading = !!activeProvider || isGooglePending || isApplePending;

    return (
        <View style={[styles.container, { bottom }]}>
            {/* UI */}
        </View>
    );
};
```

Avoid this when the child is the only consumer:

```tsx
const Screen = () => {
    const { bottom } = useSafeAreaInsets();
    const isIos = Platform.OS === 'ios';
    const isLoading = !!activeProvider || isGooglePending || isApplePending;

    return (
        <AuthActions
            bottom={bottom}
            isIos={isIos}
            isLoading={isLoading}
        />
    );
};
```

Do not move business logic into a presentational component just to reduce props. If a function touches routing, API mutations, refs, stores, or persistence, keep it in the screen or extract it into a hook.

### Style Ownership

Before adding or moving styles, check which component actually renders the element.

**Keep styles at screen level when they belong to the screen shell:**
- root screen containers
- full-screen background/layout wrappers
- layout styles shared intentionally across multiple screen-owned sections

**Move styles to component level when they are only used by that component:**
- button, text, icon, and content styles rendered inside one component
- component-only overlay, list item, modal, or card styles
- styles that pair with values derived inside the component, such as safe-area offsets or platform-specific UI

Components with their own styles should use this structure:

```text
ComponentName/
├── index.tsx
└── styles.ts
```

Avoid keeping extracted component styles in the parent screen `styles.ts` just because the component belongs to that screen. If a style is only consumed by `ComponentName`, it should live in `ComponentName/styles.ts`.

### JSX Formatting

JSX elements with more than one prop must use multi-line formatting.
Keep one prop per line, and put the closing `/>` on its own line for self-closing elements.

**Good:**
```tsx
<Image
    source={backgroundImage}
    style={StyleSheet.absoluteFill}
    resizeMode="cover"
/>
```

**Avoid:**
```tsx
<Image source={backgroundImage} style={StyleSheet.absoluteFill} resizeMode="cover" />
```

JSX elements with zero or one prop may stay on one line when readable:

```tsx
<Text>Home</Text>
<View style={styles.container}>
    {children}
</View>
```

### Function Props

Functions passed as props must be wrapped with `useCallback` before passing them to child components.
This keeps prop references stable and helps prevent avoidable child re-renders, especially when the child uses `React.memo` or has effects depending on the callback prop.

```typescript
const navigateToNextPage = useCallback(() => {
    // Navigate to the next page
}, []);

return <FirstPage onClick={navigateToNextPage} />;
```

Avoid passing inline function expressions directly to child components:

```typescript
return <FirstPage onClick={() => navigateToNextPage()} />;
```

---

## State Management

### Zustand Store Pattern

**Store Structure:**
```typescript
// src/stores/useAuthStore.ts
import { create } from 'zustand';

// 1. Define state interface
interface Auth {
    jwt: string | null;
    isAuthenticated: boolean;
}

// 2. Define store interface
interface AuthStore {
    auth: Auth;
    setAuth: (auth: Auth) => void;
    clearAuth: () => void;
}

// 3. Create store
export const useAuthStore = create<AuthStore>((set) => ({
    auth: {
        isAuthenticated: false,
        jwt: null,
    },
    setAuth: (auth: Auth) => set({ auth }),
    clearAuth: () => set({
        auth: { isAuthenticated: false, jwt: null }
    }),
}));
```

**Store Usage:**

```typescript
// Full store access
const { auth, setAuth } = useAuthStore();

// Selective access (better performance)
const isAuthenticated = useAuthStore((state) => state.auth.isAuthenticated);
const setAuth = useAuthStore((state) => state.setAuth);
```

### Local State Pattern

**Use `useState` for:**
- Component-specific UI state
- Form inputs
- Modal visibility (component-level)
- Temporary data

```typescript
const [email, setEmail] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [errors, setErrors] = useState<Record<string, string>>({});
```

**Use `useRef` for:**
- DOM/component references
- Values that don't trigger re-renders
- Mutable values across renders

```typescript
const bottomSheetRef = useRef<BottomSheetMethods>(null);
const previousValue = useRef<string>('');
```

### When to Use Global vs Local State

**Global State (Zustand):**
- Authentication state
- User profile
- App-wide settings
- Modal visibility (if controlled globally)
- Cart/order data

**Local State:**
- Form inputs
- UI toggles
- Component-specific loading states
- Temporary filters

### State, Data, and Handler Ownership

Keep state, static data, and handlers in the lowest component that owns and uses them.
Do not lift values to a screen just to pass them through when no sibling or parent depends on them.

**Keep in the child component when:**
- The state only affects that component, such as a search input value.
- The data is only rendered by that component, such as a section list.
- The handler only responds to controls inside that component.

**Lift to the parent/screen when:**
- Multiple sibling components need the same state.
- The screen coordinates navigation, persistence, API calls, or cross-section behavior.
- The parent must derive or combine child results.

Avoid root-level no-op handlers for child-only controls. Keep placeholders in the owning component until real parent coordination is required.

---

## Styling Guidelines

### React Native StyleSheet Approach

**Co-located Styles:**

```typescript
// components/EmailSection/styles.ts
import { Colors, Fonts } from '@/constants/theme';
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    button: {
        paddingVertical: 14,
        backgroundColor: Colors.azureBlue,
        borderRadius: 40,
        alignItems: 'center',
    },
    title: {
        fontFamily: Fonts.BalooBhai2Bold,
        fontSize: 24,
        lineHeight: Platform.OS === 'ios' ? 28 : 24,
        color: Colors.white,
    },
});

export default styles;
```

**Import and Use:**
```typescript
import styles from './styles';

<View style={styles.container}>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.title}>Submit</Text>
    </TouchableOpacity>
</View>
```

### Theme Constants

**Always import from central theme:**
```typescript
import { Colors, Fonts, Spacing } from '@/constants/theme';
```

**Define colors only in `src/constants/theme.ts`:**
- Add every color value to the top-level `Colors` object.
- Use color/palette names such as `gray50`, `blue600`, or `blackOverlay35`.
- Do not use feature or usage names such as `homePrimary`, `textPrimary`, or `buttonBackground`.
- Do not create feature-level color objects such as `HomeColors`; feature constants files are for non-color values like spacing, limits, and local config.

**Never hardcode values:**
```typescript
// ❌ Bad
<Text style={{ color: '#207BFF', fontSize: 16 }}>

// ✅ Good
<Text style={{ color: Colors.azureBlue, fontSize: 16 }}>
```

### Dynamic Styles

**Conditional styling with arrays:**
```typescript
<TextInput
    style={[
        styles.input,
        {
            borderColor: isError ? Colors.systemRed : Colors.darkGray,
            backgroundColor: isError ? Colors.darkRedBrown : undefined,
        },
    ]}
/>
```

**State-based styles:**
```typescript
<TouchableOpacity
    style={[
        styles.button,
        isDisabled && styles.buttonDisabled,
    ]}
    disabled={isDisabled}
/>
```

### Platform-Specific Styles

**Using `Platform.select()`:**
```typescript
import { Platform } from 'react-native';

const styles = StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
                fontFamily: Fonts.SFProBold,
                lineHeight: 28,
            },
            android: {
                fontFamily: Fonts.RobotoBold,
                lineHeight: 24,
            },
            web: {
                fontFamily: 'system-ui',
            },
        }),
    },
});
```

**Using ternary:**
```typescript
lineHeight: Platform.OS === 'ios' ? 28 : 24,
```

### Animation Styles

**React Native Reanimated:**
```typescript
import Animated from 'react-native-reanimated';

const animatedStyles = useAnimatedStyle(() => {
    return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [{ scale: withSpring(isPressed ? 0.95 : 1) }],
    };
});

<Animated.View style={[styles.container, animatedStyles]} />
```

---

## TypeScript Conventions

### Interface vs Type

**Use `interface` for:**
- Object shapes
- Component props
- Store definitions
- Extendable structures

```typescript
interface UserProfile {
    id: string;
    name: string;
    email: string;
}

interface AuthStore {
    user: UserProfile | null;
    setUser: (user: UserProfile) => void;
}
```

**Use `type` for:**
- Unions
- Intersections
- Type aliases
- Mapped types

```typescript
type Status = 'idle' | 'loading' | 'success' | 'error';
type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;
type ButtonVariant = 'primary' | 'secondary' | 'outline';
```

### Const Assertions

**For constant objects:**
```typescript
export const Colors = {
    white: '#FFFFFF',
    azureBlue: '#207BFF',
} as const;

export const Spacing = {
    small: 8,
    medium: 16,
    large: 24,
} as const;
```

### Null Handling

**Explicit null unions:**
```typescript
interface Auth {
    jwt: string | null;  // Explicit null
    user: UserProfile | null;
}
```

**Optional properties:**
```typescript
interface ModalProps {
    title?: string;  // Optional
    onClose?: () => void;
}
```

### Generic Types

**Component refs:**
```typescript
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

const bottomSheetRef = useRef<BottomSheetMethods>(null);
const carouselRef = useRef<ICarouselInstance>(null);
```

**Function types:**
```typescript
type AsyncFunction<T> = () => Promise<T>;
type Callback = () => void;
type ChangeHandler = (value: string) => void;
```

### Type Files

**Organize types by feature:**
```typescript
// features/auth/types/auth.types.ts
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignUpData extends LoginCredentials {
    name: string;
    confirmPassword: string;
}

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading';
```

---

## Import/Export Patterns

### Import Order

```typescript
// 1. React and React Native core
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// 2. Third-party libraries (alphabetical)
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { create } from 'zustand';

// 3. Absolute imports - constants
import { Colors, Fonts, Spacing } from '@/constants/theme';

// 4. Absolute imports - components
import AnimatedIcon from '@/components/AnimatedIcon';

// 5. Absolute imports - hooks
import { useTheme } from '@/hooks/use-theme';

// 6. Absolute imports - stores
import { useAuthStore } from '@/stores/useAuthStore';

// 7. Relative imports
import styles from './styles';
import EmailSection from './components/EmailSection';

// 8. Types (can be mixed with above or at the end)
import type { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
```

### Path Aliases

**Use absolute imports with `@/` alias:**
```typescript
// ✅ Good
import { Colors } from '@/constants/theme';
import AnimatedIcon from '@/components/AnimatedIcon';
import { useAuthStore } from '@/stores/useAuthStore';

// ❌ Bad (avoid relative paths for global imports)
import { Colors } from '../../../constants/theme';
import AnimatedIcon from '../../../components/AnimatedIcon';
```

**Exception: Use relative paths for co-located files:**
```typescript
// ✅ Good (same directory or subdirectory)
import styles from './styles';
import EmailSection from './components/EmailSection';
```

### Export Patterns

**Default exports:**
```typescript
// Components
export default EmailSection;

// Styles
export default styles;
```

**Named exports:**
```typescript
// Constants
export const Colors = { ... };
export const Fonts = { ... };

// Utilities
export const formatDate = (date: Date) => { ... };
export const validateEmail = (email: string) => { ... };

// Hooks
export function useTheme() { ... }
export const useColorScheme = () => { ... };

// Types
export type { UserProfile, AuthStore };
export interface LoginCredentials { ... }
```

**Re-exports:**
```typescript
// features/auth/index.ts
export { default as LoginScreen } from './screens/LoginScreen';
export { default as SignUpScreen } from './screens/SignUpScreen';
export * from './types/auth.types';
```

---

## Routing & Navigation

### Expo Router File-Based Routing

**Route Groups:**
```
app/
├── _layout.tsx              # Root layout
├── (auth)/                  # Unauthenticated routes
│   ├── _layout.tsx
│   ├── index.tsx
│   └── sign-up.tsx
└── (home)/                  # Authenticated routes
    ├── _layout.tsx
    ├── index.tsx
    └── profile.tsx
```

**Protected Routes:**
```typescript
// app/_layout.tsx
import { Stack } from 'expo-router';
import { useAuthStore } from '@/stores/useAuthStore';

export default function RootLayout() {
    const isAuthenticated = useAuthStore(state => state.auth.isAuthenticated);

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={isAuthenticated}>
                <Stack.Screen name="(home)" />
            </Stack.Protected>
            <Stack.Protected guard={!isAuthenticated}>
                <Stack.Screen name="(auth)" />
            </Stack.Protected>
        </Stack>
    );
}
```

### Navigation Patterns

**Using `useRouter` hook:**
```typescript
import { useRouter } from 'expo-router';

const MyScreen = () => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/(home)/profile');
    };

    const handleGoBack = () => {
        router.back();
    };

    return <TouchableOpacity onPress={handleNavigate}>...</TouchableOpacity>;
};
```

**Linking (External URLs):**
```typescript
import { openBrowserAsync } from 'expo-web-browser';

const handleOpenLink = async () => {
    await openBrowserAsync('https://example.com/privacy-policy');
};
```

---

## Error Handling

### Error State Pattern

**Boolean flags for UI errors:**
```typescript
const [isEmailError, setIsEmailError] = useState(false);
const [isPasswordError, setIsPasswordError] = useState(false);

// Conditional styling
<TextInput
    style={[
        styles.input,
        isEmailError && styles.inputError,
    ]}
/>
```

**Error messages:**
```typescript
const [errors, setErrors] = useState<Record<string, string>>({});

// Set errors
setErrors({ email: 'Invalid email format' });

// Display errors
{errors.email && <Text style={styles.error}>{errors.email}</Text>}
```

### API Error Handling

**Try-catch pattern:**
```typescript
const handleSubmit = async () => {
    setIsLoading(true);
    setErrors({});

    try {
        const response = await authService.login(email, password);
        setAuth(response.data);
        router.push('/(home)');
    } catch (error) {
        if (error.response?.status === 401) {
            setErrors({ form: 'Invalid credentials' });
        } else {
            setErrors({ form: 'An error occurred. Please try again.' });
        }
    } finally {
        setIsLoading(false);
    }
};
```

### Validation Pattern

**Form validation:**
```typescript
const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const handleSubmit = () => {
    if (!validateEmail(email)) {
        setIsEmailError(true);
        return;
    }
    // Proceed with submission
};
```

---

## Testing

Every new feature, bug fix, refactor, and behavior change must include new tests or validation of existing tests.
For detailed testing strategy, file naming, test structure, selector usage, and `testID` rules, read `TESTING_CONVENTION.md`.

---

## Git Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code refactoring
- `style`: Code style changes (formatting, no logic change)
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (deps, build, etc.)
- `perf`: Performance improvements

### Examples

```bash
feat(auth): implement email verification flow

- Add email verification modal
- Integrate OTP input component
- Add resend code functionality

Closes #123
```

```bash
fix(home): resolve bottom tab navigation issue on Android

Platform-specific adjustment for BottomTabInset constant
```

```bash
refactor(stores): migrate auth store to use Zustand

Replace Context API with Zustand for better performance
and simpler API
```

### Branch Naming

```
<type>/<ticket-number>-<short-description>

Examples:
- feat/AUTH-123-email-verification
- fix/HOME-456-tab-navigation
- refactor/STORE-789-zustand-migration
```

---

## Best Practices Summary

### Component Design
- Keep components small and focused (single responsibility)
- Co-locate styles, types, and sub-components
- Use TypeScript for all components
- Prefer composition over prop drilling

### State Management
- Use Zustand for global state
- Use `useState` for local UI state
- Use `useRef` for values that don't trigger re-renders
- Avoid prop drilling - use stores when needed

### Performance
- Use selective Zustand access `useStore(state => state.value)`
- Memoize expensive calculations with `useMemo`
- Use `React.memo` for components that render often
- Use `useCallback` for functions passed as props

### Code Quality
- Always use TypeScript strict mode
- Add proper error handling (try-catch)
- Validate user inputs
- Use absolute imports with `@/` alias
- Follow consistent naming conventions

### Styling
- Use React Native StyleSheet (no external CSS-in-JS)
- Import from central theme constants
- Co-locate styles with components
- Use Platform.select() for platform-specific styles

### Navigation
- Use Expo Router file-based routing
- Organize routes with route groups
- Implement route guards for protected routes
- Use `useRouter` hook for navigation

---

## Tools & Libraries

### Core Stack
- **Framework:** React Native + Expo
- **Language:** TypeScript
- **Routing:** Expo Router
- **State:** Zustand
- **Styling:** React Native StyleSheet
- **Animations:** React Native Reanimated

### Key Dependencies
- `react-native-reanimated` - Animations
- `expo-router` - File-based routing
- `zustand` - State management
- `@gorhom/bottom-sheet` - Bottom sheet modals
- `react-native-otp-entry` - OTP input
- `expo-linear-gradient` - Gradients

---

## Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

**Last Updated:** 2026-05-01
**Version:** 1.0.0
