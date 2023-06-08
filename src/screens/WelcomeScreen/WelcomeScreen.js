import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>IRONJI</Text>
      </View>
      <View style={styles.buttonContainer}>
      <Text style={styles.text1}>Welcome</Text>
      <Text style={styles.text2}>To the Ironji App We are here to help you</Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1} onPress={() => navigation.navigate('Login')}>Login In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('signIn')}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textContainer: {
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#DB8300'
  },
  buttonContainer: {
    width: 420,
    height: 450,
    backgroundColor: '#DB8300',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  button1: {
    width: '40%',
    height: 60,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 20,
    right:380,
    bottom:-70
  },
  button2: {
    width: '40%',
    height: 60,
    backgroundColor: '#ffffff',
    color: '#DB8300',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    bottom: -60,
    right:355
  },
  buttonText: {
    color: '#DB8300',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText1: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text1:{
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    left:20,
    bottom:120
  },
  text2:{
    color: '#ffffff',
    fontSize: 15,
    justifyContent: 'center',
    left:-100,
    bottom:90
  }
});
export default WelcomeScreen
