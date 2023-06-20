import React from "react";
import "../../styles/BookList.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => { 
    const {book_info, setSelectedBookInfo} = props

    function handleClick(){
        setSelectedBookInfo(book_info)
        console.log("clicked")
    }

  return (
    <div onClick={handleClick}>
      <div class="bookRow" >
        <div>
        <img
          src={
            book_info.image ||
            "/Users/edaumedo1/aivle0317/src/assets/img/sample_book.png"
          }
          alt={book_info.booktitle}
          width={50}
          height={50}
        />
        
        </div>
        <h8>{book_info.title}</h8>
        <h8>{book_info.author}</h8>
      </div>
    </div>
  );
};
