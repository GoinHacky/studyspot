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
          <Image 
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        
        {/* Loading Illustration */}
        <View style={styles.illustrationContainer}>
          <Image 
            source={require('../assets/loading-illustration.png')}
            style={styles.illustration}
            resizeMode="contain"
          />
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
  logo: {
    width: 200,
    height: 80,
  },
  illustrationContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  illustration: {
    width: 300,
    height: 200,
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
