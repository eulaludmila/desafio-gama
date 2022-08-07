import axios from 'axios';

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?&limit=20"
})

export const apiOne = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

export const getPokemonList = async (url: string) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('Error',error);
  }
}