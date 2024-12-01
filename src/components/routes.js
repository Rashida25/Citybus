import React, { useState } from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Routes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const routes = [
    { routeNo: '1A', from: 'Sardar Estate', to: 'Bus Stand', timing: [
      { timeOfDay: 'Morning', time: '8:00 AM - 9:00 AM' },
      { timeOfDay: 'Afternoon', time: '12:00 PM - 1:00 PM' },
    ], pickupPoints: ['Point 1', 'Point 2', 'Point 3'] },
    
    { routeNo: '2B', from: 'University', to: 'Railway Station', timing: [
      { timeOfDay: 'Morning', time: '9:00 AM - 10:00 AM' },
      { timeOfDay: 'Afternoon', time: '1:00 PM - 2:00 PM' },
    ], pickupPoints: ['Point A', 'Point B', 'Point C'] },
    
    { routeNo: '3C', from: 'Airport', to: 'City Center', timing: [
      { timeOfDay: 'Morning', time: '10:00 AM - 11:00 AM' },
      { timeOfDay: 'Afternoon', time: '2:00 PM - 3:00 PM' },
    ], pickupPoints: ['Point X', 'Point Y'] },
    
    { routeNo: '4D', from: 'Industrial Area', to: 'Hospital', timing: [
      { timeOfDay: 'Morning', time: '11:00 AM - 12:00 PM' },
      { timeOfDay: 'Afternoon', time: '3:00 PM - 4:00 PM' },
    ], pickupPoints: ['Point 4', 'Point 5'] },
    
    { routeNo: '5E', from: 'Old Town', to: 'New City', timing: [
      { timeOfDay: 'Morning', time: '12:00 PM - 1:00 PM' },
      { timeOfDay: 'Afternoon', time: '4:00 PM - 5:00 PM' },
    ], pickupPoints: ['Point M', 'Point N'] },
  ];

  const filteredRoutes = routes.filter(
    (route) =>
      route.routeNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.to.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/search.png' }}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search by (From, To, BusNo)"
          placeholderTextColor="#AA9B9B"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* List of Routes */}
      <FlatList
        data={filteredRoutes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.routeItem,
              { backgroundColor: index % 2 === 0 ? '#ADE9FB' : '#FFFFFF' },
            ]}
            onPress={() =>
              navigation.navigate('RouteDetails', {
                routeNo: item.routeNo,
                from: item.from,  
                to: item.to,      
                timing: item.timing,
                pickupPoints: item.pickupPoints,
              })
            }
          >
            <Text style={styles.routeNo}>{item.routeNo}</Text>
            <Text style={styles.routeDetails}>
              {item.from} → {item.to}
            </Text>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/chevron-right.png' }}
              style={styles.arrow}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveWidth(3),
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: responsiveWidth(0.5),
    borderRadius: responsiveWidth(2),
    marginBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(3),
  },
  searchIcon: {
    width: responsiveWidth(3.5),
    height: responsiveHeight(2),
    marginRight: responsiveWidth(2),
  },
  searchBar: {
    flex: 1,
    height: responsiveHeight(5), // Slightly increased for better responsiveness
    fontSize: responsiveFontSize(1.8), // Adjusted to make it responsive
    color: '#000', // Ensure text color is clear
    paddingVertical: 0, // Avoids unnecessary padding issues
  },
  
  routeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveWidth(3),
    borderRadius: responsiveWidth(2),
    marginBottom: responsiveHeight(1),
  },
  routeNo: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#000',
    width: responsiveWidth(15),
  },
  routeDetails: {
    fontSize: responsiveFontSize(2),
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },
  arrow: {
    width: responsiveWidth(3),
    height: responsiveHeight(2),
    tintColor: '#333',
  },
});

export default Routes;
