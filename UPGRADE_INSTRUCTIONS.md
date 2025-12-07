# Upgrading to Expo SDK 54

Your project has been updated to use Expo SDK 54 to match your Expo Go app version.

## Installation Steps

If you encounter any issues during installation, follow these steps:

### Option 1: Clean Install (Recommended)

1. **Delete node_modules and package-lock.json:**
   ```bash
   rm -rf node_modules package-lock.json
   ```
   Or on Windows PowerShell:
   ```powershell
   Remove-Item -Recurse -Force node_modules, package-lock.json
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Fix any remaining dependency issues:**
   ```bash
   npx expo install --fix
   ```

### Option 2: Use Expo Install (Alternative)

If the above doesn't work, install packages individually using Expo's installer:

```bash
npx expo install expo@~54.0.0
npx expo install react@18.3.1
npx expo install react-native@0.76.5
npx expo install expo-status-bar
npx expo install react-native-screens
npx expo install react-native-safe-area-context
npx expo install react-native-gesture-handler
npx expo install react-native-reanimated
npx expo install @expo/vector-icons
```

### Verify Installation

After installation, verify everything is correct:

```bash
npx expo-doctor
```

This will check for any compatibility issues.

## SDK Version Location

The SDK version is specified in:
- **package.json** - The `expo` package version (currently `~54.0.0`)
- **app.json** - No SDK version is explicitly set here, it's inferred from the expo package version

## Notes

- Expo Go on physical devices only supports the latest SDK (currently 54)
- If you need to use SDK 49, you would need to use an emulator/simulator with an older Expo Go version
- SDK 54 uses React Native 0.76.5 and React 18.3.1



