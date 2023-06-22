import React from "react";
import "../styles/BookList.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  console.log(props);
  return (
    <div>
      <div class="booklist">
        <img
          src={
            props.image ||
            "/Users/edaumedo1/aivle0317/src/assets/img/sample_book.png"
          }
          alt={props.booktitle}
          width={50}
          height={50}
        />
        <div>
          <h3>제목 : {props.booktitle}</h3>
          <h8>{props?.title}</h8>
          <h8>{props?.author}</h8>
          <h8>{props?.description}</h8>
          <h8>{props?.discount}</h8>
          <h8>{props?.isbn}</h8>
          <h8>{props?.link}</h8>
          <h8>{props?.pubdate}</h8>
          <h8>{props?.publisher}</h8>
          <h8>{props?.image}</h8>
        </div>
      </div>
    </div>
  );
};
