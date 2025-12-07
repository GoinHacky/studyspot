import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const AdminBookingsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const bookings = [
    {
      id: 1,
      customer: 'John Doe',
      phone: '+63 912 345 6789',
      cafe: "Red's Cafe",
      date: 'Dec 8, 2024',
      time: '2:00 PM',
      seats: 2,
      status: 'confirmed',
      createdAt: '2 hours ago'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      phone: '+63 987 654 3210',
      cafe: 'Bean Awake',
      date: 'Dec 8, 2024',
      time: '3:30 PM',
      seats: 4,
      status: 'pending',
      createdAt: '1 hour ago'
    },
    {
      id: 3,
      customer: 'Mike Johnson',
      phone: '+63 555 123 4567',
      cafe: 'Nimo Brew Café',
      date: 'Dec 7, 2024',
      time: '1:00 PM',
      seats: 1,
      status: 'confirmed',
      createdAt: '1 day ago'
    },
    {
      id: 4,
      customer: 'Sarah Wilson',
      phone: '+63 444 987 6543',
      cafe: 'Produktiv Workspace PH',
      date: 'Dec 7, 2024',
      time: '4:00 PM',
      seats: 3,
      status: 'cancelled',
      createdAt: '1 day ago'
    },
    {
      id: 5,
      customer: 'David Brown',
      phone: '+63 333 555 7777',
      cafe: "Red's Cafe",
      date: 'Dec 9, 2024',
      time: '10:00 AM',
      seats: 2,
      status: 'pending',
      createdAt: '30 minutes ago'
    },
  ];

  const filters = [
    { id: 'all', label: 'All', count: bookings.length },
    { id: 'pending', label: 'Pending', count: bookings.filter(b => b.status === 'pending').length },
    { id: 'confirmed', label: 'Confirmed', count: bookings.filter(b => b.status === 'confirmed').length },
    { id: 'cancelled', label: 'Cancelled', count: bookings.filter(b => b.status === 'cancelled').length },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return '#4CAF50';
      case 'pending': return '#FF9800';
      case 'cancelled': return '#F44336';
      default: return Colors.textSecondary;
    }
  };

  const handleStatusChange = (bookingId, newStatus) => {
    Alert.alert(
      'Update Booking Status',
      `Are you sure you want to ${newStatus} this booking?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Confirm', 
          onPress: () => {
            Alert.alert('Success', `Booking ${newStatus} successfully!`);
          }
        },
      ]
    );
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.cafe.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || booking.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bookings Management</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color={Colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search bookings..."
            placeholderTextColor={Colors.placeholder}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Filter Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.id}
            style={[
              styles.filterTab,
              selectedFilter === filter.id && styles.activeFilterTab
            ]}
            onPress={() => setSelectedFilter(filter.id)}
          >
            <Text style={[
              styles.filterText,
              selectedFilter === filter.id && styles.activeFilterText
            ]}>
              {filter.label} ({filter.count})
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bookings List */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {filteredBookings.map((booking) => (
          <View key={booking.id} style={styles.bookingCard}>
            <View style={styles.bookingHeader}>
              <View style={styles.customerInfo}>
                <Text style={styles.customerName}>{booking.customer}</Text>
                <Text style={styles.customerPhone}>{booking.phone}</Text>
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

            <View style={styles.bookingDetails}>
              <View style={styles.detailRow}>
                <Ionicons name="storefront" size={16} color={Colors.textSecondary} />
                <Text style={styles.detailText}>{booking.cafe}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="calendar" size={16} color={Colors.textSecondary} />
                <Text style={styles.detailText}>{booking.date} at {booking.time}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="people" size={16} color={Colors.textSecondary} />
                <Text style={styles.detailText}>{booking.seats} seats</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="time" size={16} color={Colors.textSecondary} />
                <Text style={styles.detailText}>Created {booking.createdAt}</Text>
              </View>
            </View>

            {booking.status === 'pending' && (
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.confirmButton]}
                  onPress={() => handleStatusChange(booking.id, 'confirmed')}
                >
                  <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionButton, styles.cancelButton]}
                  onPress={() => handleStatusChange(booking.id, 'cancelled')}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}

        {filteredBookings.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="calendar-outline" size={64} color={Colors.textSecondary} />
            <Text style={styles.emptyTitle}>No bookings found</Text>
            <Text style={styles.emptySubtitle}>
              {searchQuery ? 'Try adjusting your search' : 'No bookings match the selected filter'}
            </Text>
          </View>
        )}
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
    fontWeight: '600',
    color: Colors.text,
  },
  placeholder: {
    width: 40,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: Colors.text,
  },
  filterContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: Colors.background,
  },
  activeFilterTab: {
    backgroundColor: Colors.primary,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  activeFilterText: {
    color: 'white',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  bookingCard: {
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
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  customerInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  customerPhone: {
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
  bookingDetails: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    marginRight: 8,
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#F44336',
    marginLeft: 8,
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  cancelButtonText: {
    color: '#F44336',
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 64,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});

export default AdminBookingsScreen;
