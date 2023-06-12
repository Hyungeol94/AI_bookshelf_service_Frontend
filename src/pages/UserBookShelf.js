import React from "react";
import BookList from "../components/BookList";
import sample from "../assets/sample_book.json";

const Book = (props) => (
  <div>
    <div>
      <img src={props.image} 
      alt={props.booktitle} 
      width={80} 
      height={80}
      style = {{marginRight : "10px"}}
      />
    </div>
    <h5>{props.booktitle}</h5>
  </div>
);


// eslint-disable-next-line import/no-anonymous-default-export
function getlist(books_info){ 
  return (
    <div style={{display : "flex", overflowX: "auto"}}>
    {books_info.map((book_info) => (
    <Book
      key={book_info.id}
      image={book_info.image}
      booktitle={book_info.booktitle}
      style = {{marginRight : "10px"}}
    />
  ))}
  </div>
)}

function trim(books_info, includeCount){
  let res = []
  for (let i =0;i<books_info.length;i++){
    if (books_info[i].id <= includeCount){
      res.push(books_info[i])
    }
  }
  return res
}


function get_recentlyAdded_list(books_info){ 
  const includeCount = 3;
  let res = trim(books_info, includeCount)
  return getlist(res)
}

function get_likes_list(books_info){
  return getlist(books_info) //이후 수정 필요
}

const MyLibrary = () => {
  return (
    <div>
      <h1>나의 서재</h1>      
      <h2>최근 추가한 항목</h2>      
      {get_recentlyAdded_list(sample)}
      <h2>전체 보기</h2>      
      {getlist(sample)}
      <h2>좋아요</h2>
      {get_likes_list(sample)}
    </div>
  );
};

export default MyLibrary;