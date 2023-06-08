import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const images = [
  { id: 1, uri: 'https://www.scssoft.com/assets/images/american-truck-simulator/img_01.jpg', description: 'We help you get all your goods on time' },
  { id: 2, uri: 'https://cdn.shrm.org/image/upload/c_crop,h_704,w_1254,x_0,y_0/c_fit,f_auto,q_auto,w_767/v1/Global%20HR/cell_phone_driving_left_side_Australia1m_qtxeuy?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjAsIngyIjoxMjU0LCJ5MiI6NzA0LCJ3IjoxMjU0LCJoIjo3MDR9fQ%3D%3D', description: 'We connect you with the driver' },
  { id: 3, uri: 'https://previews.123rf.com/images/elvetica/elvetica1812/elvetica181200170/123899974-navigation-app-with-map-on-mobile-phone-in-hand-tracking-system-flat-cartoon-style-vector.jpg', description: 'Find our places in our App and help us add your busines too' }
];

const SlideshowScreen = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleSkip = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const handleBack = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(images.length - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: images[currentImage].uri }} style={styles.image} />
      <Text style={styles.description}>{images[currentImage].description}</Text>
      <View style={styles.buttonContainer}>
      <View style={styles.btn1}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.btn2}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: -250
  },
  description: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 333
  },
  buttonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
    borderRadius: 100
  },
  btn1:{
    backgroundColor: "#000",
    borderRadius: 200
  },
  btn2:{
    backgroundColor: "#C75F00",
    borderRadius: 200
  }
});

export default SlideshowScreen;
