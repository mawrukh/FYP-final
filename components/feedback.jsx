import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from 'react-native';

const FeedbackCategoryScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isComplaintModalVisible, setComplaintModalVisible] = useState(false);
  const [complaintId, setComplaintId] = useState('');
  const [feedbackCategory, setFeedbackCategory] = useState('');
  const [isGeneralModalVisible, setGeneralModalVisible] = useState(false);
  const [isHelpModalVisible, setHelpModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const handleOpenGeneralModal = () => {
    setGeneralModalVisible(true);
  };

  const handleCloseGeneralModal = () => {
    setGeneralModalVisible(false);
  };

  const handleOpenHelpModal = () => {
    setHelpModalVisible(true);
  };

  const handleCloseHelpModal = () => {
    setHelpModalVisible(false);
  };

  const handleCategorySelect = category => {
    setSelectedCategory(category);
    if (category === 'Complaint Tracking') {
      setComplaintModalVisible(true);
    } else {
      setComplaintModalVisible(false);
    }
  };
  const handleComplaintIdChange = text => {
    setComplaintId(text);
  };

  const handleCloseModal = () => {
    setComplaintModalVisible(false);
  };

  const handleRatingSelect = selectedRating => {
    setRating(selectedRating);
    validateForm(selectedRating, feedback);
  };

  const handleFeedbackChange = text => {
    setFeedback(text);
    validateForm(rating, text);
  };

  const validateForm = (selectedRating, text) => {
    if (selectedRating > 0 && text.length >= 20) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  };

  const handleSubmit = () => {
    const feedbackData = {
     
      feedbackCategory,
      rating,
      feedback,
    };
    fetch('http://10.0.2.2:3000/register-feedback', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(feedbackData),
})
  .then((response) => {
    if (response.ok) {
      // Feedback was registered successfully
      return response.json();
    } else {
      throw new Error('Failed to register feedback');
    }
  })
  .then((data) => {
    console.log('Feedback Registered Successfully:', data.message);
    // You can perform additional actions here if needed
    // Perform submission logic here
    
    console.log(`Feedback Category: ${feedbackCategory}`);
    console.log(`Rating: ${rating}`);
    console.log(`Feedback: ${feedback}`);
    // Close the modal after submission
    

    setGeneralModalVisible(false);
    setFeedbackCategory("");
    // Display an alert
    alert('Thank You for the Feedback!');
    // Other necessary actions
  })
  .catch((error) => {
    console.error('Failed to register feedback:', error.message);
    // Handle the error
  });
    
  };

  const handleSubmit2 = () => {
    const feedbackData = {
      complaintId,
      feedbackCategory,
      rating,
      feedback,
    };
    fetch('http://10.0.2.2:3000/register-feedback', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(feedbackData),
})
  .then((response) => {
    if (response.ok) {
      // Feedback was registered successfully
      return response.json();
    } else {
      throw new Error('Failed to register feedback');
    }
  })
  .then((data) => {
    console.log('Feedback Registered Successfully:', data.message);
    // You can perform additional actions here if needed
    // Perform submission logic here
    console.log(`Complaint ID: ${complaintId}`);
    console.log(`Feedback Category: ${feedbackCategory}`);
    console.log(`Rating: ${rating}`);
    console.log(`Feedback: ${feedback}`);
    // Close the modal after submission
    setComplaintModalVisible(false);
    setFeedbackCategory("");
   
    // Display an alert
    alert('Thank You for the Feedback!');
    // Other necessary actions
  })
  .catch((error) => {
    console.error('Failed to register feedback:', error.message);
    // Handle the error
  });
    
  };

  const handleSubmit3 = () => {

    const feedbackData = {
      
      feedbackCategory,
      
      feedback,
    };
    fetch('http://10.0.2.2:3000/register-feedback', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(feedbackData),
})
  .then((response) => {
    if (response.ok) {
      // Feedback was registered successfully
      return response.json();
    } else {
      throw new Error('Failed to register feedback');
    }
  })
  .then((data) => {
    console.log('Feedback Registered Successfully:', data.message);
    // You can perform additional actions here if needed
    console.log(`Feedback Category: ${feedbackCategory}`);
    console.log(`Issue: ${feedback}`);
    // Close the modal after submission
    setHelpModalVisible(false);
    setFeedbackCategory("");

    // Display an alert
    alert(
      'Thank You, we have recieved your query and will be reaching out to you soon!',
    );
    // Other necessary actions
   

    
    // Other necessary actions
  })
  .catch((error) => {
    console.error('Failed to register feedback:', error.message);
    // Handle the error
  });

  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleRatingSelect(i)}
          style={styles.starButton}>
          <Text style={[styles.star, {color: rating >= i ? 'orange' : 'gray'}]}>
            ★
          </Text>
        </TouchableOpacity>,
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Feedback Category</Text>
      <TouchableOpacity
        style={[
          styles.categoryButton,
          selectedCategory === 'General' && styles.selectedCategoryButton,
        ]}
        onPress={() => {
          handleCategorySelect('General');
          setFeedbackCategory('General');
          handleOpenGeneralModal();
        }}>
        <Text style={styles.categoryButtonText}>General</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.categoryButton,
          selectedCategory === 'Complaint Tracking' &&
            styles.selectedCategoryButton,
        ]}
        onPress={() => {handleCategorySelect('Complaint Tracking'); setFeedbackCategory('Complaint Tracking');}}>
        <Text style={styles.categoryButtonText}>Complaint Tracking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.categoryButton,
          selectedCategory === 'Help' && styles.selectedCategoryButton,
        ]}
        onPress={() => {
          handleCategorySelect('Help');
          setFeedbackCategory('Help');
          handleOpenHelpModal();
        }}>
        <Text style={styles.categoryButtonText}>Help</Text>
      </TouchableOpacity>
      <Modal
        visible={isGeneralModalVisible}
        transparent={true}
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={handleCloseGeneralModal}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>General</Text>
            {/* Add your content for the General modal here */}
            <Text style={styles.label}>Rate your satisfaction:</Text>
            <View style={styles.ratingContainer}>{renderStars()}</View>
            <Text style={styles.label}>
              Provide your feedback (minimum 20 characters):
            </Text>
            <TextInput
              style={styles.feedbackInput}
              multiline
              maxLength={500}
              onChangeText={handleFeedbackChange}
              value={feedback}
              placeholder="Enter your feedback"
            />
            <TouchableOpacity
              style={[styles.submitButton, !canSubmit && styles.disabledButton]}
              disabled={!canSubmit}
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={isHelpModalVisible}
        transparent={true}
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={handleCloseHelpModal}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Help</Text>

            <Text style={styles.label}>
              Please mention the issue you need help with (minimum 20
              characters):
            </Text>
            <TextInput
              style={styles.feedbackInput}
              multiline
              maxLength={500}
              onChangeText={handleFeedbackChange}
              value={feedback}
              placeholder="Enter your feedback"
            />

            {/* Add your Complaint Tracking UI elements here */}
            <TouchableOpacity
              style={[styles.submitButton, !canSubmit && styles.disabledButton]}
              disabled={!canSubmit}
              onPress={handleSubmit3}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={isComplaintModalVisible}
        transparent={true}
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={handleCloseModal}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Complaint Tracking</Text>

            <Text style={styles.label}>Complaint ID:</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleComplaintIdChange}
              value={complaintId}
              placeholder="Enter Complaint ID"
              keyboardType="numeric"
            />
            <Text style={styles.label}>Rate your satisfaction:</Text>
            <View style={styles.ratingContainer}>{renderStars()}</View>
            <Text style={styles.label}>
              Provide your feedback (minimum 20 characters):
            </Text>
            <TextInput
              style={styles.feedbackInput}
              multiline
              maxLength={500}
              onChangeText={handleFeedbackChange}
              value={feedback}
              placeholder="Enter your feedback"
            />

            {/* Add your Complaint Tracking UI elements here */}
            <TouchableOpacity
              style={[styles.submitButton, !canSubmit && styles.disabledButton]}
              disabled={!canSubmit}
              onPress={handleSubmit2}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#04b976',
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  selectedCategoryButton: {
    backgroundColor: '#024b30',
  },
  categoryButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  starButton: {
    marginRight: 5,
  },
  star: {
    fontSize: 24,
  },
  feedbackInput: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 20,
    color: 'red',
  },
  disabledButton: {
    opacity: 0.5,
  },
  submitButton: {
    backgroundColor: '#04b976',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  closeModalText: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default FeedbackCategoryScreen;
