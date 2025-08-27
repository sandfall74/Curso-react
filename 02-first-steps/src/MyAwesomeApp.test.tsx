import { describe, test,expect} from "vitest";
import {render,screen} from '@testing-library/react';;
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp',()=>{
    test('should render first name and last name',()=>{
        const {container}=render( <MyAwesomeApp/>);

        //screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        console.log(h1?.innerHTML);
        expect(h1?.innerHTML).toContain('Adrian');
         expect(h3?.innerHTML).toContain('Piedra');
    });
    test('should render first name and last name-screen',()=>{
       render( <MyAwesomeApp/>);

        screen.debug();

       /*  const h1 = screen.getByRole('heading',{
            level:1
        }); */

        const h1 = screen.getByTestId('first-name-tittle');
        expect(h1?.innerHTML).toContain('Adrian');
    });
    test('should match snpachot',()=>{
        const {container}=render( <MyAwesomeApp/>);
        expect(container).toMatchSnapshot();
    })
    test('should match snpachot2',()=>{
        render( <MyAwesomeApp/>);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    })
})