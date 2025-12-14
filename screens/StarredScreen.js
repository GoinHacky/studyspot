import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

const StarredScreen = () => {
  const favorites = [
    {
      id: 1,
      name: "Red's Café",
      location: 'Cebu City',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Misfits Coffee',
      location: 'Cebu City',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Huddle Coworking!',
      location: 'Cebu City',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Starred</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {favorites.map((cafe) => (
          <View key={cafe.id} style={styles.card}>
            <Image source={{ uri: cafe.image }} style={styles.image} resizeMode="cover" />
            <View style={styles.cardBody}>
              <Text style={styles.name}>{cafe.name}</Text>
              <View style={styles.metaRow}>
                <Ionicons name="location-outline" size={14} color={Colors.textSecondary} />
                <Text style={styles.metaText}>{cafe.location}</Text>
              </View>
              <View style={styles.metaRow}>
                <Ionicons name="star" size={14} color="#FFB300" />
                <Text style={styles.metaText}>{cafe.rating.toFixed(1)}</Text>
              </View>
            </View>
          </View>
        ))}
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
  name: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  metaText: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
});

export default StarredScreen;
