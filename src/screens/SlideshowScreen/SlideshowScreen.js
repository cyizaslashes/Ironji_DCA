import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const images = [
  { id: 1, uri: 'https://example.com/image1.jpg', description: 'We help you get all your goods on time' },
  { id: 2, uri: 'https://example.com/image2.jpg', description: 'We connect you with the driver' },
  { id: 3, uri: 'https://example.com/image3.jpg', description: 'Find our places in our App and help us add your busines too' }
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
