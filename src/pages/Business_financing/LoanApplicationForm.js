import React, { useState } from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl, Checkbox, FormControlLabel, Box } from '@mui/material';
import SSNInput from './ssn';  // Assuming you have an SSNInput component

const LoanApplicationForm = ({ handleStepDataChange, formData }) => {
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanbusinessAddress: '',
    loanhomeAddress: '',
    loancity: '',
    loanstate: '',
    loanzipCode: '',
    creditScore: '',
    day: '',
    month: '',
    year: '',
    ssn: '',
    howDidYouHear: '',
    lenderName: '',
    loanOwnership:''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    handleStepDataChange({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    if (!formData.creditScore) {
      newErrors.creditScore = 'Credit Score is required';
      isValid = false;
    }

    if (!formData.date || !formData.month || !formData.year) {
      newErrors.date = 'Complete Date of Birth is required';
      isValid = false;
    }

    if (!formData.ssn) {
      newErrors.ssn = 'SSN is required';
      isValid = false;
    }

    if (formData.existingLoan && !formData.lenderName) {
      newErrors.lenderName = 'Lender Name is required if you have an existing loan';
      isValid = false;
    }

    if (!formData.howDidYouHear) {
      newErrors.howDidYouHear = 'Please select how you heard about us';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <Box>
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName || ''}     
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.firstName}
        helperText={errors.firstName}
        required
      />

      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName || ''}     
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.lastName}
        helperText={errors.lastName}
        required
      />

      <TextField
        label="Email"
        name="email"
        value={formData.email || ''}     
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.email}
        helperText={errors.email}
        required
      />

      <TextField
        label="Phone"
        name="phone"
        value={formData.phone || ''}     
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.phone}
        helperText={errors.phone}
        required
      />

      <TextField
        label="Business Address"
        name="loanbusinessAddress"
        value={formData.loanbusinessAddress || ''}     
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="Home Address"
        name="loanhomeAddress"
        value={formData.loanhomeAddress || ''}     
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="City"
        name="loancity"
        value={formData.loancity || ''}     
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="State"
        name="loanstate"
        value={formData.loanstate || ''}     
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="ZIP Code"
        name="loanzipCode"
        value={formData.loanzipCode || ''}     
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Credit Score</InputLabel>
        <Select
          name="creditScore"
          value={formData.creditScore || ''}     
          onChange={handleChange}
          label="Credit Score"
          required
          error={!!errors.creditScore}
        >
          <MenuItem value="less than 599">less than 599</MenuItem>
          <MenuItem value="600-649">600-649</MenuItem>
          <MenuItem value="650-679">650-679</MenuItem>
          <MenuItem value="680-699">680-699</MenuItem>
        </Select>
        {errors.creditScore && <p style={{ color: 'red' }}>{errors.creditScore}</p>}
      </FormControl>

      <TextField
        label="Day"
        name="day"
        value={formData.day || ''}     
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.day}
        helperText={errors.day}
        required
      />

      <TextField
        label="Month"
        name="month"
        value={formData.month || ''}     
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.month}
        helperText={errors.month}
        required
      />

      <TextField
        label="Year"
        name="year"
        value={formData.year || ''}     
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.year}
        helperText={errors.year}
        required
      />

      <FormControlLabel
        control={<Checkbox name="existingLoan" checked={formData.existingLoan || false} onChange={handleChange} />}
        label="Existing Loan?"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Loan Ownership?</InputLabel>
        <Select
          name="loanOwnership"
          value={formData.loanOwnership || ''}     
          onChange={handleChange}
          label="How did you hear about us?"
          error={!!errors.loanOwnership}
          required
        >
          <MenuItem value="50">50</MenuItem>
          <MenuItem value="60">60</MenuItem>
          <MenuItem value="70">70</MenuItem>
          <MenuItem value="80">80</MenuItem>
        </Select>
        {errors.howDidYouHear && <p style={{ color: 'red' }}>{errors.howDidYouHear}</p>}
      </FormControl>
      {formData.existingLoan && (
        <TextField
          label="Lender Name"
          name="lenderName"
          value={formData.lenderName || ''}     
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.lenderName}
          helperText={errors.lenderName}
          required
        />
      )}

      <SSNInput
        name="ssn"
        value={formData.ssn || ''}     
        onChange={handleChange}
        error={!!errors.ssn}
        helperText={errors.ssn}
        required
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>How did you hear about us?</InputLabel>
        <Select
          name="howDidYouHear"
          value={formData.howDidYouHear || ''}     
          onChange={handleChange}
          label="How did you hear about us?"
          error={!!errors.howDidYouHear}
          required
        >
          <MenuItem value="Google">Google</MenuItem>
          <MenuItem value="Email">Email</MenuItem>
          <MenuItem value="Facebook">Facebook</MenuItem>
          <MenuItem value="Referral">Referral</MenuItem>
        </Select>
        {errors.howDidYouHear && <p style={{ color: 'red' }}>{errors.howDidYouHear}</p>}
      </FormControl>
    </Box>
  );
};

export default LoanApplicationForm;
