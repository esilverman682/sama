import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import { Box, Button, MobileStepper, Typography } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useMultistepForm } from './useMultistepForm'; // Custom hook for managing steps
import StartApplication from './startApplication';  // Import StartApplication component
import Sidebar from "@/components/Sidebar"; 
import Amount from './amount'; // Import AnotherStep component (the second step)
import BusinessForm from './BusinessForm'; // Import Address component for the next step
import LoanApplicationForm from './LoanApplicationForm'
import Upload from './upload'
import Signature  from './signature';
import { ToastContainer, toast } from "react-toastify";
import ThankYouPage from './thank_you';
import { useRouter } from 'next/router';
const MultiStepForm = ({ steps }) => {
  const theme = useTheme();
  const {
    currentStepIndex,
    step,
    next,
    back,
    isFirstStep,
    isLastStep
  } = useMultistepForm(steps);

  // Centralized form data state for all steps
  const [formData, setFormData] = useState({
    requestedAmount: '',
    selectedUses: [],
    signature: null,
    agreementChecked: false,
    savingsChecked: '0',
    creditReportsChecked: '0',
    existingLoan:false,
    selectedOptions:'',
    image: '', // Image data for the upload
    imageFile: null, // Image file for submission
  });
  const router = useRouter();
  const [isFormValid, setIsFormValid] = useState(false);
  const [formCreated, setFormCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
 
  // Handle data change from individual steps
  const handleStepDataChange = (stepData) => {
    setFormData((prevData) => ({ ...prevData, ...stepData }));
  };

  // Form submission (e.g., using Axios for GraphQL API)
  const onSubmit = async (e) => {
    e.preventDefault();
    if (isLastStep) {
      console.log(formData);
      alert("Form submitted!");
      e.preventDefault();
      setFormCreated(false);
      setErrorMessage("");
  
      const mutation = `
      mutation SubmitFormData {
        submitFormData(
          input: {
            requestedAmount: "${formData.requestedAmount}",
            selectedUses: "${formData.selectedUses}",
            dba: "${formData.dba}",
            legalBusinessName:"${formData.legalBusinessName}",
            businessAddress: "${formData.businessAddress}",
            city: "${formData.city}",
            state: "${formData.state}",
            zipCode: "${formData.zipCode}",
            businessPhone: "${formData.businessPhone}",
            website: "${formData.website}",
            taxId: "${formData.taxId}",
            annualRevenue: "${formData.annualRevenue}",
            firstName: "${formData.firstName}",
            lastName: "${formData.lastName}",
            email: "${formData.email}",
            phone :"${formData.phone}",
            loanbusinessAddress:"${formData.loanbusinessAddress}",
            loanhomeAddress:"${formData.loanhomeAddress}",
            loancity:"${formData.loancity}",
            loanstate:"${formData.loanstate}",
            loanzipCode:"${formData.loanzipCode}",
            creditScore: "${formData.creditScore}",
            day:"${formData.day}",
            year: "${formData.year}",
            month: "${formData.month}"
            ssn: "${formData.ssn}",
            lenderName:"${formData.lenderName}",
            existingLoan:"${formData.existingLoan}",
            entity:"${formData.Entity}",
            industry_type:"${formData.Industry_type}",
              signature: "${formData.signature}",
            howDidYouHear:"${formData.howDidYouHear}",
            uploadedFile: "${formData.file}",

            agreementChecked:${formData.agreementChecked === 1},
          
            selectedOptions:"${formData.selectedOptions}",
            businessStartDate:"${formData.date}",
            loanOwnership:"${formData.loanOwnership}",
           
          }
        ) {
          formEntry {
            id
            requestedAmount
            selectedUses
            uploadedFile
            signature
            agreementChecked
            annualRevenue
            businessAddress
            businessPhone
            city
            creditReportsChecked
            creditScore
            dba
            email
            firstName
            lastName
            website
            zipCode
            ssn
            state
            taxId
            year
            month
          }
        }
      }
    `;
    
  console.log(mutation);
      try {
       const response = await axios.post(process.env.NEXT_PUBLIC_STAGING_URL, {
         query: mutation,
        });
      //  response.data=Array();
        if (response.data) {
          //setFormEntry(response.data.data.contactForms.formEntry);
          setFormCreated(true);
          toast.success("Data saved successfully!");
          setTimeout(() => {
            // After 20 seconds, navigate to the thank you page
            router.push('./thank_you');
          }, 10000); // 20000 milliseconds = 20 seconds
        
          //router.push('./thank_you');
        }
      } catch (error) {
        setErrorMessage("Error creating form. Please try again.");
        console.error('Error creating form:', error);
        toast.error("Error Submitting Form");
      }
      //next();
    } else {
      next();
    }
  };

  return (
    <div style={{ position: 'relative', padding: '20px', minHeight: '200vh', width: '100%' }}>
      {/* Wrapper with Flexbox to ensure consistent width */}
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
        
        <Box sx={{ display: 'flex', width: '100%' }}>
          {/* Sidebar */}
          <Sidebar sx={{ flexShrink: 0, width: '250px' }} /> {/* Fixed width for sidebar */}

          {/* Main Content */}
          <Box sx={{ flexGrow: 1, paddingLeft: '20px', width: '100%' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Business Financing
            </Typography>
            
            {/* Render the current step based on currentStepIndex */}
            {currentStepIndex === 0 && <StartApplication next={next} />}
            {currentStepIndex === 1 && <Amount handleStepDataChange={handleStepDataChange} formData={formData} />}
            {currentStepIndex === 2 && <BusinessForm handleStepDataChange={handleStepDataChange} formData={formData} />}
            {currentStepIndex === 3 && <LoanApplicationForm handleStepDataChange={handleStepDataChange} setIsFormValid={setIsFormValid} formData={formData} />}
            {currentStepIndex === 4 && <Upload handleStepDataChange={handleStepDataChange} formData={formData} />}
            {currentStepIndex === 5 && <Signature handleStepDataChange={handleStepDataChange} formData={formData} />}
            {currentStepIndex === 6 && <ThankYouPage handleStepDataChange={handleStepDataChange} formData={formData} />}
            <div style={{ marginTop: '2rem' }} />

            {/* Bottom Navigation Buttons */}
            <div style={{ marginTop: '1rem', display: 'flex', gap: '.5rem', justifyContent: 'flex-end' }}>
              {/* Show Start Application Button on the first step */}
              {/* {isFirstStep && <StartApplication next={next} />} */}

              {/* Show the MobileStepper and navigation buttons */}
              {!isFirstStep && (
                <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                  <MobileStepper
                    variant="dots"
                    steps={steps.length}
                    position="static"
                    activeStep={currentStepIndex}
                    sx={{ maxWidth: 400, flexGrow: 1 }}
                  />
                </Box>
              )}

              {/* Bottom navigation buttons */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                {/* Back Button */}
                {!isFirstStep && (
                  <span
                    onClick={back}
                    style={{
                      color: theme.palette.primary.main,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      fontSize: '16px',
                      alignSelf: 'center',
                    }}
                  >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                  </span>
                )}

                {/* Continue or Submit Button */}
                {!isFirstStep && (
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.light,
                        borderColor: theme.palette.primary.dark,
                      },
                      width: 'auto',  // Let the button size adjust to content
                      fontWeight: 'bold',
                      textTransform: 'none',
                      padding: '8px 16px',
                    }}
                  >
                    {isLastStep ? 'Submit' : 'Continue'}
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                  </Button>
                )}
              </Box>
            </div>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default MultiStepForm;
