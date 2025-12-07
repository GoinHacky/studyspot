import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Dimensions, 
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

const starredPlaces = [
  { 
    id: 1, 
    name: "Red's Cafe", 
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=300&fit=crop',
    backgroundColor: '#8B0000'
  },
  { 
    id: 2, 
    name: "Bean Awake", 
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=300&h=300&fit=crop',
    backgroundColor: '#4A90E2'
  },
  { 
    id: 3, 
    name: "Nimo Brew Café", 
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=300&h=300&fit=crop',
    backgroundColor: '#8B7355'
  },
  { 
    id: 4, 
    name: "Produktiv Workspace PH", 
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
    backgroundColor: '#2C3E50'
  },
];

export default function StarredScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="add" size={20} color={Colors.primary} style={styles.searchIcon} />
          <TextInput 
            placeholder="Search something..." 
            placeholderTextColor={Colors.placeholder}
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options" size={18} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Starred</Text>
        
        <View style={styles.grid}>
          {starredPlaces.map((place) => (
            <TouchableOpacity key={place.id} style={styles.card}>
              <View style={styles.imageContainer}>
                <Image 
                  source={{ uri: place.image }}
                  style={styles.image}
                  resizeMode="cover"
                />
                {/* Star icon overlay */}
                <View style={styles.starOverlay}>
                  <Ionicons name="star" size={24} color="#FFD700" />
                </View>
              </View>
              <Text style={styles.cardText}>{place.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: Colors.background 
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: Colors.background,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
  },
  filterButton: {
    marginLeft: 8,
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: { 
    padding: 16, 
    paddingBottom: 100 
  },
  heading: { 
    fontSize: 28, 
    fontWeight: '700', 
    color: Colors.primary, 
    marginBottom: 20 
  },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
  },
  card: { 
    width: CARD_WIDTH, 
    marginBottom: 20, 
    borderRadius: 16, 
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: CARD_WIDTH,
  },
  image: { 
    width: '100%', 
    height: '100%',
  },
  starOverlay: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 6,
  },
  cardText: { 
    padding: 12,
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
});
