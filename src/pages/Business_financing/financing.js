// page.js or wherever you need to use it
import MultiStepForm from './multiStepForm';  // Import the component


import StartApplication from './startApplication';
import Amount from './amount'; // For example
import BusinessForm from './BusinessForm';
import LoanApplicationForm from './LoanApplicationForm';
import FileUpload from './upload';
import Signature from './signature';
import ThankYouPage from './thank_you';
import {
  Box,
} from "@mui/material";
const steps = [<StartApplication />,<Amount />,<BusinessForm />,<LoanApplicationForm />,<FileUpload/>,<Signature/>]; 

const financing = () => {
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

export default financing;
