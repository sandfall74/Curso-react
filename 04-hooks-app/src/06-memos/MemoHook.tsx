import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle";

export const MemoHook = () => {
    const[tittle,setTitle]=useState('Hola');
    const[subtitle,setSubtittle]=useState('Mundo');
    const handleMyAPICall =useCallback(()=>{
        console.log('llamado a mi api',subtitle);
    },[subtitle]);
    return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="test-2xl font-thin test-white">MemoApp</h1>


      <MyTitle title={tittle}/>
      <MySubTitle subTitle={subtitle} callMyAPI={handleMyAPICall}/>

      <button className="bg-blue-500 test-white px-4 py-2 rounded-md cursor-pointer"
      onClick={()=>setTitle('Hello')}>
        Cambiar Titulo
      </button>


      <button className="bg-blue-500 test-white px-4 py-2 rounded-md cursor-pointer"
      onClick={()=>setSubtittle('World')}>
        Cambiar Subtitulo
      </button>
    </div>
  )
}


