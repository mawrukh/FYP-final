import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, TextInput, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const RGCScreen = ({ navigation }) => {
  const [placeDetails, setPlaceDetails] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');

  const handleRegisterButtonPress = () => {
  if (!image) {
    Alert.alert('Please capture an image');
    return;
  }

  if (!placeDetails) {
    Alert.alert('Please enter place details');
    return;
  }

  // Generate date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  // Store the generated date and time
  setDate(`${formattedDate} ${formattedTime}`);

  // Register the complaint logic
  const complaintData = {
    image,
    placeDetails,
    date,
  };

  // Here, you can perform further processing or send the complaintData to a server

  // Reset the state
  setImage(null);
  setPlaceDetails('');

  // Show success message
  Alert.alert('Complaint Registered!');
};

const handleSelectFile = () => {
  var options = {
    title: 'Select Image',
    customButtons: [
      { 
        name: 'customOptionKey', 
        title: 'Choose file from Custom Option' 
      },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  ImagePicker.openPicker(options)
    .then((response) => {
      console.log('Response = ', response);
      if (!response.didCancel && !response.error && !response.customButton) {
        const source = { uri: response.path };
        setImage(source);
      }
    })
    .catch((error) => {
      console.log('ImagePicker Error: ', error);
    });
};

return (
  <View style={styles.container}>
    {image ? (
      <Image source={image} style={styles.imagePreview} />
    ) : (
      <Image
        source={{
          uri: 'https://media.istockphoto.com/id/1198347486/vector/photo-camera-vector-icon-with-hand-drawn-doodle-style-isolated-on-white.jpg?s=170667a&w=0&k=20&c=bfrS3E5e29kK33aRkVMN3-RdAOD7g9JvFEG52_vOfZ8='
        }}
        style={styles.image}
      />
    )}
    <TouchableOpacity onPress={handleSelectFile} style={styles.registerButton}>
      <Text style={styles.buttonText}>Select Image</Text>
    </TouchableOpacity>
    {image && (
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Place Details', { imageUri: image.uri })}>
        <Text style={styles.buttonText}>Register Complaint</Text>
      </TouchableOpacity>
    )}
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  backgroundColor:'white',
},
input: {
  backgroundColor: '#f2f2f2',
  borderRadius: 10,
  height: 50,
  width: '80%',
  fontSize: 16,
  paddingLeft: 20,
  marginBottom: 20,
},
registerButton: {
  width: '90%',
    height: 50,
    backgroundColor: '#4169e1',
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
},
buttonText: {
  color: '#fff',
  fontSize: 16,
},
manageComplaintsText: {
  fontSize: 16,
  textDecorationLine: 'underline',
  bottom: -330,
},
image: {
  width: 350,
  height: 200,
  resizeMode: 'cover',
  borderRadius: 10,
},
imagePreview: {
  width: 350,
  height: 200,
  resizeMode: 'cover',
  borderRadius: 10,
},
});

export default RGCScreen;
