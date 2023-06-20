import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import sample from "../assets/sample_book.json";
import { Modal } from "reactstrap";

// 참고 사이트 : https://jurgen-94.tistory.com/24
// Booklist.js 참고해서 사용
const BookDetail = () => {
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

// ------------------------

// const BookDetail = (props) => {
//   let {id} = useParams()
//   const Book = () => { // Book 표시 함수
//     let [modalIsOpen, setModalIsOpen] = useState(false);
//     const openModal = () => {
//       setModalIsOpen(true);
//     };
  
//     const closeModal = () => {
//       setModalIsOpen(false);
//     };

  
//   return (
//     <div>
//     <div className="book-image">
//       <img
//         src={props.image}
//         alt={props.booktitle}
//         style={{ width: "80px", height: "80px"}}
//         onClick={ openModal }
//       />
//       <Modal
//       isOpen={modalIsOpen}
//       onRequestClose={closeModal}
//       contentLabel="File Modal">

//       <div>
//         <img src={sample[id].image} alt={sample[id].booktitle} style ={{
//           width: 300
//         }}/>
//         <h2>{sample[id].booktitle}</h2>
//         <p>description: {sample[id].description}</p>
//         <p>Author: {sample[id].author}</p>
//       </div>
        
//       </Modal>
//     </div>
//   </div>
    
//     );
//   };
// };

// export default BookDetail

