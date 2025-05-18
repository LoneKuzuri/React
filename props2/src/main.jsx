import React from "react";
import App from "./App";
import "./components/Navbar.css"
import './components/card.css'
import './index.css'
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

root.render(
    <>
      <App />
    </>
)