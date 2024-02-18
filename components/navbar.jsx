import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome5 } from 'react-native-vector-icons';

const Nav = ({ navigation }) => {
  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <Text style={styles.appName}>JunkGenie</Text>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigateTo('Profile')}>
          <FontAwesome5 name="user-circle" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View>
      
      </View>

      <View style={styles.iconcontainer}>
        <TouchableOpacity
          style={[styles.button, styles.activeicon]}
          onPress={() => navigateTo('HomeScreen')}>
          <FontAwesome5 name="home" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo('Info')}>
          <FontAwesome5 name="book" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={(styles.button, styles.centerIcon)}
          onPress={() => navigateTo('Scan')}>
          <FontAwesome5 name="camera" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo('Community')}>
          <FontAwesome5 name="users" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo('Impact')}>
          <FontAwesome5 name="award" size={22} color="white" />
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
    overflow: 'hidden',
  },
  profileButton: {
    marginLeft: 10,
    marginRight: 10,
  },
  appName: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  iconcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#00B2A9',
    height: 50,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flex: 1,
  },
  centerIcon: {
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', //
    width: 60, // Set the width and height to create a circular shape
    height: 60,
    top: -25, // Adjust this value to control the uplift
    backgroundColor: '#FFBF00',
    borderRadius: 30,
    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.84,
    elevation: 4,
  },
  pageHeader: {
    backgroundColor: '#00B2A9',
    flexDirection: 'row', // Align the elements horizontally
    justifyContent: 'space-between',
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingTop: 7,
    paddingBottom: 7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  pageHeaderText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Nav;
