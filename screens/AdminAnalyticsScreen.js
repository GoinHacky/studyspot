import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');

const AdminAnalyticsScreen = ({ navigation }) => {
  const [period, setPeriod] = useState('Week');

  const kpis = [
    { id: 1, title: 'Bookings', value: '1,248', change: '+9%', icon: 'calendar' },
    { id: 2, title: 'Revenue', value: '₱142,320', change: '+6%', icon: 'cash' },
    { id: 3, title: 'New Users', value: '312', change: '+14%', icon: 'people' },
    { id: 4, title: 'Active Cafes', value: '18', change: '+2', icon: 'storefront' },
  ];

  const topCafes = [
    { id: 1, name: "Red's Cafe", bookings: 186, revenue: '₱21,480' },
    { id: 2, name: 'Bean Awake', bookings: 162, revenue: '₱18,920' },
    { id: 3, name: 'Nimo Brew Café', bookings: 141, revenue: '₱15,770' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Analytics</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.periodRow}>
          {['Today', 'Week', 'Month'].map((p) => (
            <TouchableOpacity
              key={p}
              style={[styles.periodBtn, period === p && styles.periodBtnActive]}
              onPress={() => setPeriod(p)}
            >
              <Text style={[styles.periodText, period === p && styles.periodTextActive]}>{p}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.kpiGrid}>
          {kpis.map((kpi) => (
            <View key={kpi.id} style={styles.kpiCard}>
              <View style={styles.kpiTopRow}>
                <View style={styles.kpiIcon}>
                  <Ionicons name={kpi.icon} size={20} color={Colors.primary} />
                </View>
                <Text style={styles.kpiChange}>{kpi.change}</Text>
              </View>
              <Text style={styles.kpiValue}>{kpi.value}</Text>
              <Text style={styles.kpiTitle}>{kpi.title}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bookings Trend ({period})</Text>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartText}>Static chart placeholder</Text>
            <Text style={styles.chartSubText}>Connect your analytics data later</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Cafes</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.th, { flex: 3 }]}>Cafe</Text>
              <Text style={[styles.th, { flex: 2, textAlign: 'right' }]}>Bookings</Text>
              <Text style={[styles.th, { flex: 2, textAlign: 'right' }]}>Revenue</Text>
            </View>
            {topCafes.map((c) => (
              <View key={c.id} style={styles.tr}>
                <Text style={[styles.td, { flex: 3 }]} numberOfLines={1} ellipsizeMode="tail">{c.name}</Text>
                <Text style={[styles.td, { flex: 2, textAlign: 'right' }]}>{c.bookings}</Text>
                <Text style={[styles.td, { flex: 2, textAlign: 'right' }]}>{c.revenue}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const CARD_WIDTH = (width - 48) / 2;

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
  headerRight: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  periodRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  periodBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  periodBtnActive: {
    backgroundColor: Colors.primary,
  },
  periodText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  periodTextActive: {
    color: 'white',
  },
  kpiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  kpiCard: {
    width: CARD_WIDTH,
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
  kpiTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  kpiIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${Colors.primary}10`,
  },
  kpiChange: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.primary,
  },
  kpiValue: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 4,
  },
  kpiTitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  section: {
    marginTop: 8,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 12,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
  },
  chartPlaceholder: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
  },
  chartText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
  },
  chartSubText: {
    marginTop: 6,
    fontSize: 13,
    color: Colors.textSecondary,
  },
  table: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  th: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.textSecondary,
  },
  tr: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  td: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '600',
  },
});

export default AdminAnalyticsScreen;
