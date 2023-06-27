import React, { useState } from "react";
import "../styles/GetList.css";
import { Modal } from "reactstrap";
import AddBtns from "./AddBtns";
// import Modal from '@mui/material/Modal';
// import BookDetail from "./GetBookDetail";

const Book = (props) => {
  // Book 표시 함수
  let [modalIsOpen, setModalIsOpen] = useState(false); // 모달 변수

  // 모달창 함수
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // 반환값
  return (
    <div>
      <div className="book-image">
        <img
          src={props.image}
          alt={props.booktitle}
          style={{ width: "80px", height: "80px" }}
          onClick={openModal}
        />
        <label onClick={openModal} style={{ width: "80px" }}>
          {" "}
          {props.booktitle}{" "}
        </label>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="File Modal"
            className="modal-box"
          >
            <div>
              <button
                style={{ float: "right" }}
                onClick={closeModal}
                className="close-btn"
              >
                {" "}
                닫기{" "}
              </button>{" "}
              <br />
              <div style={{ color: "black" }} className="book-info">
                <img
                  src={props.image}
                  alt={props.booktitle}
                  className="modal-image"
                />
                <h2 style={{ color: "black", "margin-bottom": "4px" }}>
                  {" "}
                  {props.booktitle}{" "}
                </h2>
                <h4 style={{ color: "black", "margin-bottom": "4px" }}>
                  {" "}
                  {props.author}{" "}
                </h4>{" "}
                <p />
                <text style={{ color: "black" }} className="description-box">
                  {" "}
                  {props.description}{" "}
                </text>
              </div>
            </div>
            <AddBtns booktitle={props.booktitle} />
          </Modal>
        </div>
      </div>
    </div>
  );
}; // Book 끝나는 부분

export default function getlist(books_info, bookId) {
  let user_book = [];

  books_info.forEach((elm) => {
    if (bookId.includes(elm.id)) {
      // console.log(bookId, elm.id);
      user_book.push(elm);
    }
  });

  return [
    user_book.length,

    <div style={{ display: "flex", overflowX: "auto" }}>
      {user_book.map((user_book) => (
        <Book
          key={user_book.id}
          image={user_book.image}
          booktitle={user_book.booktitle}
          author={user_book.author}
          description={user_book.description}
          id={user_book.id}
        />
      ))}
    </div>,
  ];
}
