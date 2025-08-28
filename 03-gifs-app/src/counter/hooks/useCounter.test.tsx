import { act, renderHook } from "@testing-library/react";
import {  describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";



describe('useCounter', () => {
    /* let result;
    beforeEach(() => {
        const {result:hookValue} = renderHook(() => useCounter());
        result = hookValue;
    }); */
    test('should initialize with default value of 10', () => {
        const  {result}  = renderHook(()=>useCounter());
        expect(result.current.Counter).toBe(10);
   });    
   test('should increment counter when handleAdd', () => {
        const  {result}  = renderHook(()=>useCounter());
        act(()=>{result.current.handleAdd()});
        expect(result.current.Counter).toBe(11);
   });    
}       );




