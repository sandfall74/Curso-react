import { render , screen} from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { act } from "react";

describe('MyCounterApp', () => {
    test('should be tested', () => {    
        render(<MyCounterApp/>);


        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(`Counter : 10`);

        expect(screen.getByRole('button',{name:'+1'})).toBeDefined();
        expect(screen.getByRole('button',{name:'-1'})).toBeDefined();
        expect(screen.getByRole('button',{name:'Reset'})).toBeDefined();    

    }); 

    test('should increment counter when +1 button is clicked', () => {    
        render(<MyCounterApp/>);
        const btnAdd = screen.getByRole('button',{name:'+1'});
        act( () => {btnAdd.click();} );
        
        
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(`Counter : 11`);
    }   );
}       );
    