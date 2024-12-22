import React, { useState, useEffect } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
  Typography,
  InputAdornment,
  FormHelperText,
} from "@mui/material";

const Amount = ({ handleStepDataChange, formData }) => {
  const [requestedAmount, setRequestedAmount] = useState(formData.requestedAmount);
  const [selectedUses, setSelectedUses] = useState(formData.selectedUses);
  const [otherUse, setOtherUse] = useState(formData.otherUse);

  useEffect(() => {
    // Pass updated values back to the parent whenever they change
    handleStepDataChange({
      requestedAmount,
      selectedUses,
      otherUse
    });
  }, [requestedAmount, selectedUses, otherUse, handleStepDataChange]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedUses((prevSelectedUses) => {
      if (checked) {
        return [...prevSelectedUses, name];
      } else {
        return prevSelectedUses.filter((use) => use !== name);
      }
    });
  };

  const handleOtherUseChange = (event) => {
    setOtherUse(event.target.value);
  };

  const handleRequestedAmountChange = (event) => {
    const value = event.target.value;
    let formattedValue = value.replace(/[^0-9.]/g, "");
    setRequestedAmount(formattedValue);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Box sx={{ width: "100%", maxWidth: 800, padding: 4, backgroundColor: "white", borderRadius: 4 }}>
        {/* Requested Amount */}
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Requested Amount"
            variant="outlined"
            fullWidth
            value={requestedAmount}
            onChange={handleRequestedAmountChange}
            required
            error={false}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
        </Box>

        {/* Use of Funds */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Use of Funds*
          </Typography>
          <FormGroup>
            {/* List of Uses */}
            {[
              { name: "purchaseEquipment", label: "Purchase Equipment" },
              { name: "hireAdditionalEmployee", label: "Hire Additional Employee" },
              { name: "expandOrRenovate", label: "Expand or Renovate" },
              { name: "coverPayroll", label: "Cover Payroll" },
              { name: "payTaxes", label: "Pay Taxes" },
              { name: "makeRepairs", label: "Make Repairs" },
              { name: "stabilizeCashFlow", label: "Stabilize Cash Flow" },
              { name: "buildUpEmergencyFund", label: "Build Up Emergency Fund" },
              { name: "consolidateDebt", label: "Consolidate Your Debt" },
            ].map((item) => (
              <FormControlLabel
                key={item.name}
                control={
                  <Checkbox
                    name={item.name}
                    checked={selectedUses.includes(item.name)}
                    onChange={handleCheckboxChange}
                    
                  />
                }
                label={item.label}
              />
            ))}

            {/* Other Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  name="other"
                  checked={selectedUses.includes("other")}
                  onChange={handleCheckboxChange}
                />
              }
              label="Other"
            />

            {selectedUses.includes("other") && (
              <Box sx={{ mt: 2 }}>
                <TextField
                  label="Please specify"
                  variant="outlined"
                  fullWidth
                  value={otherUse}
                  onChange={handleOtherUseChange}
                  error={false}
                />
              </Box>
            )}
          </FormGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Amount;
