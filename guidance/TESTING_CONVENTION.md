## Testing
### Unit Tests (60%)
Why: Catch bugs cheap & early

⚡ Fast feedback (milliseconds)
💰 $1 to fix vs $100+ in production
🔧 Easy debugging - know exactly what's broken
📚 Living documentation for code

### Integration Tests (15%)
Why: Bridge the gaps between components

🔗 Catch component interaction bugs
⚖️ Good ROI - moderate cost, high value
🌉 Fill gaps unit tests miss
Example: API works + UI works, but data format mismatch

Real Example:
```
// Unit tests pass ✅
test('formatUser formats correctly', () => { ... });
test('UserAPI.getUser returns user', () => { ... });

// But integration reveals the bug ❌
test('UserProfile displays user data', () => {
  // API returns { name: "John" }
  // formatUser expects { firstName: "John" }
  // Integration test catches this mismatch!
});
```

### Functional Tests (15%)
Why: Validate features against user requirements

🎯 Ensure features work as specified (black-box focus)
🧪 Test real-world scenarios for individual capabilities
📋 Bridge spec to implementation without deep internals
🔍 Catch usability issues in feature flows

Real Example:
```
// Unit & integration tests pass ✅
// But functional reveals the bug ❌
test('Login feature accepts valid credentials', async () => {
  // User enters email/password ✅
  // API authenticates ✅
  // But... error message for "weak password" is unclear/misleading
  // User thinks login failed entirely, instead of just validation warning
  // Functional test enforces clear UX per requirements!
});
```

### E2E Tests (10%)
Why: Protect user experience & business revenue

👤 Only way to verify real user flows
💰 Protect critical business paths (login, checkout)
🛡️ Catch issues other tests miss
📱 Test real device behavior

Real Example:
```
// All unit tests pass ✅
// All integration tests pass ✅
// All functional tests pass ✅
// But E2E reveals...

test('Purchase flow', async () => {
  // User can add items ✅
  // Payment API works ✅
  // But... deep link after payment breaks navigation ❌
  // User sees blank screen instead of success page
});
```

### Why We Need All Four Together
The Coverage Gap Problem:

| Test Type        | Catches                                         | Misses                                                      |
| ---------------- | ----------------------------------------------- | ----------------------------------------------------------- |
| Unit Only        | Logic bugs                                      | Integration, feature usability, UI flow, real device issues |
| Integration Only | Component interaction                           | Logic details, feature validation, complete user journey    |
| Functional Only  | Feature behavior & requirements                 | Component glue, deep logic, full-system flows               |
| E2E Only         | User experience                                 | Root cause, expensive to debug                              |

<br>

Each Layer Has Unique Value:

