import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to our app! We are a passionate team dedicated to providing you with the best experience. Our goal is to create innovative and user-friendly solutions that meet your needs.
      </Text>
      <Text style={styles.description}>
        Our app aims to simplify your life and enhance your productivity. We believe in leveraging the power of technology to bring convenience and efficiency to your daily tasks.
      </Text>
      <Text style={styles.description}>
        Please explore our app and feel free to contact us if you have any questions, feedback, or suggestions. We value your input and are committed to continuously improving our services.
      </Text>
      <Text style={styles.signature}>The Team at OurApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#666',
  },
  signature: {
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 20,
    textAlign: 'center',
    color: '#999',
  },
});

export default AboutPage;
