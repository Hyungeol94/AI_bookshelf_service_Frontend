import React from "react";
import "../styles/GetList.css";

const Book = (props) => (
  <div>
    <div className="book-image">
      <img
        src={props.image}
        alt={props.booktitle}
        style={{ width: "80px", height: "80px" }}
      />
    </div>
    <h5>{props.booktitle}</h5>
  </div>
);

export default function getlist(books_info, bookId) {
  let user_book = [];
  books_info.forEach((elm) => {
    if (bookId.includes(elm.id)) {
      console.log(bookId, elm.id);
      user_book.push(elm);
    }
  });

  console.log(user_book);
  return [
    user_book.length,

    <div style={{ display: "flex", overflowX: "auto" }}>
      {user_book.map((user_book) => (
        <Book
          key={user_book.id}
          image={user_book.image}
          booktitle={user_book.booktitle}
          style={{ marginRight: "10px" }}
        />
      ))}
    </div>,
  ];
}
