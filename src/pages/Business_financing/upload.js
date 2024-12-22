import { useState } from "react";
import { Typography, Box, Button, Input } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ handleStepDataChange, formData }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile.name);
      const reader = new FileReader();

      reader.onloadend = () => {
        // Reading the file as a data URL
        handleStepDataChange({
          ...formData,
          file: reader.result, // Send file content as base64 string
        });

        // Show success toast message after file is successfully read
        toast.success(`${uploadedFile.name} uploaded successfully!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };

      reader.readAsDataURL(uploadedFile); // Read the file as a data URL
    }
  };

  // Handle file drop using react-dropzone
  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile.name);
      const reader = new FileReader();

      reader.onloadend = () => {
        // Reading the file as a data URL
        handleStepDataChange({
          ...formData,
          file: reader.result, // Send file content as base64 string
        });

        // Show success toast message after file is successfully read
        toast.success(`${uploadedFile.name} uploaded successfully!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };

      reader.readAsDataURL(uploadedFile); // Read the file as a data URL
    }
  };

  // Use react-dropzone hook
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".jpg,.png,.pdf", // Only accept these file types
    maxSize: 256 * 1024 * 1024, // Limit file size to 256MB
  });

  // Handle file input click to prevent opening the dialog if file already uploaded
  const handleSelectFileClick = () => {
    if (!file) {
      document.getElementById("file-input").click(); // Trigger file dialog only if no file is selected
    }
  };

  // Handle resetting the file selection
  const handleResetFile = () => {
    setFile(null);
    handleStepDataChange({ ...formData, file: null }); // Reset file data in parent
  };

  return (
    <Box sx={{ p: 4, maxWidth: "1200px", margin: "0 auto" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: "25px",
          color: "#7694FF",
          fontWeight: 800,
          lineHeight: "40px",
          marginBottom: 2,
        }}
      >
        Upload Documents
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        For Faster Approval Upload 3 Months Bank Statements
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 3 }}>
        Estimated Approval 3-4 Hours
      </Typography>

      {/* Drag and Drop Area */}
      <Box
        sx={{
          border: "2px dashed #7694FF",
          padding: 4,
          borderRadius: 2,
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          cursor: "pointer", // Optional: changes the cursor to indicate drag-and-drop
        }}
        {...getRootProps()} // Apply dropzone props to this Box to enable drop functionality
      >
        <input {...getInputProps()} id="file-input" style={{ display: "none" }} />
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Drop files here or Upload File
        </Typography>
        <Button
          variant="contained"
          component="label"
          onClick={handleSelectFileClick} // Prevents opening dialog if file is already selected
          disabled={file !== null}
           // Disable button if a file is selected
           sx={{
            backgroundColor: '#1976D2 !important', // Blue color for the button
            '&:hover': {
              backgroundColor: '#1976D2 !important', // Darker shade on hover
            },
          }}
        >
          Select File
        </Button>
        {file && (
          <Typography variant="body2" sx={{ mt: 2, color: "gray" }}>
            <strong>Selected file:</strong> {file}
          </Typography>
        )}
        {/* {file && (
          <>
            <Typography variant="body2" sx={{ mt: 2, color: "gray" }}>
              <strong>Selected file:</strong> {file}
            </Typography>
            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={handleResetFile} // Reset file selection
            >
              Remove File
            </Button>
          </>
        )} */}
      </Box>

      <Typography
        variant="body2"
        sx={{ mt: 2, color: "gray", textAlign: "center" }}
      >
        Accepted file types: jpg, png, pdf, Max. file size: 256 MB.
      </Typography>

      {/* ToastContainer for success/failure messages */}
      <ToastContainer />
    </Box>
  );
};

export default FileUpload;
