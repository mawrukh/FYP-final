import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { UserContext } from './userContext.jsx';

const SignupPage = ({ navigation }) => {
  const { saveUserDetails } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [buttonBgColor, setButtonBgColor] = useState('#4169e1');

  const handleUsernameChange = (value) => {
    setUsername(value);
    setIsDisabled(!value || !email || !password || !confirmPassword || !validateEmail(email) || !validatePassword(password) || password !== confirmPassword);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setIsDisabled(!value || !username || !password || !confirmPassword || !validateEmail(value) || !validatePassword(password) || password !== confirmPassword);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setIsDisabled(!value || !username || !email || !confirmPassword || !validateEmail(email) || !validatePassword(value) || value !== confirmPassword);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setIsDisabled(!value || !username || !email || !password || !validateEmail(email) || !validatePassword(password) || password !== value);
  };

  const handleReset = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setButtonBgColor('#2F4F4F');
  };

  const validateEmail = (value) => {
    // Check if email contains the "@" symbol
    return value.includes('@');
  };

  const validatePassword = (value) => {
    // Check if password contains at least 8 characters and at least 1 number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(value);
  };

  const handleRegister = () => {
    const userDetails = {
      email: email,
      password: password
    };
    saveUserDetails(userDetails); // Save user details to context
    // Create the request headers
const headers = new Headers();
headers.append("Content-Type", "application/json");

// Create the request options
const requestOptions = {
  method: "POST",
  headers: headers,
  body: JSON.stringify(userDetails),
};

// Send the POST request to the backend API
fetch("http://10.0.2.2:3000/register", requestOptions)
  .then((response) => {
    if (response.ok) {
      // Registration successful
      console.log(response);
      Alert.alert(
        "Registration successful",
        "You have been registered Successfully"
      );
      setUsername("");
      setEmail("");
      setPassword("");
    } else {
      // Registration failed
      Alert.alert(
        "Registration Error",
        "An error occurred while registering"
      );
      Alert.alert(
        "Registration Error",
        "Email already registred",
        
      );
      console.log("registration failed");
    }
  })
  .catch((error) => {
    // Handle any network errors
    Alert.alert(
      "Registration Error",
      "Email already registred",
      
    );
    console.error("registration failed", error);
  });
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <Text style={styles.pageHeaderText}>Sign Up</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://img.freepik.com/premium-vector/garbage-trash-can-bin-icon-eco-bio-concept-recycling_601298-2019.jpg?w=2000' }}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#9a9a9a"
          value={username}
          onChangeText={handleUsernameChange}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#9a9a9a"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonBgColor }, isDisabled && styles.disabledButton]}
          onPress={handleRegister}
          disabled={isDisabled}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleReset}
        >
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signupText}>Already have an account? Login!</Text>
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
    paddingTop: 10,
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
    height: 50,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignupPage;
