import React from "react";
import emptyBookImage from "../../assets/img/sample_book.png"

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
              bookInfo?.image ||              
              emptyBookImage
            }
            alt={bookInfo.booktitle}            
            style = {{width: '100%', height: '100%', objectFit: 'cover' }}            
          />
        </div>
        <div style = {{maxWidth: '358px'}}>
          <h6 style={{color: "black"}}>{bookInfo.title.length<=70? bookInfo.title: bookInfo.title.slice(0,70)+'...'}</h6>
          <h6 style={{color: "black", fontWeight: "normal", marginBottom: '0px'}}>{bookInfo.author}</h6>          
        </div>
      </div>
    </div>
  );
};

export default BookSearchResultRow;