import { useState } from "react";

// This is a custom hook for handling multistep forms
export default function useMultistepForm(steps) {
  // Store the current step index in the state
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Function to go to the next step
  function next() {
    setCurrentStepIndex((i) => {
      // If already at the last step, do nothing
      if (i >= steps.length - 1) return i;
      return i + 1; // Otherwise, go to the next step
    });
  }

  // Function to go to the previous step
  function back() {
    setCurrentStepIndex((i) => {
      // If already at the first step, do nothing
      if (i <= 0) return i;
      return i - 1; // Otherwise, go to the previous step
    });
  }

  // Function to jump to a specific step by index
  function goTo(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex], // Current step content
    steps, // All steps
    isFirstStep: currentStepIndex === 0, // Check if it's the first step
    isLastStep: currentStepIndex === steps.length - 1, // Check if it's the last step
    goTo,
    next,
    back,
  };
}
