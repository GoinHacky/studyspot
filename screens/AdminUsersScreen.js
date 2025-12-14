import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

const AdminUsersScreen = ({ navigation }) => {
  // Mock data for users
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Vendor', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Management</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>All Users</Text>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={20} color="white" />
              <Text style={styles.addButtonText}>Add User</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.tableHeader}>
            <Text style={[styles.columnHeader, {flex: 2}]}>Name</Text>
            <Text style={[styles.columnHeader, {flex: 3}]}>Email</Text>
            <Text style={[styles.columnHeader, {flex: 2}]}>Role</Text>
            <Text style={[styles.columnHeader, {flex: 2}]}>Status</Text>
            <Text style={[styles.columnHeader, {flex: 1}]}></Text>
          </View>

          {users.map((user) => (
            <View key={user.id} style={styles.tableRow}>
              <Text style={[styles.cell, {flex: 2}]}>{user.name}</Text>
              <Text style={[styles.cell, {flex: 3}]} numberOfLines={1} ellipsizeMode="tail">
                {user.email}
              </Text>
              <Text style={[styles.cell, {flex: 2}]}>{user.role}</Text>
              <View style={[styles.statusCell, {flex: 2}]}>
                <View 
                  style={[
                    styles.statusBadge, 
                    {backgroundColor: user.status === 'Active' ? '#4CAF50' : '#9E9E9E'}
                  ]}
                >
                  <Text style={styles.statusText}>{user.status}</Text>
                </View>
              </View>
              <TouchableOpacity style={[styles.actionButton, {flex: 1}]}>
                <Ionicons name="ellipsis-vertical" size={20} color={Colors.textSecondary} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    marginLeft: 4,
    fontWeight: '500',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
    paddingBottom: 12,
    marginBottom: 8,
  },
  columnHeader: {
    fontWeight: '600',
    color: Colors.textSecondary,
    fontSize: 14,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  cell: {
    fontSize: 14,
    color: Colors.text,
    paddingRight: 8,
  },
  statusCell: {
    justifyContent: 'center',
  },
  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  actionButton: {
    alignItems: 'flex-end',
  },
});

export default AdminUsersScreen;
