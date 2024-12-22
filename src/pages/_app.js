// /pages/_app.js
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Initialize as null
  const router = useRouter();

  useEffect(() => {
    // Check for auth token in cookies
    const token = Cookies.get('token');
    setIsAuthenticated(!!token); // Set true if token exists, otherwise false
  }, []);

  // Only display sidebar if authenticated and not on login page
  const showSidebar = isAuthenticated && router.pathname !== '/login';

  if (isAuthenticated === null) {
    // Return null or a loader until authentication status is confirmed
    return null; //  replace this with a loading spinner if needed
  }

  return (
    <div style={{ display: 'flex' }}>
      {showSidebar }
      <main style={{ marginLeft: showSidebar ? '250px' : '0', padding: '20px', width: '100%' }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
