import { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import axios from "axios";
import Sidebar from "@/components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, TextField, Typography, Box, Grid } from "@mui/material";

const FileUpload = () => {
  const [formData, setFormData] = useState({
    file: null,
    name: "",
    signature: null,
  });

  const [formCreated, setFormCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formEntry, setFormEntry] = useState(null);
  const sigCanvas = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, file: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignature = () => {
    if (sigCanvas.current) {
      setFormData({
        ...formData,
        signature: sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"),
      });
      toast.success("Signature saved successfully!");
    }
  };

  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormCreated(false);
    setErrorMessage("");
    const mutation = `
      mutation {
        multiForms(
          input: {
            file: "${formData.file}",
            signature: "${formData.signature}"
          }
        ) {
          formEntry {
            id
            formId
          }
        }
      }
    `;

    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_STAGING_URL, {
        query: mutation,
      });

      if (response.data.data.multiForms) {
        setFormEntry(response.data.data.multiForms.formEntry);
        setFormCreated(true);
        toast.success("Signature saved successfully!");
      }
    } catch (error) {
      setErrorMessage("Error creating form. Please try again.");
      console.error('Error creating form:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
      <Sidebar />
      <ToastContainer />
      <Typography variant="h4" sx={{ mb: 2 }}>
        GraphQL Form with File Upload and Signature
      </Typography>

      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 600 }}>
        <Grid container spacing={3}>
          {/* Hidden Input for Name */}
          <Grid item xs={12} sx={{ display: 'none' }}>
            <TextField
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              placeholder="Your Name"
            />
          </Grid>

          {/* File Upload Input */}
          <Grid item xs={12}>
            <Typography variant="body1">Upload File:</Typography>
            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              style={{ width: '100%' }}
            />
          </Grid>

          {/* Signature Canvas */}
          <Grid item xs={12}>
            <Typography variant="body1">Signature:</Typography>
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              canvasProps={{
                width: 500,
                height: 200,
                className: "signature-canvas border-2 border-dashed",
              }}
            />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained" onClick={handleSignature}>Save</Button>
              <Button variant="outlined" onClick={clearSignature}>Clear</Button>
            </Box>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Success Message */}
      {formCreated && formEntry && (
        <Box sx={{ mt: 3, p: 2, border: '1px solid #4caf50', backgroundColor: '#e8f5e9' }}>
          <Typography variant="body1">Form created successfully!</Typography>
          <Typography variant="body2"><strong>ID:</strong> {formEntry.id}</Typography>
          <Typography variant="body2"><strong>Form ID:</strong> {formEntry.formId}</Typography>
        </Box>
      )}

      {/* Error Message */}
      {errorMessage && (
        <Box sx={{ mt: 3, p: 2, border: '1px solid #f44336', backgroundColor: '#ffebee' }}>
          <Typography variant="body1" color="error">{errorMessage}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
