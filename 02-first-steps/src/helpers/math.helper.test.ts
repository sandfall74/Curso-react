import {describe, expect, test } from 'vitest';
import {add, multiply, subtract} from './math.helper';
describe('add',()=>{
    

    test('should add positive numbers',()=>{
    //! 1. Arrange
    const a = 1;
    const b = 2;
    //! 2. Act
    const result =add(a,b);
    //! 3. Assert
    
    expect(result).toBe(a+b);
});

});

describe('subtract',()=>{
    test('should add positives numbers',()=>{
        const a = 1;
        const b =2;
        const result = subtract(a,b);

        expect(result).toBe(a-b)
    });
});


describe('multiply',()=>{
    test('should multiply numbers',()=>{
        const a = 1;
        const b =2;
        const result = multiply(a,b);

        expect(result).toBe(a*b)
    });
})

