import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.back}>
          <Text style={styles.buttonText1}>Login In</Text>
        </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>IRONJI</Text>
      </View>
      <View style={styles.buttonContainer}>
      <Text style={styles.text1}>Welcome</Text>
      <Text style={styles.text2}>To the Ironji App We are here to help you</Text>
      <TextInput placeholder='business name' placeholderTextColor={'#000'} style={styles.TextInput}/>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>Login In</Text>
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
    right:680,
    bottom:-70
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
  },
  TextInput:{
    backgroundColor:'#aaa',
    width: 380,
    height: 50,
    borderRadius: 2,
    justifyContent: 'center',
    left: -380
  },
  back:{
     
  }
});
