import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function ExploreScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={Colors.textSecondary} style={{ marginRight: 8 }} />
          <Text style={styles.searchText}>Search something...</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options" size={18} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.hero}>
        <Text style={styles.heroText}>We discover this hidden cafe sa Cebu!</Text>
      </View>

      <View style={styles.rightActions}>
        <View style={styles.pill}><Text style={styles.pillText}>1.5k</Text></View>
        <View style={styles.pill}><Text style={styles.pillText}>765</Text></View>
      </View>

      {/* Static bottom nav (visual only) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={20} color={Colors.textSecondary} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="search" size={20} color={Colors.primary} />
          <Text style={[styles.navText, { color: Colors.primary }]}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="star" size={20} color={Colors.textSecondary} />
          <Text style={styles.navText}>Starred</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid" size={20} color={Colors.textSecondary} />
          <Text style={styles.navText}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings" size={20} color={Colors.textSecondary} />
          <Text style={styles.navText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: Colors.background },
  searchContainer: { flexDirection: 'row', padding: 16, alignItems: 'center' },
  searchBar: { flex: 1, backgroundColor: '#F0E8E2', borderRadius: 20, paddingVertical: 10, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center' },
  searchText: { color: Colors.textSecondary },
  filterButton: { marginLeft: 10, backgroundColor: '#F5EDEB', padding: 10, borderRadius: 14, borderWidth: 1, borderColor: Colors.divider },
  hero: { height: height * 0.6, marginHorizontal: 16, borderRadius: 12, backgroundColor: Colors.gray, alignItems: 'center', justifyContent: 'center' },
  heroText: { color: Colors.white, fontSize: 18, fontWeight: '700', textAlign: 'center', paddingHorizontal: 20 },
  rightActions: { position: 'absolute', right: 16, top: 140, alignItems: 'center' },
  pill: { backgroundColor: Colors.white, padding: 8, borderRadius: 20, marginBottom: 12 },
  pillText: { color: Colors.textSecondary },
  bottomNav: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 70, backgroundColor: Colors.background, borderTopWidth: 1, borderTopColor: Colors.divider, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 8 },
  navItem: { alignItems: 'center' },
  navItemActive: { alignItems: 'center' },
  navText: { fontSize: 11, marginTop: 4, color: Colors.textSecondary },
});
