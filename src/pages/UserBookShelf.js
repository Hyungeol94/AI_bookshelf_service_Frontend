import React from "react";
import BookList from "../components/BookList";
import sample from "../assets/sample_book.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <h1>나의 서재</h1>
      {sample.map((book) => (
        <BookList key={book.id} booktitle={book.booktitle} image={book.image} />
      ))}
    </div>
  );
};
