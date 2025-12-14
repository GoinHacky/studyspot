import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

const AdminCafesScreen = ({ navigation }) => {
  const cafes = [
    {
      id: 1,
      name: "Red's Cafe",
      location: 'Poblacion, Makati',
      status: 'Active',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Bean Awake',
      location: 'BGC, Taguig',
      status: 'Active',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Nimo Brew Café',
      location: 'Quezon City',
      status: 'Pending',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Produktiv Workspace PH',
      location: 'Ortigas, Pasig',
      status: 'Suspended',
      rating: 4.1,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    },
  ];

  const getStatusStyle = (status) => {
    if (status === 'Active') return { bg: '#E8F5E9', fg: '#2E7D32' };
    if (status === 'Pending') return { bg: '#FFF8E1', fg: '#F57F17' };
    return { bg: '#FFEBEE', fg: '#C62828' };
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cafes Management</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {cafes.map((cafe) => {
          const statusStyle = getStatusStyle(cafe.status);
          return (
            <View key={cafe.id} style={styles.card}>
              <Image source={{ uri: cafe.image }} style={styles.image} resizeMode="cover" />
              <View style={styles.cardBody}>
                <View style={styles.topRow}>
                  <View style={styles.titleBlock}>
                    <Text style={styles.name}>{cafe.name}</Text>
                    <View style={styles.metaRow}>
                      <Ionicons name="location-outline" size={14} color={Colors.textSecondary} />
                      <Text style={styles.metaText}>{cafe.location}</Text>
                    </View>
                  </View>
                  <View style={[styles.statusPill, { backgroundColor: statusStyle.bg }]}>
                    <Text style={[styles.statusText, { color: statusStyle.fg }]}>{cafe.status}</Text>
                  </View>
                </View>

                <View style={styles.bottomRow}>
                  <View style={styles.ratingRow}>
                    <Ionicons name="star" size={16} color="#FFB300" />
                    <Text style={styles.ratingText}>{cafe.rating.toFixed(1)}</Text>
                  </View>

                  <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionBtn}>
                      <Ionicons name="create-outline" size={18} color={Colors.primary} />
                      <Text style={styles.actionText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionBtn}>
                      <Ionicons name="eye-outline" size={18} color={Colors.primary} />
                      <Text style={styles.actionText}>View</Text>
                    </TouchableOpacity>
                  </View>
                </View>
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
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  image: {
    width: '100%',
    height: 140,
  },
  cardBody: {
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  titleBlock: {
    flex: 1,
    paddingRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    marginLeft: 6,
    fontSize: 13,
    color: Colors.textSecondary,
  },
  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: `${Colors.primary}10`,
    marginLeft: 8,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primary,
  },
});

export default AdminCafesScreen;
