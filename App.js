import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState,useEffect}from 'react';
import {firebase} from './config';
import SplashScreen from './src/screens/SplashScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen/OnBoardingScreen';
import BoardScreen from './src/screens/BoardScreen/BoardScreen';
import LoginPage from './src/screens/LoginScreen/LoginPage';
import SignInPage from './src/screens/SignInScreen/SignInPage';
import SlideshowScreen from './src/screens/SlideshowScreen/SlideshowScreen';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import AddBusinessScreen from './src/screens/AddBusinessScreen/AddBusinessScreen'
import HomeViewerScreen from './src/screens/HomeViewerScreen/HomeViewerScreen'
import LoginScreen from './src/screens/LoginScreen/LoginPage';
import AboutPage from './src/screens/AboutScreen/AboutScreen';
import FormScreen1 from './src/screens/PlacesDataScreens/FormScreen01';
import FormScreen2 from './src/screens/PlacesDataScreens/FormScreen02';
import AppNavigationContainer from './src/screens/navigation/AppNavigationContainer'

/*
const Stack= createStackNavigator();

function App(){
const [initializing,setIniializing]=useState(true);
const [user,setUser] = useState();

//handle user state changes
function onAuthStateChanged(user){
  setUser(user);
  if (initializing) setIniializing(false);
}

useEffect(()=> {
  const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber
},[]);
if (initializing) return null;
if (!user){
  return(
    <Stack.Navigator>
      <Stack.Screen
      name='LoginPage'
      />
       <Stack.Screen
      name='SignInPage'
      />
    </Stack.Navigator>
  );
}
return (
  <Stack.Navigator>
    <Stack.Screen
    name='BoardScreen'
    />
  </Stack.Navigator>
);
}

export default ()=>{
<NavigationContainer>
  <App />
</NavigationContainer>
}
*/
const App = () => {
  return (
    <View style={styles.container}>
      <WelcomeScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;