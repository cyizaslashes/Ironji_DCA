import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const OnBoardingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text01}>Welcome To</Text>
      <Text style={styles.text}>Ironji Trading ltd</Text>
      <Text style={styles.text02}>Start to Explore Our places</Text>
      <Text style={styles.text03}>Continue By Sign In or Login</Text>
      <Text style={styles.text04}>Powered By</Text>
      <Text style={styles.text05}>Ironji</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}><Ionicons name="ios-arrow-forward" size={60} color="#fff" /></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 100,
  },
  text: {
    fontSize: 28.5,
    fontWeight: 'bold',
    color: '#C75F00',
    left:0,
  },
 
  text01:{
    fontSize: 18,
    color: 'Orange',
    left:-60,
  },

  text02:{
    position: 'absolute',
    fontSize: 15,
    color: 'Orange',
    bottom: 280,
    left:70,
  },
  text03:{
    position: 'absolute',
    fontSize: 13,
    color: '#aabbaa',
    bottom: 260,
    left:70,
  },

  text04:{
    position: 'absolute',
    fontSize: 13,
    color: 'black',
    bottom: 30,
    left:175,
  },
  text05:{
    position: 'absolute',
    fontSize: 13,
    color: '#C75F00',
    bottom: 14,
    left:192,
  },
  text06:{
    position: 'absolute',
    fontSize: 13,
    color: '#000',
    bottom: 14,
    left:0,
  },
  buttonContainer: {
    width: 250,
    height: 250,
    borderRadius:500,
    borderWidth: 1,
    backgroundColor: '#C75F00',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -250,
    left:160,
    borderColor:'#fff'
  },
  buttonText: {
    color: '#eeeeee',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnBoardingScreen;
