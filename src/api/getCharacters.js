import axios from "axios";
import { BASE_URL } from "constants/api";

export const getCharacters = async (query = "") => {
  try {
    let response;

    if (!query) {
      response = await axios.get(`${BASE_URL}/character`);
    } else {
      response = await axios.get(`${BASE_URL}/character?name=${query}`);
    }

    return { data: response.data.results, error: null };
  } catch (error) {
    return { data: [], error: error?.response?.data?.error };
  }
};
