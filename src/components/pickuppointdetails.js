import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const PickuppointDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { pointId, pointName } = route.params;

  // Data for the pickup points
  const pickupPoints = [
    {
      id: 1,
      name: 'Waghodiya',
      details: 'Details of Waghodiya',
      routeNo: '101',
      from: 'Station',
      to: 'Waghodiya',
      time: '8:00 AM - 9:00 AM',
    },
    {
      id: 2,
      name: 'Vrundavan',
      details: 'Details of Vrundavan',
      routeNo: '102',
      from: 'City Center',
      to: 'Vrundavan',
      time: '9:00 AM - 10:00 AM',
    },
    {
      id: 3,
      name: 'Kirti',
      details: 'Details of Kirti',
      routeNo: '103',
      from: 'Bus Station',
      to: 'Kirti',
      time: '10:00 AM - 11:00 AM',
    },
    {
      id: 4,
      name: 'Parul',
      details: 'Details of Parul',
      routeNo: '104',
      from: 'University',
      to: 'Parul',
      time: '11:00 AM - 12:00 PM',
    },
    {
      id: 5,
      name: 'Bus Station',
      details: 'Details of Bus Station',
      routeNo: '105',
      from: 'Airport',
      to: 'Bus Station',
      time: '12:00 PM - 1:00 PM',
    },
  ];

  // Find the selected pickup point details
  const point = pickupPoints.find((point) => point.id === pointId);

  // Set the header title dynamically
  useEffect(() => {
    navigation.setOptions({
      title: pointName || 'Pickup Point Details', // Use the passed name or fallback title
    });
  }, [navigation, pointName]);

  return (
    <View style={styles.container}>
      {point ? (
        <View style={styles.box}>
          <Text style={styles.boxTitle}>{point.name}</Text>
          <Text style={styles.boxText}>Route No: {point.routeNo}</Text>
          <Text style={styles.boxText}>From: {point.from}</Text>
          <Text style={styles.boxText}>To: {point.to}</Text>
          <Text style={styles.boxText}>Time: {point.time}</Text>
        </View>
      ) : (
        <Text style={styles.details}>Details not found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveHeight(2),
    backgroundColor: '#fff',
  },
  box: {
    backgroundColor: '#E8F4FA',
    padding: responsiveHeight(2),
    borderRadius: responsiveWidth(2),
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  boxTitle: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(1),
  },
  boxText: {
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(0.2),
  },
  details: {
    fontSize: responsiveFontSize(2),
    color: 'red',
    textAlign: 'center',
    marginTop: responsiveHeight(1),
  },
});

export default PickuppointDetail;
