import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
  ScrollView,
  Modal,
  Share,
  Platform,
} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { FontAwesome5 } from 'react-native-vector-icons';
import { BottomSheet } from 'react-native-elements';

const LeaderBoardScreen = () => {
  const [slider1Visible, setSlider1Visible] = useState(false);
  const [slider2Visible, setSlider2Visible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const translateY1 = new Animated.Value(0);
  const translateY2 = new Animated.Value(0);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleSlider = (slider) => {
    const translateY = slider === 1 ? translateY1 : translateY2;
    const isVisible = slider === 1 ? slider1Visible : slider2Visible;

    Animated.timing(translateY, {
      toValue: isVisible ? 0 : -200,
      duration: 300,
      useNativeDriver: false,
    }).start();

    if (slider === 1) {
      setSlider1Visible(!isVisible);
      setSlider2Visible(false);
    } else {
      setSlider2Visible(!isVisible);
      setSlider1Visible(false);
    }
  };
  const openAchievementModal = (achievement) => {
    setSelectedAchievement(achievement);
    setModalVisible(true);
  };

  const closeAchievementModal = () => {
    setModalVisible(false);
  };

  const renderModal = () => {
    if (!selectedAchievement) return null;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeAchievementModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedAchievement.name}</Text>
            <Image
              source={{ uri: selectedAchievement.image }}
              style={styles.modalImage}
            />
            <Text style={styles.modalDescription}>
              {selectedAchievement.desc}
            </Text>
            {/* Add other achievement details here */}
            <TouchableOpacity onPress={closeAchievementModal}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const renderSlider = (slider, translateY, text) => {
    const achievementsData = [
      {
        id: 1,
        image:
          'https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png',
        desc: 'Achievement Unlocked! Dispose of 100 kilograms of waste responsibly and earn the title of Green Guardian.',
        name: 'Green Guardian',
      },
      {
        id: 2,
        image:
          'https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png',
        desc: 'Achievement Unlocked! Convert 50 kilograms of organic waste into compost, contributing to a healthier environment.',
        name: 'Trash Transformer',
      },
      {
        id: 3,
        image:
          'https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png',
        desc: 'Achievement Unlocked! Implement a waste reduction plan at home or work, reducing overall waste production by 20%.',
        name: 'Waste Warrior',
      },
      {
        id: 4,
        image:
          'https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png',
        desc: 'Achievement Unlocked! Create a functional or artistic item from repurposed materials and share it with the community.',
        name: 'Upcycling Artisan',
      },
      {
        id: 5,
        image:
          'https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png',
        desc: 'Achievement Unlocked! Divert 200 kilograms of waste from landfills by practicing proper recycling and composting.',
        name: 'Landfill Diversion Dynamo',
      },
      {
        id: 6,
        image:
          'https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png',
        desc: 'Achievement Unlocked! Maintain a waste-free travel experience by using reusable containers, utensils, and water bottles on all trips.',
        name: 'Waste-Free Wanderer',
      },
      {
        id: 7,
        image:
          'https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png',
        desc: 'Achievement Unlocked! Inspire and lead a local waste reduction initiative, involving at least 20 community members.',
        name: 'Community Catalyst',
      },
      {
        id: 8,
        image:
          'https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png',
        desc: 'Achievement Unlocked! Responsibly dispose of 25 electronic devices, preventing hazardous materials from entering landfills.',
        name: 'E-Waste Eliminator',
      },
      {
        id: 9,
        image:
          'https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png',
        desc: '',
        name: 'Locked',
      },
      {
        id: 10,
        image:
          'https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png',
        desc: '',
        name: 'Locked',
      },

      // Add more achievements data as needed
    ];
    const badgesData = [
      {
        id: 1,
        image: 'https://cdn-icons-png.flaticon.com/512/2583/2583264.png',
        desc: 'Badge Earned! Successfully complete a month without generating any non-recyclable waste.',
        name: 'Zero Waste Hero',
      },
      {
        id: 2,
        image: 'https://cdn-icons-png.flaticon.com/512/2583/2583264.png',
        desc: 'Badge Earned! Participate in a community clean-up event and help remove 500 pieces of litter from public spaces.',
        name: 'Eco Explorer',
      },
      {
        id: 3,
        image: 'https://cdn-icons-png.flaticon.com/512/2583/2583264.png',
        desc: 'Badge Earned! Recycle 500 items and contribute to the conservation of valuable resources.',
        name: 'Recycling Champion',
      },
      {
        id: 4,
        image: 'https://cdn-icons-png.flaticon.com/512/2583/2583264.png',
        desc: 'Badge Earned! Successfully eliminate single-use plastics from your daily routine for a consecutive month.',
        name: 'Plastic-Free Pioneer',
      },
      {
        id: 5,
        image: 'https://cdn-icons-png.flaticon.com/512/2583/2583264.png',
        desc: 'Badge Earned! Make 50 eco-friendly product choices while shopping, reducing packaging waste and supporting sustainable brands.',
        name: 'Sustainable Shopper',
      },
      {
        id: 6,
        image: 'https://cdn-icons-png.flaticon.com/512/2583/2583264.png',
        desc: 'Badge Earned! Offset your carbon footprint by participating in initiatives that contribute to environmental conservation.',
        name: 'Carbon Neutral Contributor',
      },
      {
        id: 7,
        image: 'https://cdn-icons-png.flaticon.com/512/2583/2583264.png',
        desc: 'Badge Earned! Master the art of composting by creating nutrient-rich compost for your garden from kitchen scraps and organic waste.',
        name: 'Compost Captain',
      },
      {
        id: 8,
        image: 'https://cdn-icons-png.flaticon.com/512/2583/2583264.png',
        desc: '',
        name: 'Locked',
      },
      {
        id: 9,
        image: 'https://cdn-icons-png.flaticon.com/512/2583/2583264.png',
        desc: '',
        name: 'Locked',
      },
      {
        id: 10,
        image: 'https://cdn-icons-png.flaticon.com/512/2583/2583264.png',
        desc: '',
        name: 'Locked',
      },

      // Add more achievements data as needed
    ];
    
    const renderAchievementRow = (data) => {
      return data.map((achievement, index) => (
        <TouchableOpacity
          key={achievement.id}
          style={styles.achievementContainer}
          onPress={() => openAchievementModal(achievement)}>
          <Image
            source={{
              uri:
                achievement.name === 'Locked'
                  ? 'https://cdn-icons-png.flaticon.com/512/10000/10000888.png'
                  : achievement.image,
            }}
            style={styles.achievementImage}
          />
          <Text
            style={[
              styles.achievementName,
              achievement.name === 'Locked' ? styles.lockedAchievement : null,
            ]}>
            {achievement.name}
          </Text>
        </TouchableOpacity>
      ));
    };
    const renderRows = (data) => {
      const rows = [];
      for (let i = 0; i < data.length; i += 2) {
        const rowAchievements = data.slice(i, i + 2);
        rows.push(
          <View
            key={i}
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {renderAchievementRow(rowAchievements)}
          </View>
        );
      }
      return rows;
    };
    return (
      <View>
        <TouchableOpacity onPress={() => toggleSlider(slider)}>
          <Text style={styles.sliderText}>{text}</Text>
        </TouchableOpacity>
        {slider === 1 && slider1Visible && (
          <Animated.View
            style={[styles.sliderContent, { transform: [{ translateY }] }]}>
            <ScrollView>{renderRows(achievementsData)}</ScrollView>
          </Animated.View>
        )}
        {slider === 2 && slider2Visible && (
          <Animated.View
            style={[styles.sliderContent, { transform: [{ translateY }] }]}>
            <ScrollView>{renderRows(badgesData)}</ScrollView>
          </Animated.View>
        )}
        {modalVisible && renderModal()}
      </View>
    );
  };

  const onPanGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY1 } }],
    { useNativeDriver: false }
  );

  const onPanGestureEnd = (event, slider) => {
    const translateY = slider === 1 ? translateY1 : translateY2;

    if (event.nativeEvent.state === State.END) {
      // Perform any additional actions when the gesture ends
      // You can add more logic here if needed
    }

    // Reset the translation after the gesture ends
    translateY.setValue(0);
  };

  const shareAchievements = async () => {
    try {
      const result = await Share.share({
        message: 'I achieved something great with JunkGenie!',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared
        } else {
          // Cancelled
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const renderRankStatus = () => {
    // You can fetch these values from your data or calculate them based on the user's achievements
    const savedPlastic = 20;
    const savedCO2 = 635;

    return (
      <View style={styles.rankStatusContainer}>
        <Text style={styles.rankStatusText}>
          You are a champ! Saved {savedPlastic}kg of plastic! {savedCO2}kg of CO2!
        </Text>
      </View>
    );
  };
  const leaderboardData = [
     { rank: 'Rank', name: 'Users', medal: 'Impact' },
    { rank: 1, name: 'Ali', medal: 'Platinum' },
    { rank: 2, name: 'Fatima', medal: 'Gold' },
    { rank: 3, name: 'Ahmed', medal: 'Silver' },
    { rank: 4, name: 'Ayesha', medal: 'Bronze' },
    { rank: 5, name: 'Kamran', medal: '2000 pt' },
    { rank: 6, name: 'Mahrukh', medal: '1847 pt' },
    { rank: 7, name: 'Amna', medal: '903 pt' },
    // Add more leaderboard data as needed
  ];
   const renderLeaderboardRow = (data) => {
    return (
      <View style={styles.leaderboardRow} key={data.rank}>
        <Text style={styles.rankText}>{data.rank}</Text>
        <Text style={styles.nameText}>{data.name}</Text>
        <Text style={styles.medalText}>{data.medal}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <Text style={styles.pageHeaderText}>Your Impact!</Text>
        <Image
          source={{
            uri: 'https://cdn.dribbble.com/users/1484145/screenshots/14189250/media/6a6ae760f88fcac01e1881093f963b6d.png?resize=400x300&vertical=center',
          }}
          style={styles.image}
        />
        
        <TouchableOpacity
          style={styles.shareButtonAbsolute}
          onPress={() => {
            shareAchievements(); // Call the shareAchievements function
            setBottomSheetVisible(true); // Show the bottom sheet
          }}>
         
        
        </TouchableOpacity>
        
      </View>
       {renderRankStatus()} 

       <Text style={styles.headerText}>Leaderboard</Text>
      {leaderboardData.map((row) => renderLeaderboardRow(row))}
      <View style={styles.iconcontainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo('HomeScreen')}>
          
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo('Info')}>
         
        </TouchableOpacity>
        <TouchableOpacity
          style={(styles.button, styles.centerIcon)}
          onPress={() => navigateTo('Scan')}>
         
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo('Community')}>
         
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo('Impact')}>
          
        </TouchableOpacity>
      </View>

      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          {renderSlider(1, translateY1, 'Achievements')}
        </View>
        <View style={styles.innerContainer}>
          {renderSlider(2, translateY2, 'Badges')}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center', // Center content horizontally
  },
leaderboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rankText: {
    flex: 1,
    textAlign: 'center',
  },
  nameText: {
    flex: 3,
    textAlign: 'center',
  },
  medalText: {
    flex: 1,
    textAlign: 'center',
  },
  achievementContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20, // Adjust as needed for spacing between achievements
    marginHorizontal: 30, // Add margin for equal spacing
  },
  achievementImage: {
    width: 100, // Adjust as needed for image size
    height: 100, // Adjust as needed for image size
    borderRadius: 50, // Make it circular if needed
    marginBottom: 10,
  },
  achievementName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  lockedAchievement: {
    color: '#808080', // Grey color for locked achievements
  },
   rankStatusContainer: {
    marginHorizontal:80,
    backgroundColor:'#00B2A9',
    borderRadius: 20,
    paddingHorizontal: 30
  },
  rankStatusText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
   shareButtonAbsolute: {
    position: 'absolute',
    top: 20, // Adjust the top position as needed
    right: 10, // Adjust the right position as needed
    backgroundColor: '#FFBF00',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 20,
  },
  sliderText: {
    fontSize: 24,
    fontWeight: 'bold',
   
    backgroundColor: '#00B2A9', // Adjusted to match the page header color
    padding: 10, // Added padding for better visibility
    color: 'white',
    paddingHorizontal: 119,
    borderColor: 'black',
    borderTopRightRadius: 20, // Added borderRadius for rounded corners
    borderTopLeftRadius: 20,
    elevation: 20, // Added elevation
    android: {
      elevation: 6, // Elevation for Android
    },
  },
  sliderContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    height: '95%',
    marginBottom: -70, // Overlapping sliders
    width: '100%', // Make the content full width
    alignItems: 'center', // Center content horizontally
  },
  image: {
    top: 20,
    width: 200,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%', // Adjust the width as needed
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    borderRadius: 100, // Make it circular
    marginBottom: 10,
  },
  pageHeader: {
    backgroundColor: '#00B2A9',
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
    marginTop: 80,
    color: 'white',
    fontSize: 26,
    fontFamily: 'Josefin Sans',
  },
  headerText: {
    fontSize: 28, // Increase font size as needed
    fontWeight: 'bold',
    marginBottom: 15, // Adjust margin for better spacing
    color: '#00B2A9', // Adjust color as needed
  },
  closeModalText: {
    fontSize: 16,
    color: 'blue', // Change color as needed
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
  shareButton: {
    backgroundColor: '#FFBF00',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 20,
    marginTop: 10, // Add margin for separation from the sliders
  },
  shareButtonText: {
    color: 'darkgreen',
    fontSize: 14,
    marginLeft: 5, // Add spacing between text and icon
  },
  // button: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '100%',
  //   flex: 1,
  // },
  // centerIcon: {
  //   alignItems: 'center', // Center the content horizontally
  //   justifyContent: 'center', //
  //   width: 60, // Set the width and height to create a circular shape
  //   height: 60,
  //   top: -25, // Adjust this value to control the uplift
  //   backgroundColor: '#FFBF00',
  //   borderRadius: 30,
  //   shadowColor: '#ddd',
  //   shadowOffset: {
  //     width: 0,
  //     height: 5,
  //   },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 10.84,
  //   elevation: 4,
  // },
});

export default LeaderBoardScreen;
