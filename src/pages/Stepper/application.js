import { useState } from "react";
// import { AccountForm } from "./AccountForm";
// import { AddressForm } from "./AddressForm";
import { useMultistepForm } from "./Multistepform";
import UserForm from "./UserForm";
import Sidebar from "@/components/Sidebar";
//import RatingForm from "./Rating";
import FastApplication from "../form/fastapplication";
//import { UserForm } from "./Userform";



function Application() {
 

  // function updateFields(fields) {
  //   setData((prev) => {
  //     return { ...prev, ...fields };
  //   });
  // }

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultistepForm([
    <FastApplication  />,
    <UserForm  />,
    
  ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "3rem", // Increased padding for spacing
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial, sans-serif",
        height: "100vh", // Full height of the window
        width: "100%", // Full width of the window
        maxWidth: "100%", // Ensure it takes up the full width
        display: "flex", // Flexbox to align items
        flexDirection: "column", // Stack elements vertically
        alignItems: "center", // Center the form horizontally
        justifyContent: "center", // Center the form vertically
        overflowY: "auto", // Enable scrolling if the content overflows
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {/* {currentStepIndex + 1} / {steps.length} */}
        </div>
        <Sidebar/>
        {step}
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
         
          <button type="submit">{isLastStep && !isFirstStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default Application;
