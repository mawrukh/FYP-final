import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,TextInput,Alert, Animated, } from 'react-native';
import Modal from 'react-native-modal';



const ECScreen = ({ route, navigation }) => {
  const { imageUri, complaintDate, complaintId } = route.params;

  // Initialize complaints state with the received data
  const [complaints, setComplaints] = useState([
    {
      id: complaintId,
      imageUri: imageUri,
      date: complaintDate,
      status: 'Pending',
    }
  ]);
  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    const verifyImage = async () => {
      const formData = new FormData();
      formData.append('imagefile', {
        uri: imageUri,
        type: 'image/jpeg', // Replace with the appropriate image type
        name: 'image.jpg',
      });

      try {
        const response = await fetch('http://10.0.2.2:5000/', {
          method: 'POST',
          body: formData,
        });
        const data = await response.text();
    
        console.log('Received value text:', data);
    
        if (data === 'Garbage') {
          // Update the complaint status based on the response
          setComplaints((prevComplaints) => {
            return prevComplaints.map((complaint) =>
              complaint.imageUri === imageUri ? { ...complaint, status: 'Invalid' } : complaint
            );
          });
        } else {
          // Image is not garbage, set status to 'Invalid'
          setComplaints((prevComplaints) => {
            return prevComplaints.map((complaint) =>
              complaint.imageUri === imageUri ? { ...complaint, status: 'Invalid' } : complaint
            );
          });
        }
      } catch (error) {
        console.error('Error sending request to Flask:', error);
      }
    };
    if (imageUri) {
      verifyImage();
    }
  }, [imageUri]);

  
  const handleDeleteButtonPress = (id) => {
    // Remove the complaint with the given ID
    const updatedComplaints = complaints.filter((complaint) => complaint.id !== id);
    setComplaints(updatedComplaints);
    navigation.navigate('Manage Complaint Screen', {
      imageUri: null, // Set imageUri to null
      complaintDate: complaint.date,
      complaintId: id,
      complaints: updatedComplaints,
    });
  };
  const handleSubmitFeedback = () => {
    // Add your logic to handle the submission of feedback
    // This is where you can send the feedback to the server or perform any other actions
   Alert.alert('Feedback submitted!');
    // Close the modal after submitting feedback
    toggleModal();
  };

  const complaint = complaints.find((complaint) => complaint.imageUri === imageUri);
  

  return (
    <View style={styles.container}>
      {complaints.length > 0 ? (
        complaints.map((complaint) => (
          <View key={complaint.id} style={styles.complaintContainer}>
            {complaint.imageUri ? (
              <Image source={{ uri: complaint.imageUri }} style={styles.image} />
            ) : (
              <Image
                source={{
                  uri:
                    'https://media.istockphoto.com/id/1198347486/vector/photo-camera-vector-icon-with-hand-drawn-doodle-style-isolated-on-white.jpg?s=170667a&w=0&k=20&c=bfrS3E5e29kK33aRkVMN3-RdAOD7g9JvFEG52_vOfZ8=',
                }}
                style={styles.image}
              />
            )}
            <View style={styles.textContainer}>
              <Text style={styles.dateText}>Date: {complaint.date}</Text>
              <Text style={styles.statusText}>Status: {complaint.status}</Text>
              <TouchableOpacity  onPress={toggleModal}>
              <Text style={styles.feedbackText}>Give Worker Feedback</Text>
              </TouchableOpacity>
              
              <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} animationIn="slideInUp" animationOut="slideOutDown">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Worker Feedback</Text>
          <Text style={styles.modalText}>Please provide your feedback:</Text>
          {/* Your feedback form or any other content */}
          <TextInput style={styles.feedbackInput} placeholder="Type your feedback here" multiline numberOfLines={4} />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmitFeedback} >
            <Text style={styles.submitButtonText}>Submit Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeModalButton} onPress={toggleModal}>
            <Text style={styles.closeModalText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteButtonPress(complaint.id)}
            >
              <Text style={styles.icon}>x</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.noComplaintsText}>No complaints registered</Text>
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('Register Complaint Screen')
        }
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  feedbackInput: {
    width: '100%',
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  closeModalButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  closeModalText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  complaintContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  icon:{
    color: 'white',
    fontSize: 23,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  dateText: {
    fontSize: 16,
    marginBottom: 5,
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: 'bold', // Make the text bold
    color: 'black', // Change color as needed
  },
  statusText: {
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
  deleteButton: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noComplaintsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
  declinedStatus: {
    color: 'red',
  },
  verifiedStatus: {
    color: 'green',
  },
});

export default ECScreen;
