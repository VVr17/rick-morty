import axios from 'axios';
import { BASE_URL } from 'constants/api';

export const getCharacterByName = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/character`);
    return { data: response.data.results, error: null };
  } catch (error) {
    return { data: [], error };
  }
};
