import React from 'react';
import { TextField } from '@mui/material';

const SSNInput = ({ value, onChange, name }) => {
  // SSN formatting function
  const formatSSN = (value) => {
    // Remove all non-numeric characters
    let ssn = value.replace(/\D/g, '');
    // Format it into the 999-99-9999 pattern
    if (ssn.length <= 3) {
      return ssn;
    } else if (ssn.length <= 5) {
      return `${ssn.slice(0, 3)}-${ssn.slice(3)}`;
    } else {
      return `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5, 9)}`;
    }
  };

  // Validate SSN input to ensure it's in the correct format (999-99-9999)
  const validateSSN = (value) => {
    // Remove non-numeric characters
    let ssn = value.replace(/\D/g, '');

    // Only accept input in the format of 9 digits, e.g., 999-99-9999
    if (ssn.length <= 9) {
      return formatSSN(value);
    }

    return value.slice(0, 9); // Prevent input from going beyond 9 digits
  };

  const handleChange = (e) => {
    const { value } = e.target;
    onChange({
      target: {
        name,
        value: validateSSN(value),
      },
    });
  };

  return (
    <TextField
      label="SSN (Tax ID)"
      name={name}
      value={value}
      onChange={handleChange}
      fullWidth
      margin="normal"
      placeholder="999-99-9999"
    />
  );
};

export default SSNInput;
