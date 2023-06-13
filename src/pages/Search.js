/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "../styles/Home.css";
import { Select, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import BookList from "../components/BookList";
import bookinfo_api from "../services/bookinfo_api";
import sampleBookImg from "../assets/img/sample_book.png";
// import sample from "../assets/sample_book.json";

export default () => {
  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onChangePageSize = (e) => {
    setPageSize(e.target.value);
  };

  const onSearch = async () => {
    setData(await bookinfo_api(searchValue, pageSize));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  let num = 1;

  return (
    <div id="search">
      <h1>검색창 이다.</h1>
      <Link to="/bookshelf">
        <button>나의 서재</button>
      </Link>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={pageSize}
        label="페이지수"
        style={{ height: "2em" }}
        onChange={onChangePageSize}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
      <div>
        <input
          id="search-item"
          onChange={onChange}
          onKeyDown={handleOnKeyPress}
        ></input>
        <button
          id="search-btn"
          onClick={async () => await onSearch(searchValue)}
        >
          검색
        </button>
      </div>
      {data ? (
        <div>
          {data.map((book) => {
            return (
              <BookList
                key={num++}
                booktitle={book?.elements[0]?.elements[0]?.cdata}
                image={sampleBookImg}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <h3>검색결과가 없습니다</h3>
        </div>
      )}
      {/* <p>bookinfo</p> */}
    </div>
  );
};
