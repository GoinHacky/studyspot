import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity
          onPress={() => {
            if (navigation && typeof navigation.openDrawer === 'function') {
              navigation.openDrawer();
            }
          }}
          style={styles.menuButton}
        >
          <Ionicons name="menu" size={28} color={Colors.black} />
        </TouchableOpacity>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hi Francine!</Text>
          <Text style={styles.welcomeText}>Welcome to your SpaceSpotter Home</Text>
        </View>
        <View style={styles.starIcon}>
          <Ionicons name="star" size={24} color={Colors.primary} />
        </View>
      </View>

      {/* Spot Spaces Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="sparkles" size={20} color={Colors.black} />
          <Text style={styles.sectionTitle}>Spot Spaces</Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color={Colors.textSecondary} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search spaces..."
              placeholderTextColor={Colors.placeholder}
            />
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories Section */}
      <View style={styles.section}>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryCard}>
            <View style={styles.categoryImage}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop' }}
                style={styles.categoryPhoto}
                resizeMode="cover"
              />
              <View style={styles.categoryOverlay} />
              <Text style={styles.categoryText}>Cafés</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <View style={styles.categoryImage}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop' }}
                style={styles.categoryPhoto}
                resizeMode="cover"
              />
              <View style={styles.categoryOverlay} />
              <Text style={styles.categoryText}>Coworking Space</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Top Spaces Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="sparkles" size={20} color={Colors.black} />
          <Text style={styles.sectionTitle}>Top Spaces of the Week</Text>
        </View>
        <View style={styles.topSpacesContainer}>
          <View style={styles.spaceCard}>
            <View style={[styles.spaceImage, styles.spaceImage1]}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=300&fit=crop' }}
                style={styles.spacePhoto}
                resizeMode="cover"
              />
              <View style={styles.spaceOverlay} />
            </View>
            <Text style={styles.spaceName}>Red's Café</Text>
          </View>
          <View style={styles.spaceCard}>
            <View style={[styles.spaceImage, styles.spaceImage2]}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop' }}
                style={styles.spacePhoto}
                resizeMode="cover"
              />
              <View style={styles.spaceOverlay} />
            </View>
            <Text style={styles.spaceName}>Misfits Coffee</Text>
          </View>
          <View style={styles.spaceCard}>
            <View style={[styles.spaceImage, styles.spaceImage3]}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=300&h=300&fit=crop' }}
                style={styles.spacePhoto}
                resizeMode="cover"
              />
              <View style={styles.spaceOverlay} />
            </View>
            <Text style={styles.spaceName}>Huddle Coworking!</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    paddingBottom: 110,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  menuButton: {
    marginRight: 15,
  },
  greetingContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  starIcon: {
    marginLeft: 10,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    marginLeft: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Colors.divider,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.black,
  },
  searchButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  searchButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    height: 200,
  },
  categoryImage: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: Colors.gray,
  },
  categoryPhoto: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  categoryText: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  topSpacesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spaceCard: {
    alignItems: 'center',
    width: '30%',
  },
  spaceImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: Colors.gray,
    overflow: 'hidden',
    position: 'relative',
  },
  spacePhoto: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  spaceImage1: {
    backgroundColor: '#8B0000', // Dark red
  },
  spaceImage2: {
    backgroundColor: '#4A4A4A', // Dark gray
  },
  spaceImage3: {
    backgroundColor: '#6B7B8C', // Grayish blue
  },
  spaceOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  spaceName: {
    fontSize: 12,
    color: Colors.black,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default HomeScreen;



