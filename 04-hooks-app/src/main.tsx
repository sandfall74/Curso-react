import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster} from 'sonner'
/* import { HooksApp } from './HooksApp' */
import { TrafficLight } from './01-useState/TrafficLightWithEffect'
import { TrafficLightWithHook } from './01-useState/TrafficLightWithHook'
import { PokemonPage } from './03-examples/PokemonPage'
import { FocusSceren } from './04-useRef/FocusSceren'
import { TasksApp } from './05-useReducer/TaskApp'
import { ScrambleWords } from './05-useReducer/ScrambleWords'
import { MemoHook } from './06-memos/MemoHook'
import { MemoCounter } from './06-memos/MemoCounter'
import { InstagromApp } from './07-useOptimistic/instagromApp'
import {ClientInformation} from './08-use-suspense/clientInformation'
import { getUserAction } from './08-use-suspense/api/get-user.action'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight/> */}
    {/* <TrafficLightWithHook/> */}
   {/*  <PokemonPage/> */}
   {/* <FocusSceren/> */}
   {/* <TasksApp/> */}
   {/* <ScrambleWords/> */}
   {/* <MemoHook/> */}
   {/* <MemoCounter/> */}
   <Toaster/>
   {/* <InstagromApp/> */}
   <Suspense fallback={<h1>cargando</h1>}>
   <ClientInformation getUser={getUserAction(100)}/>
   </Suspense>
  </StrictMode>,
)
