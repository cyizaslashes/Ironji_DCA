import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const FormScreen2 = ({ navigation, route }) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    // Do something with the form data
    const { firstName, lastName, email } = route.params;
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone:', phone);

    // Navigate to the next screen or perform any other action
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={text => setPhone(text)}
        keyboardType="phone-pad"
      />
      <Button title="Back" onPress={handleBack} />
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default FormScreen2;
