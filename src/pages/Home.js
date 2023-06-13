import React from "react";
import "../styles/Home.css";
import sample from "../assets/sample_book.json";
import getlist from "../components/GetList"
import { Link } from "react-router-dom";
// import BookList from "../components/BookList";
// import sample from "../assets/sample_book.json";

// eslint-disable-next-line import/no-anonymous-default-export
let [totalBook_count, totalBook_list] = getlist(sample);

export default () => {
  return (
    <div id="home">
      <h1>Home</h1>   
      <h2>추천 도서</h2>      
      {totalBook_list}
      <h2>나의 서재(총 {totalBook_count}개)</h2>      
      {totalBook_list}
      <Link to="/bookshelf">
        <button>나의 서재</button>
      </Link>
      <Link to="/search">
        <button>검색창</button>
      </Link>
    </div>    
  );
};