import {Button} from "reactstrap";
import React from 'react';
import BookDetail from './BookDetail'
import "../../styles/Result.css";

const BookDetailView = (props) => {
    const {book_info, addToBookList} = props
    const handleClick = (e) => {
      console.log('clicked')
      addToBookList(book_info)
    }

    return (
      <div className="bookDetailView">
        <h3 className="viewHeader">상세 정보</h3>
        <BookDetail
          book_info = {book_info}
        />        
        <Button onClick = {handleClick} style={{width:'200px',display: 'block'}}>책 목록에 추가하기</Button>
      </div>
    );
  }

export default BookDetailView;