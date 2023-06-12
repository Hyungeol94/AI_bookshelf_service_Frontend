import React from "react";
import BookList from "../components/BookList";
import sample from "../assets/sample_book.json";

// eslint-disable-next-line import/no-anonymous-default-export
function getlist(books_info){ 
  return (
    <div>
    {books_info.map((book) => (
    <BookList key={book.id} image={book.image} booktitle={book.booktitle}/>
  ))}
  </div>
)}

function trim(books_info){
  let res = []
  for (let i =0;i<books_info.length;i++){
    if (books_info[i].id <= 3){
      res.push(books_info[i])
    }
  }
  return res
}


function get_trimmed_list(books_info){ 
  const includeCount = 3;
  let res = trim(books_info)
  return getlist(res)
}


export default () => {
  const includeCount = 3
  return (
    <div>
      <h1>나의 서재</h1>      
      {getlist(sample)}

      <h2>최근 추가한 항목</h2>      
      {get_trimmed_list(sample)}
    </div>
  );
};
