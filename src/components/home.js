import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, BackHandler } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Home = ({ navigation }) => {

  
  const handleBackPress = () => {
    BackHandler.exitApp(); 
    return true; 
  };

  useEffect(() => {
    
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  
  const navigateToPage = (page) => {
    navigation.navigate(page); 
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.topBar}>
        
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress} 
        >
          <Text style={styles.backButtonText}>←</Text> 
        </TouchableOpacity>

     
        <View style={styles.textContainer}>
          <Text style={styles.topText}>Let’s Go</Text>
          <Text style={styles.otherText}>
            You cannot understand a city without using its public transportation system
          </Text>
        </View>

        
        <Image
          source={{ uri: 'https://ik.imagekit.io/lmmaihcez/rb_52339%201.png?updatedAt=1732372107214' }}
          style={styles.image}
        />
      </View>

      
      <View style={styles.cardContainer}>
       
        <TouchableOpacity style={styles.card} onPress={() => navigateToPage('routes')}>
          <Image
            source={{ uri: 'https://ik.imagekit.io/lmmaihcez/6ca49ed6-3038-417f-87d4-f49b7a6a039c.png?updatedAt=1732378997685' }} // Replace with your image URL or local image
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Routes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigateToPage('searchroutes')}>
          <Image
            source={{ uri: 'https://ik.imagekit.io/lmmaihcez/c70b079a-4748-4bf6-ba3e-d4d9da1c7c37.png?updatedAt=1732380027208' }} // Replace with your image URL or local image
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Search Routes</Text>
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.card} onPress={() => navigateToPage('pickuppoint')}>
          <Image
            source={{ uri: 'https://ik.imagekit.io/lmmaihcez/Clip%20path%20group.png?updatedAt=1732379678008' }} // Replace with your image URL or local image
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Pickup Point</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigateToPage('rateus')}>
          <Image
            source={{ uri: 'https://ik.imagekit.io/lmmaihcez/dc843c7f-eea3-47b8-afea-9584b3938e22.png?updatedAt=1732378997643' }} // Replace with your image URL or local image
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Rate Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    height: responsiveHeight(45),
    width: responsiveWidth(100),
    borderBottomLeftRadius: responsiveWidth(15),
    borderBottomRightRadius: responsiveWidth(15),
    backgroundColor: 'rgba(0, 189, 242, 0.8)', 
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4),
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: responsiveWidth(3),
    top: responsiveHeight(3),
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    backgroundColor: '#FFB600',
    borderRadius: responsiveWidth(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  backButtonText: {
    fontSize: responsiveFontSize(1.8), // Adjusted to maintain proportional size
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: responsiveWidth(5),
    flex: 1,
  },
  topText: {
    marginLeft: responsiveWidth(-4),
    fontSize: responsiveFontSize(4),
    marginTop: responsiveHeight(14),
    color: '#042E6F',
    fontWeight: '900',
    marginBottom: 5,
  },
  otherText: {
    marginLeft: responsiveWidth(-4),
    fontSize: responsiveFontSize(2),
    color: '#fff',
    lineHeight: responsiveFontSize(3),
  },
  image: {
    width: responsiveWidth(55),
    height: responsiveHeight(45),
    resizeMode: 'contain',
    marginTop: responsiveHeight(10),
    marginRight: responsiveWidth(-5),
    marginLeft: 0,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
  },
  card: {
    width: responsiveWidth(42),
    height: responsiveHeight(20),
    backgroundColor: '#D8D8D8',
    borderWidth: responsiveWidth(0.6),
    borderColor: '#707070',
    borderRadius: responsiveWidth(4),
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  cardImage: {
    width: responsiveWidth(35),
    height: responsiveHeight(14),
    resizeMode: 'contain',
  },
  cardText: {
    marginTop: 10,
    fontSize: responsiveFontSize(2),
    color: '#4C3600',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
