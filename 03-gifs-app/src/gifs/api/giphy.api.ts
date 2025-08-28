import axios from 'axios';

export const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: import.meta.env.VITE_GIPHY_KEY,
    lang:'es',}
});

