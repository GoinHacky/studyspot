import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

const VendorSettingsScreen = ({ navigation }) => {
  const items = [
    { id: 1, title: 'Cafe Profile', subtitle: 'Edit cafe details and photos', icon: 'storefront-outline' },
    { id: 2, title: 'Booking Rules', subtitle: 'Set capacity and policies', icon: 'calendar-outline' },
    { id: 3, title: 'Payouts', subtitle: 'Bank info and payout schedule', icon: 'card-outline' },
    { id: 4, title: 'Notifications', subtitle: 'Email/SMS/Push settings', icon: 'notifications-outline' },
    { id: 5, title: 'Support', subtitle: 'Contact help center', icon: 'help-circle-outline' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {items.map((it) => (
          <TouchableOpacity key={it.id} style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.iconWrap}>
                <Ionicons name={it.icon} size={20} color={Colors.primary} />
              </View>
              <View style={styles.textWrap}>
                <Text style={styles.itemTitle}>{it.title}</Text>
                <Text style={styles.itemSub}>{it.subtitle}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={18} color={Colors.textSecondary} />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.logoutBtn}>
          <Ionicons name="log-out-outline" size={18} color="#F44336" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
  },
  headerRight: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 10,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: `${Colors.primary}10`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textWrap: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
  },
  itemSub: {
    marginTop: 3,
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F44336',
    marginTop: 10,
    backgroundColor: 'white',
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '800',
    color: '#F44336',
  },
});

export default VendorSettingsScreen;
