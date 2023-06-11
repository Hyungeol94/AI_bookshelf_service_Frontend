import React from "react";
import "../styles/Home.css";
// import BookList from "../components/BookList";
// import sample from "../assets/sample_book.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div id="home">
      <h1>Home 이다.</h1>
      <a href="http://localhost:3000/bookshelf">
        <button>나의 서재</button>
      </a>
    </div>
  );
};
