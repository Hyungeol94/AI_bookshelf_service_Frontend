/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
// import BookList from "../components/BookList";
import bookinfo_api from "../services/bookinfo_api";
// import sample from "../assets/sample_book.json";

export default () => {
  const [data, setData] = useState(null);
  const [searchvalue, setSearchvalue] = useState(null);

  const onChange = (e) => {
    console.log(data); //이벤트가 발생한 타겟의 요소를 출력
    setSearchvalue(e.target.value);
    console.log(searchvalue); //이벤트가 발생한 타겟의 Value를 출력
  };

  const onSearch = async () => {
    const res = await bookinfo_api(searchvalue);
    await setData(res);
    console.log("data", data);
  };

  return (
    <div id="search">
      <h1>검색창 이다.</h1>
      <Link to="/bookshelf">
        <button>나의 서재</button>
      </Link>
      <div>
        <input id="search-item" onChange={onChange}></input>
        <button
          id="search-btn"
          onClick={async () => await onSearch(searchvalue)}
        >
          검색
        </button>
      </div>
      {/* <p>bookinfo</p> */}
      {/* {data.map((book) => (
        <BookList key={book.id} booktitle={book.booktitle} image={book.image} />
      ))} */}
    </div>
  );
};
