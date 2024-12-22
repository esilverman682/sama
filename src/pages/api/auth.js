import axios from 'axios';

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL;
const CLIENT_ID = process.env.WORDPRESS_CLIENT_ID;
const CLIENT_SECRET = process.env.WORDPRESS_CLIENT_SECRET;
console.log(WORDPRESS_URL)
export async function getAccessToken() {
  try {
    const response = await axios.post(`${WORDPRESS_URL}/oauth/token`, {
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw new Error('Failed to retrieve access token');
  }
}
