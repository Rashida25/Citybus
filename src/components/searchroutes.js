import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SearchRoutes = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={fromLocation}
          style={styles.picker}
          onValueChange={(itemValue) => setFromLocation(itemValue)}
        >
          <Picker.Item label="From (Where are you right now?)" value="" style={styles.label} />
          <Picker.Item label="Waghodiya" value="Waghodiya" style={styles.label} />
          <Picker.Item label="Vrundavan" value="Vrundavan" style={styles.label} />
          <Picker.Item label="Kirti" value="Kirti" style={styles.label} />
        </Picker>
        <Text style={styles.dropdownArrow}>▼</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={toLocation}
          style={styles.picker}
          onValueChange={(itemValue) => setToLocation(itemValue)}
        >
          <Picker.Item label="To (Where do you want to go?)" value="" style={styles.label} />
          <Picker.Item label="Vrundavan" value="Vrundavan" style={styles.label} />
          <Picker.Item label="Parul" value="Parul" style={styles.label} />
          <Picker.Item label="Busstation" value="Bus Station" style={styles.label} />
        </Picker>
        <Text style={styles.dropdownArrow}>▼</Text>
      </View>

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
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden', 
    position: 'relative', 
  },
  picker: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#AAA',
    paddingRight: 30, 
  },
  label: {
    color: '#AA9B9B', 
  },
  dropdownArrow: {
    position: 'absolute',
    right: 10,
    top: 15, 
    fontSize: 20,
    color: '#000000', 
  },
  buttonContainer: {
    marginTop: 20,
  },
  searchButton: {
    backgroundColor: '#00BDF2', 
    opacity: 0.81, 
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
});

export default SearchRoutes;
