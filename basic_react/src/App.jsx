
import React from "react";
import { createRoot } from "react-dom/client";
import './app.css'

function App(){
 return(
  <main>
    <img src="src/assets/react.svg" alt="reactLogo" />
    <h1>Fun Facts About React.</h1>
    <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k stars in Github.</li>
        <li>Is maintained by Metas</li>
        <li>Powers thousands of enterprises apps, including mobile apps.</li>
    </ul>
    </main>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(
    <App/>
);