import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { enableScreens } from 'react-native-screens';

// Enable screens for better performance
enableScreens();

import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainTabScreen from './screens/MainTabScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import AdminCafesScreen from './screens/AdminCafesScreen';
import AdminBookingsScreen from './screens/AdminBookingsScreen';
import AdminUsersScreen from './screens/AdminUsersScreen';
import AdminAnalyticsScreen from './screens/AdminAnalyticsScreen';
import VendorDashboardScreen from './screens/VendorDashboardScreen';
import VendorAddBookingScreen from './screens/VendorAddBookingScreen';
import VendorCalendarScreen from './screens/VendorCalendarScreen';
import VendorSettingsScreen from './screens/VendorSettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <StatusBar style="dark" />
                <Stack.Navigator
                    initialRouteName="Landing"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Landing" component={LandingScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="Home" component={MainTabScreen} />
                    <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
                    <Stack.Screen name="AdminCafes" component={AdminCafesScreen} />
                    <Stack.Screen name="AdminBookings" component={AdminBookingsScreen} />
                    <Stack.Screen name="AdminUsers" component={AdminUsersScreen} />
                    <Stack.Screen name="AdminAnalytics" component={AdminAnalyticsScreen} />
                    <Stack.Screen name="VendorDashboard" component={VendorDashboardScreen} />
                    <Stack.Screen name="VendorAddBooking" component={VendorAddBookingScreen} />
                    <Stack.Screen name="VendorCalendar" component={VendorCalendarScreen} />
                    <Stack.Screen name="VendorSettings" component={VendorSettingsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

