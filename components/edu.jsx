import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CustomComponent from './userComps.jsx';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const EDUScreen = ({navigation}) => {
  const handleInformationalMaterialsPress = () => {
    openURL('https://www.sustonable.com/causes-and-effects-of-waste-pollution/#:~:text=Toxic%20substances%20released%20by%20litter,impact%20on%20aesthetics%2C%20degrading%20landscapes');
  };

  const handleBlogpostsPress = () => {
    openURL('https://www.sustonable.com/causes-and-effects-of-waste-pollution/#:~:text=Toxic%20substances%20released%20by%20litter,impact%20on%20aesthetics%2C%20degrading%20landscapes');
  };

  const handleCommunityOutreachPress = () => {
    openURL('https://www.sustonable.com/causes-and-effects-of-waste-pollution/#:~:text=Toxic%20substances%20released%20by%20litter,impact%20on%20aesthetics%2C%20degrading%20landscapes');
  };

  // Function to open a URL using Linking
  const openURL = (url) => {
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <View>
      <CustomComponent
  title="Informational Materials"
  imageSource={{
    uri: 'https://thumbs.dreamstime.com/b/marketing-communication-icon-outline-vector-web-design-isolated-white-background-style-201235123.jpg'
  }}
  onPress={handleInformationalMaterialsPress}
/>
      <CustomComponent
        title="Blogposts"
       imageSource={{
    uri: 'https://t3.ftcdn.net/jpg/03/00/17/00/360_F_300170007_EeUnk2vDMLQJDQh0sStL46tH0rTUy1j3.jpg'
  }}
  onPress={handleInformationalMaterialsPress}
      />

      <CustomComponent
        title="Community Outreach Events"
       imageSource={{
    uri: 'https://thumbs.dreamstime.com/b/online-marketing-outreach-icon-element-premium-quality-graphic-design-signs-symbols-collection-websites-web-white-144857538.jpg'
  }}
  onPress={handleInformationalMaterialsPress}
      />
      <CustomComponent
  title="Workshops"
  imageSource={{
    uri: 'https://static.vecteezy.com/system/resources/thumbnails/003/158/460/small/line-icon-for-workshop-vector.jpg'
  }}
  onPress={handleInformationalMaterialsPress}
/>
<CustomComponent
  title="Events"
  imageSource={{
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoBrsWitkDMXtaWPCDgYqpguoszs4o5ErpA&usqp=CAU'
  }}
  onPress={handleInformationalMaterialsPress}
/>
    </View>
  );
};

export default EDUScreen;
