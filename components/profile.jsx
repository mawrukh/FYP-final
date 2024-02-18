import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(
    'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='
  );

    const [name, setName] = useState('Your Name');
  const [email, setEmail] = useState('user@gmail.com');
  const [password, setPassword] = useState('');


  const handleImageEdit = () => {
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Image picker was canceled');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        setProfileImage(response.uri);
      }
    });
  };

   const handleLogout = () => {
    // Implement logout functionality
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: () => {
          // Perform the logout action here
          console.log('User logged out.');
        },
      },
    ]);
  };

  const handleDeleteAccount = () => {
    // Implement account deletion functionality
    Alert.alert('Delete Account', 'Are you sure you want to delete your account?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          // Perform the account deletion action here
          console.log('User account deleted.');
        },
      },
    ]);
  };

  const handleSaveUpdates = () => {
    // Implement the save updates functionality
    // You can save the changes made to the name, email, and password fields here
    console.log('Updates saved.');
    Alert.alert('Updates Saved', 'Your changes have been saved successfully.');
  };

  return (
    <View style={styles.container}>
   
      <View style={styles.header}>
        <TouchableOpacity onPress={handleImageEdit}>
          <Image
            source={{
              uri: profileImage,
            }}
            style={styles.profileImage}
          />
          <Image
            source={{
              uri: 'https://img.freepik.com/premium-vector/edit-text-icon-pencil-icon-sign-up-icon-pen-ballpoint-with-square-box-vector-illustration_399089-2806.jpg'
            }}
            style={styles.editIcon}
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>Your Name</Text>
        <Text style={styles.profileEmail}>user@gmail.com</Text>
      </View>
       <View style={styles.header2}>
          <Text style={styles.statsText}>Leaderboard Rank:</Text>
          <Text style={styles.statsText}>Complaint Score:</Text>
       </View>
       <View style={styles.settingsContainer}>
    <Text style={styles.settingsText}>Edit Details</Text>
    <TextInput
          style={styles.inputField}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.inputField}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputField}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
     <TouchableOpacity style={styles.saveButton} onPress={handleSaveUpdates}>
            <Text style={styles.saveButtonText}>Save Updates</Text>
          </TouchableOpacity>
          <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteAccountButton} onPress={handleDeleteAccount}>
            <Text style={styles.buttonText}>Delete Account</Text>
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
    backgroundColor: '#fff',
  },
   buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  inputField: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingLeft: 5, // Add some left padding
   
  },
  statsText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsContainer: {
    marginTop: 430, // Adjust the margin as needed
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00B2A9',
  },
  header: {
    backgroundColor: '#00B2A9',
    flexDirection: 'column', // Display elements in a column
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '25%',
    position: 'absolute',
    top: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingTop: 7,
    paddingBottom: 7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header2: {
    backgroundColor: '#00B2A9',
    flexDirection: 'column', // Display elements in a column
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '15%',
    position: 'absolute',
    borderBottomColor: 'white',
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 240,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#00B2A9',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  saveButtonText: {
    fontSize: 16,
    color: 'white',
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  deleteAccountButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginLeft:30,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default ProfileScreen;
