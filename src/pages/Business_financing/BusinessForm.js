import React, { useState } from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl, Box, Button, Typography } from '@mui/material';

const BusinessForm = ({ handleStepDataChange, formData }) => {
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({
    dba: '',
    legalBusinessName: '',
    businessPhone: '',
    website: '',
    annualRevenue: '',
    startDate: '',
    city: '',
    state: '',
    Entity:'',
    Industry_type:'',
    date:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleStepDataChange({
      ...formData,
      [name]: value,
    });
  };

  // Format phone number
  const formatPhoneNumber = (value) => {
    return value.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  };

  // Format Tax ID
  const formatTaxId = (value) => {
    return value.replace(/[^\d]/g, '').replace(/(\d{2})(\d{7})/, '$1-$2');
  };

  // Validate form data before sending to parent
  const validate = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.dba) {
      newErrors.dba = 'DBA (Business Name) is required';
      isValid = false;
    }

    if (!formData.legalBusinessName) {
      newErrors.legalBusinessName = 'Legal Business Name is required';
      isValid = false;
    }

    if (!formData.businessPhone) {
      newErrors.businessPhone = 'Business Phone is required';
      isValid = false;
    }

    if (!formData.website) {
      newErrors.website = 'Website is required';
      isValid = false;
    }

    if (!formData.annualRevenue || formData.annualRevenue < 100) {
      newErrors.annualRevenue = 'Annual Revenue must be at least 100';
      isValid = false;
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Business Start Date is required';
      isValid = false;
    }

    if (!formData.city) {
      newErrors.city = 'City is required';
      isValid = false;
    }

    if (!formData.state) {
      newErrors.state = 'State is required';
      isValid = false;
    }
    if (!formData.Entity) {
      newErrors.Entity = 'Entity is required';
      isValid = false;
    }
    if (!formData.Industry_type) {
      newErrors.Industry_type = 'Industry type is required';
      isValid = false;
    }
    if (!formData.date) {
      newErrors.date = 'date type is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("hii");
    if (validate()) {
      handleStepDataChange(formData); // Passing data to parent component
    } else {
      console.log('Form Errors:', errors); // Handle form errors
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 3, backgroundColor: 'white', borderRadius: 2 }}>
      {/* <form onSubmit={handleSubmit}> */}
        {/* DBA (Business Name) */}
        <TextField
          label="DBA (Business Name)*"
          variant="outlined"
          fullWidth
          name="dba"
          value={formData.dba || ''}
          onChange={handleChange}
          error={!!errors.dba}
          helperText={errors.dba}
          required
          margin="normal"
        />

        {/* Legal Business Name */}
        <TextField
          label="Legal Business Name*"
          variant="outlined"
          fullWidth
          name="legalBusinessName"
          value={formData.legalBusinessName || ''}
          onChange={handleChange}
          error={!!errors.legalBusinessName}
          helperText={errors.legalBusinessName}
          required
          margin="normal"
        />

        {/* Business Address */}
        <TextField
          label="Business Address"
          variant="outlined"
          fullWidth
          name="businessAddress"
          value={formData.businessAddress || ''}
          onChange={handleChange}
          margin="normal"
        />

        {/* City */}
        <FormControl fullWidth margin="normal">
          <InputLabel>City</InputLabel>
          <Select
            label="City"
            name="city"
            value={formData.city || ''}
            onChange={handleChange}
            error={!!errors.city}
            required
          >
            <MenuItem value="Milwaukee">Milwaukee</MenuItem>
            <MenuItem value="Madison">Madison</MenuItem>
            <MenuItem value="Green Bay">Green Bay</MenuItem>
          </Select>
          {errors.city && <Typography color="error">{errors.city}</Typography>}
        </FormControl>

        {/* State */}
        <FormControl fullWidth margin="normal">
          <InputLabel>State</InputLabel>
          <Select
            label="State"
            name="state"
            value={formData.state || ''}
            onChange={handleChange}
            error={!!errors.state}
            required
          >
            <MenuItem value="Wisconsin">Wisconsin</MenuItem>
            <MenuItem value="Washington">Washington</MenuItem>
            <MenuItem value="Vermont">Vermont</MenuItem>
            <MenuItem value="Utah">Utah</MenuItem>
            <MenuItem value="Ohio">Ohio</MenuItem>
          </Select>
          {errors.state && <Typography color="error">{errors.state}</Typography>}
        </FormControl>

        {/* ZIP Code */}
        <TextField
          label="ZIP Code"
          variant="outlined"
          fullWidth
          name="zipCode"
          value={formData.zipCode || ''}
          onChange={handleChange}
          margin="normal"
        />

        {/* Business Phone with Mask */}
        <TextField
          label="Business Phone*"
          variant="outlined"
          fullWidth
          name="businessPhone"
          value={formatPhoneNumber(formData.businessPhone || '')}
          onChange={(e) => handleChange({
            target: {
              name: e.target.name,
              value: formatPhoneNumber(e.target.value),
            },
          })}
          error={!!errors.businessPhone}
          helperText={errors.businessPhone}
          required
          margin="normal"
        />

        {/* Website */}
        <TextField
          label="Website*"
          variant="outlined"
          fullWidth
          name="website"
          value={formData.website || ''}
          onChange={handleChange}
          error={!!errors.website}
          helperText={errors.website}
          required
          margin="normal"
        />

        {/* Tax ID with Mask */}
        <TextField
          label="Tax ID*"
          variant="outlined"
          fullWidth
          name="taxId"
          value={formatTaxId(formData.taxId || '')}
          onChange={(e) => handleChange({
            target: {
              name: e.target.name,
              value: formatTaxId(e.target.value),
            },
          })}
          required
          margin="normal"
        />

        {/* Annual Revenue */}
        <TextField
          label="Annual Revenue*"
          variant="outlined"
          fullWidth
          name="annualRevenue"
          type="number"
          value={formData.annualRevenue || ''}
          onChange={handleChange}
          error={!!errors.annualRevenue}
          helperText={errors.annualRevenue}
          required
          InputProps={{
            startAdornment: <Typography variant="h12">$</Typography>,
          }}
          margin="normal"
        />

<FormControl fullWidth margin="normal">
          <InputLabel>Entity</InputLabel>
          <Select
            label="Entity"
            name="Entity"
            value={formData.Entity || ''}
            onChange={handleChange}
            error={!!errors.Entity}
            required
          >
            <MenuItem value="LLP">LLP</MenuItem>
            <MenuItem value="LLC">LLC</MenuItem>
            <MenuItem value="LLLP">LLLP</MenuItem>
            
          </Select>
          {errors.Entity && <Typography color="error">{errors.Entity}</Typography>}
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Industry Type</InputLabel>
          <Select
            label="Industry type"
            name="Industry_type"
            value={formData.Industry_type || ''}
            onChange={handleChange}
            error={!!errors.Industry_type}
            required
          >
            <MenuItem value="Transporation">Transporation</MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
           
          </Select>
          {errors.Industry_type && <Typography color="error">{errors.Industry_type}</Typography>}
        </FormControl>
        <TextField
          label="Select a Date"
          name="date"
          type="date"
          value={formData.date || ''}
          onChange={handleChange}
          fullWidth
          required
         
          sx={{
            mb: 2,
          }}
        />
        {/* Submit Button */}
        {/* <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box> */}
      {/* </form> */}
    </Box>
  );
};

export default BusinessForm;
