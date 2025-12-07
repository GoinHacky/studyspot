import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function SettingScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoBookingReminder, setAutoBookingReminder] = useState(true);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: () => navigation.navigate('Landing')
        },
      ]
    );
  };

  const SettingItem = ({ icon, title, subtitle, onPress, rightComponent, showArrow = true }) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingLeft}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={24} color={Colors.primary} />
        </View>
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{title}</Text>
          {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      <View style={styles.settingRight}>
        {rightComponent}
        {showArrow && !rightComponent && (
          <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
        )}
      </View>
    </TouchableOpacity>
  );

  const SectionHeader = ({ title }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle" size={32} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Account Section */}
        <SectionHeader title="Account" />
        <View style={styles.section}>
          <SettingItem
            icon="person"
            title="Profile"
            subtitle="Edit your personal information"
            onPress={() => navigation.navigate('Profile')}
          />
          <SettingItem
            icon="card"
            title="Payment Methods"
            subtitle="Manage your payment options"
            onPress={() => Alert.alert('Coming Soon', 'Payment methods management will be available soon.')}
          />
          <SettingItem
            icon="time"
            title="Booking History"
            subtitle="View your past reservations"
            onPress={() => Alert.alert('Coming Soon', 'Booking history will be available soon.')}
          />
        </View>

        {/* Preferences Section */}
        <SectionHeader title="Preferences" />
        <View style={styles.section}>
          <SettingItem
            icon="notifications"
            title="Push Notifications"
            subtitle="Receive booking confirmations and updates"
            rightComponent={
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: Colors.gray, true: Colors.primary + '40' }}
                thumbColor={notificationsEnabled ? Colors.primary : Colors.white}
              />
            }
            showArrow={false}
          />
          <SettingItem
            icon="location"
            title="Location Services"
            subtitle="Find nearby cafes and workspaces"
            rightComponent={
              <Switch
                value={locationEnabled}
                onValueChange={setLocationEnabled}
                trackColor={{ false: Colors.gray, true: Colors.primary + '40' }}
                thumbColor={locationEnabled ? Colors.primary : Colors.white}
              />
            }
            showArrow={false}
          />
          <SettingItem
            icon="moon"
            title="Dark Mode"
            subtitle="Switch to dark theme"
            rightComponent={
              <Switch
                value={darkModeEnabled}
                onValueChange={setDarkModeEnabled}
                trackColor={{ false: Colors.gray, true: Colors.primary + '40' }}
                thumbColor={darkModeEnabled ? Colors.primary : Colors.white}
              />
            }
            showArrow={false}
          />
          <SettingItem
            icon="alarm"
            title="Booking Reminders"
            subtitle="Get reminded before your reservations"
            rightComponent={
              <Switch
                value={autoBookingReminder}
                onValueChange={setAutoBookingReminder}
                trackColor={{ false: Colors.gray, true: Colors.primary + '40' }}
                thumbColor={autoBookingReminder ? Colors.primary : Colors.white}
              />
            }
            showArrow={false}
          />
        </View>

        {/* Support Section */}
        <SectionHeader title="Support" />
        <View style={styles.section}>
          <SettingItem
            icon="help-circle"
            title="Help & FAQ"
            subtitle="Get answers to common questions"
            onPress={() => Alert.alert('Help', 'Help section coming soon!')}
          />
          <SettingItem
            icon="mail"
            title="Contact Support"
            subtitle="Get help from our team"
            onPress={() => Alert.alert('Contact', 'You can reach us at support@studyspotter.com')}
          />
          <SettingItem
            icon="star"
            title="Rate App"
            subtitle="Leave a review on the app store"
            onPress={() => Alert.alert('Thank you!', 'Rating feature coming soon.')}
          />
          <SettingItem
            icon="share"
            title="Share App"
            subtitle="Tell your friends about StudySpotter"
            onPress={() => Alert.alert('Share', 'Share feature coming soon!')}
          />
        </View>

        {/* About Section */}
        <SectionHeader title="About" />
        <View style={styles.section}>
          <SettingItem
            icon="document-text"
            title="Terms of Service"
            onPress={() => Alert.alert('Terms', 'Terms of service will be displayed here.')}
          />
          <SettingItem
            icon="shield-checkmark"
            title="Privacy Policy"
            onPress={() => Alert.alert('Privacy', 'Privacy policy will be displayed here.')}
          />
          <SettingItem
            icon="information-circle"
            title="About StudySpotter"
            subtitle="Version 1.0.0"
            onPress={() => Alert.alert('About', 'StudySpotter - Find, Book, Focus!\n\nVersion 1.0.0\nMade with ❤️ for students and professionals.')}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out" size={24} color="#F44336" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 16,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  section: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F44336',
    marginLeft: 8,
  },
  bottomSpacing: {
    height: 100,
  },
});

