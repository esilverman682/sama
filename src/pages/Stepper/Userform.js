import React, { useState, useEffect } from "react";

const UserForm = ({ SurveyName, Description, updateFields }) => {
  const [formData, setFormData] = useState({ SurveyName, Description });
  const [errors, setErrors] = useState({});

  // Update the formData whenever the props change (e.g., going back to a previous step)
  useEffect(() => {
    setFormData({ SurveyName, Description });
  }, [SurveyName, Description]);

  // Validation logic
  const validate = () => {
    const errors = {};
    if (!formData.SurveyName) errors.SurveyName = "Survey Name is required";
    if (!formData.Description) errors.Description = "Description is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      updateFields(updatedData); // Update the parent component state
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed to next step or submit form data if validation passes
      console.log("Form data is valid:", formData);
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>Survey Details</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Survey Name</label>
          <input
            required
            type="text"
            name="SurveyName"
            value={formData.SurveyName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.SurveyName && <span style={styles.error}>{errors.SurveyName}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Description</label>
          <input
            required
            type="text"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.Description && <span style={styles.error}>{errors.Description}</span>}
        </div>

        <button type="submit" style={styles.submitButton}>
          Next
        </button>
      </form>
    </div>
  );
};

export default UserForm; // Make sure it's correctly exported

// Inline styles for better layout and spacing
const styles = {
  formContainer: {
    display: "flex",
    flexDirection: "column", // Stack the elements vertically
    alignItems: "flex-start", // Align items to the left
    gap: "1.5rem", // Add some space between the form groups
    width: "100%", // Make sure the form takes up full width
    maxWidth: "600px", // Optional: Limit the form width
    margin: "0 auto", // Center the form horizontally
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column", // Stack label and input vertically
    width: "100%", // Make sure each input group takes full width
  },
  label: {
    fontSize: "1rem", // Font size for the labels
    fontWeight: "bold", // Make label text bold
    marginBottom: "0.5rem", // Add space between the label and the input field
  },
  input: {
    width: "100%", // Make input field take full width
    padding: "0.8rem", // Add padding for better size
    fontSize: "1rem", // Adjust font size
    borderRadius: "4px", // Rounded corners for the input fields
    border: "1px solid #ccc", // Light border for the inputs
  },
  error: {
    color: "red", // Show error in red
    fontSize: "0.9rem", // Slightly smaller font for errors
    marginTop: "0.5rem", // Space above error message
  },
  submitButton: {
    backgroundColor: "#4CAF50", // Green background for submit button
    color: "white", // White text
    padding: "0.8rem 1.5rem", // Padding around the text
    border: "none",
    borderRadius: "4px", // Rounded corners
    cursor: "pointer", // Pointer cursor on hover
    fontSize: "1rem",
    marginTop: "1.5rem", // Space above the button
  }
};
