import React, { useState } from "react";
import "../styles/GetList.css";
import { Modal, ModalHeader, Button } from "reactstrap";
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
    <>
    <div style={{  width: "92px", height: "140px"}}>
      <div className="book-image"
        style={{margin:'auto'}}>
        <img
          src={props.image}
          alt={props.booktitle}
          style={{ width: "80px", height: "100px" }}
          onClick={openModal}
        />
        
      <label onClick={openModal} 
        style={{
          display: "block",
          overflow: "hidden", // 을 사용해 영역을 감출 것
          textOverflow: "ellipsis", // 로 ... 을 만들기
          whiteSpace: "nowrap",
          width: "80px",
          // marginTop: "25px",
          paddingTop: '0.2em',
          fontWeight: "bolder",
          margin:'auto'   
          }}>
        {props.booktitle}
      </label>

      </div>




    </div>

        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="File Modal"
          className="modal-box"
        >
        <ModalHeader className="justify-content-center">
        Bookpolio
        <Button
          className="btn-round btn-neutral btn-icon"
          onClick={closeModal}
        >
          <i className="tim-icons icon-simple-remove" />
        </Button>
      </ModalHeader>
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
    </>
  );
};

export default BookModal;