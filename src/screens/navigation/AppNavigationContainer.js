import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screen components
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import LoginPage from '../LoginScreen/LoginPage';
import SignInPage from '../SignInScreen/SignInPage';

const Stack = createStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="signIn" component={SignInPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
