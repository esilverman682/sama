import { useState, useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const Signature = ({ handleStepDataChange, formData }) => {
  // Initialize the state with boolean values for the checkboxes
  const [localFormData, setLocalFormData] = useState({
    signature: null,
    agreementChecked: formData.agreementChecked ?? true,  // Default to true (checked) if not provided
    savingsChecked: formData.savingsChecked || false,
    selectedOptions: formData.selectedOptions || [], // Initialize selectedOptions as an empty array
  });

  const sigCanvas = useRef(null);

  // Function to handle changes in checkbox values and update selected options
  const handleCheckboxChange = (event, value) => {
    setLocalFormData((prevState) => {
      const { selectedOptions } = prevState;

      // If the checkbox is checked, add the value to selectedOptions; if unchecked, remove it
      const updatedOptions = event.target.checked
        ? [...selectedOptions, value]
        : selectedOptions.filter((option) => option !== value);

      // Update state with new selectedOptions
      const updatedData = {
        ...prevState,
        selectedOptions: updatedOptions,
      };

      // Call handleStepDataChange to pass the updated data to the parent
      handleStepDataChange(updatedData);

      return updatedData;
    });
  };

  // Handle changes in the Agreement checkbox
  const handleAgreementChange = (event) => {
    const updatedData = { ...localFormData, agreementChecked: event.target.checked };
    setLocalFormData(updatedData);
    handleStepDataChange(updatedData); // Send updated data to parent
  };

  // Handle saving the signature
  const handleSignature = () => {
    if (sigCanvas.current) {
      const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      const updatedData = { ...localFormData, signature: signatureData };
      setLocalFormData(updatedData);
      handleStepDataChange(updatedData); // Send updated data to parent
      toast.success("Signature saved successfully!");
    }
  };

  // Clear the signature canvas
  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      {/* Main Form Container */}
      <Box sx={{ width: "100%", maxWidth: 800, padding: 4, backgroundColor: "white", borderRadius: 2 }}>
        <ToastContainer />
        <Typography variant="h5" gutterBottom>
          Please scroll down and read through all the following terms to activate the checkbox
        </Typography>

        {/* Scrollable Paragraph Container */}
        <Box sx={{ mb: 4, padding: 2, border: "1px solid #ccc", borderRadius: 2, maxHeight: 300, overflowY: "auto" }}>
          <Typography variant="body1">
            The Business and Owner(s) identified above (collectively, the “Applicant”) each represent, acknowledge and agree to the Representations and Acknowledgments set forth below...
          </Typography>
        </Box>

        {/* Agreement Checkbox and Dotted Line */}
        <Box sx={{ textAlign: "center", my: 4 }}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={localFormData.agreementChecked} onChange={handleAgreementChange} />}
              label={<Typography variant="body2">By checking here, I agree that I have read and agree to the above terms and notices.</Typography>}
              required
            />
          </FormGroup>
        </Box>

        {/* Signature Section */}
        <Box sx={{ textAlign: "center", my: 4, maxWidth: 800 }}>
          <Typography variant="h6" gutterBottom>Please sign below</Typography>
          <SignatureCanvas
            ref={sigCanvas}
            penColor="black"
            required
            canvasProps={{ width: 500, height: 200, className: "sigCanvas", style: { border: "1px dashed black" } }}
          />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={handleSignature} sx={{ mr: 2 }}>Save Signature</Button>
            <Button variant="outlined" onClick={clearSignature}>Clear</Button>
          </Box>
        </Box>

        {/* Additional Checkboxes */}
        <Box sx={{ textAlign: "left", mb: 4 }}>
          <Typography variant="body1">Select all that apply:</Typography>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={localFormData.selectedOptions.includes('Exclusive savings on business insurance')}
                  onChange={(e) => handleCheckboxChange(e, 'Exclusive savings on business insurance')}
                />
              }
              label={<Typography variant="body1">Exclusive savings on business insurance</Typography>}
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={localFormData.selectedOptions.includes('Personal and business credit reports')}
                  onChange={(e) => handleCheckboxChange(e, 'Personal and business credit reports')}
                />
              }
              label={<Typography variant="body1">Personal and business credit reports</Typography>}
            />
          </FormGroup>

          <Box sx={{ borderTop: "2px solid #000", my: 4 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Signature;
