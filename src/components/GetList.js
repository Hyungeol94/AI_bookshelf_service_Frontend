import React from "react";
// import BookList from "../components/BookList";

const Book = (props) => (
  <div>
    <div>
      <img
        src={props.image}
        alt={props.booktitle}
        width={80}
        height={80}
        style={{ marginRight: "10px" }}
      />
    </div>
    <h5>{props.booktitle}</h5>
  </div>
);

export default function getlist(books_info) {
  return [
    books_info.length,
    <div style={{ display: "flex", overflowX: "auto" }}>
      {books_info.map((book_info) => (
        <Book
          key={book_info.id}
          image={book_info.image}
          booktitle={book_info.booktitle}
          style={{ marginRight: "10px" }}
        />
      ))}
    </div>,
  ];
}
