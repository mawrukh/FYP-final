import React, { useState, useEffect } from 'react';
import { UserProvider } from './components/userContext.jsx';
import EDUScreen from './components/edu.jsx';
import HomeW from './components/workerHome.jsx';
import UserProfileScreen from './components/HomeScreen.jsx';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomComponent from './components/userComps.jsx';
import { FontAwesome5 } from 'react-native-vector-icons';
import LoginPage from './components/login.jsx';
import SignupPage from './components/signup.jsx';
import RGCScreen from './components/rgcscreen.jsx';
import MCScreen from './components/manageComplaints.jsx';
import FeedbackScreen from './components/feedback.jsx';
import LoginPageW from './components/loginW.jsx';
import SignupPageW from './components/signupW.jsx';
import LeaderboardScreen from './components/leaderboard.jsx';
import ChallengesScreen from './components/challenges.jsx';
import EditCScreen from './components/editcompl.jsx';
import ViewMap from './components/viewmap.jsx';
import Opt from './components/optroute.jsx';
import ChatTest from './components/chatbot.jsx';
import ProfileScreen from './components/profile.jsx';
function LandingScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Loader');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <FontAwesome5 name="trash-alt" style={styles.icon1} />
        <Text style={styles.text1}>Junk Genie</Text>
      </View>
    </View>
  );
}
function Choice({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Welcome to <Text style={{ color: '#FFC300' }}>Junk Genie</Text>
      </Text>

      <Image
        style={styles.image}
        source={{
          uri: 'https://img.freepik.com/free-vector/people-recycling-concept_23-2148534658.jpg?w=2000',
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Continue as a Customer</Text>
      </TouchableOpacity>
      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.separatorLine} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUpW')}>
        <Text style={styles.buttonText}>Continue as a Worker</Text>
      </TouchableOpacity>
    </View>
  );
}
function HomeScreen({ navigation }) {
  const data = [
    {
      title: 'Register Complaint',
      imageSource: {
        uri: 'https://media.istockphoto.com/id/1057970556/vector/complaint-concept-flat-icon.jpg?s=612x612&w=0&k=20&c=_Pmnq10ZDatoQg3UBIesFD6ejaKg_KTYXxONeeW14OU=',
      },
      onPress: () => navigation.navigate('Register Complaint Screen'),
    },
    {
      title: 'Nearby Bins',
      imageSource: {
        uri: 'https://static.vecteezy.com/system/resources/previews/002/920/438/original/abstract-city-map-seamless-pattern-roads-navigation-gps-use-for-pattern-fills-surface-textures-web-page-background-wallpaper-illustration-free-vector.jpg',
      },
      onPress: () => navigation.navigate('ViewMap'),
    },
    {
      title: 'Give Feedback',
      imageSource: {
        uri: 'https://thumbs.dreamstime.com/b/mobile-app-rating-vector-concept-metaphor-online-grading-efficiency-mark-setting-stars-application-function-evaluation-183359132.jpg',
      },onPress: () => navigation.navigate('Feedback'),
    },
    {
      title: 'Check Educational Resources',
      imageSource: {
        uri: 'https://static.vecteezy.com/system/resources/previews/019/481/487/non_2x/icon-onlie-test-related-to-education-symbol-mbe-style-simple-design-editable-simple-illustration-free-vector.jpg',
      },
      onPress: () => navigation.navigate('EDU'),
    },
    {
      title: 'View Leaderboard',
      imageSource: {
        uri: 'https://static.vecteezy.com/system/resources/thumbnails/020/084/051/small/position-ranking-board-icon-of-leaderboard-vector.jpg',
      },
      onPress: () => navigation.navigate('Leaderboard'),
    },
  ];

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <CustomComponent
          key={index}
          title={item.title}
          imageSource={item.imageSource}
          onPress={item.onPress}
        />
      ))}
    </View>
  );
}


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserProvider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="ViewMap">
          <Stack.Screen
            name="Loader"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            options={{ headerBack: false,
            headerLeftVisible: false
             }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Choice"
            component={Choice}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignupPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpW"
            component={SignupPageW}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginW"
            component={LoginPageW}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register Complaint Screen"
            component={RGCScreen}
          />
          <Stack.Screen
            name="Place Details"
            component={MCScreen}
          />
          <Stack.Screen
            name="Manage Complaint Screen"
            component={EditCScreen}
          />
          <Stack.Screen
            name="EDU"
            component={EDUScreen}
          />
          <Stack.Screen
            name="Welcome"
            component={HomeW}
          />
           <Stack.Screen
            name="ViewMap"
            component={ViewMap}
          />
          <Stack.Screen
            name="Check Routes"
            component={Opt}
          />
          <Stack.Screen
            name="Feedback"
            component={FeedbackScreen}
          />
          <Stack.Screen
            name="Leaderboard"
            component={LeaderboardScreen}
          />
          <Stack.Screen
            name="Challenges"
            component={ChallengesScreen}
          />
          <Stack.Screen
            name="ChatTest"
            component={ChatTest}
          />
          <Stack.Screen
            name="HomeScr"
            component={UserProfileScreen}
          />
          <Stack.Screen
            name="ProfileScr"
            component={ProfileScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </UserProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },

  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container1: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#88C7F9',
    marginLeft: 10,
  },
  icon1: {
    fontSize: 30,
    marginRight: 10,
    color: '#45B08C',
  },
  image: {
    width: 350,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 30,
  },
  button: {
    width: 350,
    height: 60,
    backgroundColor: '#45B08C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 21,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginLeft: 20,
    marginRight: 20,
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default App;
