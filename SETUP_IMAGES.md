# 🖼️ Setting Up App Images

This guide explains how to add the custom logo and loading screen images to your StudySpotter app.

## 🚨 **Current Status**
The app is currently running with **styled text placeholders** instead of images to avoid bundling errors. The loading screen shows:
- **SPACESPOTTER** text with location pin emoji 📍
- **People and laptop emojis** 👥💻 with "FIND. BOOK. FOCUS." text
- **Professional styling** that matches your brand

## 📁 Optional: Adding Real Images

If you want to replace the text placeholders with actual images:

### 1. **Logo Image** (`logo.png`)
- **File:** The SpaceSpotter logo with location pin
- **Location:** `assets/logo.png`
- **Usage:** Loading screen logo (after code update)
- **Recommended size:** 1024x1024px (PNG format)

### 2. **Loading Illustration** (`loading-illustration.png`)
- **File:** The "FIND. BOOK. FOCUS." illustration with people
- **Location:** `assets/loading-illustration.png`
- **Usage:** Loading screen illustration (after code update)
- **Recommended size:** 800x600px (PNG format)

## 🔧 How to Add the Images

1. **Save the images** you uploaded to your computer
2. **Rename them** to match the required names:
   - First image → `logo.png`
   - Second image → `loading-illustration.png`
3. **Copy them** to the `assets/` folder in your project
4. **Replace** the empty placeholder files that were created

## 📱 Where the Images Are Used

### Logo (`logo.png`):
- ✅ App icon (home screen)
- ✅ Loading screen header
- ✅ Android adaptive icon
- ✅ Web favicon (when exported)

### Loading Illustration (`loading-illustration.png`):
- ✅ Loading screen main illustration
- ✅ Splash screen background
- ✅ App startup screen

## 🚀 After Adding Images

1. **Restart the development server:**
   ```bash
   npm start
   ```

2. **Clear cache if needed:**
   ```bash
   expo start -c
   ```

3. **Test the app** to see your custom branding!

## 📝 File Structure

```
StudySpotter/
├── assets/
│   ├── logo.png                    ← Your SpaceSpotter logo
│   ├── loading-illustration.png    ← Your loading screen illustration
│   ├── icon.png                    ← Original Expo icon (backup)
│   └── splash.png                  ← Original splash (backup)
├── screens/
│   └── LoadingScreen.js            ← Uses both images
└── app.json                        ← Updated to use new images
```

## 🎨 Image Requirements

- **Format:** PNG (recommended) or JPG
- **Background:** Transparent PNG works best for logo
- **Quality:** High resolution for best results
- **Colors:** Should match your app's color scheme (#8B0000 red, #F5F0E8 cream)

## ⚠️ Important Notes

- The empty placeholder files were created automatically
- You need to replace them with your actual images
- Make sure the file names match exactly: `logo.png` and `loading-illustration.png`
- Images should be optimized for mobile use (not too large in file size)

Once you add these images, your app will have a professional, branded appearance with your custom logo and loading screen! 🎉
