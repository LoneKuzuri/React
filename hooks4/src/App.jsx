import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // input DOM element ko reference banaucha
  const inputElement = useRef();
  
  //Yo function le inputElement ma .focus() lagauchha
  // jasle garda tyo input box ma cursor jancha.
  const focusInput = () =>{
    console.log("focus function is working");
    inputElement.current.focus();
  }; 


  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App;
