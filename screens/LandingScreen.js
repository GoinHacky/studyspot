import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Colors } from '../constants/Colors';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=600&fit=crop' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.overlay} />
      
      {/* Central Illustration */}
      <View style={styles.illustrationContainer}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop' }}
          style={styles.heroImage}
          resizeMode="cover"
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

      {/* Start Now Button */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.startButtonText}>START NOW</Text>
      </TouchableOpacity>

      {/* Admin Access */}
      <TouchableOpacity
        style={styles.adminButton}
        onPress={() => navigation.navigate('AdminDashboard')}
      >
        <Text style={styles.adminButtonText}>Admin Access</Text>
      </TouchableOpacity>

      {/* Vendor Access */}
      <TouchableOpacity
        style={styles.vendorButton}
        onPress={() => navigation.navigate('VendorDashboard')}
      >
        <Text style={styles.vendorButtonText}>Vendor Access</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(245, 240, 232, 0.8)',
  },
  illustrationContainer: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    width: 300,
    height: 200,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  taglineContainer: {
    marginBottom: 30,
  },
  tagline: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  taglineBlack: {
    color: Colors.black,
  },
  taglineRed: {
    color: Colors.primary,
  },
  startButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    minWidth: 200,
  },
  startButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  adminButton: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: 'transparent',
  },
  adminButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  vendorButton: {
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: 'transparent',
  },
  vendorButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default LandingScreen;




