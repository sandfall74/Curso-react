
import { useCounter } from "../hooks/useCounter";


export const MyCounterApp = () => {
  
   const{Counter,handleAdd,handleReset,handleSubtract}=useCounter();
  return (
    
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <h1>Counter : {Counter}</h1>
      <div style={{display:'flex',gap:'20px'}}>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}


