import axios from 'axios';
import { GOOGLE_API_URL } from 'constants/api';

export const getUserData = async googleToken => {
  try {
    const response = await axios.get(
      `${GOOGLE_API_URL}?access_token=${googleToken}`,
      {
        headers: {
          Authorization: `Bearer ${googleToken}`,
          Accept: 'application/json',
        },
      }
    );
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
