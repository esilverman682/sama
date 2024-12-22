import { useState, useEffect } from "react";

export default function NumberForm({ number, updateFields }) {
  // Handle number input change
  const handleChange = (event) => {
    const value = event.target.value;

    // Ensure the value is a valid number (parse and validate)
    if (!isNaN(value) && value !== "") {
      updateFields({ number: value });  // Use the passed updateFields function
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "100%",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Enter a Number</h2>

      {/* Number input */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          <input
            type="number"
            value={number}
            onChange={handleChange} // Correctly handle the change
            style={{
              marginRight: "10px",
              width: "100px",
              padding: "5px",
              fontSize: "16px",
              border:"1px solid #ccc",
              borderRadius:"8px"
            }}
          />
        </label>
      </div>

      {/* Display the entered number */}
      {number !== "" && (
        <div style={{ marginTop: "20px", fontSize: "16px" }}>
          <strong>Entered number: {number}</strong>
        </div>
      )}
    </div>
  );
}
