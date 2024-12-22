import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

function StartApplication({ next }) {
  const handleStartApplication = () => {
    if (next) {
      next();  // Only call next() if it is available
    }
  };

  return (
    <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'column', // Use column for the outer container
        height: '100vh',
      }}
    >
      {/* Container for the Main Content (without sidebar) */}
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row', 
          height: '100%', // Full height to fill the screen
         // width: 'calc(100% - 240px)',  // Adjust to take full width minus sidebar
          //marginLeft: '240px', // Sidebar width (adjust as necessary)
          padding: '16px', // Padding for the content area
        }}
      >
        {/* Left Side (Text) */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
          {/* <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            Business Financing
          </Typography> */}
          <Box><br/><br/></Box>
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Get Approved Fast!
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 3 }}>
            Applying will have no impact on your credit.
          </Typography>

          {/* Start Application Button */}
          <Button
            variant="contained"
            onClick={handleStartApplication}
            sx={{
              width: '100%',
              maxWidth: '400px',
              padding: '12px',
              fontWeight: 'bold',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Start Application
          </Button>
        </Box>
         
        {/* Right Side (Image) */}
        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src="/customizejourney.png"
            width={400}
            height={300}
            alt="Application"
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default StartApplication;
