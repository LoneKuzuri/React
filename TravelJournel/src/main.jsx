import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Entry from "./entry.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
     <Entry/>
    <Entry/>
  </StrictMode>,
)
