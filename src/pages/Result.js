import React from "react";
import {useState} from "react";
// import { Link } from "react-router-dom";
import sample from "../assets/sample_book.json";
import "../styles/Result.css";

function Card({ children }) {
  return (
    <div
      className="card"
      style={{ backgroundColor: "gray", padding: "10px", width: "350px" }}
    >
      {children}
    </div>
  );
}

function BookRow(props) {
  const {book_info, setSelectedBookInfo} = props
  function handleClick(){
    setSelectedBookInfo(book_info)
  }
  return (
    <tr className = "bookRow" onClick={handleClick}>
      <td >{book_info.booktitle}</td>
      <td>{book_info.price}</td>
    </tr>
  );
}

function BookTable(props) {
  const {books_info, setSelectedBookInfo} = props
  return (
    <div style={{ backgroundColor: "white", padding: "10px", width: "300px" }}>
      <h3 style={{ color: "black" }}>책 목록</h3>
      <table>
        <thead>
          <tr>
            {/* <th>Title</th>
            <th>Price</th> */}
          </tr>
        </thead>
        <tbody>
          {books_info.map((book_info) => (
            <BookRow key={book_info.id} book_info={book_info} setSelectedBookInfo={setSelectedBookInfo}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}


function BookDetail({book_info}) {
  return (
    <div style={{backgroundColor: 'white', padding : '10px', width: '300px'}}>
      <h3 style={{color:'black'}}>상세 정보</h3>
      <img src = {book_info.image} alt="Book Cover" style = {{height: '250px'}}/>
      <div>{book_info.booktitle}</div>
      <div>{book_info.author}</div>

    </div>
  );
}


export default function Result() {
  const [selectedBookInfo, setSelectedBookInfo] = useState(sample[0]);
  
  return (
    <div style={{display:'flex'}}>
      <Card>
          <BookTable books_info={sample} setSelectedBookInfo={setSelectedBookInfo}/>;
      </Card>
      <Card>
        <BookDetail
        book_info = {selectedBookInfo}
        // 클릭되어 있는 텍스트 정보를 제공하기
        />
      </Card>
      <Card>
        {/* 클릭되어 있는 텍스트의 검색 결과 가져 오기 */}
      </Card>
    </div>
  );
}
