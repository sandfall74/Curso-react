import { describe, expect, test, vi } from "vitest";

import  { useGifs } from "./useGifs";
import { renderHook } from "@testing-library/react";
import { act } from "react";

import * as gifsActions from "../actions/get-gifs-by-query.action";
describe("useGifs", () => {

    test("should return diferent values and methods", () => {
        const {result} = renderHook(() => useGifs());
        expect(result.current.gifs).toBeDefined();
        expect(result.current.previousTerms).toBeDefined();
        expect(result.current.handleSearch).toBeInstanceOf(Function);
        expect(result.current.handleTermClicked).toBeInstanceOf(Function);


    });

    test("should return a list of gifs", async() => {
        const {result} = renderHook(() => useGifs());
        await act(async() => {
        
        await result.current.handleSearch("matrix");
        });
        
        expect(result.current.gifs.length).toBe(10);
       

    });   

    test("should return a list of gifs when hanfdleTermClicked is called", async() => {
        const {result} = renderHook(() => useGifs());
        await act(async() => {
        
        await result.current.handleTermClicked("matrix");
        });
        
        expect(result.current.gifs.length).toBe(10);
       

    });
    test("should return a list of gifs from cache when hanfdleTermClicked is called", async() => {
        const {result} = renderHook(() => useGifs());
        await act(async() => {
        
        await result.current.handleSearch("matrix");
        });
        
        expect(result.current.gifs.length).toBe(10);
       

        vi.spyOn(gifsActions, "getGifsByQuery").mockRejectedValue(new Error("Should not be called"));
        await act(async() => {
        
        await result.current.handleSearch("matrix");
        });
        expect(result.current.gifs.length).toBe(10);

    });
    test('should return no more than 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs());
        vi.spyOn(gifsActions, "getGifsByQuery").mockResolvedValue([]);
        await act(async () => {
          await result.current.handleSearch('goku1');
            
        });
        await act(async () => {
          await result.current.handleSearch('goku2');
            
        });
        await act(async () => {
          await result.current.handleSearch('goku3');
            
        });
        await act(async () => {
          await result.current.handleSearch('goku4');
            
        });
        await act(async () => {
          await result.current.handleSearch('goku5');
            
        });
        await act(async () => {
          await result.current.handleSearch('goku6');
            
        });
        await act(async () => {
          await result.current.handleSearch('goku7');
            
        });
        await act(async () => {
          await result.current.handleSearch('goku8');
            
        });
        await act(async () => {
          await result.current.handleSearch('goku9');
            
        });
        expect(result.current.previousTerms.length).toBe(8);
        expect(result.current.previousTerms).toEqual(
            [
                'goku9',
                'goku8',
                'goku7',
                'goku6',
                'goku5',
                'goku4',
                'goku3',
                'goku2',    
            ]);
      }
    );
    
});