import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const DrawerMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Close Button */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.closeDrawer()}
        >
          <Ionicons name="close" size={28} color={Colors.black} />
        </TouchableOpacity>

        {/* User Profile Section */}
        <View style={styles.profileSection}>
          <TouchableOpacity 
            style={styles.profilePicture}
            onPress={() => navigation.navigate('Profile')}
          >
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face' }}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.greeting}>Hi Francine!</Text>
          <TouchableOpacity 
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.editProfileText}>View Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Admin Section - Only show if user is admin */}
        <Text style={styles.sectionHeader}>Admin</Text>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('AdminUsers')}
        >
          <Ionicons name="people" size={24} color={Colors.black} />
          <Text style={styles.menuItemText}>User Management</Text>
        </TouchableOpacity>

        {/* Vendor Section - Only show if user is a vendor */}
        <Text style={styles.sectionHeader}>Vendor</Text>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('VendorDashboard')}
        >
          <Ionicons name="storefront" size={24} color={Colors.black} />
          <Text style={styles.menuItemText}>Vendor Dashboard</Text>
        </TouchableOpacity>

        {/* User Section */}
        <Text style={styles.sectionHeader}>My Account</Text>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="person" size={24} color={Colors.black} />
          <Text style={styles.menuItemText}>My Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="location" size={24} color={Colors.black} />
          <Text style={styles.menuItemText}>My Address</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="time" size={24} color={Colors.black} />
          <Text style={styles.menuItemText}>Booking History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="heart" size={24} color={Colors.black} />
          <Text style={styles.menuItemText}>My Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="card" size={24} color={Colors.black} />
          <Text style={styles.menuItemText}>Payment Methods</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle" size={24} color={Colors.black} />
          <Text style={styles.menuItemText}>Help & Support</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider} />

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name="settings" size={24} color={Colors.black} />
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="log-out" size={24} color="#F44336" />
          <Text style={[styles.menuItemText, { color: '#F44336' }]}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    width: '75%',
  },
  scrollView: {
    flex: 1,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 15,
    paddingTop: 50,
  },
  profileSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
  },
  editProfileButton: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
  editProfileText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.black,
    marginLeft: 15,
  },
});

export default DrawerMenu;




