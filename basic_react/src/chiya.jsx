import React from "react";
import Header from "./header";


function Main(){
  return(
    <main>
      <h1>Reasons why i am excited about learning React.</h1>
    <ol>
     <li>React is a popular library.</li>
     <li>I want to get a frontend developer job.</li>
     <li>I can play with UI designs for multi-page projects.</li>
    </ol>
    </main>
  )
}

function Footer() {
  return (
    <>
    <Header/>
    <Main/>
    <footer>
      <p>&copy; 2025 Sunil Pandey. All rights reserved.</p>
    </footer>
    </>
  );
}
export default Footer;



