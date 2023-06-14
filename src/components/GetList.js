import React from "react";
import BookList from "./BookList";
import "../styles/GetList.css";

const Book = (props) => (
  <div>
    <div className="book-image">
      <img
        src={props.image}
        alt={props.booktitle}
        style={{ width: "80px", height: "80px"}}
      />
    </div>
    <h5>{props.booktitle}</h5>
  </div>
);

  
export default function getlist(books_info){ 
    return ([
      books_info.length,
      <div className="book-container">
      {books_info.map((book_info) => (
      <Book
        key={book_info.id}
        image={book_info.image}
        booktitle={book_info.booktitle}
      />
    ))}
    </div>
  ])}