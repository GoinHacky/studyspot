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

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topRow}>
          <TouchableOpacity
            onPress={() => {
              if (navigation && typeof navigation.openDrawer === 'function') {
                navigation.openDrawer();
              }
            }}
            style={styles.iconButton}
            accessibilityRole="button"
          >
            <Ionicons name="menu" size={26} color={Colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButtonRight}>
            <Ionicons name="sparkles" size={22} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        <Text style={styles.greeting}>Hi Francine!</Text>
        <Text style={styles.sub}>Welcome to SpaceSpotter</Text>

        <View style={styles.searchWrapper}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} color={Colors.textSecondary} style={{ marginRight: 8 }} />
            <TextInput placeholder="Search something..." placeholderTextColor={Colors.placeholder} style={styles.searchInput} />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options" size={18} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesRow}>
          <View style={[styles.card, styles.cardLarge]}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=200&h=200&fit=crop&overlay=dark' }}
              style={styles.categoryImage}
              resizeMode="cover"
            />
            <View style={styles.categoryOverlay}>
              <Text style={styles.cardTitle}>Cafés</Text>
            </View>
          </View>
          <View style={[styles.card, styles.cardLarge]}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&overlay=dark' }}
              style={styles.categoryImage}
              resizeMode="cover"
            />
            <View style={styles.categoryOverlay}>
              <Text style={styles.cardTitle}>Coworking Spaces</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Most Search</Text>
        <View style={styles.tagsRow}>
          {['Popular','Affordable','Group Seats','Free Wifi','With Sockets','Near Me'].map((t) => (
            <View key={t} style={styles.tag}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 8 }]}>Top Spaces of the Week</Text>
        <View style={styles.grid}>
          {[
            { name: 'Red\'s Café', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200&h=200&fit=crop' },
            { name: 'Misfits Coffee', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&h=200&fit=crop' },
            { name: 'Huddle Coworking', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop' },
            { name: 'Nimo Brew Café', image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=200&h=200&fit=crop' }
          ].map((space, i) => (
            <View key={i} style={styles.spaceCard}>
              <Image 
                source={{ uri: space.image }}
                style={styles.spaceImage}
                resizeMode="cover"
              />
              <Text style={styles.spaceName}>{space.name}</Text>
            </View>
          ))}
        </View>

        <View style={{ height: 90 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: Colors.background },
  container: { paddingHorizontal: 16, paddingTop: 40, paddingBottom: 20 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  iconButton: { padding: 8 },
  iconButtonRight: { padding: 8 },
  greeting: { fontSize: 26, fontWeight: '700', color: Colors.primary, marginTop: 6 },
  sub: { color: Colors.textSecondary, marginBottom: 16 },
  searchWrapper: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 },
  searchBar: { flex: 1, backgroundColor: '#F0E8E2', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 10, flexDirection: 'row', alignItems: 'center' },
  searchInput: { flex: 1, color: Colors.textSecondary },
  filterButton: { marginLeft: 10, backgroundColor: '#F5EDEB', padding: 10, borderRadius: 14, borderWidth: 1, borderColor: Colors.divider },
  categoriesRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 },
  card: { 
    borderRadius: 14, 
    height: 140, 
    width: (width - 48) / 2,
    position: 'relative',
    overflow: 'hidden'
  },
  cardLarge: {},
  categoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  categoryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 12,
  },
  cardTitle: { color: Colors.white, fontSize: 16, fontWeight: '700' },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: Colors.primary, marginBottom: 8 },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 12 },
  tag: { backgroundColor: '#EFE7E2', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12, marginRight: 8, marginBottom: 8 },
  tagText: { color: Colors.textSecondary, fontSize: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  spaceCard: { width: (width - 48) / 2, marginBottom: 16 },
  spaceImage: { height: 140, borderRadius: 12, marginBottom: 8 },
  spaceName: { color: Colors.black, fontSize: 14 },
  bottomNav: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 70, backgroundColor: Colors.background, borderTopWidth: 1, borderTopColor: Colors.divider, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 8 },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 11, marginTop: 4, color: Colors.textSecondary },
});

export default HomeScreen;

