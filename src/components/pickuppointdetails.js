import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'; 

const PickuppointDetail = () => {
  const route = useRoute();
  const { pointId } = route.params;

  const pickupPoints = [
    { id: 1, name: 'Waghodiya', details: 'Details of Waghodiya' },
    { id: 2, name: 'Vrundavan', details: 'Details of Vrundavan' },
    { id: 3, name: 'Kirti', details: 'Details of Kirti' },
    { id: 4, name: 'Parul', details: 'Details of Parul' },
    { id: 5, name: 'Bus Station', details: 'Details of Bus Station' },
  ];

  const point = pickupPoints.find((point) => point.id === pointId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pickup Point Details</Text>
      <Text style={styles.details}>{point ? point.details : 'Details not found'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  details: {
    fontSize: 18,
  },
});

export default PickuppointDetail;
