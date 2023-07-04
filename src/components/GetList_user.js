import React, { useState } from "react";
import "../styles/GetList.css";
import { Modal } from "reactstrap";
import AddBtns from "./AddBtns";
import BookModal from "./BookModal";
// import Modal from '@mui/material/Modal';
// import BookDetail from "./GetBookDetail";

export default function getlist(books_info, bookId) {
  let user_book = [];

  books_info.forEach((elm) => {
    if (bookId.includes(elm.id)) {
      // console.log(bookId, elm.id);
      user_book.push(elm);
    }
  });

  return [
    user_book.length,

    <div style={{ display: "flex", overflowX: "auto" }}>
      {user_book.map((user_book) => (
        <BookModal
          key={user_book.id}
          image={user_book.image}
          booktitle={user_book.booktitle}
          author={user_book.author}
          description={user_book.description}
          id={user_book.id}
        />
      ))}
    </div>,
  ];
}
