import React from "react";

const BookSearchResultRow = (props) => { 
    const {bookInfo, setSelectedBookInfo} = props

    function handleClick(){
        setSelectedBookInfo(bookInfo)
        console.log("clicked")
    }

  return (
    <div onClick={handleClick}>
      <div class="bookSearchRow" style={{display: "flex"}}>
        <div>
          <img
            src={
              bookInfo.image ||
              "/Users/edaumedo1/aivle0317/src/assets/img/sample_book.png"
            }
            alt={bookInfo.booktitle}            
            width={50}
            height={50}
          />
        </div>
        <div>
          <h6 style={{color: "black"}}>{bookInfo.title}</h6>
          <h6 style={{color: "black", fontWeight: "normal"}}>{bookInfo.author}</h6>          
        </div>
      </div>
    </div>
  );
};

export default BookSearchResultRow;