import {Button} from "reactstrap";
import React from 'react';
import "../../styles/Result.css";

const BookDetail = ({bookInfo}) => {
    return (
        <div className = "bookDetailBlock" >
            <div style = {{display: 'flex', justifyContent :'center'}}>
            <img src = {bookInfo?.image} alt="Book Cover" style = {{height: '250px', display: 'flex', alignItems :'center', justifyContent :'center'}} />
            </div>
            <h4 style = {{marginTop: '15px',  color: '#525f7f', fontWeight: 'bold'}}>책제목 : {bookInfo?.booktitle || bookInfo?.title}</h4>
            <div style = {{fontWeight: 'bold'}}> 작가 : {bookInfo?.author}</div>
            <div style= {{fontWeight: "bold", marginBottom: '15px'}}>출판사 : {bookInfo?.publisher}</div>
            <div style={{fontWeight: "normal"}}>{bookInfo?.description}</div>
        </div>
    )
}

export default BookDetail
