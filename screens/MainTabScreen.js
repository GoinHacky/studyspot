import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import BottomNavigation from '../components/BottomNavigation';

// Import all screens
import HomeScreen from './HomeScreen';
import DiscoveryScreen from './DiscoveryScreen';
import StarredScreen from './StarredScreen';
import BookingScreen from './BookingScreen';
import SettingScreen from './SettingScreen';

const MainTabScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen navigation={navigation} />;
      case 'explore':
        return <DiscoveryScreen navigation={navigation} />;
      case 'starred':
        return <StarredScreen navigation={navigation} />;
      case 'booking':
        return <BookingScreen navigation={navigation} />;
      case 'settings':
        return <SettingScreen navigation={navigation} />;
      default:
        return <HomeScreen navigation={navigation} />;
    }
  };

  const customNavigation = {
    ...navigation,
    navigate: (screenName) => {
      const tabMap = {
        'Home': 'home',
        'Discovery': 'explore',
        'Starred': 'starred',
        'Booking': 'booking',
        'Settings': 'settings',
      };
      
      if (tabMap[screenName]) {
        setActiveTab(tabMap[screenName]);
      } else {
        // For other screens, use original navigation
        navigation.navigate(screenName);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        {React.cloneElement(renderScreen(), { navigation: customNavigation })}
      </View>
      <BottomNavigation 
        navigation={customNavigation} 
        activeTab={activeTab} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  screenContainer: {
    flex: 1,
  },
});

export default MainTabScreen;
