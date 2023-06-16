import React, { useState, useEffect } from "react";
import sample from "../assets/sample_book.json";
// import GetList from "../components/GetList";
// import { useParams } from "react-router-dom";
// import Booklist from "../components/BookList";


// 참고 사이트 : https://jurgen-94.tistory.com/24
// Booklist.js 참고해서 사용

function BookDetail({book_info}) {
  return (
    <div style={{backgroundColor: 'white', padding : '10px', width: '300px'}}>
      <h3 style={{color:'black'}}>상세 정보</h3>
      <img src = {book_info.image} alt="Book Cover" style = {{height: '250px'}}/>
      <div>{book_info.booktitle}</div>
      <div>{book_info.author}</div>
      <div>{book_info.description}</div>

    </div>
  );
}

export default function Showbookinfo() {
  const [pagenumber] = useState(sample[0])

  return (
    <>
    <div>
      <title> 책 상세정보이다. </title>
      <BookDetail/>
      <h5> 책 상세정보 끝났다. </h5>
    </div>
    </>
    
  );
} 

// const DetailPage = (props) => {
//   let { id } = useParams();

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <img src={process.env.PUBLIC_URL + "/${id}.png"} width="100%" />
//         </div>
//         <div className="col-md-6">
//           <h4 className="pt-5"> {props.book[id].booktitle} </h4>
//           <p> {props.book[id].auther} </p>
//           <p> {props.book[id].description} </p>
//           <button> 좋아용 </button>
//           <button> 읽음 </button>
//           <p />
//           <h4> 구매 링크 </h4>
//           <button> yes24 </button>
//           <button> 알라딘 </button>
//           <button> 교보문고 </button>
//           <button> 반디앤루니스 </button>
//         </div>
//       </div>
//     </div>
//   );
// };