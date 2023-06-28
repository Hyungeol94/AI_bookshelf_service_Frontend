import {Button} from "reactstrap";
import React from 'react';
import "../../styles/Result.css";

const BookDetail = ({bookInfo}) => {
    return (
        <div className = "bookDetailBlock">
            <img src = {bookInfo?.image} alt="Book Cover" style = {{height: '250px'}}/>
            <div>책제목 : {bookInfo?.booktitle || bookInfo?.title}</div>
            <div>작가 : {bookInfo?.author}</div>
            <div style={{fontWeight: "normal"}}>출판사 : {bookInfo?.publisher}</div>
            <div style={{fontWeight: "normal"}}>상세 : {bookInfo?.description}</div>
        </div>
    )
}

export default BookDetail
