import MultiStepForm from './multiStepForm';  // Import the component
import StartApplication from './startApplication';
import Amount from './amount'; // For example
import BusinessForm from './BusinessForm';
import LoanApplicationForm from './LoanApplicationForm';
import FileUpload from './upload';
import Signature from './signature';
import ThankYouPage from './thank_you';
import { Box } from "@mui/material";

// Define steps with a unique key for each step component
const steps = [
  <StartApplication key="startApplication" />,   // Added key prop
  <Amount key="amount" />,                        // Added key prop
  <BusinessForm key="businessForm" />,            // Added key prop
  <LoanApplicationForm key="loanApplicationForm" />, // Added key prop
  <FileUpload key="fileUpload" />,                // Added key prop
  <Signature key="signature" />                   // Added key prop
];

const Financing = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 800,
        padding: 4,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <MultiStepForm steps={steps} /> {/* Pass steps to the component */}
    </Box>
  );
};

export default Financing;
