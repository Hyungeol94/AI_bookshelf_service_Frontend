import {Button} from "reactstrap";
import React from 'react';
import "../../styles/Result.css";

const BookDetail = ({book_info}) => {
    return (
        <div className = "bookDetailBlock">
            <img src = {book_info.image} alt="Book Cover" style = {{height: '250px'}}/>
            <div>책제목 : {book_info.booktitle || book_info.title}</div>
            <div>작가 : {book_info.author}</div>
            <div style={{fontWeight: "normal"}}>출판사 : {book_info.publisher}</div>
            <div style={{fontWeight: "normal"}}>상세 : {book_info.description}</div>
        </div>
    )
}

export default BookDetail
