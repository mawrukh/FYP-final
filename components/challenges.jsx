import React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';

const ChallengesScreen = () => {
  const challengesData = [
    {
      id: '1',
      title: 'Challenge 1',
      description: 'Description of Challenge 1',
      image: 'https://img.freepik.com/free-vector/gradient-monochromatic-abstract-background_52683-74300.jpg',
    },
    {
      id: '2',
      title: 'Challenge 2',
      description: 'Description of Challenge 2',
      image: 'https://t3.ftcdn.net/jpg/02/81/00/00/360_F_281000057_1LPaKEFwbsw74URuIpNqTY5A8h8cz8Xr.jpg',
    },
    {
      id: '3',
      title: 'Challenge 3',
      description: 'Description of Challenge 3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtN9wI0Oxd3goX8TBW22C3BZHOx6h4kVtwg&usqp=CAU',
    },
    {
      id: '4',
      title: 'Challenge 4',
      description: 'Description of Challenge 4',
      image: 'https://garden.spoonflower.com/c/13452654/p/f/m/8eD6dtU4qB_MYILFXmQrHJZM7Suc3z1tIqK3M84lMYOpSC8aPoycpdY/Jadestone%20-%20green%20jade%2C%20gemstone%20green%2C%20solid%20jade%2C%20pale%20green%2C%20light%20green.jpg',
    },
    {
      id: '5',
      title: 'Challenge 5',
      description: 'Description of Challenge 5',
      image: 'https://garden.spoonflower.com/c/13452654/p/f/m/8eD6dtU4qB_MYILFXmQrHJZM7Suc3z1tIqK3M84lMYOpSC8aPoycpdY/Jadestone%20-%20green%20jade%2C%20gemstone%20green%2C%20solid%20jade%2C%20pale%20green%2C%20light%20green.jpg',
    },
    {
      id: '6',
      title: 'Challenge 6',
      description: 'Description of Challenge 6',
      image: 'https://garden.spoonflower.com/c/13452654/p/f/m/8eD6dtU4qB_MYILFXmQrHJZM7Suc3z1tIqK3M84lMYOpSC8aPoycpdY/Jadestone%20-%20green%20jade%2C%20gemstone%20green%2C%20solid%20jade%2C%20pale%20green%2C%20light%20green.jpg',
    },
  ];

  const renderChallengeItem = ({ item }) => (
    <View style={styles.challengeItem}>
      <ImageBackground source={{ uri: item.image }} style={styles.challengeImage} imageStyle={styles.imageStyle}>
        <View style={styles.challengeOverlay}>
          <Text style={styles.challengeTitle}>{item.title}</Text>
          <Text style={styles.challengeDescription}>{item.description}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={challengesData}
        keyExtractor={(item) => item.id}
        renderItem={renderChallengeItem}
        contentContainerStyle={styles.challengeList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  challengeList: {
    padding: 20,
  },
  challengeItem: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  challengeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 10,
  },
  challengeOverlay: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  challengeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  challengeDescription: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default ChallengesScreen;
