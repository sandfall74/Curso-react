import { useState } from "react";




export const useCounter = (initialValue: number = 10) => {

    const[Counter,setCounter]=useState(initialValue);
const handleAdd=()=>{
    setCounter(Counter+1);  

}

const handleReset=()=>{
    setCounter(initialValue);
}

const handleSubtract=()=>{
    setCounter(pravState=>pravState-1);
}

return {
    //Propiedades
    Counter,
    //metodos
    handleAdd,
    handleReset,
    handleSubtract
}
}
