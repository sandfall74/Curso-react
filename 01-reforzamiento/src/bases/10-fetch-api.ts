import type { Giphyresponse } from "../data/giphy.response";

const API_KEY = "jT6fZNUH4noxn4SaU06MwCbp9QmdEos4";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url:string)=>{
const imgElement = document.createElement('img');
imgElement.src = url;
document.body.append(imgElement);
}

myRequest
.then((response)=>response.json())
.then(({ data }:Giphyresponse)=>{
    const imageUrl = data.images.original.url;
// const imageUrl = data.data.images.original.url ;
// console.log(imageUrl);
    createImageInsideDOM(imageUrl);
})
.catch((err)=>{
    console.log(err);
})

