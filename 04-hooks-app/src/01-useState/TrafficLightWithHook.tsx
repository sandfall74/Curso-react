import {  useEffect, useState } from "react";


    const colors = {
        red: "bg-red-500 animete-pulse",
        yellow: "bg-yellow-500 animate-pulse",
        green: "bg-green-500 animate-pulse",
    };  
    
    type TrafficLightColor = keyof typeof colors;
export const TrafficLightWithHook = () => {

    const [light, setLight] = useState<TrafficLightColor>("red");
    const [seconds, setSeconds] = useState(5); 
    useEffect(() => {
      if (seconds === 0) {
        return setSeconds(5), setLight(light === "red" ? "green" : light === "green" ? "yellow" : "red");
      }
        const intervalId =setInterval(() => {
            setSeconds((s) => s - 1);
        }
        , 1000);
        return ()=>{

            clearInterval(intervalId);
        }
    }, [seconds,light]);
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">

        <h1 className="text-4xl font-bold text-white mb-8">Semaforo con useEffect</h1>
        <h2 className="text-white text-3xl font-thin">cutdown {seconds}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear" style={{width:`${(seconds/5)*100}%`}}></div>
        </div>


        <div className={`w-32 h-32 ${  light ==='red' ? colors [light] : `bg-gray-500`}  rounded-full`}></div>



        <div className={`w-32 h-32 ${  light ==='yellow' ? colors [light] : `bg-gray-500`} rounded-full`}></div>
        <div className={`w-32 h-32 ${  light ==='green' ? colors [light] : `bg-gray-500`} rounded-full`}></div>

        
       
      </div>
    </div>
  );
};