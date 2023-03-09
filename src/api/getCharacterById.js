import axios from "axios";
import { BASE_URL } from "constants/api";

export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    const {
      image,
      name,
      gender,
      status,
      origin: { name: origin },
      type,
      species,
    } = response.data;

    return {
      data: {
        image,
        name,
        gender,
        status,
        origin,
        type,
        species,
      },
      error: null,
    };
  } catch (error) {
    return { data: null, error };
  }
};
