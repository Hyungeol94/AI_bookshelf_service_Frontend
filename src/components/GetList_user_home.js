import React, { useState, useEffect } from "react";
import "../styles/GetList_home.css";
// import "../styles/GetList.css";
import { Modal, Button } from "reactstrap";
import AddBtns from "./AddBtns";
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

  function truncateText(str, maxChar) {
    if (str.length > maxChar) {
      return str.slice(0, maxChar) + '...';
    }
    return str;
  }
  

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
            contentlabel="File Modal"
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
                <h2 style={{ color: "black", "marginBottom": "4px" }}>
                  {" "}
                  {props.booktitle}{" "}
                </h2>
                <h4 style={{ color: "black", "marginBottom": "4px" }}>
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
    <h5
  style={{
    fontSize: '1.1em',
    textAlign: 'center',
  }}
>
  {truncateText(props.booktitle, 15)} {/* 원하는 글자수로 변경 */}
</h5>
    </div>
  </div>)
}

export default function Getlist(books_info, bookId) {
  
  let user_book = []
  // 좌우함수 2 // <Scroll direction="left" /> 형태로 좌우 500px 읻종
  const Scroll = ({ direction, scrollParent }) => {
    const handleScroll = () => {
      const { scrollY } = window;
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const move = () => {
      const scrollX = direction === "left" ? -500 : 500;
      const scrollDivs = document.querySelectorAll(`.${scrollParent}`);
  
      if (scrollDivs) {
        scrollDivs.forEach((scrollDiv) => {
          if (scrollDiv.style.overflowX === "auto") {
            scrollDiv.scrollTo({ left: scrollX, behavior: "smooth" });
          }
        });
      }
    };
  
    return (
      <button
        onClick={move}
        aria-label={direction}
        style={{
          maxHeight: "70px",
          fontSize: "60px",
          backgroundColor: "transparent",
          marginTop: "50px",
          marginLeft: "10px",
          marginRight: "10px",
          border: "none",
          color: "white",
        }}
      >
        <strong>{direction === "left" ? "<" : ">"}</strong>
      </button>
    );
  };
  


  books_info.forEach(elm => {
    if (bookId.includes(elm.id)) {
      // console.log(bookId, elm.id)
      user_book.push(elm);
    }
  });

  return [
    user_book.length,
    <div style={{ display: "flex" }}>
      <Scroll direction="left" scrollParent="scrollingDiv" />
  
      <div
        className="scrollingDiv"
        style={{ display: "flex", overflowX: "auto" }}
      >
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
      <Scroll direction="right" scrollParent="scrollingDiv" />
    </div>,
  ];
  
}