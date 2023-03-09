import axios from "axios";
import { BASE_URL } from "constants/api";

export const getCharacters = async (query = "", page) => {
  try {
    let response;

    if (!query) {
      response = await axios.get(`${BASE_URL}/character?page=${page}`);
    } else {
      response = await axios.get(
        `${BASE_URL}/character?page=${page}&name=${query}`
      );
    }

    const characters = response.data.results;
    const pages = response.data.info.pages;

    if (characters.length === 0) {
      return { data: characters, error: null, pages: null };
    }

    characters.sort((firstChar, nextChar) => {
      if (firstChar.name < nextChar.name) {
        return -1;
      }
      if (firstChar.name > nextChar.name) {
        return 1;
      }
      return 0;
    });

    return { data: characters, error: null, pages };
  } catch (error) {
    return { data: [], error: error?.response?.data?.error, pages: null };
  }
};
