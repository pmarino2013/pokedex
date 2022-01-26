import { API_HOST } from "../utils/constants";

export const getPokemonsApi = async (endpointUrl) => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;

    const resp = await fetch(endpointUrl || url);
    const data = await resp.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetailApi = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export async function getPokemonDetailsApiById(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
