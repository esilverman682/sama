import { useState } from "react";
import useMultistepForm from "./Multistepform";
// src/pages/Stepper/Createstepper.js

import UserForm from "./UserForm";
import Sidebar from "@/components/Sidebar";
import NumberForm from "./Rating";
import StartApplication from "./StartApplication";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css"; // Ensure you have this import
import { ToastContainer, toast } from "react-toastify"; // Correct import

const INITIAL_DATA = {
  SurveyName: "",
  Description: "",
  number: "",
};

function Createstep() {
  const [data, setData] = useState(INITIAL_DATA);

  // Define the updateFields function
  const updateFields = (fields) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  // Initialize the form steps
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    setStepIndex,
  } = useMultistepForm([
    <StartApplication key="startApplication" next={next} />, // Pass next for first step
    <UserForm key="userForm" {...data} updateFields={updateFields} />, // Pass data and updateFields to UserForm
    <NumberForm key="numberForm" {...data} updateFields={updateFields} />, // RatingForm
  ]);

  // Ensure that 'number' is always a valid integer (handle empty values)
  const number = data.number ? parseInt(data.number, 10) : 0; // Default to 0 if empty

  const variables = {
    surveyName: data.SurveyName,
    surveyDescription: data.Description,
    number: number, // This is now an integer
  };

  // Define the mutation query with variables
  const SUBMIT_SURVEY_MUTATION = `
    mutation MyMutation($surveyName: String!, $surveyDescription: String!, $number: Int!) {
      submitSurvey(
        input: {
          clientMutationId: "1",
          surveyName: $surveyName,
          surveyDescription: $surveyDescription,
          number: $number
        }
      ) {
        surveyEntry {
          surveyName
          surveyDescription
          number
        }
      }
    }
  `;

  // Handle form submission
  async function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next(); // Move to next step
    if (isLastStep) {
      try {
        // Make the GraphQL request using Axios
        const response = await axios.post(
          process.env.NEXT_PUBLIC_STAGING_URL, // Replace with your GraphQL API endpoint
          {
            query: SUBMIT_SURVEY_MUTATION,
            variables: variables,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log("Survey submitted successfully:", response.data.data.submitSurvey.surveyEntry);
        toast.success("Survey submitted successfully!", {
          autoClose: 3000, // Duration in ms
        });
        setData(INITIAL_DATA); // Reset the form data
      } catch (err) {
        console.error("Error submitting survey:", err);
        toast.error("An error occurred while submitting the survey. Please try again.", {
          autoClose: 3000,
        });
      }
    } else {
      next(); // Move to next step if not the last step
    }
  }

  // Render dynamic step based on current step index
  const dynamicStep = currentStepIndex === 0 ? (
    <StartApplication next={next} key="startApplication" />
  ) : (
    step // For subsequent steps, render the dynamic step
  );

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "3rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "auto",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}></div>
        <Sidebar />

        {/* ToastContainer for toast notifications */}
        <ToastContainer />

        {dynamicStep} {/* Render dynamic step */}

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default Createstep;
