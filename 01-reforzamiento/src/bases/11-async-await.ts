import type { Giphyresponse } from "../data/giphy.response";

const API_KEY = "jT6fZNUH4noxn4SaU06MwCbp9QmdEos4";

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.append(imgElement);
};

const getImageUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );
  const { data }: Giphyresponse = await response.json();
  return data.images.original.url;
};

getImageUrl().then(( createImageInsideDOM));
