import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const RatingTest = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackSubmit = () => {
    if (rating > 0 || feedback.trim() !== '') {
      setFeedbackList([
        { id: Date.now(), rating, feedback },
        ...feedbackList,
      ]);
      setFeedback('');
      setRating(0);
    } else {
      alert('Please provide a rating or feedback!');
    }
  };

  // Function to determine the color based on the rating (Golden Yellow for filled stars)
  const getStarColor = (index) => {
    if (index < rating) {
      return "#FFD700"; // Golden Yellow for filled stars
    }
    return "#D3D3D3"; // Light Grey for empty stars
  };

  return (
    <View style={styles.container}>
      {/* Rating Section */}
      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleRatingChange(index + 1)}>
            <Text style={[styles.star, { color: getStarColor(index) }]}>★</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Feedback Text Input */}
      <TextInput
        style={styles.feedbackInput}
        placeholder="Enter your feedback here..."
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleFeedbackSubmit}
      >
        <Text style={styles.submitButtonText}>Submit Feedback</Text>
      </TouchableOpacity>

      {/* Feedback List */}
      <FlatList
        data={feedbackList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.feedbackItem,
              { backgroundColor: index % 2 === 0 ? '#ADE9FB' : '#FFFFFF' },
            ]}
          >
            <Text style={styles.feedbackText}>
              Rating: {item.rating} stars
            </Text>
            <Text style={styles.feedbackMessage}>{item.feedback}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#fff',
    padding: responsiveWidth(3),
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(2),
  },
  star: {
    fontSize: responsiveFontSize(6),
    marginHorizontal: responsiveWidth(1),
  },
  feedbackInput: {
    height: responsiveHeight(10),
    width: responsiveWidth(90), // Reduce width for better centering
    borderColor: '#ccc',
    borderWidth: responsiveWidth(0.5),
    borderRadius: 5,
    padding: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    textAlignVertical: 'top',
    textAlign: 'left',
  },
  submitButton: {
    backgroundColor: '#00BDF2',
    opacity: 0.81,
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(4),
    borderRadius: 5,
    marginBottom: responsiveHeight(2),
  },
  submitButtonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  feedbackItem: {
    padding: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
    borderRadius: 5,
    width: '100%',
  },
  feedbackText: {
    fontWeight: 'bold',
    marginBottom: responsiveHeight(0.5),
  },
  feedbackMessage: {
    fontSize: responsiveFontSize(2),
    color: '#333',
  },
});

export default RatingTest;
