import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Colors } from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate loading time and then navigate to Landing screen
    const timer = setTimeout(() => {
      navigation.replace('Landing');
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Background */}
      <View style={styles.background} />
      
      {/* Main Content */}
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoPlaceholder}>
            <Text style={styles.logoText}>SPACESPOTTER</Text>
            <View style={styles.locationPin}>
              <Text style={styles.pinText}>📍</Text>
            </View>
          </View>
        </View>
        
        {/* Loading Illustration */}
        <View style={styles.illustrationContainer}>
          <View style={styles.illustrationPlaceholder}>
            <View style={styles.peopleGroup}>
              <Text style={styles.personEmoji}>👥</Text>
              <Text style={styles.laptopEmoji}>💻</Text>
            </View>
            <Text style={styles.focusText}>FIND. BOOK. FOCUS.</Text>
          </View>
        </View>
        
        {/* Tagline */}
        <View style={styles.taglineContainer}>
          <Text style={styles.tagline}>
            <Text style={styles.taglineBlack}>FIND.</Text>{' '}
            <Text style={styles.taglineBlack}>BOOK.</Text>{' '}
            <Text style={styles.taglineRed}>FOCUS.</Text>
          </Text>
        </View>
        
        {/* Loading Indicator */}
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={styles.loadingText}>Loading your perfect study spot...</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  logoPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    letterSpacing: 2,
  },
  locationPin: {
    marginTop: 8,
  },
  pinText: {
    fontSize: 32,
  },
  illustrationContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  illustrationPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    minWidth: 280,
    minHeight: 160,
  },
  peopleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  personEmoji: {
    fontSize: 48,
    marginRight: 16,
  },
  laptopEmoji: {
    fontSize: 48,
  },
  focusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    letterSpacing: 1,
  },
  taglineContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  taglineBlack: {
    color: Colors.black,
  },
  taglineRed: {
    color: Colors.primary,
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});

export default LoadingScreen;
