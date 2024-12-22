import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
//import Sidebar from '../components/Sidebar'; // Import  sidebar component

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      console.log("hii");
      console.log(process.env.NEXT_PUBLIC_STAGING_URL);
      // Call WPGraphQL JWT Authentication endpoint
      const response = await axios.post(process.env.NEXT_PUBLIC_STAGING_URL, {
        query: `
          mutation LoginUser {
            login(input: { username: "${email}", password: "${password}" }) {
              authToken
              user {
                id
                name
                email
              }
            }
          }
        `,
      });

      const { authToken } = response.data.data.login;

      // Store JWT token in a cookie
      Cookies.set('token', authToken);

      // Set authentication state
      setIsAuthenticated(true);

      // Redirect to the dashboard
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
      setIsAuthenticated(false); // Ensure that authentication state is set to false
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
       {/* Render sidebar if authenticated */}
    </div>
  );
};

export default LoginPage;
