import React, { useState } from "react";
import "../styles/GetList.css";
import { Modal } from "reactstrap";
import "../styles/GetList.css";


const Book = (props) => { // Book 표시 함수
  let [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
  <div>
    <div className="book-image">
      <img
        src={props.image}
        alt={props.booktitle}
        style={{ width: "80px", height: "80px"}}
        onClick={ openModal }
      />
      <label onClick={ openModal }> {props.booktitle} </label>
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="File Modal">

        {/* < BookDetail /> */}
        <div style={{ color: 'black' }} className="book-info">
        <img src={props.image} alt={props.booktitle} style ={{
          width: 300
        }}/>
        <h2 style={{ color: 'black' }}> {props.booktitle} </h2>
        <text style={{ color: 'black' }}>Author: {props.author} </text> <p/>
        <text style={{ color: 'black' }}>description: {props.description} </text>
      </div>
      <div className="like-wishlist-cart">
        <input type="checkbox" /><label> 좋아요 </label>
        <input type="checkbox" /><label> 찜 </label>
        <input type="checkbox" /><label> 장바구니 </label>
      </div>
      <div className="buy-link">
        <button> Yes24 </button>
        <button> 알라딘 </button>
        <button> 교보문고 </button> <br/>
        <button onClick={closeModal}> 닫기 </button>
      </div>
        
      </Modal>
    </div>
  </div>
);
}; // Book 끝나는 부분

export default function getlist(books_info) {
  return([ books_info.length,
    <>
    <div className="book-container">
      {books_info.map((book_info) => (
        <Book
          key={book_info.id}
          image={book_info.image}
          booktitle={book_info.booktitle}
          
        />
      ))}
    </div>
  </>
]);
};


// html 링크로 이동하는 버전 (혹시 필요해질 경우 대비)
// import BookDetail from "./GetBookDetail"
// import { useNavigate } from "react-router-dom";
// import BookList from "./BookList";
// import React, { useState } from "react";
// import "../styles/GetList.css";
// import { Modal } from "reactstrap";
// import "../styles/GetList.css";

// const Book = (props) => {
//   const navigate = useNavigate()

//   const handleClick = () => {
//     navigate(`/bookshelf/detail/${props.id-1}`);
//   }

//   return (
//   <div>
//     <div className="book-image">
//       <img
//         src={props.image}
//         alt={props.booktitle}
//         style={{ width: "80px", height: "80px"}}
//         onClick={handleClick}
//       />
//     </div>
//   </div>
// );
// };
  
// export default function getlist(books_info){ 
//     return ([
//       books_info.length,
//       <div className="book-container">
//       {books_info.map((book_info) => (
//       <Book
//         key={book_info.id}
//         image={book_info.image}
//         booktitle={book_info.booktitle}
//         id={book_info.id}
      
//       />
//     ))}
//     </div>
//   ])}