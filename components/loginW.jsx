import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupPageW from './signupW.jsx';
import { UserContext } from './userContext.jsx';


const LoginPageW = ({navigation}) => {
  const { userDetails } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [buttonBgColor, setButtonBgColor] = useState('#4169e1'); 

  const handleEmailChange = (value) => {
    setEmail(value);
    setIsDisabled(!value || !password);
    };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setIsDisabled(!value || !email);
  };

  const handleLogin = () => {
    // Check if the entered email and password match the user details from the UserProvider
    if (email === userDetails.email && password === userDetails.password) {
      Alert.alert('Success Login');
      navigation.navigate('Welcome'); // Navigate to Home page after successful login
    } else {
      setButtonBgColor('#FF0000');
    }
  };

const handleReset = () => {
    setEmail('');
    setPassword('');
    setButtonBgColor('#2F4F4F');
  }
  return (
    <View style={styles.container}>
    <View style={styles.pageHeader}>
        <Text style={styles.pageHeaderText}>Login</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1839/1839365.png' }}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9a9a9a"
          value={email}
          onChangeText={handleEmailChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9a9a9a"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <TouchableOpacity
  style={[styles.button, { backgroundColor: buttonBgColor }, isDisabled && styles.disabledButton]}
  onPress={handleLogin}
  disabled={isDisabled}>
  <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleReset}
        >
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('SignUpW')}>
        <Text style={styles.signupText}>Don't have an account? Sign Up!</Text>
        </TouchableOpacity>
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
  disabledButton: {
    opacity: 0.5,
  },
  pageHeader: {
    backgroundColor: 'white',
    width: '100%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingTop:10,
  },
  pageHeaderText: {
    color: 'black',
    fontSize: 18,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    height: 50,
    fontSize: 16,
    paddingLeft: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4169e1',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  resetButton: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 16,
    height:50,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginPageW;