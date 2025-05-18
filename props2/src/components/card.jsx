import React from 'react'
import "./card.css"

const Card = (props) => {
  return (
      <div className="card" style={{overflow: "hidden"}}>
        <img 
        src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-com-landing-page/hero-laptop-desktop.png?fmt=png-alpha&wid=2960&hei=1760" 
        alt="Laptop"
        width={160} 
        />

        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
  )
}

export default Card;
