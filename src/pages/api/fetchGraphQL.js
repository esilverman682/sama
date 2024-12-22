import axios from 'axios';
import { getAccessToken } from './auth';

export async function fetchGraphQL(query, variables = {}) {
  const token = await getAccessToken();
  const url = process.env.NEXT_PUBLIC_STAGING_URL;

  try {
    const response = await axios.post(
      url,
      {
        query,
        variables,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching data from GraphQL API:', error);
    throw new Error('Failed to fetch data from GraphQL API');
  }
}
