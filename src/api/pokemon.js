import { API_HOST } from "../utils/constants";

export const getPokemonsApi = async () => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;

    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  } catch (error) {
    throw error;
  }
};
