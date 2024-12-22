import { useState } from "react";
import useMultistepForm from "./Multistepform";
import UserForm from "./UserForm";
import Sidebar from "@/components/Sidebar";
import FastApplication from "../form/fastapplication"; // Import FastApplication form

function Application() {
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultistepForm([
    <FastApplication key="fastApplication" />, // Add key for uniqueness
    <UserForm key="userForm" />, // Add key for uniqueness
  ]);

  // Handle form submission
  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next(); // Move to next step if not the last step
    alert("Successful Account Creation"); // Show a success message when the last step is completed
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "3rem", // Padding for spacing
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial, sans-serif",
        height: "100vh", // Full height of the window
        width: "100%", // Full width of the window
        display: "flex",
        flexDirection: "column", // Stack elements vertically
        alignItems: "center", // Center the form horizontally
        justifyContent: "center", // Center the form vertically
        overflowY: "auto", // Enable scrolling if content overflows
      }}
    >
      <form onSubmit={onSubmit}>
        {/* Sidebar component for the application */}
        <Sidebar />
        
        {step} {/* Render the current step component dynamically */}
        
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end", // Align buttons to the right
          }}
        >
          {/* Show the "Back" button if not the first step */}
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          {/* Show "Finish" if on the last step, otherwise "Next" */}
          <button type="submit">
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Application;
