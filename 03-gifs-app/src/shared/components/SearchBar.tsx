import { useEffect, useState } from "react";

interface Props {
    Holder:string;
    ButtonText:string;
    onQuery:(query:string)=>void;
}

export const SearchBar = ({Holder,ButtonText,onQuery}:Props) => {
    const[query,setQuery]= useState('');

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{onQuery(query)},700);
        //onQuery(query)
        return()=>{
            clearTimeout(timeoutId);
        };

    },[query,onQuery]);

    const handleSearch=()=>{
        onQuery(query);
        setQuery('');
    }

    const handleKeyDown=(event:React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key==='Enter'){
            handleSearch();
        }
    }
  return (
    <div className="search-container">
      
        <input type="text" placeholder={Holder}
        value={query}
        onChange={(event)=>setQuery(event.target.value)}
        onKeyDown={handleKeyDown}/>
        <button onClick={handleSearch}>{ButtonText}</button>
    </div>
  )
}


