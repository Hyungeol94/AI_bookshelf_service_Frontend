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
        <h3 style= {{color: 'black'}}>제목 : {props.booktitle} </h3>
      </div>
    </div>
  );
};
