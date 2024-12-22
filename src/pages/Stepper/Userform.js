import React from "react";

export default function UserForm({ SurveyName, Description, updateFields }) {
  return (
    <div style={styles.formContainer}>
      <h2>Survey Details</h2>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Survey Name</label>
        <input
          autoFocus
          required
          type="text"
          value={SurveyName}
          onChange={(e) => updateFields({ SurveyName: e.target.value })}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Description</label>
        <input
          required
          type="text"
          value={Description}
          onChange={(e) => updateFields({ Description: e.target.value })}
          style={styles.input}
        />
      </div>
    </div>
  );
}

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
};
