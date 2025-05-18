import React from 'react'


const books = [
    {id:1, title: "HTML for Beginners", author: "John Doe", year: 2021},
    {id:2, title: "CSS MAsrtery", author: "Jane Smith", year: 2022},
    {id:3, title: "React in Depth", author: "Mark Wilson", year: 2023},
]
const BookList= ()=>{
  return (
    <div className="book-container">
      <h2>Books List</h2>
      {books.map((books)=>(
        <div key={books.id} className="book-card">

            <h3>{books.title}</h3>

            <p><strong>Author:</strong> {books.author}</p>
           <p><strong>Published:</strong> {books.year}</p>
            </div>
      ))}
    </div>
  );
};


export default BookList;
