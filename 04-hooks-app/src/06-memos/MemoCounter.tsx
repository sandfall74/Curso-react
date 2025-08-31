import { useCounter } from "@/03-examples/Hooks/useCounter";
import { useMemo } from "react";

const heavyStuff=(iterationNumber:number)=>{
    console.time('heavy stuff started');
    for(let i =0;i < iterationNumber;i++){
        console.log('ahi vamos');
    }

    console.timeEnd('heavy stuff started');
    return `${iterationNumber} iteraciones realizadas`
}

export const MemoCounter=()=>{
    const {counter,increment} = useCounter(40_000);
    const {counter:counter2,increment:increment2} = useCounter(10);
    /* const myHeavyValue = useMemo(()=> heavyStuff(40_000),[counter]); */
        return(
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Memo - useMemo</h1>
            <hr></hr>
            <h4>Counter: {counter}</h4>
            <h4>Counter: {counter2}</h4>

            <button className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer" 
            onClick={increment}>+1</button>
            <button className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer" 
            onClick={increment2}>+1</button>
        </div>

    );
}