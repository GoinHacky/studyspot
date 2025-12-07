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
import AdminBookingsScreen from './screens/AdminBookingsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
// HomeDrawer removed — we will use HomeScreen directly in the stack to prevent Drawer from mounting

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
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
                    <Stack.Screen name="AdminBookings" component={AdminBookingsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

