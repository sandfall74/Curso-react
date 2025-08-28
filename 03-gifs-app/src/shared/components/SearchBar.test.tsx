import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  test("should render searchbar correctly", () => {
    const { container } = render(<SearchBar onQuery={() => {}} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByRole("textbox")).toBeDefined();
  });
  test("should call onQuery with the correct value after 700ms", async() => {
    const onQuery=vi.fn();
    render(<SearchBar onQuery={onQuery} />);
    const input=screen.getByRole('textbox');
    fireEvent.change(input,{target:{value:'batman'}});
    /* await new Promise((r)=>setTimeout(r,701)); */
    await waitFor(() => {expect(onQuery).toHaveBeenCalled();
    expect(onQuery).toHaveBeenCalledWith('batman');});
    
  });
  test("should call only once with the last values(debounce)",async()=>{
    const onQuery=vi.fn();
    render(<SearchBar onQuery={onQuery} />);
    const input=screen.getByRole('textbox');
    fireEvent.change(input,{target:{value:'b'}});
    fireEvent.change(input,{target:{value:'ba'}});
    fireEvent.change(input,{target:{value:'bat'}});
    fireEvent.change(input,{target:{value:'batm'}});
    fireEvent.change(input,{target:{value:'batma'}});
    fireEvent.change(input,{target:{value:'batman'}});
    /* await new Promise((r)=>setTimeout(r,701)); */
    await waitFor(() => {expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith('batman');
    });
       
  }    )
  test("should call onQuery when button is clicked",async()=>{
    const onQuery=vi.fn();
    render(<SearchBar onQuery={onQuery} />);
    const input=screen.getByRole('textbox');
    const button=screen.getByRole('button');
    fireEvent.change(input,{target:{value:'batman'}});
    fireEvent.click(button);
    await waitFor(() => {expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith('batman');
    expect((input as HTMLInputElement).value).toBe('');
    });
  });
  test("should the input has the correct placeholder and button text",()=>{
    render(<SearchBar Holder="Search a gif here..." ButtonText="Search" onQuery={()=>{}}/>);
    expect(screen.getByRole('textbox').getAttribute('placeholder')).toBe('Search a gif here...');
    expect(screen.getByRole('button').textContent).toBe('Search');
  });
});
