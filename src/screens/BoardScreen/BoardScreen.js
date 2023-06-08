import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BoardScreen= () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View places</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Add places</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.text04}>Powered By</Text>
        <Text style={styles.text05}>Ironji</Text>
        <View style={styles.Circle}>
        <Text style={styles.logo}>Ironji</Text>
       </View>

    </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: '#ffffff',
    bottom: -100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:"space-between",
    bottom: -300,
  },
  button: {
    backgroundColor: '#DB8300',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    left:-40
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button1: {
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    left:40
    
  },

  text04:{
    position: 'absolute',
    fontSize: 13,
    color: 'black',
    bottom: 30,
    left:210,
  },
  text05:{
    position: 'absolute',
    fontSize: 13,
    color: '#C75F00',
    bottom: 14,
    left:230,
  },
  Circle: {
    width: 500,
    height: 500,
    borderRadius:500,
    borderWidth: 1,
    backgroundColor: '#DB8300',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 350,
    left:-5,
    borderColor:'#fff'
  },
});

export default BoardScreen;
