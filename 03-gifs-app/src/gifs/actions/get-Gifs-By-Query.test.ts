import {  beforeEach, describe , expect, test, vi} from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";
import  { giphyResponseData } from "../../../tests/mock/giphy.response.data";
import AxiosMockAdapter from 'axios-mock-adapter';
import { giphyApi } from "../api/giphy.api";

describe('getGifsByQuery', () => {
    let mock = new AxiosMockAdapter( giphyApi );
    /* test('should return a list of gifs', async() => {
        const gifs=await getGifsByQuery('One Punch');
        const [gif1]=gifs;
     
        expect(gif1).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
            width: expect.any(Number),
            height: expect.any(Number),
        });


    }); */
    beforeEach(() => {
        /* mock.reset(); */
        mock = new AxiosMockAdapter( giphyApi );
    });
    test('should return a list of 10 gifs', async() => {
        mock.onGet('/search').reply(200, giphyResponseData);
        const gifs=await getGifsByQuery('One Punch');   
        expect(gifs.length).toBe(10);
        gifs.forEach( gif => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        }
            );
    } );

    test('should return an empty list of gifs if query is empty', async() => {
        /* mock.onGet('/search').reply(200, giphyResponseData); */
        mock.restore();
        const gifs=await getGifsByQuery('');   
        expect(gifs.length).toBe(0);
        
    } );


    test('should handle error when the api returns an error', async() => {
        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

        mock.onGet('/search').reply(400,{data:{mensage:'Bad Request'},});
        const gifs=await getGifsByQuery('One Punch');   
        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    }       
    );
}) ;