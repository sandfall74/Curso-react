import {  useEffect, useState } from "react";

export const useTrafficLight = () => {
    const colors = {
        red: "bg-red-500 animete-pulse",
        yellow: "bg-yellow-500 animate-pulse",
        green: "bg-green-500 animate-pulse",
    };  
    
    type TrafficLightColor = keyof typeof colors;

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
        return {light,seconds,colors}
}