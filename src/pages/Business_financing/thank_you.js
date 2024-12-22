import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';

const ThankYouPage = () => {
  const [image, setImage] = useState(null); // State to store image data URL for preview
  const [file, setFile] = useState(null); // State to store the actual file for submission
  const [formData, setFormData] = useState({}); // To store additional form data if needed

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpg, .jpeg, .png, .gif',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file && file.type.startsWith('image/')) {
        // Create a FileReader to read the file as a data URL (base64)
        const reader = new FileReader();
        
        reader.onloadend = () => {
          // reader.result will contain the base64-encoded image
          setImage(reader.result); // Store the base64 string (data URL) for preview
        };

        reader.readAsDataURL(file); // Read the image as base64 data URL

        setFile(file); // Store the actual file for submission
      } else {
        toast.error('Invalid file type. Please upload an image.');
      }
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!file) {
      toast.error('Please upload an image first.');
      return;
    }

    // Base64-encoded image (already available in `image` state)
    const base64Image = image;

    // GraphQL mutation query to submit the image as base64
    const mutation = `
    mutation SubmitFormData {
      submitFormData(
        input: {
          image: "${base64Image}"
        }
      ) {
        formEntry {
          id
        }
      }
    }`;

    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_STAGING_URL, {
        query: mutation,
      });

      if (response.data.errors) {
        toast.error('Error submitting image.');
      } else {
        toast.success('Image submitted successfully!');
        const updatedFormData = {
          ...formData,
          imageUrl: image,  // Image preview URL (base64)
          imageFile: file,  // The actual image file object (for submission)
        };
        handleStepDataChange(updatedFormData); // Update your state or context here
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while submitting the image.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <Sidebar />
      <Typography variant="h4" gutterBottom>Thank You for Your Submission!</Typography>
      {/* <Typography variant="h6" gutterBottom>Please upload an image to complete the process.</Typography> */}

      {/* Form with Image Dropzone */}
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
        {/* <div {...getRootProps()} style={{ border: '2px dashed #1976d2', padding: '20px', textAlign: 'center', width: '100%', position: 'relative', overflow: 'hidden' }}>
          <input {...getInputProps()} />
          {image ? (
            <img src={image} alt="Uploaded preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <Typography variant="body1">Drag & drop an image here, or click to select one</Typography>
          )}
        </div> */}

        {/* Submit Button */}
        {/* <Box sx={{ marginTop: '20px' }}>
          <Button type="submit" variant="contained" color="primary" sx={{ padding: '10px 20px' }}>
            Submit
          </Button>
        </Box> */}
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </Box>
  );
};

export default ThankYouPage;
