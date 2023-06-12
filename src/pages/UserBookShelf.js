import React from "react";
import BookList from "../components/BookList";
import sample from "../assets/sample_book.json";

// eslint-disable-next-line import/no-anonymous-default-export
function getlist(books_info){ 
  return (
    <div style={{display : "flex"}}>
    {books_info.map((book) => (
    <BookList key={book.id} image={book.image} booktitle={book.booktitle}/>
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


const MyLibrary = () => {
  return (
    <div>
      <h1>나의 서재</h1>      
      <h2>최근 추가한 항목</h2>      
      {get_recentlyAdded_list(sample)}
      <h2>전체 보기</h2>      
      {getlist(sample)}
    </div>
  );
};

export default MyLibrary;