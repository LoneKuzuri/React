import React from "react";
import { createRoot } from "react-dom/client"
import Contact from "./contacts";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
<>
  <Contact/>
  <Contact/>
  <Contact/>
  <Contact/>
</>
  
)