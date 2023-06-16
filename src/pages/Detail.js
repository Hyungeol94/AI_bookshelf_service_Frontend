import React, { useState, useEffect } from "react";
import Booklist from "../components/BookList";
import sample from "../assets/sample_book.json";
import GetList from "../components/GetList";
import { useParams } from "react-router-dom";

// 참고 사이트 : https://jurgen-94.tistory.com/24
// Booklist.js 참고해서 사용


const DetailPage = (props) => {
  let { id } = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL + "/${id}.png"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5"> {props.book[id].booktitle} </h4>
          <p> {props.book[id].auther} </p>
          <p> {props.book[id].description} </p>
          <button> 좋아용 </button>
          <button> 읽음 </button>
          <p />
          <h4> 구매 링크 </h4>
          <button> yes24 </button>
          <button> 알라딘 </button>
          <button> 교보문고 </button>
          <button> 반디앤루니스 </button>
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
//  OnClick 이용해서 책 페이지에서 상세 페이지로 이동하게 만들 것

// const Book = (props) => (
//   <div>
//     <div>
//     <h2> Book image </h2>
//       <img
//         src={props.image}
//         alt={props.booktitle}
//         width={300}
//         height={300}
//         style={{ marginRight: '10px' }}
//       />
//     </div>
//     <h5>{props.booktitle}</h5>
//     <button> 좋아용 </button>
//     <button> 읽음 </button>
//     <p/>
//     <h4> 구매 링크 </h4>
//     <button> yes24 </button>
//     <button> 알라딘 </button>
//     <button> 교보문고 </button>
//     <button> 반디앤루니스 </button>
//   </div>
// );

// function BookInfo() {
//   const [bookImage, setBookImage] = useState('');
//   const [bookName, setBookName] = useState('');
//   const [bookInfo, setBookInfo] = useState('');

//   useEffect(() => {
//     setTimeout(() => {
//       setBookImage(sample.image);
//       setBookName(sample.booktitle);
//       setBookInfo(sample.id);
//     }, 600);
//   }, []);

//   return (
//     <div>
//       <h2> test </h2>
//       <h3> {bookName} </h3>
//       <div>
//         <img src={bookImage} alt={bookName} width={300} height={300} />
//       </div>

//       <div> {bookInfo} </div>
//     </div>
//   );
// }

// export default BookInfo;
