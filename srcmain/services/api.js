import axios from "axios"; //used to make HTTP requests

const BASE_URL = "https://rickandmortyapi.com/api/character"; 

export const fetchCharacters = async (page = 1) => {  //the value of fetchcharacters is sent to homescreen.js
  try {
    const response = await axios.get(`${BASE_URL}/?page=${page}`); //in total there are 826 characters in api and to manage that we add pagination 
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
