import {Button} from "reactstrap";
import React from 'react';
import {useState, useEffect} from 'react';
import BookDetail from './BookDetail'
import "../../styles/Result.css";



const BookDetailView = (props) => {
    const {bookInfo, bookList, setBookList, addToBookList, selectedBookRowInfo} = props
 
    const handleClick = (e) => {
      console.log('clicked')
      addToBookList(bookInfo)
    }

    const changeBookRowInfo = (e) => {
      //속성 전체에 접근해서 바꾸는 로직
      if (bookInfo!== undefined && bookList.length!==0){
      Object.keys(bookInfo).forEach((key) => {
        selectedBookRowInfo[key] = bookInfo[key];
      })

      console.log('changed')
      setBookList([...bookList]) //immediate reflection of the change
    }
    else{
      window.alert("선텍된 책이 없습니다.")
    }
    } 

    return (
      <div className="bookDetailView" style={{"border-radius":"15px"}} >
        <h3 className="viewHeader"style={{"font-size":"30px"}}>상세 정보</h3>
        <BookDetail
          bookInfo = {bookInfo}
        />        
        <div style={{display: 'flex', justifyContent: 'center', marginTop: "10px"}}>
          <Button onClick = {handleClick} style={{width: '70%', display: 'block'}}>책 목록에 추가</Button>
          <Button onClick = {changeBookRowInfo} style={{width: '70%', display: 'block'}}>이 책으로 변경</Button>
        </div>
      </div>
    );
  }

export default BookDetailView;