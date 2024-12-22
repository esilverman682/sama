import React from 'react';
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

function StartApplication({ next }) {
  const handleStartApplication = () => {
    if (next) {
      next();  // Only call next() if it is available
    }
  };

  return (
    <div className="flex">
      <Sidebar />
  
      <div className="w-full h-screen flex justify-center items-center p-8 space-x-12 bg-white rounded shadow-md">
        {/* Left Side (Text) */}
        <div className="flex flex-col justify-center space-y-6 text-left">
          <h3 className="text-lg font-medium">Business Financing</h3>
          <h1 className="text-4xl font-bold">Get Approved Fast!</h1>
          <h3 className="text-lg">Applying will have no impact on your credit.</h3>
          
          {/* Start  Application Button */}
          <button
            type="button"
            onClick={handleStartApplication} // Call handleStartApplication to invoke next()
            style={{ width: "100%" }}
            className="apply-button mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full max-w-md"
          >
            Start  Application
          </button>
        </div>
        
        {/* Right Side (Image) */}
        <div className="w-1/2">
          <Image
            src="/customizejourney.png"
            width={100}
            height={75}
            alt="Application"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default StartApplication;
