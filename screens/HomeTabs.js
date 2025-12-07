import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import StarredScreen from './StarredScreen';
import BookingScreen from './BookingScreen';
import SettingScreen from './SettingScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopWidth: 0,
          height: 70,
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: ({ focused, color }) => {
          let iconName = 'home-outline';
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          if (route.name === 'Explore') iconName = focused ? 'search' : 'search-outline';
          if (route.name === 'Starred') iconName = focused ? 'star' : 'star-outline';
          if (route.name === 'Booking') iconName = focused ? 'calendar' : 'calendar-outline';
          if (route.name === 'Setting') iconName = focused ? 'settings' : 'settings-outline';
          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Starred" component={StarredScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

