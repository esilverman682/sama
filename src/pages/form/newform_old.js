import { useState } from "react";
import axios from "axios";
//import style from "./style"

const CreateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
  });
  const [formCreated, setFormCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formEntry, setFormEntry] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormCreated(false); // Reset form status
    setErrorMessage(""); // Reset error

    const mutation = `
      mutation {
        nextCreateForm(
          input: {
            name: "${formData.name}",
            contactNumber: "${formData.contactNumber}"
          }
        ) {
          formEntry {
            id
            name
            contactNumber
            formId
          }
        }
      }
    `;

    try {
      const response = await axios.post('https://kapstaging.com/graphql', {
        query: mutation,
      });

      if (response.data.data.nextCreateForm) {
        setFormEntry(response.data.data.nextCreateForm.formEntry); // Store form entry data
        setFormCreated(true); // Form created successfully
      }
    } catch (error) {
      setErrorMessage("Error creating form. Please try again.");
      console.error('Error creating form:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Create a New Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Create Form</button>
      </form>
      
      {formCreated && formEntry && (
        <div className="success-message">
          <p>Form created successfully!</p>
          <p><strong>ID:</strong> {formEntry.id}</p>
          <p><strong>Name:</strong> {formEntry.name}</p>
          <p><strong>Contact Number:</strong> {formEntry.contactNumber}</p>
          <p><strong>Form ID:</strong> {formEntry.formId}</p>
        </div>
      )}

      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default CreateForm;
