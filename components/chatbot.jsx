import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/FontAwesome';

const USER = {
  _id: 1,
  name: 'User',
};

const BOT_USER = {
  _id: 2,
  name: 'ChatBot',
};

class ChatTest extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    // Simulate an initial welcome message from the bot
    this.appendMessage({
      _id: Math.random(),
      text: 'Welcome to the Waste Query ChatBot! How can I assist you?',
      createdAt: new Date(),
      user: BOT_USER,
    });
  }

  onSend(messages = []) {
    // Append the user's message to the chat
    this.appendMessage(messages[0]);

    // Process user's message and provide relevant responses
    const userMessage = messages[0].text.toLowerCase();
    let botResponse = '';

    // Handle common greetings
    if (
      userMessage.includes('hi') ||
      userMessage.includes('hello') ||
      userMessage.includes('hey') ||
      userMessage.includes('ola') ||
      userMessage.includes('acha')
    ) {
      botResponse =
        'Hello! How can I assist you with waste-related queries today?';
    } else if (userMessage.includes('recycling') ||
    userMessage.includes('recycle') ||
      userMessage.includes('recyclable')) {
      botResponse =
        'Recycling is an essential part of waste management. You can recycle paper, plastic, glass, and more. Do you need more recycling tips?';
    } else if (userMessage.includes('composting')) {
      botResponse =
        'Composting is a great way to reduce organic waste. You can compost fruit and vegetable scraps, coffee grounds, and more. Would you like composting tips?';
    } else if (userMessage.includes('landfills')) {
      botResponse =
        "Landfills are disposal sites for non-recyclable and non-compostable waste. It's important to minimize waste going to landfills. Do you want to learn about waste reduction strategies?";
    } else if (
      userMessage.includes('bin') ||
      userMessage.includes('trash') ||
      userMessage.includes('waste') ||
      userMessage.includes('garbage')
    ) {
      botResponse =
        'Bins are containers used for collecting waste. They come in different types, such as recycling bins and trash bins. What specific information are you looking for about bins?';
    } else if (
      userMessage.includes('ok') ||
      userMessage.includes('alright') ||
      userMessage.includes('fine') ||
      userMessage.includes('acha' || userMessage.includes('okay'))
    ) {
      botResponse = 'Great! Have a good day!';
    } else if (userMessage.includes('waste reduction')) {
      botResponse =
        'Waste reduction involves minimizing the amount of waste we generate. You can reduce waste by recycling, composting, and practicing eco-friendly habits. Would you like tips on waste reduction?';
    } else {
      botResponse =
        "I apologize, but I couldn't understand your query. Please ask a waste-related question, and I'll do my best to assist you.";
    }

    // Simulate a delay before the bot responds
    setTimeout(() => {
      this.appendMessage({
        _id: Math.random(),
        text: botResponse,
        createdAt: new Date(),
        user: BOT_USER,
      });
    }, 1000); // Simulate a delay
  }

  appendMessage(message) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, message),
    }));
  }

    handleKeyPress = (target, value) => {
    if (target === 'enter') {
      this.onSend([{ text: value }]);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={USER}
          
          renderAvatar={() => (
            <View style={{ width: 40, height: 40 }}>
              <Image
                source={{
                  uri: 'https://t4.ftcdn.net/jpg/05/05/06/79/360_F_505067977_nkpVegKFw9AWN8xzWneX5AjShB7Ep7E4.jpg',
                }}
                style={{ width: 40, height: 40, borderRadius: 20, borderColor: 'black', borderWidth: 2 }}
              />
            </View>
          )}
          renderBubble={(props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#45B08C', // Change the background color to green for user's messages
        },
         left: {
          backgroundColor: 'lightgrey', // Change the background color to green for user's messages
        },
      }}
    />
  )}
           onKeyPress={this.handleKeyPress}
        />
      </View>
    );
  }
}

export default ChatTest;
