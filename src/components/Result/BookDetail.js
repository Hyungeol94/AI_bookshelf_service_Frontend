/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../styles/Result.css";
import emptyBookImage from "../../assets/img/sample_book.png";

const BookDetail = ({ bookInfo }) => {
  return (
    <div className="bookDetailBlock">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={bookInfo?.image || emptyBookImage}
          // alt="Book Cover"
          style={{
            height: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
      <h4 style={{ marginTop: "15px", color: "#525f7f", fontWeight: "bold" }}>
        {bookInfo?.booktitle || bookInfo?.title}
      </h4>
      <div style={{ fontWeight: "bold" }}>
        {" "}
        {bookInfo?.author || "검색결과 없음"}
      </div>
      <div style={{ fontWeight: "bold", marginBottom: "15px" }}>
        {bookInfo?.publisher}
      </div>
      <div style={{ fontWeight: "normal" }}>{bookInfo?.description}</div>
    </div>
  );
};

export default BookDetail;
