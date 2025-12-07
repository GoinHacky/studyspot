# SpaceSpotter - React Native Mobile App

A static mobile application built with React Native and Expo for finding and booking spaces (cafes, coworking spaces, etc.).

## Features

- **Landing Screen**: Welcome screen with "FIND. BOOK. FOCUS." tagline
- **Login Screen**: User authentication with social login options
- **Sign Up Screen**: User registration with profile picture upload
- **Home Screen**: Main dashboard with search, categories, and top spaces
- **Side Menu**: Drawer navigation with user profile and settings

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (install globally: `npm install -g expo-cli`)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your device:
   - Scan the QR code with Expo Go app (iOS/Android)
   - Or press `i` for iOS simulator
   - Or press `a` for Android emulator

## Project Structure

```
StudySpotter/
├── App.js                 # Main app entry point with navigation
├── screens/               # All screen components
│   ├── LandingScreen.js   # Welcome/landing screen
│   ├── LoginScreen.js     # Login screen
│   ├── SignUpScreen.js    # Sign up screen
│   ├── HomeScreen.js      # Main home screen
│   └── DrawerMenu.js      # Side drawer menu
├── constants/             # App constants
│   ├── Colors.js          # Color palette
│   └── Styles.js          # Common styles
└── package.json           # Dependencies
```

## Design

The app follows a minimalist design with:
- Light beige/cream background (#F5F0E8)
- Dark red primary color (#8B0000)
- Clean, modern UI with rounded corners
- Consistent spacing and typography

## Navigation Flow

1. Landing → Login/Sign Up
2. Login → Home
3. Sign Up → Home
4. Home → Drawer Menu (side navigation)

## Technologies Used

- React Native
- Expo
- React Navigation (Stack & Drawer)
- Expo Vector Icons

## Notes

This is a static prototype. No backend integration or actual authentication is implemented. All screens are for UI/UX demonstration purposes only.



