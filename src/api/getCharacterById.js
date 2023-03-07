import axios from 'axios';
import { BASE_URL } from 'constants/api';

export const getCharacterById = async id => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
