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

export default function ProfileScreen({ navigation }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Francine Rodriguez',
    email: 'francine.rodriguez@email.com',
    phone: '+63 912 345 6789',
    location: 'Cebu City, Philippines',
    bio: 'Coffee lover and productivity enthusiast. Always looking for the perfect study spot!',
    joinDate: 'January 2024',
  });

  const [editedInfo, setEditedInfo] = useState(userInfo);

  const handleSave = () => {
    setUserInfo(editedInfo);
    setIsEditing(false);
    Alert.alert('Success', 'Profile updated successfully!');
  };

  const handleCancel = () => {
    setEditedInfo(userInfo);
    setIsEditing(false);
  };

  const handleImagePicker = () => {
    Alert.alert(
      'Change Profile Photo',
      'Choose an option',
      [
        { text: 'Camera', onPress: () => Alert.alert('Camera', 'Camera feature coming soon!') },
        { text: 'Gallery', onPress: () => Alert.alert('Gallery', 'Gallery feature coming soon!') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const StatCard = ({ title, value, icon }) => (
    <View style={styles.statCard}>
      <Ionicons name={icon} size={24} color={Colors.primary} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity 
          onPress={isEditing ? handleSave : () => setIsEditing(true)}
          style={styles.editButton}
        >
          <Text style={styles.editButtonText}>
            {isEditing ? 'Save' : 'Edit'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <TouchableOpacity onPress={handleImagePicker} style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face' }}
                style={styles.profileImagePhoto}
                resizeMode="cover"
              />
            </View>
            <View style={styles.cameraIcon}>
              <Ionicons name="camera" size={16} color="white" />
            </View>
          </TouchableOpacity>
          
          {isEditing ? (
            <TextInput
              style={styles.nameInput}
              value={editedInfo.name}
              onChangeText={(text) => setEditedInfo({...editedInfo, name: text})}
              placeholder="Enter your name"
            />
          ) : (
            <Text style={styles.userName}>{userInfo.name}</Text>
          )}
          
          <Text style={styles.joinDate}>Member since {userInfo.joinDate}</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <StatCard title="Bookings" value="24" icon="calendar" />
          <StatCard title="Favorites" value="12" icon="heart" />
          <StatCard title="Reviews" value="8" icon="star" />
        </View>

        {/* Profile Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          <View style={styles.infoItem}>
            <Ionicons name="mail" size={20} color={Colors.textSecondary} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={editedInfo.email}
                  onChangeText={(text) => setEditedInfo({...editedInfo, email: text})}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                />
              ) : (
                <Text style={styles.infoValue}>{userInfo.email}</Text>
              )}
            </View>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="call" size={20} color={Colors.textSecondary} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Phone</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={editedInfo.phone}
                  onChangeText={(text) => setEditedInfo({...editedInfo, phone: text})}
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                />
              ) : (
                <Text style={styles.infoValue}>{userInfo.phone}</Text>
              )}
            </View>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="location" size={20} color={Colors.textSecondary} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Location</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={editedInfo.location}
                  onChangeText={(text) => setEditedInfo({...editedInfo, location: text})}
                  placeholder="Enter your location"
                />
              ) : (
                <Text style={styles.infoValue}>{userInfo.location}</Text>
              )}
            </View>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="person" size={20} color={Colors.textSecondary} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Bio</Text>
              {isEditing ? (
                <TextInput
                  style={[styles.infoInput, styles.bioInput]}
                  value={editedInfo.bio}
                  onChangeText={(text) => setEditedInfo({...editedInfo, bio: text})}
                  placeholder="Tell us about yourself"
                  multiline
                  numberOfLines={3}
                />
              ) : (
                <Text style={styles.infoValue}>{userInfo.bio}</Text>
              )}
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <TouchableOpacity style={styles.actionItem}>
            <Ionicons name="time" size={20} color={Colors.primary} />
            <Text style={styles.actionText}>Booking History</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <Ionicons name="heart" size={20} color={Colors.primary} />
            <Text style={styles.actionText}>My Favorites</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <Ionicons name="star" size={20} color={Colors.primary} />
            <Text style={styles.actionText}>My Reviews</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <Ionicons name="card" size={20} color={Colors.primary} />
            <Text style={styles.actionText}>Payment Methods</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
        </View>

        {isEditing && (
          <View style={styles.editActions}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.bottomSpacing} />
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
  editButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 16,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden',
  },
  profileImagePhoto: {
    width: '100%',
    height: '100%',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'white',
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  nameInput: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    paddingVertical: 4,
    minWidth: 200,
  },
  joinDate: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 16,
    paddingVertical: 20,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  statCard: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginTop: 8,
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  section: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  infoContent: {
    flex: 1,
    marginLeft: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: Colors.text,
  },
  infoInput: {
    fontSize: 16,
    color: Colors.text,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    paddingVertical: 4,
  },
  bioInput: {
    height: 60,
    textAlignVertical: 'top',
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
    marginLeft: 12,
  },
  editActions: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.textSecondary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginRight: 8,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  saveButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginLeft: 8,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  bottomSpacing: {
    height: 100,
  },
});
