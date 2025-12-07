import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const DiscoveryScreen = ({ navigation }) => {
  const cafeData = {
    title: "We discover this hidden cafe sa Cebu!",
    likes: "15k",
    comments: "765",
    location: "Cebu"
  };

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

      {/* Main Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Featured Cafe Card */}
        <View style={styles.cafeCard}>
          <View style={styles.cafeImageContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=600&fit=crop' }}
              style={styles.cafeImage}
              resizeMode="cover"
            />
            
            {/* Overlay Content */}
            <View style={styles.overlayContent}>
              <Text style={styles.cafeTitle}>{cafeData.title}</Text>
              
              {/* Action Buttons */}
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="heart" size={24} color="white" />
                  <Text style={styles.actionText}>{cafeData.likes}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="chatbubble" size={24} color="white" />
                  <Text style={styles.actionText}>{cafeData.comments}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="bookmark" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Additional content can be added here */}
        <View style={styles.additionalContent}>
          <Text style={styles.sectionTitle}>Discover More</Text>
          
          {/* More cafe cards can be added here */}
          {[1, 2, 3].map((item) => {
            const imageUrls = [
              'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&h=200&fit=crop',
              'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=200&h=200&fit=crop',
              'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=200&h=200&fit=crop'
            ];
            
            return (
            <View key={item} style={styles.smallCafeCard}>
              <Image 
                source={{ uri: imageUrls[item - 1] }}
                style={styles.smallCafeImage}
                resizeMode="cover"
              />
              <View style={styles.smallCafeInfo}>
                <Text style={styles.smallCafeTitle}>Hidden Gem Cafe {item}</Text>
                <Text style={styles.smallCafeLocation}>Cebu City</Text>
                <View style={styles.smallCafeStats}>
                  <View style={styles.statItem}>
                    <Ionicons name="heart" size={16} color={Colors.primary} />
                    <Text style={styles.statText}>2.{item}k</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Ionicons name="chatbubble" size={16} color={Colors.textSecondary} />
                    <Text style={styles.statText}>12{item}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
          })}
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
  cafeCard: {
    margin: 16,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cafeImageContainer: {
    position: 'relative',
    height: height * 0.6,
  },
  cafeImage: {
    width: '100%',
    height: '100%',
  },
  overlayContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
  },
  cafeTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  actionButtons: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  actionButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  actionText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600',
  },
  additionalContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 16,
  },
  smallCafeCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  smallCafeImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  smallCafeInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  smallCafeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  smallCafeLocation: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  smallCafeStats: {
    flexDirection: 'row',
    marginTop: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  statText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginLeft: 4,
  },
});

export default DiscoveryScreen;
