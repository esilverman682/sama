import { useState } from 'react';

export const FormValidation = ({ currentStepIndex, values }) => {
  const [errors, setErrors] = useState({});  // Local state to manage errors

  // This function validates the current step based on the step index
  const validateStep = () => {
    let newErrors = {};  // Object to store any validation errors

    // Example validation for the first step (requestedAmount)
    if (currentStepIndex === 0) {
      if (!values.requestedAmount) {
        newErrors.requestedAmount = "Requested amount is required.";
      } else if (isNaN(values.requestedAmount)) {
        newErrors.requestedAmount = "Requested amount must be a number.";
      }
    }

    // Example validation for step 2 (selectedUses)
    if (currentStepIndex === 1) {
      if (values.selectedUses.length === 0) {
        newErrors.selectedUses = "Please select at least one use for funds.";
      }
    }

    // Example validation for step 3 (otherUse)
    if (currentStepIndex === 2 && values.selectedUses.includes("other") && !values.otherUse) {
      newErrors.otherUse = "Please specify the other use.";
    }

    // Update errors state with the new errors object
    setErrors(newErrors);

    // Return whether there are any errors
    return Object.keys(newErrors).length === 0;  // If no errors, return true
  };

  // This function is called when moving to the next step
  const handleNext = () => {
    return validateStep();  // Validate current step before moving to the next one
  };

  return { errors, handleNext };
};
