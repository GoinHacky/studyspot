import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

// Mock data
const stats = [
  { id: 1, title: 'Total Bookings', value: '128', change: '+12%', isPositive: true },
  { id: 2, title: 'Active Now', value: '24', change: '+5%', isPositive: true },
  { id: 3, title: 'Revenue', value: '$3,240', change: '-2%', isPositive: false },
  { id: 4, title: 'Avg. Rating', value: '4.7', change: '+0.3', isPositive: true },
];

const recentBookings = [
  { id: 1, customer: 'Alex Johnson', time: '10:30 AM', status: 'Confirmed', seats: 2 },
  { id: 2, customer: 'Sarah Miller', time: '12:15 PM', status: 'Pending', seats: 4 },
  { id: 3, customer: 'Mike Wilson', time: '2:00 PM', status: 'Confirmed', seats: 1 },
  { id: 4, customer: 'Emma Davis', time: '3:45 PM', status: 'Completed', seats: 3 },
];

const VendorDashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vendor Dashboard</Text>
        <View style={styles.headerRight}>
          <Ionicons name="notifications-outline" size={24} color={Colors.primary} />
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.vendorName}>Café Central</Text>
            <Text style={styles.welcomeSubtext}>Here's what's happening today</Text>
          </View>
          <View style={styles.avatar}>
            <Ionicons name="cafe" size={32} color="white" />
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsContainer}>
          {stats.map((stat) => (
            <View key={stat.id} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
              <View style={styles.statChangeContainer}>
                <Ionicons 
                  name={stat.isPositive ? 'trending-up' : 'trending-down'} 
                  size={16} 
                  color={stat.isPositive ? '#4CAF50' : '#F44336'} 
                />
                <Text style={[styles.statChange, {color: stat.isPositive ? '#4CAF50' : '#F44336'}]}>
                  {stat.change}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Recent Bookings */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Bookings</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.bookingsContainer}>
            {recentBookings.map((booking) => (
              <View key={booking.id} style={styles.bookingCard}>
                <View style={styles.bookingInfo}>
                  <Text style={styles.bookingCustomer}>{booking.customer}</Text>
                  <View style={styles.bookingMeta}>
                    <Text style={styles.bookingTime}>
                      <Ionicons name="time-outline" size={14} color={Colors.textSecondary} />
                      {' '}{booking.time}
                    </Text>
                    <Text style={styles.bookingSeats}>
                      <Ionicons name="people-outline" size={14} color={Colors.textSecondary} />
                      {' '}{booking.seats} {booking.seats === 1 ? 'person' : 'people'}
                    </Text>
                  </View>
                </View>
                <View style={[
                  styles.bookingStatus,
                  { 
                    backgroundColor: booking.status === 'Confirmed' ? '#E8F5E9' : 
                                    booking.status === 'Pending' ? '#FFF8E1' :
                                    '#E3F2FD'
                  }
                ]}>
                  <Text style={[
                    styles.bookingStatusText,
                    { 
                      color: booking.status === 'Confirmed' ? '#2E7D32' : 
                              booking.status === 'Pending' ? '#F57F17' :
                              '#1565C0'
                    }
                  ]}>
                    {booking.status}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsContainer}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => navigation.navigate('VendorAddBooking')}
            >
              <View style={[styles.actionIcon, {backgroundColor: '#E3F2FD'}]}>
                <Ionicons name="add-circle" size={24} color="#1976D2" />
              </View>
              <Text style={styles.actionText}>Add Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => navigation.navigate('VendorCalendar')}
            >
              <View style={[styles.actionIcon, {backgroundColor: '#E8F5E9'}]}>
                <Ionicons name="calendar" size={24} color="#2E7D32" />
              </View>
              <Text style={styles.actionText}>View Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => navigation.navigate('VendorSettings')}
            >
              <View style={[styles.actionIcon, {backgroundColor: '#FFF8E1'}]}>
                <Ionicons name="settings-outline" size={24} color="#F57F17" />
              </View>
              <Text style={styles.actionText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2 - 8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
  },
  headerRight: {
    width: 40,
    alignItems: 'flex-end',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  welcomeCard: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
  },
  vendorName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  welcomeSubtext: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    width: CARD_WIDTH,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  statChangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statChange: {
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '500',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
  },
  seeAllText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  bookingsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bookingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  bookingInfo: {
    flex: 1,
  },
  bookingCustomer: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 4,
  },
  bookingMeta: {
    flexDirection: 'row',
  },
  bookingTime: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginRight: 16,
  },
  bookingSeats: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  bookingStatus: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  bookingStatusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
    width: '30%',
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: Colors.text,
    textAlign: 'center',
  },
});

export default VendorDashboardScreen;
