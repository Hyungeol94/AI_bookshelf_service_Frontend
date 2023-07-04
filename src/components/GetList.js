import React, { useState } from "react";
import "../styles/GetList.css";
import { Modal } from "reactstrap";

const Book = (props) => {
  // Book 표시 함수
  const [wishListCheck, setWishListCheck] = useState(false); // 찜 변수
  let [modalIsOpen, setModalIsOpen] = useState(false); // 모달 변수
  const [likeCheck, setLikeCheck] = useState(false); // 좋아요 변수
  const [cartCheck, setCartCheck] = useState(false); // 장바구니 변수
  // 좋아요 버튼 함수
  const likeBtnEvent = () => {
    if (likeCheck === false) {
      setLikeCheck(true);
    } else {
      setLikeCheck(false);
    }
  };
  // 찜 버튼 함수
  const wishListBtnEvent = () => {
    if (wishListCheck === false) {
      alert("찜하시겠습니까?"); // 찜 버튼에 얼럿 추가
      setWishListCheck(true);
    } else {
      alert("찜을 취소하시겠습니까?"); // 찜 버튼 해제 시 얼럿 추가
      setWishListCheck(false);
    }
  };
  // 장바구니 버튼 함수
  const cartBtnEvent = () => {
    if (cartCheck === false) {
      alert("장바구니에 넣으시겠습니까?"); // 장바구니 버튼에 얼럿 추가
      setCartCheck(true);
    } else {
      alert("장바구니에서 제거하시겠습니까?"); // 장바구니 버튼 해제 시 얼럿 추가
      setCartCheck(false);
    }
  };

  // 서재에 추가 함수 <<< 백엔드 연결할 때 수정 필요함
  const addToLibrary = async (id) => {
    try {
      const response = await fetch("/api/add-to-library", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      if (result.success) {
        alert("내 서재에 추가되었습니다.");
      } else {
        alert("내 서재에 추가하는데 실패하였습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // 서재에서 삭제 함수
  const removeFromLibrary = async (id) => {
    try {
      const response = await fetch("/api/remove-from-library", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      if (result.success) {
        alert("내 서재에서 삭제되었습니다.");
      } else {
        alert("내 서재에서 삭제하는데 실패하였습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // 모달창 함수
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // 반환값
  return [
    console.log(likeCheck, wishListCheck, cartCheck),
    <div>
      <div className="book-image">
        <img
          src={props.image}
          alt={props.booktitle}
          style={{ width: "80px", height: "80px" }}
          onClick={openModal}
        />
        <label onClick={openModal}> {props.booktitle} </label>
        <div className="modal-container">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentlabel="File Modal"
          >
            <div style={{ color: "black" }} className="book-info">
              <button style={{ float: "right" }} onClick={closeModal}>
                {" "}
                닫기{" "}
              </button>{" "}
              <br />
              <img
                src={props.image}
                alt={props.booktitle}
                style={{
                  width: 300,
                }}
              />
              <h2 style={{ color: "black" }}> {props.booktitle} </h2>
              <text style={{ color: "black" }}>
                Author: {props.author}{" "}
              </text>{" "}
              <p />
              <text style={{ color: "black" }}>
                description: {props.description}{" "}
              </text>
            </div>
            <div className="add-to-mybrary">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    addToLibrary(props.id);
                  } else {
                    removeFromLibrary(props.id);
                  }
                }}
              />
              <label>내 서재에 추가</label>
              <input
                type="checkbox"
                checked={likeCheck}
                onChange={likeBtnEvent}
              />
              <label> 좋아요 </label>
            </div>
            <div className="like-wishlist-cart">
              <input
                type="checkbox"
                checked={wishListCheck}
                onChange={wishListBtnEvent}
              />
              <label> 찜 </label>
              <input
                type="checkbox"
                checked={cartCheck}
                onChange={cartBtnEvent}
              />
              <label> 장바구니 </label>
            </div>
            <div className="buy-link">
              <button
                onClick={() =>
                  window.open(
                    `https://www.yes24.com/Product/Search?domain=ALL&query=${props.booktitle}`,
                    "_blank"
                  )
                }
              >
                Yes24{" "}
              </button>
              <button
                onClick={() =>
                  window.open(
                    `https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord=${props.booktitle}`,
                    "_blank"
                  )
                }
              >
                알라딘{" "}
              </button>
              <button
                onClick={() =>
                  window.open(
                    `https://search.kyobobook.co.kr/search?keyword=${props.booktitle}`,
                    "_blank"
                  )
                }
              >
                교보문고{" "}
              </button>{" "}
              <br />
            </div>
          </Modal>
        </div>
      </div>
    </div>,
  ];
}; // Book 끝나는 부분

export default function getlist(books_info) {
  return [
    books_info.length,
    <>
      <div className="book-container">
        {books_info.map((book_info) => (
          <Book
            key={book_info.id}
            image={book_info.image}
            booktitle={book_info.booktitle}
            author={book_info.author}
            description={book_info.description}
          />
        ))}
      </div>
    </>,
  ];
}
