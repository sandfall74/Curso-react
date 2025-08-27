import { ItemCounter } from "./ItemCounter";
import { describe, expect, test} from "vitest";
import {fireEvent, render,screen} from '@testing-library/react';;


const textTest = 'test item'
describe('ItemCounter',()=>{
  test('should render ith default values',()=>{



    render(<ItemCounter name={textTest}/>)
   
    expect(screen.getByText(textTest)).toBeDefined();
    expect(screen.getByText(textTest)).not.toBeNull();
  });
  test('should increse by 1 when press the plus button',()=>{
    render(<ItemCounter name={textTest} quantity={1}/>);

    const [buttonAdd] = screen.getAllByRole('button');
    fireEvent.click(buttonAdd);
    expect(screen.getByText('2')).toBeDefined();
  });
  test('should decrese by -1 when press the plus button',()=>{
    render(<ItemCounter name={textTest} quantity={5}/>);

    const [,buttonSubtract] = screen.getAllByRole('button');
    fireEvent.click(buttonSubtract);
    expect(screen.getByText('4')).toBeDefined();
  });

  test('should change to red when count is 1',()=>{
    const quantity = 1;
     render(<ItemCounter name={textTest} quantity={quantity}/>);
     const itemText = screen.getByText(textTest);
     expect(itemText.style.color).toBe('red')
  })
})
