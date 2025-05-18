import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]= useState(0)

   const addValue = ()=>{
    console.log("clicked", counter);
    
    setCounter(counter + 1)
   }

   const removeValue = ()=>{
    if (counter>0){
      setCounter(counter-1);
    }
   }
  
  return (
    <>
     <h1>chiya khayeu?</h1>
     <h2>cup count: {counter}</h2>


     <button onClick={addValue}>Update Cup</button>
     <br />
     <button onClick={removeValue}>Remove Cup</button>
    </>
  )
}

export default App
