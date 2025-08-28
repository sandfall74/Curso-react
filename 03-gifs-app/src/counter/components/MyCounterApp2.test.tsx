import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { fireEvent, render,screen } from "@testing-library/react";
//import { useCounter } from "../hooks/useCounter";
const handleAddMock = vi.fn();
const handleResetMock = vi.fn();    
const handleSubtractMock = vi.fn();
vi.mock("../hooks/useCounter",()=>({
    useCounter: () => ({
        Counter:10,
        handleAdd: handleAddMock,
        handleReset: handleResetMock,  
        handleSubtract: handleSubtractMock,
            }), 
}));

describe('MyCounterApp', () => {
    test('should be tested', () => {    
         render(<MyCounterApp/>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(`Counter : 10`);
        
                expect(screen.getByRole('button',{name:'+1'})).toBeDefined();
                expect(screen.getByRole('button',{name:'-1'})).toBeDefined();
                expect(screen.getByRole('button',{name:'Reset'})).toBeDefined();  
    }); 
    test('should call handleAdd if button is clicked', () => {
        render(<MyCounterApp/>);
        const btnAdd = screen.getByRole('button',{name:'+1'});
       fireEvent.click(btnAdd);
       expect(handleAddMock).toHaveBeenCalled();
    });           
});  