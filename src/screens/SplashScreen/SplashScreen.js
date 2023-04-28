import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const Circle = ({ text }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false
    }).start();
  }, [animation]);

  const size = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 120]
  });

  return (
    <Animated.View style={[styles.circle, { width: size, height: size }]}>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
};


const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Circle text="IRONJI" />
       </View>
       <Text style={styles.text04}>Powered By</Text>
        <Text style={styles.text05}>Ironji</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: '#C75F00',
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
  },

  text04:{
    position: 'absolute',
    fontSize: 13,
    color: 'black',
    bottom: 30,
    left:30,
  },
  text05:{
    position: 'absolute',
    fontSize: 13,
    color: '#C75F00',
    bottom: 14,
    left:47,
  },
 
});

export default SplashScreen;
