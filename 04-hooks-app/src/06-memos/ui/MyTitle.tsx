import { memo } from "react";

interface Props{
    title:string;
}

export const MyTitle=memo(({title}:Props)=>{
    console.log("MyTitle");
    return(
        <h1 className="text-3xl">{title}</h1>
    )
});