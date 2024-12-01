import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const SearchRoutes = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  return (
    <View style={styles.container}>
      {/* From location picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={fromLocation}
          style={styles.picker}
          dropdownIconColor="#000"
          onValueChange={(itemValue) => setFromLocation(itemValue)}
          mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'} // Ensures proper dropdown behavior
        >
          <Picker.Item label="From (Where are you right now?)" value="" />
          <Picker.Item label="Waghodiya" value="Waghodiya" />
          <Picker.Item label="Vrundavan" value="Vrundavan" />
          <Picker.Item label="Kirti" value="Kirti" />
        </Picker>
      </View>

      {/* To location picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={toLocation}
          style={styles.picker}
          dropdownIconColor="#000"
          onValueChange={(itemValue) => setToLocation(itemValue)}
          mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'} // Ensures proper dropdown behavior
        >
          <Picker.Item label="To (Where do you want to go?)" value="" />
          <Picker.Item label="Vrundavan" value="Vrundavan" />
          <Picker.Item label="Parul" value="Parul" />
          <Picker.Item label="Busstation" value="Bus Station" />
        </Picker>
      </View>

      {/* Search button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            if (fromLocation && toLocation) {
              alert(`Searching route from ${fromLocation} to ${toLocation}`);
            } else {
              alert('Please select both locations!');
            }
          }}
        >
          <Text style={styles.searchButtonText}>Search Routes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveWidth(3),
    backgroundColor: '#FFFFFF',
  },
  pickerContainer: {
    borderWidth: responsiveWidth(0.3),
    borderColor: '#000000',
    borderRadius: responsiveWidth(2),
    marginBottom: responsiveHeight(1),
    backgroundColor: '#FFFFFF', // Ensures the dropdown matches the box
    overflow: 'hidden', // Makes sure the dropdown aligns
  },
  picker: {
    height: responsiveHeight(6.5),
    color: '#000',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    marginTop: responsiveHeight(2),
  },
  searchButton: {
    backgroundColor: '#00BDF2',
    opacity: 0.81,
    paddingVertical: responsiveHeight(1.5),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(2),
    fontWeight: '900',
  },
});

export default SearchRoutes;
