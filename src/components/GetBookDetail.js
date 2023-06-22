import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import sample from "../assets/sample_book.json";
import { Modal } from "reactstrap";

// 참고 사이트 : https://jurgen-94.tistory.com/24
// Booklist.js 참고해서 사용
const BookDetail = (props) => {
  let [modalIsOpen, setModalIsOpen] = useState(false);
  // let id = props.id;
  // let booktitle = props.booktitle;
  // let author = props.author;
  // let description = porps.description;
  // let [id, image, booktitle, author, description] = useState();
  const {id, image, booktitle, author, description} = props;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);

  return (
    <div>
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="File Modal">

        {/* < BookDetail /> */}
        <div style={{ color: 'black' }} className="book-info">
        <button style={{ float:"right" }} onClick={closeModal}> 닫기 </button> <br/>
        <img src={image} alt={booktitle} style ={{
          width: 300
        }}/>
        <h2 style={{ color: 'black' }}> {booktitle} </h2>
        <text style={{ color: 'black' }}>Author: {author} </text> <p/>
        <text style={{ color: 'black' }}>description: {description} </text>
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
        
      </div>
        
      </Modal>
    </div>
  )
};
};

export default BookDetail;
