import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const AdminDashboardScreen = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('Today');

  const stats = [
    { title: 'Total Bookings', value: '156', change: '+12%', icon: 'calendar', color: '#4CAF50' },
    { title: 'Revenue', value: '₱24,580', change: '+8%', icon: 'cash', color: '#2196F3' },
    { title: 'Active Cafes', value: '12', change: '+2', icon: 'storefront', color: '#FF9800' },
    { title: 'New Users', value: '89', change: '+15%', icon: 'people', color: '#9C27B0' },
  ];

  const recentBookings = [
    { 
      id: 1, 
      customer: 'John Doe', 
      cafe: "Red's Cafe", 
      time: '2:00 PM', 
      seats: 2, 
      status: 'confirmed',
      cafeImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=50&h=50&fit=crop'
    },
    { 
      id: 2, 
      customer: 'Jane Smith', 
      cafe: 'Bean Awake', 
      time: '3:30 PM', 
      seats: 4, 
      status: 'pending',
      cafeImage: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=50&h=50&fit=crop'
    },
    { 
      id: 3, 
      customer: 'Mike Johnson', 
      cafe: 'Nimo Brew Café', 
      time: '1:00 PM', 
      seats: 1, 
      status: 'confirmed',
      cafeImage: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=50&h=50&fit=crop'
    },
    { 
      id: 4, 
      customer: 'Sarah Wilson', 
      cafe: 'Produktiv Workspace', 
      time: '4:00 PM', 
      seats: 3, 
      status: 'cancelled',
      cafeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=50&h=50&fit=crop'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return '#4CAF50';
      case 'pending': return '#FF9800';
      case 'cancelled': return '#F44336';
      default: return Colors.textSecondary;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Admin Dashboard</Text>
          <Text style={styles.headerSubtitle}>Welcome back, Admin</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }}
            style={styles.adminProfileImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Period Selector */}
        <View style={styles.periodSelector}>
          {['Today', 'Week', 'Month'].map((period) => (
            <TouchableOpacity
              key={period}
              style={[
                styles.periodButton,
                selectedPeriod === period && styles.selectedPeriodButton
              ]}
              onPress={() => setSelectedPeriod(period)}
            >
              <Text style={[
                styles.periodText,
                selectedPeriod === period && styles.selectedPeriodText
              ]}>
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={styles.statHeader}>
                <View style={[styles.statIcon, { backgroundColor: `${stat.color}20` }]}>
                  <Ionicons name={stat.icon} size={24} color={stat.color} />
                </View>
                <Text style={[styles.statChange, { color: stat.color }]}>
                  {stat.change}
                </Text>
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionGrid}>
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => navigation.navigate('AdminCafes')}
            >
              <Ionicons name="storefront" size={32} color={Colors.primary} />
              <Text style={styles.actionText}>Manage Cafes</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => navigation.navigate('AdminBookings')}
            >
              <Ionicons name="calendar" size={32} color={Colors.primary} />
              <Text style={styles.actionText}>View Bookings</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionCard}
              onPress={() => navigation.navigate('AdminUsers')}
            >
              <Ionicons name="people" size={32} color={Colors.primary} />
              <Text style={styles.actionText}>User Management</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Ionicons name="analytics" size={32} color={Colors.primary} />
              <Text style={styles.actionText}>Analytics</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Bookings */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Bookings</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AdminBookings')}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {recentBookings.map((booking) => (
            <View key={booking.id} style={styles.bookingCard}>
              <Image 
                source={{ uri: booking.cafeImage }}
                style={styles.bookingCafeImage}
                resizeMode="cover"
              />
              <View style={styles.bookingInfo}>
                <Text style={styles.customerName}>{booking.customer}</Text>
                <Text style={styles.bookingDetails}>
                  {booking.cafe} • {booking.time} • {booking.seats} seats
                </Text>
              </View>
              <View style={[
                styles.statusBadge,
                { backgroundColor: `${getStatusColor(booking.status)}20` }
              ]}>
                <Text style={[
                  styles.statusText,
                  { color: getStatusColor(booking.status) }
                ]}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </Text>
              </View>
            </View>
          ))}
        </View>
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
  headerSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  profileButton: {
    padding: 4,
  },
  adminProfileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  selectedPeriodButton: {
    backgroundColor: Colors.primary,
  },
  periodText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  selectedPeriodText: {
    color: 'white',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    width: (width - 48) / 2,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statChange: {
    fontSize: 12,
    fontWeight: '600',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewAllText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: (width - 48) / 2,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    marginTop: 8,
    textAlign: 'center',
  },
  bookingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  bookingCafeImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  bookingInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  bookingDetails: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default AdminDashboardScreen;
