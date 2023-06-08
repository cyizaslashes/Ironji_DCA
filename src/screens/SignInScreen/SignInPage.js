import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {firebase} from '../../../config'

const  SignUp= ()=> {
  /*const [email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  const [Firstname,setFirstname]= useState('')
  const [Lastname,setLastname]= useState('')

  registerUser= async (email,Password,Firstname,Lastname)=>{
     try{
        await firebase.auth().createUserWithEmailAndPassword(email,Password)
        .then(()=>{
          firebase.auth().currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url:'https://ironji-datacolletionapp.firebaseapp.com'
          })
          .then (()=>{
            alert('verification email sent')
          }).catch((error)=>{
            alert(error.message)
          })
          .then(()=>{
            firebase.firestore().collection('users')
            .doc(firestore.auth().currentUser.uid)
            .set({
              Firstname,
              Lastname,
              email,
            })
          }).catch((error)=>{
            alert(error.message)
          })
        }).catch((error=>{
          alert(error.message)
        }))
      
      }


    }
   registerUser = async (email, password, firstName, lastName) => {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        firebase.auth().currentUser.sendEmailVerification({
          url: 'https://example.com/verify-email', // Replace with your verification URL
        });
        // Additional code after successful user registration
      } catch (error) {
        // Handle any errors that occur during the registration process
        console.log('Registration error:', error);
      }
    };
    */
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign Up</Text>
      <View style={styles.inputView}>
      <TextInput 
      style={styles.inputText} 
      placeholder="First Name" 
      placeholderTextColor="#003f5c" 
      OnchangeText={(Firstname)=>setFirstname(Firstname)}
      autoCorrect={false}

      />
      
      </View>
      <View style={styles.inputView}>
      <TextInput 
      style={styles.inputText} 
      placeholder="last Name" 
      placeholderTextColor="#003f5c" 
      OnchangeText={(Lastname)=>setLastname(Lastname)}
      autoCorrect={false}

      />
      
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} 
        placeholder="Email" 
        placeholderTextColor="#003f5c"
        OnchangeText={(email)=>setEmail(email)} 
        autoCorrect={false}/>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} 
        placeholder="Password" 
        placeholderTextColor="#003f5c" 
        secureTextEntry={true} />
      </View>
      <TouchableOpacity 
      style={styles.signUpBtn}
      onPress={()=>SignUp(email,Firstname,Lastname,Password)}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="facebook-square" size={30} color="#3b5998" />
          <Text style={styles.socialButtonText}>Sign Up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialIcons name="alternate-email" size={30} color="#DB4437" />
          <Text style={styles.socialButtonText}>Sign Up with Google</Text>
        </TouchableOpacity>
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
    fontWeight: 'bold',
    fontSize: 40,
    color: '#C75F00',
    marginBottom: 40,
  },
  inputView: {
    width: 333,
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  signUpBtn: {
    width: 333,
    backgroundColor: '#C75F00',
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  signUpText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    width: 300,
    flexDirection: 'row'
  },
  socialButton: {
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    borderRadius: 30,
    height: 75,
    marginBottom: 20,
    padding: 20,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    left:-22,
    fontSize: 11
  },
  socialButtonText: {
    color: 'black',
    marginLeft: 1,
  },
});
export default SignUp