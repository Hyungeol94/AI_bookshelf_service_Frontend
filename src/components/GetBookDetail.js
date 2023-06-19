import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import sample from "../assets/sample_book.json";

// 참고 사이트 : https://jurgen-94.tistory.com/24
// Booklist.js 참고해서 사용

// function BookDetail({book_info}) {
//   return (
//     <div style={{backgroundColor: 'white', padding : '10px', width: '300px'}}>
//       <h3 style={{color:'black'}}>상세 정보</h3>
//       <img src = {book_info.image} alt="Book Cover" style = {{height: '250px'}}/>
//       <div>{book_info.booktitle}</div>
//       <div>{book_info.author}</div>
//       <div>{book_info.description}</div>

//     </div>
//   );
// }

// export default function Showbookinfo() {
//   const [pagenumber] = useState(sample[0])

//   return (
//     <>
//     <div>
//       <h3> 책 상세정보이다. </h3>
//       <BookDetail/>
//       <h5> 책 상세정보 끝났다. </h5>
//     </div>
//     <div>
//       <h4> 구매 링크 </h4>
//       <button> yes24 </button>
//       <button> 알라딘 </button>
//       <button> 교보문고 </button>
//       <button> 반디앤루니스 </button>
//     </div>
//     </>
    
//   );
// } 

const BookDetail = (props) => {
  let {id} = useParams()
  const book = sample[id];

  if (!book) { // 불러오지 못했을 때
    return <div> Book not found </div>
  } 
  return (
    <div>
      <img src={sample[id].image} alt={sample[id].booktitle} style ={{
        width: 300
      }}/>
      <h2>{sample[id].booktitle}</h2>
      <p>description: {sample[id].description}</p>
      <p>Author: {sample[id].author}</p>
      
    </div>
  );
};

export default BookDetail