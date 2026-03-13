import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setnumber] = useState(0)

  const increment=()=>{
    setnumber(number+1)
  }
  const decrement=()=>{
    if(number>0) setnumber(number-1)
  }

  const reset=()=>{
    setnumber(0)
  }
  return (
    
      <div>
        <h1>counter app {number}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>R</button>
      </div>
      
  )
}

export default App
