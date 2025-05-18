import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Card from "./components/card";

function App(){
    return(
        <>
          <Navbar />
          <div className="cards">
          <Card title="card 1" description="card 1 desc" />   {/* title and description are props here */}
          <Card title="card 2" description="card 2 desc" />   
          <Card title="card 3" description="card 3 desc" />   
          <Card title="card 4" description="card 4 desc" />   
          </div>
          <Footer/>
        </>
    )
}

export default App;