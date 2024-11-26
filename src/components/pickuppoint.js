import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

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
      
      <View style={styles.searchBarContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/search.png' }} // Search icon
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search pickup point..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

     
      <ScrollView style={styles.listContainer}>
        {filteredPoints.map((point, index) => (
          <TouchableOpacity
            key={point.id}
            style={[
              styles.listItem,
              { backgroundColor: index % 2 === 0 ? '#ADE9FB' : '#FFFFFF' },
            ]}
            onPress={() => navigation.navigate('PickuppointDetail', { pointId: point.id })} // Navigate to detail page
          >
            
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/marker.png' }} 
              style={styles.icon}
            />
            <Text style={styles.pointName}>{point.name}</Text>
           
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
    padding: 20,
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchBar: {
    height: 40,
    flex: 1,
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  icon: {
    width: 20,
    height: 20,
  },
  pointName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  arrow: {
    width: 20,
    height: 20,
  },
});

export default PickupPoint;
