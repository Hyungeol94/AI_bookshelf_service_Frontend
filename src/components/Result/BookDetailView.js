import {Button} from "reactstrap";
import React from 'react';
import {useState, useEffect} from 'react';
import BookDetail from './BookDetail'
import "../../styles/Result.css";



const BookDetailView = (props) => {
    const {book_info, bookList, setBookList, addToBookList, selectedBookRowInfo} = props
 
    const handleClick = (e) => {
      console.log('clicked')
      addToBookList(book_info)
    }

    const changeBookRowInfo = (e) => {
      //속성 전체에 접근해서 바꾸는 로직
      Object.keys(book_info).forEach((key) => {
        selectedBookRowInfo[key] = book_info[key];
      })

      console.log('changed')
      setBookList([...bookList]) //immediate reflection of the change
    } 

    return (
      <div className="bookDetailView">
        <h3 className="viewHeader">상세 정보</h3>
        <BookDetail
          book_info = {book_info}
        />        
        <div style={{display: 'flex'}}>
          <Button onClick = {handleClick} style={{maxHeight: '5%', width:'200px',display: 'block'}}>책 목록에 추가</Button>
          <Button onClick = {changeBookRowInfo} style={{maxHeight: '5%', width:'200px',display: 'block'}}>이 책으로 바꾸기</Button>
        </div>
      </div>
    );
  }

export default BookDetailView;