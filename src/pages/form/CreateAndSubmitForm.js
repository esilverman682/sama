import { useState } from 'react';
import axios from 'axios';

const CreateAndSubmitForm = () => {
  const [form, setForm] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [formName, setFormName] = useState(''); // State to store the form name input
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Create form mutation using GraphQL
  const CREATE_FORM_MUTATION = `
    mutation CreateGravityForm($title: String!, $description: String, $fields: [GFFieldInput]!) {
      createGravityForm(input: {
        title: $title,
        description: $description,
        fields: $fields
      }) {
        gravityForm {
          id
          title
          fields {
            id
            label
            type
            required
          }
        }
      }
    }
  `;

  // Submit form mutation using GraphQL
  const SUBMIT_FORM_MUTATION = `
    mutation SubmitGravityForm($formId: Int!, $fieldValues: [GFFieldValueInput]!) {
      submitGravityForm(input: {
        formId: $formId,
        fieldValues: $fieldValues
      }) {
        isValid
        entry {
          id
        }
      }
    }
  `;

  const createForm = async () => {
    setLoading(true);
    setError(null);

    try {
      // Define the new form structure with the user-provided form name
      const formData = {
        query: CREATE_FORM_MUTATION,
        variables: {
          title: formName,
          description: 'Form Description',
          fields: [
            { type: 'text', label: 'First Name', id: 1, required: true },
            { type: 'email', label: 'Email', id: 2, required: true },
          ],
        },
      };

      // Make a POST request to the WPGraphQL endpoint
      const response = await axios.post(process.env.NEXT_PUBLIC_STAGING_URL, formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      // Set the form data from the GraphQL response
      const createdForm = response.data?.data?.createGravityForm?.gravityForm;
      setForm(createdForm);
    } catch (err) {
      console.error('Error creating form:', err.response?.data || err.message);
      setError('Error creating the form.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitSuccess(null);

    try {
      const formId = form.id;
      const fieldValues = Object.keys(formValues).map((key) => ({
        id: parseInt(key.split('_')[1]), // Extract the field ID from input name like input_1, input_2
        value: formValues[key],
      }));

      // Prepare the mutation request
      const submitData = {
        query: SUBMIT_FORM_MUTATION,
        variables: {
          formId: parseInt(formId),
          fieldValues,
        },
      };

      // Send the form submission via GraphQL
      const response = await axios.post('https://kapstaging.com/graphql', submitData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data?.data?.submitGravityForm?.isValid) {
        setSubmitSuccess('Form submitted successfully!');
        setFormValues({}); // Reset form values
      } else {
        setError('Form validation failed. Please check the fields.');
      }
    } catch (err) {
      console.error('Error submitting form:', err.response?.data || err.message);
      setError('Error submitting the form.');
    }
  };

  return (
    <div>
      <h1>Create and Submit Form (GraphQL)</h1>

      {/* Form to input the custom form name */}
      {!form && (
        <div>
          <input
            type="text"
            placeholder="Enter Form Name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)} // Update formName state
            required
          />
          <button onClick={createForm} disabled={loading || !formName}>
            {loading ? 'Creating Form...' : 'Create Form'}
          </button>
        </div>
      )}

      {form && (
        <form onSubmit={handleSubmit}>
          {form.fields.map((field) => (
            <div key={field.id}>
              <label>{field.label}</label>
              <input
                type={field.type === 'email' ? 'email' : 'text'}
                name={`input_${field.id}`} // Name formatted as input_1, input_2, etc.
                value={formValues[`input_${field.id}`] || ''}
                onChange={handleInputChange}
                required={field.required}
              />
            </div>
          ))}

          {error && <div style={{ color: 'red' }}>{error}</div>}
          {submitSuccess && <div style={{ color: 'green' }}>{submitSuccess}</div>}

          <button type="submit">Submit Form</button>
        </form>
      )}
    </div>
  );
};

export default CreateAndSubmitForm;
