import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {firebase} from '../../../config.js';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';

const LoginScreen =() => {
 /*const navigation = useNavigation()
 const [email,setEmail] = useState('')
 const [Password,setPassword] = useState ('')

 loginUser = async(email,Password) => {

  try {
    await firebase.auth().signInWithEmailAndPassword(email,Password)
  }catch(error){
    alert(error.message)
  }
}
*/
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="person-circle-outline" size={150} color="#C75F00" />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons name="person-outline" size={24} color="#C75F00" />
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={(email)=> setEmail(email)}
            autoCapitalize='none'
            autoCorrect={false}
            placeholderTextColor="#393e46"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={24} color="#C75F00" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(Password)=> setPassword(Password)}
            autoCapitalize='none'
            autoCorrect={false}
            placeholderTextColor="#393e46"
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer}
      onPress={()=>loginUser (email,Password)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    
      <View>
      <Text style={styles.logo}>Ironji</Text>
      <Text style={styles.text04}>Powered By</Text>
      <Text style={styles.text05}>Ironji</Text>
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: '#C75F00',
    bottom: 450,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    borderBottom:4
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dddddd',
    borderRadius: 50,
    paddingLeft: 20,
    marginBottom: 10,
  },
  input: {
    marginLeft: 10,
    width: '90%',
    height: 50,
    borderBottom:4,
    fontSize: 16,
    color: '#C75F00',
  },
  buttonContainer: {
    width: 333,
    height: 50,
    backgroundColor: '#C75F00',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#eeeeee',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text04:{
    position: 'absolute',
    fontSize: 13,
    color: 'black',
    bottom: -104,
    left:30,
  },
  text05:{
    position: 'absolute',
    fontSize: 13,
    color: '#C75F00',
    bottom: -120,
    left:45,
  },

 });
 export default LoginScreen