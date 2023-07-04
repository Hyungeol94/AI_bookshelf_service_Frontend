/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Button } from "reactstrap";
import BookTable from "./BookTable";
import ReUploadButton from "./ReUploadButton";
import "../../styles/Result.css";
import * as api from "../../services/api";

import {
  // Link, Route, Routes,
  useNavigate,
} from "react-router-dom";

export default (props) => {
  const {
    setSelectedBookRowInfo,
    setSelectedBookInfo,
    selectedBookRowInfo,
    deleteFromBookList,
    setSearchValue,
    isDecidedBook,
    searchValue,
    bookInfoAPI,
    booksInfo,
    isLoading,
    onSearch,
    data,
  } = props;
  const navigate = useNavigate();

  const searchBookInfo = async (bookInfo) => {
    console.log("searched");
    const fetchedData = await bookInfoAPI(bookInfo.title, 1);
    if (
      fetchedData !== undefined &&
      fetchedData &&
      fetchedData.items.length !== 0
    ) {
      return fetchedData.items[0];
    } else {
      return {};
    }
  };

  const saveToMyBookshelf = () => {
    console.log("clicked");
    const uniqueBooksInfo = Array.from(new Set(booksInfo));
    const newBooksInfo = [];
    const promises = uniqueBooksInfo.map((bookInfo) => {
      if (bookInfo.isbn === undefined) {
        return searchBookInfo(bookInfo);
      } else {
        return Promise.resolve(bookInfo);
      }
    });

    Promise.all(promises).then((results) => {
      newBooksInfo.push(...results);
      console.log([...newBooksInfo]);
      newBooksInfo.forEach(async (bookInfo) => {
        if (Object.keys(bookInfo).length !== 0) {
          //save this bookInfo to myBookShelf DB
          await api.addbookshelf(bookInfo);
        }
      });
      navigate("/bookshelf", { replace: true });
    });
  };

  const handleSaveToMyBookshelf = (e) => {
    if (booksInfo.length !== 0) {
      let reply = window.confirm("내 서재로 저장하시겠습니까?");
      if (reply) {
        saveToMyBookshelf();
      }
    } else {
      window.alert("책 목록이 비어있습니다. 저장을 수행할 수 없습니다.");
    }
  };

  return (
    <div className="bookTableView" style={{ "border-radius": "15px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 className="viewHeader">책 목록</h3>
        <h4 className="reUpload">
          <ReUploadButton />
        </h4>
      </div>
      {/* <h3 className="viewHeader">책 목록</h3> */}
      <BookTable
        booksInfo={booksInfo}
        setSelectedBookInfo={setSelectedBookInfo}
        selectedBookRowInfo={selectedBookRowInfo}
        setSelectedBookRowInfo={setSelectedBookRowInfo}
        deleteFromBookList={deleteFromBookList}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSearch={onSearch}
        isDecidedBook={isDecidedBook}
        isLoading={isLoading}
        data={data}
      />
      <Button
        onClick={handleSaveToMyBookshelf}
        style={{ width: "70%", display: "block" }}
      >
        내 서재로 저장
      </Button>
    </div>
  );
};
