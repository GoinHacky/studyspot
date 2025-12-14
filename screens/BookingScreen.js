import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

const BookingScreen = () => {
  const bookings = [
    {
      id: 1,
      cafe: "Red's Café",
      date: 'Dec 12, 2025',
      time: '10:30 AM',
      seats: 2,
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      cafe: 'Bean Awake',
      date: 'Dec 13, 2025',
      time: '2:00 PM',
      seats: 1,
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      cafe: 'Misfits Coffee',
      date: 'Dec 15, 2025',
      time: '4:15 PM',
      seats: 4,
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
    },
  ];

  const getStatusStyle = (status) => {
    if (status === 'Confirmed') return { bg: '#E8F5E9', fg: '#2E7D32' };
    if (status === 'Pending') return { bg: '#FFF8E1', fg: '#F57F17' };
    return { bg: '#E3F2FD', fg: '#1565C0' };
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Booking</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {bookings.map((b) => {
          const st = getStatusStyle(b.status);
          return (
            <View key={b.id} style={styles.card}>
              <Image source={{ uri: b.image }} style={styles.image} resizeMode="cover" />
              <View style={styles.cardBody}>
                <View style={styles.topRow}>
                  <Text style={styles.cafeName}>{b.cafe}</Text>
                  <View style={[styles.statusPill, { backgroundColor: st.bg }]}>
                    <Text style={[styles.statusText, { color: st.fg }]}>{b.status}</Text>
                  </View>
                </View>
                <View style={styles.metaRow}>
                  <Ionicons name="calendar-outline" size={16} color={Colors.textSecondary} />
                  <Text style={styles.metaText}>{b.date} • {b.time}</Text>
                </View>
                <View style={styles.metaRow}>
                  <Ionicons name="people-outline" size={16} color={Colors.textSecondary} />
                  <Text style={styles.metaText}>{b.seats} {b.seats === 1 ? 'seat' : 'seats'}</Text>
                </View>

                <TouchableOpacity style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
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
    paddingTop: 50,
    paddingBottom: 14,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.text,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 140,
  },
  cardBody: {
    padding: 14,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cafeName: {
    flex: 1,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: '900',
    color: Colors.text,
  },
  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '800',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  metaText: {
    marginLeft: 8,
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  primaryButton: {
    marginTop: 12,
    backgroundColor: Colors.primary,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '900',
  },
});

export default BookingScreen;
