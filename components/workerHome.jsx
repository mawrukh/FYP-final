import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CustomWComponent from './workerComps.jsx';

const HomeW = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomWComponent
        title="View Tasks Assigned"
        imageSource={{
          uri: 'https://img.freepik.com/free-vector/ecologically-responsible-waste-garbage-collecting_1284-10150.jpg?w=2000'
        }}
        onPress={() => navigation.navigate('Login')}
      />
      <CustomWComponent
        title="View Map"
        imageSource={{
          uri: 'https://static.vecteezy.com/system/resources/previews/002/920/438/original/abstract-city-map-seamless-pattern-roads-navigation-gps-use-for-pattern-fills-surface-textures-web-page-background-wallpaper-illustration-free-vector.jpg'
        }}
        onPress={() => navigation.navigate('ViewMap')}
      />
      <CustomWComponent
        title="View Complaints"
        imageSource={{
          uri: 'https://static.vecteezy.com/system/resources/thumbnails/004/968/592/small/complaint-covey-report-button-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-etc-vector.jpg'
        }}
        onPress={() => navigation.navigate('Login')}
      />
      <CustomWComponent
        title="Check Pickup Points"
        imageSource={{
          uri: 'https://thumbs.dreamstime.com/b/pickup-point-icon-location-map-navigation-vector-illustration-252122814.jpg'
        }}
        onPress={() => navigation.navigate('ViewMap')}
      />
      <CustomWComponent
        title="View Optimized Route"
        imageSource={{
          uri: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-benchmark-illustration_23-2149331621.jpg'
        }}
        onPress={() => navigation.navigate('Check Routes')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center',
  },
});

export default HomeW;
