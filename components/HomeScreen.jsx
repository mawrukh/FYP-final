import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const UserProfileScreen = () => {
  const savedCO2 = 123; // Replace with actual saved CO2 value
  const contributions = 456;
  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* User Profile Section */}
      <View
        style={{
          marginBottom: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        {/* User Profile Info */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* Profile Icon */}
          <Icon
            name="person-circle"
            size={40}
            color="grey"
            style={{ marginRight: 8 }}
          />

          {/* User Profile Text */}
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            Welcome, User!
          </Text>
        </View>

        {/* Menu Icon */}
        <TouchableOpacity onPress={() => console.log('Menu icon pressed')}>
          <Icon name="menu" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Field */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#e0e0e0',
          borderRadius: 8,
          padding: 8,
          marginBottom: 16,
        }}>
        <TextInput
          placeholder="Search..."
          style={{ flex: 1, paddingVertical: 0 }}
        />
        {/* Filter Icon */}
        <TouchableOpacity style={{ marginLeft: 8 }}>
          <Icon name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Contribution container */}
      <View style={styles.contributionContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.contributionItem}>
            {/* Left side containing icons and labels */}
            <View style={styles.contributionItemLeft}>
              <Icon name="ribbon" size={24} color="white" />
              <Text style={styles.contributionItemLabel}>Saved CO2</Text>
            </View>

            {/* Right side containing numbers and units */}
            <View style={styles.contributionItemRight}>
              <Text style={styles.contributionItemValue}>{savedCO2}</Text>
              <Text style={styles.contributionItemUnit}>CO2/kg</Text>
            </View>
          </TouchableOpacity>
          {/* Spacer for better layout */}
          <View style={{ width: 16 }} />
        </View>
      </View>

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
        Categories
      </Text>
      <View style={{ marginBottom: 16 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Example of Horizontal Scrollable Container */}
          <View style={{ flexDirection: 'row' }}>
            {/* Add your scrollable content here */}
            {/* Example Item */}
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                backgroundColor: 'white',
                borderColor: '#2ecc71',
                borderWidth: 2,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
              }}>
              <Text>Plastic</Text>
            </TouchableOpacity>

            {/* Example Item */}
            <TouchableOpacity
              style={{
                width: 120,
                height: 50,
                backgroundColor: 'white',
                borderColor: '#2ecc71',
                borderWidth: 2,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
                paddingHorizontal: 8,
              }}>
              <Text>Biodegradable</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                backgroundColor: 'white',
                borderColor: '#2ecc71',
                borderWidth: 2,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
                paddingHorizontal: 8,
              }}>
              <Text>Radioactive</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                backgroundColor: 'white',
                borderColor: '#2ecc71',
                borderWidth: 2,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
                paddingHorizontal: 8,
              }}>
              <Text>Organic</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                backgroundColor: 'white',
                borderColor: '#2ecc71',
                borderWidth: 2,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
                paddingHorizontal: 8,
              }}>
              <Text>Paper</Text>
            </TouchableOpacity>

            {/* Add more items as needed */}
          </View>
        </ScrollView>
      </View>
      {/* Vertical Scrollable Containers for Top Trending */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
          Eco-friendly Tips
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 16 }}>
          {/* Example of Vertical Scrollable Container */}
          <View style={styles.container} onPress={() => navigateTo('Screen1')}>
            {/* Image on the left */}
            <Image
              source={{
                uri: 'https://magnolia.com/images/res.cloudinary.com/social-upload-prod-media-cld/image/upload/w_1250/shopify/1/0207/8508/products/15052-060MG_d57f8212-7979-4c8b-a555-6a26022a19ea.jpg?v=1634926167',
              }}
              style={styles.image}
            />

            {/* Title and Text on the right */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>Bin It Right!</Text>
              <Text style={styles.description}>
                Properly sort your waste into recycling, compost, and landfill
                bins. Know your local recycling guidelines to ensure your
                efforts make a positive impact.
              </Text>
            </View>
          </View>

          {/* Example of Vertical Scrollable Container */}
          <View style={styles.container}>
            {/* Image on the left */}
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4aIScbLPoaEfzsX2oqkz9d8GCfft6GJ9DtS58YZqTw&s',
              }}
              style={styles.image}
            />

            {/* Title and Text on the right */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>Say No to Single-Use</Text>
              <Text style={styles.description}>
                Kick the habit of single-use plastics by opting for reusable
                alternatives. Bring your own water bottle, coffee cup, and
                shopping bags to cut down on daily waste.
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            {/* Image on the left */}
            <Image
              source={{
                uri: 'https://d3hnfqimznafg0.cloudfront.net/images/Article_Images/ImageForArticle_245(1).jpg',
              }}
              style={styles.image}
            />

            {/* Title and Text on the right */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>Compost Crusader</Text>
              <Text style={styles.description}>
                Start composting kitchen scraps to create nutrient-rich soil for
                your garden. It's an eco-friendly way to reduce the amount of
                organic waste ending up in landfills.
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            {/* Image on the left */}
            <Image
              source={{
                uri: 'https://as2.ftcdn.net/v2/jpg/03/41/89/07/1000_F_341890783_dBAPDtmnbCEPlgWblVdnDJA4p9rzUvey.jpg',
              }}
              style={styles.image}
            />

            {/* Title and Text on the right */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>DIY Upcycler</Text>
              <Text style={styles.description}>
                Get creative with repurposing old items into something new.
                Upcycling not only reduces waste but also adds a unique touch to
                your surroundings.
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            {/* Image on the left */}
            <Image
              source={{
                uri: 'https://assets.ey.com/content/dam/ey-sites/ey-com/en_us/topics/climate-change/ey-waste-bin-full-of-e-waste.jpg',
              }}
              style={styles.image}
            />

            {/* Title and Text on the right */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>Paper Patrol</Text>
              <Text style={styles.description}>
                Reduce paper waste by opting for digital documents, using both
                sides of paper, and recycling whenever possible. Small changes
                in your office or home can lead to significant paper savings.
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            {/* Image on the left */}
            <Image
              source={{
                uri: 'https://nylcvef.org/wp-content/uploads/2018/09/Community-cleanup-litter.jpg',
              }}
              style={styles.image}
            />

            {/* Title and Text on the right */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>Community Cleanup Crew</Text>
              <Text style={styles.description}>
                Organize or join local cleanup events in your community. Whether
                it's a park, beach, or neighborhood, coming together to clean up
                makes a big difference in waste reduction.
              </Text>
            </View>
          </View>

          {/* Add more items as needed */}
        </ScrollView>
      </View>
      {/* Bottom Navigation Bar */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#2ecc71',
          paddingVertical: 10,
          borderRadius: 28,
        }}>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigateTo('Screen1')}>
          <Icon name="book" size={24} color="white" />
          <Text style={{ color: 'white' }}>Edu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigateTo('Screen2')}>
          <Icon name="camera" size={24} color="white" />
          <Text style={{ color: 'white' }}>Capture</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigateTo('Community')}>
          <Icon name="people" size={24} color="white" />
          <Text style={{ color: 'white' }}>Social</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigateTo('Screen3')}>
          <Icon name="ribbon" size={24} color="white" />
          <Text style={{ color: 'white' }}>Impact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd', // Adjust border color as needed
    backgroundColor: '#fff', // Adjust background color as needed
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 25, // Make the image round
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    textAlign: 'justify',
  },
  contributionContainer: {
    marginBottom: 16,
  },
  contributionItem: {
    width: 360,
    borderRadius: 10,
    height: 100,
    backgroundColor: '#2ecc71', // Green color
    marginRight: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contributionItemLeft: {
    alignItems: 'center',
  },
  contributionItemLabel: {
    marginLeft: 8,
    color: 'white',
  },
  contributionItemRight: {
    alignItems: 'flex-end',
  },
  contributionItemValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  contributionItemUnit: {
    color: 'white',
  },
});

export default UserProfileScreen;
