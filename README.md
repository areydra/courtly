# Courtly

A React Native (Expo) app for browsing sports facilities and booking a court — sign up/sign in, view facility details, pick a slot, confirm a booking, and track it under "My Bookings".

## Tech Stack

- **Framework:** Expo (SDK 57) + Expo Router
- **Language:** TypeScript
- **State:** Zustand
- **Data fetching:** TanStack Query (React Query)
- **Runtime:** React 19 / React Native 0.86

## Quick Test (no build required)

If you just want to try the app on an Android device without setting up the dev environment, install the prebuilt APK committed to this repo:

```
releases/courtly-android.apk
```

Download that file, transfer it to an Android device (or an emulator), and install it directly — enable "Install unknown apps" for your file manager/browser if prompted. This build points at the same API environment as `main`, so no additional setup is needed.

## Prerequisites

- Node.js 20+
- npm
- Xcode (for iOS Simulator) and/or Android Studio (for Android Emulator) if you want to run the app locally
- [Expo CLI](https://docs.expo.dev/more/expo-cli/) is used via `npx`/`npm` scripts — no global install required

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   Create a `.env` file in the project root with the API base URL:

   ```
   EXPO_PUBLIC_API_BASE_URL=<your-api-base-url>
   ```

3. **Run the app**

   ```bash
   npm run android   # Build & run on Android (emulator or connected device)
   npm run ios       # Build & run on iOS (simulator)
   npm run start      # Start the Metro dev server (use with a dev build or Expo Go)
   ```

   > This project uses native modules (see below) that require a **development build** — plain Expo Go may not support all of them. Use `npm run android` / `npm run ios` to generate and run a dev client.

4. **Run tests**

   ```bash
   npm run test
   ```

## App Flow

- **Welcome** — onboarding/landing screen for unauthenticated users
- **Login / Register** — email-based authentication
- **Home** — browse available sports facilities
- **Facility Detail** — view facility info, photos, and availability
- **Booking** — select a slot and confirm a booking
- **My Bookings** — view and manage past/upcoming bookings

## Expo Modules Used

Beyond core React Native, this app integrates the following Expo SDK modules:

| Module | Where it's used | Why |
|---|---|---|
| **`expo-secure-store`** | `src/lib/secure-storage.ts` | Persists the auth access token in the device's encrypted keystore/keychain instead of `AsyncStorage`, so session tokens aren't stored in plain text. |
| **`expo-linear-gradient`** | `src/features/welcome/screens/WelcomeScreen` | Renders the gradient background/overlay on the welcome screen without hand-rolling native gradient views per platform. |
| **`expo-splash-screen`** | `src/app/_layout.tsx` | Keeps the native splash screen visible (`preventAutoHideAsync`) until fonts are loaded and the initial auth check completes, avoiding a flash of unstyled content on launch. |
| **`expo-status-bar`** | Every screen (`Home`, `FacilityDetail`, `Booking`, `MyBookings`, `Welcome`, `Register`, `Login`) | Gives consistent, per-screen control over the status bar style/appearance across iOS and Android with one cross-platform API. |

The app also relies on `expo-router` for file-based navigation, `expo-font` (via `@expo-google-fonts/manrope`) for custom typography, and `expo-constants`/`expo-linking` as supporting infrastructure for routing — these are foundational/transitive rather than feature choices, which is why the table above highlights the modules chosen deliberately for a specific product need.

## Project Structure

See [`AGENTS.md`](./AGENTS.md) and [`guidance/CODE_CONVENTION.md`](./guidance/CODE_CONVENTION.md) for the full code convention (folder structure, naming, styling, state management) and [`guidance/TESTING_CONVENTION.md`](./guidance/TESTING_CONVENTION.md) for the testing strategy.
