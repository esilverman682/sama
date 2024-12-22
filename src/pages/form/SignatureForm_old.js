import { useState } from "react";
import axios from "axios";
import SignatureField from "@/components/Signature";

const SignatureForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    comments: "",
    contactNumber: "",
    signature: "",
    hiddenField: "",
    selectedOption: "",
    file: null, // New field for uploaded file
  });
  
  const [formCreated, setFormCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formEntry, setFormEntry] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignatureSave = (signatureData) => {
    setFormData({ ...formData, signature: signatureData });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] }); // Store the uploaded file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormCreated(false);
    setErrorMessage("");

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("confirmEmail", formData.confirmEmail);
    formDataToSubmit.append("comments", formData.comments);
    formDataToSubmit.append("contactNumber", formData.contactNumber);
    formDataToSubmit.append("signature", formData.signature);
    formDataToSubmit.append("hiddenField", formData.hiddenField);
    formDataToSubmit.append("selectedOption", formData.selectedOption);
    
    // Append the uploaded file
    if (formData.file) {
      formDataToSubmit.append("file", formData.file);
    }

    const mutation = `
      mutation {
        contactForms(
          input: {
            firstName: "${formData.firstName}",
            lastName: "${formData.lastName}",
            email: "${formData.email}",
            confirmEmail: "${formData.confirmEmail}",
            comments: "${formData.comments}",
            contactNumber: "${formData.contactNumber}",
            signature: "${formData.signature}",
            hiddenField: "${formData.hiddenField}",
            selectedOption: "${formData.selectedOption}"
          }
        ) {
          formEntry {
            id
            firstName
            lastName
            email
            comments
            contactNumber
            formId
          }
        }
      }
    `;

    try {
      const response = await axios.post('https://kapstaging.com/graphql', {
        query: mutation,
        variables: {
          file: formData.file, // Include the file in the variables
        },
      });

      if (response.data.data.contactForms) {
        setFormEntry(response.data.data.contactForms.formEntry);
        setFormCreated(true);
      }
    } catch (error) {
      setErrorMessage("Error creating form. Please try again.");
      console.error('Error creating form:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>GraphQL Form with Signature</h1>
      <form onSubmit={handleSubmit} className="form grid grid-cols-1 gap-6">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label>First Name: (Required)</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Last Name: (Required)</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
        </div>

        {/* Email and Confirm Email */}
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label>Email: (Required)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Confirm Email: (Required)</label>
            <input
              type="email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
        </div>

        {/* Contact Number */}
        <div className="form-group">
          <label>Contact Number: (Required)</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>

        {/* Comments */}
        <div className="form-group">
          <label>Comments:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            className="form-input"
            rows="4"
          ></textarea>
        </div>

        {/* Hidden Field */}
        <input
          type="hidden"
          name="hiddenField"
          value="Some Hidden Value" // Assign value as needed
          onChange={handleInputChange}
        />

        {/* Multiple Choice Option */}
        <div className="form-group">
          <label>Choose an option:</label>
          <select
            name="selectedOption"
            value={formData.selectedOption}
            onChange={handleInputChange}
            className="form-input"
          >
            <option value="">Select an option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>

        {/* File Upload Field */}
        <div className="form-group">
          <label>Upload File:</label>
          <input
            type="file"
            name="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" // Adjust accepted file types as needed
            onChange={handleFileChange}
            className="form-input"
          />
        </div>

        {/* Signature Field */}
        <SignatureField onSave={handleSignatureSave} />

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {formCreated && formEntry && (
        <div className="success-message">
          <p>Form created successfully!</p>
          <p><strong>ID:</strong> {formEntry.id}</p>
          <p><strong>First Name:</strong> {formEntry.firstName}</p>
          <p><strong>Last Name:</strong> {formEntry.lastName}</p>
          <p><strong>Email:</strong> {formEntry.email}</p>
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

export default SignatureForm;
