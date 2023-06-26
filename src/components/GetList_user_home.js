import React from "react";
import "../styles/GetList_home.css";

const Book = (props) => (
  <div style={{display: 'block'}}>
    <div className="book-image-home">
      <img
        src={props.image}
        alt={props.booktitle}
        style={{ width: "100px", height: "130px"}}
      />
    </div>
    <div style={{marginTop: '10px', width: "100px"}}>
    <h5 style={{fontSize: '1.1em', textAlign: 'center'}}> {props.booktitle} </h5>
    </div>
  </div>
);

export default function Getlist(books_info, bookId) {
  
  let user_book = []

  books_info.forEach(elm => {
    if (bookId.includes(elm.id)) {
      // console.log(bookId, elm.id)
      user_book.push(elm);
    }
  });

  return [
    user_book.length,

    <div style={{ display: "flex", overflowX: "auto" }}>
    {user_book.map((user_book) => (
      <Book
        key={user_book.id}
        image={user_book.image}
        booktitle={user_book.booktitle}
      />
    ))}
    </div>

  ];
}