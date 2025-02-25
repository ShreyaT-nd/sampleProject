import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return null;
  }
};

export const fetchCharacterById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching character:", error);
    return null;
  }
};
