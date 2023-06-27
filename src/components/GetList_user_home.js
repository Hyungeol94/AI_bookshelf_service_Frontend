import React from "react";
import "../styles/GetList_home.css";
import "../styles/GetList.css";
import { Modal } from "reactstrap";
import AddBtns from "./AddBtns";
import { useState } from "react";
// import BookModal from "./BookModal"

const Book = (props) => {
  console.log(props)


  let [modalIsOpen, setModalIsOpen] = useState(false); // 모달 변수

  const openModal = () => {
      setModalIsOpen(true);
    };
  
  const closeModal = () => {
  setModalIsOpen(false);
    };



  return (<div style={{display: 'block'}}>
    <div className="book-image-home">
      <img
        src={props.image}
        alt={props.booktitle}
        style={{ width: "100px", height: "130px"}}
        onClick={ openModal }
      />
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
    <div style={{marginTop: '10px', width: "100px"}}>
    <h5 style={{fontSize: '1.1em', textAlign: 'center'}}> {props.booktitle} </h5>
    </div>
  </div>)
}

export default function Getlist(books_info, bookId) {
  
  let user_book = []

  books_info.forEach(elm => {
    if (bookId.includes(elm.id)) {
      // console.log(bookId, elm.id)
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
    </div>

  ];
}