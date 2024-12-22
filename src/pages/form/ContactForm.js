import { useState } from "react";
import axios from "axios";
import Sidebar from "@/components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    comments: "",
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
    setFormCreated(false);
    setErrorMessage("");

    const mutation = `
      mutation {
        contactForms(
          input: {
            firstName: "${formData.firstName}",
            lastName: "${formData.lastName}",
            email: "${formData.email}",
            confirmEmail: "${formData.confirmEmail}",
            comments: "${formData.comments}"
          }
        ) {
          formEntry {
            id
            firstName
            lastName
            email
            
            comments
            formId
          }
        }
      }
    `;

    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_STAGING_URL, {
        query: mutation,
      });

      if (response.data.data.contactForms) {
        setFormEntry(response.data.data.contactForms.formEntry);
        setFormCreated(true);
        toast.success("Signature saved successfully!");
      }
    } catch (error) {
      setErrorMessage("Error creating form. Please try again.");
      console.error('Error creating form:', error);
      toast.error("Error Submitting Form");
    }
  };

  return (
    <div className="form-container">
      <Sidebar />
      <h1>Graphql Testing</h1>
      <form onSubmit={handleSubmit} className="form grid grid-cols-1 gap-6">
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
        <div className="form-group">
          <label>Comments: </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            className="form-input"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {formCreated && formEntry && (
        <div className="success-message">
          <p>Form created successfully!</p>
          <p><strong>ID:</strong> {formEntry.id}</p>
          <p><strong>First Name:</strong> {formEntry.firstName}</p>
          <p><strong>Last Name:</strong> {formEntry.lastName}</p>
          <p><strong>Email:</strong> {formEntry.email}</p>
          <p><strong>Form ID:</strong> {formEntry.formId}</p>
        </div>
      )}

      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default ContactForm;
