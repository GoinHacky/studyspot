import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function BookingScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedCafe, setSelectedCafe] = useState("Red's Cafe");

  const dates = [
    { id: 1, day: 'Mon', date: '15', available: true },
    { id: 2, day: 'Tue', date: '16', available: true },
    { id: 3, day: 'Wed', date: '17', available: false },
    { id: 4, day: 'Thu', date: '18', available: true },
    { id: 5, day: 'Fri', date: '19', available: true },
  ];

  const timeSlots = [
    { id: 1, time: '9:00 AM', available: true },
    { id: 2, time: '10:00 AM', available: true },
    { id: 3, time: '11:00 AM', available: false },
    { id: 4, time: '12:00 PM', available: true },
    { id: 5, time: '1:00 PM', available: true },
    { id: 6, time: '2:00 PM', available: true },
    { id: 7, time: '3:00 PM', available: false },
    { id: 8, time: '4:00 PM', available: true },
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !customerName || !customerPhone) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    
    Alert.alert(
      'Booking Confirmed!',
      `Your table for ${selectedSeats} at ${selectedCafe} has been booked for ${selectedDate.day}, ${selectedDate.date} at ${selectedTime.time}`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book a Table</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Cafe Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Cafe</Text>
          <TouchableOpacity style={styles.cafeSelector}>
            <View style={styles.cafeInfo}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=100&h=100&fit=crop' }}
                style={styles.cafeImage}
                resizeMode="cover"
              />
              <View>
                <Text style={styles.cafeName}>{selectedCafe}</Text>
                <Text style={styles.cafeLocation}>Cebu City</Text>
              </View>
            </View>
            <Ionicons name="chevron-down" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
        </View>

        {/* Date Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
            {dates.map((date) => (
              <TouchableOpacity
                key={date.id}
                style={[
                  styles.dateCard,
                  selectedDate?.id === date.id && styles.selectedDateCard,
                  !date.available && styles.unavailableDateCard,
                ]}
                onPress={() => date.available && setSelectedDate(date)}
                disabled={!date.available}
              >
                <Text style={[
                  styles.dayText,
                  selectedDate?.id === date.id && styles.selectedText,
                  !date.available && styles.unavailableText,
                ]}>
                  {date.day}
                </Text>
                <Text style={[
                  styles.dateText,
                  selectedDate?.id === date.id && styles.selectedText,
                  !date.available && styles.unavailableText,
                ]}>
                  {date.date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Time Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Time</Text>
          <View style={styles.timeGrid}>
            {timeSlots.map((slot) => (
              <TouchableOpacity
                key={slot.id}
                style={[
                  styles.timeSlot,
                  selectedTime?.id === slot.id && styles.selectedTimeSlot,
                  !slot.available && styles.unavailableTimeSlot,
                ]}
                onPress={() => slot.available && setSelectedTime(slot)}
                disabled={!slot.available}
              >
                <Text style={[
                  styles.timeText,
                  selectedTime?.id === slot.id && styles.selectedText,
                  !slot.available && styles.unavailableText,
                ]}>
                  {slot.time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Number of Seats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Number of Seats</Text>
          <View style={styles.seatSelector}>
            <TouchableOpacity
              style={styles.seatButton}
              onPress={() => setSelectedSeats(Math.max(1, selectedSeats - 1))}
            >
              <Ionicons name="remove" size={20} color={Colors.primary} />
            </TouchableOpacity>
            <Text style={styles.seatCount}>{selectedSeats}</Text>
            <TouchableOpacity
              style={styles.seatButton}
              onPress={() => setSelectedSeats(Math.min(8, selectedSeats + 1))}
            >
              <Ionicons name="add" size={20} color={Colors.primary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Customer Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor={Colors.placeholder}
            value={customerName}
            onChangeText={setCustomerName}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor={Colors.placeholder}
            value={customerPhone}
            onChangeText={setCustomerPhone}
            keyboardType="phone-pad"
          />
        </View>

        {/* Book Button */}
        <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
          <Text style={styles.bookButtonText}>Book Table</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: Colors.background,
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
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  cafeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  cafeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cafeImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  cafeName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  cafeLocation: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  dateScroll: {
    marginHorizontal: -4,
  },
  dateCard: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    minWidth: 70,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  selectedDateCard: {
    backgroundColor: Colors.primary,
  },
  unavailableDateCard: {
    backgroundColor: Colors.gray,
    opacity: 0.5,
  },
  dayText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  dateText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
  },
  selectedText: {
    color: 'white',
  },
  unavailableText: {
    color: Colors.textSecondary,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeSlot: {
    width: '48%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  selectedTimeSlot: {
    backgroundColor: Colors.primary,
  },
  unavailableTimeSlot: {
    backgroundColor: Colors.gray,
    opacity: 0.5,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
  },
  seatSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  seatButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seatCount: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.text,
    marginHorizontal: 32,
  },
  input: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    fontSize: 16,
    color: Colors.text,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  bookButton: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

