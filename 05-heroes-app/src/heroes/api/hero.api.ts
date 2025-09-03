import axios from 'axios';

const Base_URL = import.meta.env.VITE_API_URL;

export const heroApi = axios.create({
    baseURL:`${Base_URL}/api/heroes`

})