| Layer        | Purpose                                         | Cannot Be Replaced By                                  |
| ------------ | ----------------------------------------------- | ------------------------------------------------------ |
| Unit         | Fast feedback, edge cases, logic validation     | Others (too slow, miss isolated details)               |
| Integration  | Component interaction, realistic data flow      | Functional/E2E (don't isolate interactions)            |
| Functional   | Feature validation against specs, usability     | E2E (doesn't focus on single-feature depth)            |
| E2E          | User experience, complete flow validation       | Unit/Integration/Functional (don't test real journeys) |



### The Flow: That's the Classic Pyramid Sequence
Running tests in this order (or in CI/CD pipelines) builds confidence progressively: Start narrow/fast (unit), expand to interactions (integration), validate features (functional), then simulate reality (E2E). It minimizes false positives and speeds up feedback.

| Step  | Test Type         | Run When/Why?                   | What It Confirms                                               | Debug Ease (If Fails)                                                         |
| ----- | ----------------- | ------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **1** | Unit Tests        | First, after code changes.      | Isolated logic works (e.g., function outputs correct values).  | High: Pinpoints exact line/method.                                            |
| **2** | Integration Tests | After units pass.               | Components interact without breaks (e.g., API + DB handshake). | High: Isolates to specific boundary (e.g., "Mock DB call failed").            |
| **3** | Functional Tests  | After integrations pass.        | Features match specs/UX (e.g., full login flow feels right).   | Medium-High: Narrows to feature logic or UI, assuming lower layers are green. |
| **4** | E2E Tests         | Last, in staging/prod-like env. | End-to-end journeys work (e.g., login → profile → logout).     | Medium: Broader scope, but prior tests rule out root causes.                  |

### Core Idea: Separation of Concerns = Debug Superpower
Absolutely—each layer owns a unique "concern":
- **Unit**: "Does this code bit work alone?"
- **Integration**: "Do these bits play nice together?"
- **Functional**: "Does this feature deliver as promised?"
- **E2E**: "Does the whole app feel seamless to users?"

This modularity means a failure lights up *exactly* where to dive in—no wild goose chases. It's the testing pyramid in action: More unit/integration for speed, fewer E2E for sanity. If a test flakes, you trace back layers efficiently.

---

## Testing Standards

### Test File Naming

```
tests/
├── unit/
│   ├── components/
│   │   └── AnimatedIcon.test.tsx
│   ├── hooks/
│   │   └── use-theme.test.ts
│   └── utils/
│       └── validation.test.ts
├── functional/
│   └── auth-login.functional.test.tsx
├── integration/
│   └── auth-api.integration.test.ts
└── e2e/
    └── auth.e2e.ts
```

Keep test files grouped by test type under `tests/`.
Use source-like subfolders inside each test type when it improves discoverability.

### Test Structure (Template)

```typescript
// AnimatedIcon.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AnimatedIcon from './AnimatedIcon';

describe('AnimatedIcon', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(<AnimatedIcon name="check" />);
        expect(getByTestId('animated-icon')).toBeTruthy();
    });

    it('should handle press events', () => {
        const onPress = jest.fn();
        const { getByTestId } = render(
            <AnimatedIcon name="check" onPress={onPress} />
        );

        fireEvent.press(getByTestId('animated-icon'));
        expect(onPress).toHaveBeenCalledTimes(1);
    });
});
```

### Test IDs

Use `testID` for interactive elements, repeated UI, dynamic text, split/nested `Text`, translated copy, and flow-critical assertions.
Prefer `getByTestId`, `queryByTestId`, or `findByTestId` for these cases.

Avoid relying on `getByText` for actions or assertions against text that may be split across nodes, masked, translated, or changed by copy edits.
Text queries are acceptable for stable user-visible copy assertions, but they should not be the primary selector for flow actions.

**Add testID to components:**
```typescript
<TouchableOpacity testID="submit-button" onPress={handleSubmit}>
    <Text>Submit</Text>
</TouchableOpacity>
```

**Good:**
```typescript
<TouchableOpacity testID="resend-code-button" onPress={handleResend}>
    <Text>Tap to resend</Text>
</TouchableOpacity>

fireEvent.press(getByTestId('resend-code-button'));
```

**Avoid:**
```typescript
fireEvent.press(getByText('Resend code to'));
```

---

## E2E Testing With Detox

Detox E2E tests validate complete user journeys on a real simulator or emulator.
Use them for critical flows only; do not duplicate coverage already handled by unit, integration, or functional tests.

### E2E Scope

Write E2E tests for business-critical and routing-critical journeys:
- app launch and initial auth state
- onboarding and registration
- sign in, token refresh, protected routing, and logout
- deep links
- booking, payment, checkout, or revenue flows when added
- critical regression paths that require real device behavior

Do not use E2E tests for isolated validation logic, formatting helpers, component states, or API contract details.
Those belong in unit, integration, or functional tests.

### Folder Structure

Use this structure when Detox is added:

```text
tests/
├── unit/
├── functional/
├── integration/
└── e2e/
    ├── specs/
    │   ├── auth.e2e.ts
    │   └── onboarding.e2e.ts
    ├── helpers/
    │   ├── app.ts
    │   ├── auth.ts
    │   └── network.ts
    └── fixtures/
        └── users.ts
```

E2E spec files use `{feature}.e2e.ts`.
Test names should describe user journeys, not implementation details.

```typescript
describe('Auth E2E', () => {
    it('registers a new user and opens the home screen', async () => {
        // Journey steps
    });
});
```

### E2E Scope Map

Keep E2E scope ownership in `tests/e2e/scope-map.json`.
Quality gates use this map to decide which Detox specs run for a changed source path.

Update the scope map whenever adding or moving feature areas that should trigger E2E coverage.
Map source globs to Detox tags:

```json
{
  "src/features/auth/**": ["@auth"],
  "src/app/(auth)/**": ["@auth"],
  "src/features/home/**": ["@home"],
  "src/app/(home)/**": ["@home"]
}
```

Detox specs must include the matching tag in the `describe` title:

```typescript
describe('Login using email @auth', () => {
    it('logs in with an existing verified email account', async () => {
        // Journey steps
    });
});
```

Use one tag for narrow feature ownership and multiple tags only when a spec intentionally covers multiple feature areas.
If a source area has no E2E-critical journey, leave it unmapped and document that decision in the PR.

### Detox Selectors

Detox selectors must use stable `testID`.
Never use visible text as the primary E2E selector because copy, localization, masking, and nested text can change independently of behavior.

Every screen root, primary CTA, form input, modal, tab, and flow-critical status must expose a `testID`.

Use this naming pattern:

```text
{screen}-{element}-{role}
```

Examples:
- `auth-email-input`
- `auth-next-button`
- `auth-error-message`
- `home-logout-button`
- `verification-code-input`
- `verification-resend-button`

```typescript
await element(by.id('auth-email-input')).typeText('test@example.com');
await element(by.id('auth-next-button')).tap();
await expect(element(by.id('auth-error-message'))).toBeVisible();
```

### Detox Scripts

Add scripts like these when Detox is installed:

```json
{
  "e2e:build:ios": "detox build --configuration ios.sim.debug",
  "e2e:test:ios": "detox test --configuration ios.sim.debug",
  "e2e:build:android": "detox build --configuration android.emu.debug",
  "e2e:test:android": "detox test --configuration android.emu.debug"
}
```

### Detox Configuration

Use `.detoxrc.js` as the Detox configuration file.
Maintain separate configurations for iOS simulator and Android emulator.

Recommended configuration names:
- `ios.sim.debug`
- `ios.sim.release`
- `android.emu.debug`
- `android.emu.release`

Use debug builds for local development.
Use release builds in CI only after the E2E suite is stable enough to justify the slower build path.

### Reliability Standards

E2E tests must be deterministic and independent:
- reset app state before each spec
- clear secure storage or launch with a clean app state
- do not depend on test execution order
- avoid arbitrary sleeps
- prefer Detox synchronization and explicit waits
- keep each test focused on one user journey
- collect screenshots, videos, and logs on failure in CI

If a wait is unavoidable, document why it exists and keep the timeout as narrow as practical.

```typescript
await waitFor(element(by.id('home-screen')))
    .toBeVisible()
    .withTimeout(5000);
```

### Backend And Test Data

E2E tests must never hit production.
Use a deterministic test API environment, mock server, or seeded backend.

Test data rules:
- use dedicated E2E test users
- reset or seed data between runs
- avoid shared mutable accounts across parallel jobs
- create helper APIs or seed scripts for setup when needed
- keep secrets and credentials out of source control

Prefer helper functions for repeated setup:

```typescript
await resetAppState();
await seedVerifiedUser(e2eUser);
await loginAs(e2eUser);
```

### CI Strategy

Run E2E after unit, integration, and functional tests.
Start with a small smoke suite on every PR.
Run the full E2E suite on `main`, release branches, or nightly until runtime is acceptable for every PR.

CI must preserve failure artifacts:
- simulator/emulator logs
- Detox logs
- screenshots
- videos when enabled

### Acceptance Gate

New critical flows require E2E coverage or a documented reason not to add it.
Flaky E2E tests must be fixed promptly or quarantined with an owner, issue, and removal criteria.

Do not ignore E2E failures without recording the risk and follow-up owner.

### How to set device
#### For iOS simulator:

```
xcrun simctl list devices available
```

Use the simulator name from the output, for example:
- iPhone 15
- iPhone 15 Pro
- iPhone 16

Then update `.detoxrc.js`:
```
devices: {
  simulator: {
    type: 'ios.simulator',
    device: {
      type: 'iPhone 15',
    },
  },
}
```

#### For Android emulator / AVD:

```
emulator -list-avds
```

Use the exact AVD name from the output, for example:
- Pixel_7_API_35
- Pixel_8_API_35

Then update `.detoxrc.js`:
```
devices: {
  emulator: {
    type: 'android.emulator',
    device: {
      avdName: 'Pixel_7_API_35',
    },
  },
}
```

You can also check Android Studio: Tools > Device Manager, then use the AVD name shown there.
