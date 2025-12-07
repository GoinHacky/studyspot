# SpaceSpotter - React Native Mobile App

A static mobile application built with React Native and Expo for finding and booking spaces (cafes, coworking spaces, etc.).

![StudySpotter](https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=400&fit=crop)

## ✨ Features

### 👤 **User Features**
- **🔐 Authentication System** - Login/Signup with beautiful UI
- **🏠 Home Dashboard** - Overview of popular spaces and categories
- **🔍 Discovery Screen** - Browse cafes with social interactions (likes, comments, bookmarks)
- **⭐ Favorites System** - Save and manage starred locations
- **📅 Smart Booking** - Complete reservation system with date/time selection
- **👤 Profile Management** - Editable user profiles with photo upload
- **⚙️ Settings Panel** - Comprehensive preferences and account settings
- **🎨 Beautiful UI** - Modern design with real images from Unsplash

### 👨‍💼 **Admin Features**
- **📊 Admin Dashboard** - Statistics overview and recent bookings
- **📋 Booking Management** - Filter, search, and manage all reservations
- **✅ Status Control** - Approve, cancel, or modify bookings
- **📈 Analytics** - Track bookings, revenue, and user engagement

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- React Native development environment

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GoinHacky/studyspot.git
   cd studyspot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Run on your device:**
   - Install Expo Go app on your phone
   - Scan the QR code from the terminal
   - Or run on emulator: `npm run android` / `npm run ios`

## 🛠️ Tech Stack

- **Framework:** React Native with Expo
- **Navigation:** React Navigation v6
- **Icons:** Expo Vector Icons
- **Images:** Unsplash API integration
- **Styling:** StyleSheet with modern design patterns
- **State Management:** React Hooks (useState, useEffect)

## 📱 Screens Overview

### **User Screens**
- **LandingScreen** - Welcome screen with hero image
- **LoginScreen** - User authentication
- **SignUpScreen** - User registration
- **HomeScreen** - Main dashboard with categories
- **DiscoveryScreen** - Browse and discover cafes
- **StarredScreen** - Favorite locations grid
- **BookingScreen** - Complete reservation system
- **ProfileScreen** - User profile management
- **SettingScreen** - App preferences and settings

### **Admin Screens**
- **AdminDashboardScreen** - Statistics and overview
- **AdminBookingsScreen** - Booking management system

### **Navigation**
- **MainTabScreen** - Bottom tab navigation container
- **DrawerMenu** - Side navigation drawer
- **BottomNavigation** - Custom bottom navigation component

## 🎨 Design Features

- **Modern UI/UX** - Clean, intuitive interface design
- **Real Images** - Beautiful cafe and workspace photos
- **Responsive Design** - Works on all screen sizes
- **Professional Styling** - Shadows, gradients, and animations
- **Consistent Branding** - Cohesive color scheme and typography

## 📂 Project Structure

```
StudySpotter/
├── screens/              # All application screens
│   ├── LandingScreen.js
│   ├── LoginScreen.js
│   ├── SignUpScreen.js
│   ├── HomeScreen.js
│   ├── DiscoveryScreen.js
│   ├── StarredScreen.js
│   ├── BookingScreen.js
│   ├── ProfileScreen.js
│   ├── SettingScreen.js
│   ├── AdminDashboardScreen.js
│   ├── AdminBookingsScreen.js
│   ├── MainTabScreen.js
│   └── DrawerMenu.js
├── components/           # Reusable components
│   ├── BottomNavigation.js
│   └── ImageExample.js
├── constants/            # App constants
│   ├── Colors.js
│   └── Styles.js
├── assets/              # Images and icons
│   ├── images/
│   ├── icon.png
│   └── splash.png
└── App.js              # Main app entry point
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



