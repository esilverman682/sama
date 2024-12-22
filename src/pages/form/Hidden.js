import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';

const MultiSelectForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]); // State for selected options
  const [hiddenValue] = useState('123'); // Hidden default value
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleChange = (selected) => {
    setSelectedOptions(selected.map(option => option.value)); // Store selected values
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setResponseMessage('');

    const mutation = `
    mutation submitForm($selectedOptions: [String], $hiddenField: String!) {
      submitForm(input: { selectedOptions: $selectedOptions, hiddenField: $hiddenField }) {
        formEntry {
          id
          selectedOptions
          hiddenField
        }
      }
    }
  `;

    const variables = {
      selectedOptions,  // Use the selected options array
      hiddenField: hiddenValue,  // Use the hidden field value
    };

    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_STAGING_URL, {
        query: mutation,
        variables: variables,
      });

      const result = response.data;
      if (result.errors) {
        setErrorMessage(result.errors[0].message);
      } else {
        setResponseMessage(`Form submitted with ID: ${result.data.submitForm.formEntry.id}`);
      }
    } catch (err) {
      setErrorMessage('Submission failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
       <Sidebar/>
      <h1>GraphQL Multi-Select and Hidden Field Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="selectedOptions">Select Options:</label>
          <Select
            id="selectedOptions"
            isMulti
            options={options}
            onChange={handleChange}
            value={options.filter(option => selectedOptions.includes(option.value))}
          />
        </div>
        <input type="hidden" name="hiddenValue" value={hiddenValue} />
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {responseMessage && <p>{responseMessage}</p>}
        {errorMessage && <p>Error: {errorMessage}</p>}
      </form>
    </div>
  );
};

export default MultiSelectForm;
