import axios from 'axios'

export const getPokemon = (name) => {
    return axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
}