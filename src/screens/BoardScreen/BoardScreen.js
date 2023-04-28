import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

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
      <Text style={styles.logo}>Ironji</Text>
      <Text style={styles.text04}>Powered By</Text>
        <Text style={styles.text05}>Ironji</Text>
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
    color: '#C75F00',
    bottom: 250,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:"space-between"
  },
  button: {
    backgroundColor: '#C75F00',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button1: {
    backgroundColor: '#010',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },

  text04:{
    position: 'absolute',
    fontSize: 13,
    color: 'black',
    bottom: 30,
    left:75,
  },
  text05:{
    position: 'absolute',
    fontSize: 13,
    color: '#C75F00',
    bottom: 14,
    left:90,
  },
});

export default BoardScreen;
