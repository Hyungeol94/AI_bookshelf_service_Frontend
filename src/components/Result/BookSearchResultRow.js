import React from "react";
import "../../styles/BookList.css";


const BookSearchResultRow = (props) => { 
    const {book_info, setSelectedBookInfo} = props

    function handleClick(){
        setSelectedBookInfo(book_info)
        console.log("clicked")
    }

  return (
    <div onClick={handleClick}>
      <div class="bookRow" style={{display: "flex"}}>
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
        <div>
          <h6 style={{color: "black"}}>{book_info.title}</h6>
          <h6 style={{color: "black", fontWeight: "normal"}}>{book_info.author}</h6>
        </div>
      </div>
    </div>
  );
};

export default BookSearchResultRow;