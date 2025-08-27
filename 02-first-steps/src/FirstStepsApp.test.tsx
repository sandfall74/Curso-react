import {describe,test,expect, vi, beforeEach, afterEach} from 'vitest';
import {FirstStepsApp} from './FirstStepsApp';
import { render,screen} from '@testing-library/react';

;
const mockItemCounter = vi.fn(  (props : unknown)=>{
    return(<div data-testid="ItemCounter"/>)
}  );
vi.mock('./shopping-cart/ItemCounter',()=>({
    ItemCounter:(props:unknown)=>mockItemCounter(props)
}))
/* vi.mock('./shopping-cart/ItemCounter',()=>({
    ItemCounter:()=><div data-testid="ItemCounter" name={props.name} quantity={props.quantity}/>
})); */
describe('FirstStepsApp',()=>{

    afterEach(()=>{
        vi.clearAllMocks();
    })

    test('should match snapshot',()=>{
        const {container}=render( <FirstStepsApp/>);
        expect(container).toMatchSnapshot();
    });
    test('should render the correct number of ItemCounter components',()=>{
    render( <FirstStepsApp/>);
    const itemCounters=screen.getAllByTestId('ItemCounter');
    /* screen.debug(); */
    expect(itemCounters.length).toBe(3);
    });

    test('should render ItemCounter with correct props', ()=>{
        render(<FirstStepsApp/>);
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith(
            {name:'Nintendo Switch 2', quantity:1}
        );
    });
});