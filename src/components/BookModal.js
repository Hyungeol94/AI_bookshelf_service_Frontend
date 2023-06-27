import React, { useState } from "react";
import "../styles/GetList.css";
import { Modal } from "reactstrap";
import AddBtns from "./AddBtns";


const BookModal = (props) => {
    let [modalIsOpen, setModalIsOpen] = useState(false); // 모달 변수

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
};

export default BookModal;