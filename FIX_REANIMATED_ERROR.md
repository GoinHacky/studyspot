# Fix Reanimated Drawer Error

## The Problem
The error occurs because the Drawer Navigator can't detect that Reanimated 4 is properly configured. It tries to use legacy mode, which Reanimated 4 doesn't support.

## Solution Steps

### Step 1: Stop All Running Processes
Stop any running Expo/Metro bundler processes.

### Step 2: Clear All Caches
```bash
# Clear Metro bundler cache
npx expo start --clear

# Or manually delete cache
Remove-Item -Recurse -Force .expo -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules/.cache -ErrorAction SilentlyContinue
```

### Step 3: Verify Babel Config
Make sure `babel.config.js` has the Reanimated plugin as the LAST plugin:
```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin', // MUST be last
    ],
  };
};
```

### Step 4: Restart Development Server
```bash
npx expo start --clear
```

### Step 5: Reload App
- Shake your device or press `r` in the terminal
- Or close and reopen Expo Go app

## If Error Persists

If the error still occurs after clearing cache, try:

1. **Delete node_modules and reinstall:**
   ```bash
   Remove-Item -Recurse -Force node_modules
   npm install
   npx expo start --clear
   ```

2. **Verify Reanimated is installed:**
   ```bash
   npm list react-native-reanimated
   ```
   Should show version ~4.1.1

3. **Check if Babel processed Reanimated:**
   Look for Reanimated worklets in the bundle output.

## Alternative: Use Stack Navigator Only (Temporary)
If you need the app working immediately, we can temporarily remove the drawer and use a modal-based menu instead.




