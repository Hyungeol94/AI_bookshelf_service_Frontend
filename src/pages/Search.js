/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { Select, MenuItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import BookList from "../components/BookList";
import bookinfo_api from "../services/bookinfo_api";
// import sampleBookImg from "../assets/img/sample_book.png";
// import sample from "../assets/sample_book.json";

export default (props) => {
  const location = useLocation();
  console.log(location.state.value);

  const [data, setData] = useState(props?.data || null);
  const [total, setTotal] = useState(props?.total || null);
  const [searchValue, setSearchValue] = useState(location.state.value);
  const [pageSize, setPageSize] = useState(10);
  const [isloading, setIsLoading] = useState(false);

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onChangePageSize = (e) => {
    setPageSize(e.target.value);
  };

  const onSearch = async () => {
    setIsLoading(true);
    await bookinfo_api(searchValue).then((data) => {
      // console.log(data);
      setData(data?.items);
      setTotal(data?.total);
    });
    setIsLoading(false);
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  useEffect(() => {
    setSearchValue(location.state.value);
    console.log(111, searchValue);
  }, [location]);

  useEffect(() => {
    onSearch(searchValue);
    console.log(222, searchValue);
  }, [searchValue]);

  let num = 1;

  return (
    <div
      id="search"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "5em",
      }}
    >
      <div>
        {/* <Link to="/bookshelf">
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
            onFocus={(e) => e.target.select()}
          ></input>
          <button id="search-btn" onClick={onSearch}>
            검색
          </button>
        </div> */}
        {isloading ? (
          <h3>로딩중..</h3>
        ) : total > 0 ? (
          <div>
            {data.map((book) => {
              return (
                <BookList
                  key={num++}
                  title={book?.title}
                  author={book?.author}
                  description={book?.description}
                  discount={book?.discount}
                  isbn={book?.isbn}
                  link={book?.link}
                  pubdate={book?.pubdate}
                  publisher={book?.publisher}
                  image={book?.image}
                />
              );
            })}
          </div>
        ) : (
          <div style={{ marginTop: "2em" }}>
            <h2>검색결과가 없습니다</h2>
          </div>
        )}
      </div>
    </div>
  );
};
