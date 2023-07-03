import React from "react";

const BookSearchResultRow = (props) => { 
    const {bookInfo, setSelectedBookInfo} = props

    function handleClick(){
        setSelectedBookInfo(bookInfo)
        console.log("clicked")
    }

  return (
    <div onClick={handleClick} style={{marginBottom:'5px'}}>
      <div class="bookSearchRow" style={{display: "flex"}}>
        <div style = {{width: '40px', height: '50px'}}>
          <img
            src={
              bookInfo.image ||
              "/Users/edaumedo1/aivle0317/src/assets/img/sample_book.png"
            }
            alt={bookInfo.booktitle}            
            style = {{width : '40px', height: '50px'}}            
          />
        </div>
        <div>
          <h6 style={{color: "black"}}>{bookInfo.title.length<=50? bookInfo.title: bookInfo.title.slice(0,50)+'...'}</h6>
          <h6 style={{color: "black", fontWeight: "normal", marginBottom: '0px'}}>{bookInfo.author}</h6>          
        </div>
      </div>
    </div>
  );
};

export default BookSearchResultRow;