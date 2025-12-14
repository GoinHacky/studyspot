import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BottomNavigation = ({ navigation, activeTab }) => {
  const insets = useSafeAreaInsets();
  const bottomOffset = (insets?.bottom ?? 0) + 8;
  const navItems = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: 'home', 
      screen: 'Home' 
    },
    { 
      id: 'explore', 
      label: 'Explore', 
      icon: 'compass', 
      screen: 'Discovery' 
    },
    { 
      id: 'starred', 
      label: 'Starred', 
      icon: 'star', 
      screen: 'Starred' 
    },
    { 
      id: 'booking', 
      label: 'Booking', 
      icon: 'calendar', 
      screen: 'Booking' 
    },
    { 
      id: 'settings', 
      label: 'Setting', 
      icon: 'settings', 
      screen: 'Settings' 
    },
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: 'person', 
      screen: 'Profile' 
    },
  ];

  const handleNavPress = (item) => {
    if (navigation && navigation.navigate) {
      navigation.navigate(item.screen);
    }
  };

  return (
    <View style={[styles.container, { bottom: bottomOffset }]}>
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.navItem}
            onPress={() => handleNavPress(item)}
          >
            <Ionicons
              name={isActive ? item.icon : `${item.icon}-outline`}
              size={22}
              color={isActive ? Colors.primary : Colors.textSecondary}
            />
            <Text style={[
              styles.navText,
              { color: isActive ? Colors.primary : Colors.textSecondary }
            ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 74,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 8,
    paddingTop: 6,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 10,
    marginTop: 2,
    fontWeight: '500',
  },
});

export default BottomNavigation;
