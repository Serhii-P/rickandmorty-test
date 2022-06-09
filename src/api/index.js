import axios from "axios";

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page) =>  {
  const pageNumber = page && page > 1 ? page : 1
  try {
    const response = await axios.get(`${BASE_URL}/character/?page=${pageNumber}`);
      if (response && response.data) {
        return response.data?.results;
      }
  } catch (error) {
    console.error(error);
  }
}

export const getCharacterDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
      console.error(error);
  }
}

export const getCharacterSearch = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${name}`);
    if (response && response.data) {
         return response.data.results;
    }
  } catch (error) {
    console.error(error.response.data);    
  }
}