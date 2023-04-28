import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen/OnBoardingScreen';
import BoardScreen from './src/screens/BoardScreen/BoardScreen';
import LoginPage from './src/screens/LoginScreen/LoginPage';
import SignInPage from './src/screens/SignInScreen/SignInPage';
import SlideshowScreen from './src/screens/SlideshowScreen/SlideshowScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <OnBoardingScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
