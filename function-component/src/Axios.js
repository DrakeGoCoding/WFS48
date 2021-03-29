import axios from 'axios'

export const getPokemon = (name) => {
    return axios.get('https://10.1.9.165/' + name);
}