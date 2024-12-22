import React from 'react';
import Cookies from 'js-cookie';
import Sidebar from '../components/Sidebar'; // Adjust the import based on your project structure
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const token = Cookies.get('token'); // Check if the token exists
  const router = useRouter();
  if (!token) {
    // Redirect to login if not authenticated
    if (typeof window !== 'undefined') {
      window.location.href = '/form/login'; // Redirect to login page
    }
    return null; // Prevent rendering until redirect
  }

  const handleApplyNowClick = () => {
    router.push('./form/fastapplication'); // Change '/apply' to the desired target route
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-1">
        <h1 className="text-2xl font-bold">Welcome to Kapitus</h1>
        {/* <div className="flex justify-center mt-4">
          <button type="button" className="apply-button" onClick={handleApplyNowClick}>Apply Now</button>
        </div> */}
        {/* Other dashboard content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;
