import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/* import { HooksApp } from './HooksApp' */
import { TrafficLight } from './01-useState/TrafficLightWithEffect'
import { TrafficLightWithHook } from './01-useState/TrafficLightWithHook'
import { PokemonPage } from './03-examples/PokemonPage'
import { FocusSceren } from './04-useRef/FocusSceren'
import { TasksApp } from './05-useReducer/TaskApp'
import { ScrambleWords } from './05-useReducer/ScrambleWords'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight/> */}
    {/* <TrafficLightWithHook/> */}
   {/*  <PokemonPage/> */}
   {/* <FocusSceren/> */}
   {/* <TasksApp/> */}
   <ScrambleWords/>
  </StrictMode>,
)
