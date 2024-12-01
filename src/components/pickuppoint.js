import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const PickupPoint = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const pickupPoints = [
    { name: 'Waghodiya', id: 1 },
    { name: 'Vrundavan', id: 2 },
    { name: 'Kirti', id: 3 },
    { name: 'Parul', id: 4 },
    { name: 'Bus Station', id: 5 },
  ];

  const filteredPoints = pickupPoints.filter((point) =>
    point.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/search.png' }} // Search icon
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search pickup point..."
          placeholderTextColor="#AA9B9B"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* List of Pickup Points */}
      <ScrollView style={styles.listContainer}>
        {filteredPoints.map((point, index) => (
          <TouchableOpacity
            key={point.id}
            style={[styles.listItem, { backgroundColor: index % 2 === 0 ? '#ADE9FB' : '#FFFFFF' }]}
            onPress={() => 
              navigation.navigate('PickuppointDetail', { 
                pointId: point.id, 
                pointName: point.name, // Pass pointName for dynamic header
              })
            }
          >
            {/* Icon */}
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/marker.png' }}
              style={styles.icon}
            />
            <Text style={styles.pointName}>{point.name}</Text>

            {/* Arrow */}
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/chevron-right.png' }}
              style={styles.arrow}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveHeight(2),
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
  listContainer: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveHeight(1.5),
    borderRadius: responsiveWidth(1),
    marginBottom: responsiveHeight(1),
    justifyContent: 'space-between',
  },
  icon: {
    width: responsiveWidth(3),
    height: responsiveHeight(2),
  },
  pointName: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    flex: 1,
    marginLeft: responsiveWidth(3),
  },
  arrow: {
    width: responsiveWidth(3),
    height: responsiveHeight(2),
  },
});

export default PickupPoint;
