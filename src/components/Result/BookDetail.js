import {Button} from "reactstrap";
import React from 'react';

const BookDetail = ({book_info}) => {
    return (
      <div style={{backgroundColor: 'white', padding : '10px', width: '300px'}}>
        <h3 style={{color:'black'}}>상세 정보</h3>
        <img src = {book_info.image} alt="Book Cover" style = {{height: '250px'}}/>
        <div>{book_info.booktitle}</div>
        <div>{book_info.author}</div>
        <Button style={{width:'200px',display: 'block'}}>책 목록에 추가하기</Button>
      </div>
    );
  }

export default BookDetail;