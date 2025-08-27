import {describe,test,expect, vi} from 'vitest';
import {FirstStepsApp} from './FirstStepsApp';
import { render,screen} from '@testing-library/react';
;

vi.mock('./shopping-cart/ItemCounter',()=>({
    ItemCounter:()=><div data-testid="ItemCounter"/>
}));
describe('FirstStepsApp',()=>{
    test('should match snapshot',()=>{
        const {container}=render( <FirstStepsApp/>);
        expect(container).toMatchSnapshot();
    });
    test('should render the correct number of ItemCounter components',()=>{
    render( <FirstStepsApp/>);
    const itemCounters=screen.getAllByTestId('ItemCounter');
    /* screen.debug(); */
    expect(itemCounters.length).toBe(3);
    })

})