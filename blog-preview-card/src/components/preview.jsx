import React from 'react'


const PreviewCard = () => {
  return (
    <div className="blog-card">
      <img 
      className='card-image'
      src="header.jpg" 
      />

      <p className='card-genre'>Learning</p>
      <p className='card-date'>Published 21 Dec 2021</p>
      <h1 className='card-title'>HTML & CSS foundations</h1>
      <p className='card-description'>These languages are the backbone of every website, defining structure, content,  and presentation.</p>
      
      <div className='card-author'>
      <img 
      className='card-author-image'
      src="author.avif" 
      />
      <p className='card-author-name'>Greg Hooper</p>
      </div>
    </div>
  )
}

export default PreviewCard
