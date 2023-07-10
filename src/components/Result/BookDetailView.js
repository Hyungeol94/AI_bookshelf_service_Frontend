/* eslint-disable import/no-anonymous-default-export */
import { Button } from "reactstrap";
import React from "react";
import BookDetail from "./BookDetail";
import "../../styles/Result.css";

export default (props) => {
  const {
    bookInfo,
    bookList,
    setBookList,
    addToBookList,
    selectedBookRowInfo,
  } = props;

  const handleClick = (e) => {
    console.log("clicked");
    addToBookList(bookInfo);
  };

  const changeBookRowInfo = (e) => {
    //속성 전체에 접근해서 바꾸는 로직
    Object.keys(bookInfo).forEach((key) => {
      selectedBookRowInfo[key] = bookInfo[key];
    });

    console.log("changed");
    setBookList([...bookList]); //immediate reflection of the change
  };

  return (
    <div className="bookDetailView" style={{ "border-radius": "15px" }}>
      <h3 className="viewHeader">
        상세 정보
      </h3>
      <BookDetail bookInfo={bookInfo} />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px", height: '10%' }}
      >
        <Button
          onClick={handleClick}
          style={{ width: "70%", display: "block", padding: '0px 0px', height: '75%' }}
        >
          책 목록에 추가
        </Button>
        <Button
          onClick={changeBookRowInfo}
          style={{ width: "70%", display: "block",  padding: '0px 0px', height: '75%' }}
        >
          이 책으로 변경
        </Button>
      </div>
    </div>
  );
};
