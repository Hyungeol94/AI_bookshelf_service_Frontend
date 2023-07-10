import React, { useState } from "react";
import "../styles/GetList.css";
// import "../styles/GetList_home.css";
import { Modal, ModalHeader, Button } from "reactstrap";
import { lightBlue, teal } from "@mui/material/colors";
import { IconButton } from "@mui/material";

import * as api from "../services/api";

import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart,
  ShoppingCart,
  LibraryAddOutlined,
  LibraryAddCheck,
  Clear
} from "@mui/icons-material";

const BookModal = (props) => {
  const [like, setLike] = useState(
    props?.likecheck?.includes(props?.isbn) || false
  );
  const [cart, setCart] = useState(
    props?.cartcheck?.includes(props?.isbn) || false
  );
  const [bookshelf, setBookshelf] = useState(
    props?.bookshelfcheck?.includes(props?.isbn) || false
  );

  const request = {
    title: props?.booktitle,
    author: props?.author,
    description: props?.description,
    discount: props?.discount,
    isbn: props?.isbn,
    link: props?.link,
    pubdate: props?.pubdate,
    publisher: props?.publisher,
    image: props?.image,
  };

  const handleHeart = async () => {
    if (like) {
      setLike(false);
      await api.deletelike(request);
      // window.location.reload(); // 페이지 새로고침
    } else {
      setLike(true);
      await api.addlike(request);
    }
  };

  const handleCart = async () => {
    if (cart) {
      // eslint-disable-next-line no-restricted-globals
      let delete_cart = confirm("장바구니에서 삭제하시겠습니까?");
      if (delete_cart === true) {
        setCart(false);
        await api.deletecart(request);
        // window.location.reload(); // 페이지 새로고침
      }
    } else {
      // eslint-disable-next-line no-restricted-globals
      let add_cart = confirm("장바구니에 추가하겠습니까?");
      if (add_cart === true) {
        setCart(true);
        await api.addcart(request);
      }
    }
  };

  const handleBookshelf = async () => {
    if (bookshelf) {
      // eslint-disable-next-line no-restricted-globals
      let delete_bookshelf = confirm("내 서제에서 삭제하시겠습니까?");
      if (delete_bookshelf === true) {
        setBookshelf(false);
        await api.deletebookshelf(request);
      }
    } else {
      // eslint-disable-next-line no-restricted-globals
      let add_bookshelf = confirm("내 서재에 추가하시겠습니까?");
      if (add_bookshelf === true) {
        setBookshelf(true);
        await api.addbookshelf(request);
      }
    }
  };

  let [modalIsOpen, setModalIsOpen] = useState(false); // 모달 변수

  const openModal = () => {
    setModalIsOpen(true);
    setLike(props?.likecheck?.includes(props?.isbn) || false);
    setCart(props?.cartcheck?.includes(props?.isbn) || false);
    setBookshelf(props?.bookshelfcheck?.includes(props?.isbn) || false);
  };

  const closeModal = async () => {
    setModalIsOpen(false);
    if (props.setBookshelflist && bookshelf === false) {
      await api.bookshelflist().then((data) => {
        const booklist = data?.data?.info?.list;
        props.setBookshelflist(booklist);
      });
    }
  };
  // 반환값

  return (
    <>
      <div style={{ width: "130px", height: "160px", margin: "auto" }}>
        <div
          className="book-image"
          style={{
            margin: "auto",
            width: "130px",
            height: "150px",
          }}
        >
          <img
            src={props.image}
            alt={props.booktitle}
            style={{ width: "110px", height: "140px" }}
            onClick={openModal}
          />

          <label
            onClick={openModal}
            style={{
              display: "block",
              overflow: "hidden", // 을 사용해 영역을 감출 것
              textOverflow: "ellipsis", // 로 ... 을 만들기
              whiteSpace: "nowrap",
              width: "110px",
              paddingTop: "0.2em",
              fontWeight: "bolder",
              color: "#ffffff",
            }}
          >
            {props.booktitle}
          </label>
        </div>
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentlabel="File Modal"
          className="modal-box"
          style={{}}
        >
          <ModalHeader className="justify-content-center">
          <p>상세정보</p>
          <Button className="btn-round btn-neutral" onClick={closeModal}>
            <Clear size={12} />
          </Button>
          </ModalHeader>

          <div>
            <div style={{ color: "black" }} className="book-info">
              <img
                src={props.image}
                alt={props.booktitle}
                className="modal-image"
              />
              <h2 style={{ color: "black", marginBottom: "4px" }}>
                {" "}
                {props.booktitle}{" "}
              </h2>
              <h4 style={{ color: "black", marginBottom: "4px" }}>
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

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px 8vw 0px 8vw",
            }}
          >
            <IconButton
              onClick={handleHeart}
              style={{
                width: "50px",
                height: "50px",
                borderColor: "white",
              }}
              color="error"
            >
              {like ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
            <IconButton
              style={{ width: "50px", height: "50px" }}
              onClick={handleCart}
            >
              {cart ? (
                <ShoppingCart sx={{ color: lightBlue[500] }} />
              ) : (
                <AddShoppingCart sx={{ color: lightBlue[500] }} />
              )}
            </IconButton>
            <IconButton
              style={{ width: "50px", height: "50px" }}
              onClick={handleBookshelf}
            >
              {bookshelf ? (
                <LibraryAddCheck sx={{ color: teal[500] }} />
              ) : (
                <LibraryAddOutlined sx={{ color: teal[500] }} />
              )}
            </IconButton>
          </div>

          <div
            className="btn-groups"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "3%",
            }}
          >
            <card></card>
            <Button
              color="info"
              size="sm"
              className="buy-link"
              style={{ borderRadius: "8px" }}
              onClick={() =>
                window.open(
                  `https://search.shopping.naver.com/book/search?bookTabType=ALL&pageIndex=1&pageSize=40&query=${props.booktitle}&sort=REL`,
                  "_blank"
                )
              }
            >
              네이버 북{" "}
            </Button>
            <Button
              color="info"
              size="sm"
              className="buy-link"
              style={{ borderRadius: "8px" }}
              onClick={() =>
                window.open(
                  `https://www.yes24.com/Product/Search?domain=ALL&query=${props.booktitle}`,
                  "_blank"
                )
              }
            >
              Yes24{" "}
            </Button>
            <Button
              color="info"
              size="sm"
              className="buy-link"
              style={{ borderRadius: "8px" }}
              onClick={() =>
                window.open(
                  `https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord=${props.booktitle}`,
                  "_blank"
                )
              }
            >
              알라딘{" "}
            </Button>
            <Button
              color="info"
              size="sm"
              className="buy-link"
              style={{ borderRadius: "8px" }}
              onClick={() =>
                window.open(
                  `https://search.kyobobook.co.kr/search?keyword=${props.booktitle}`,
                  "_blank"
                )
              }
            >
              교보문고{" "}
            </Button>{" "}
            <br />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default BookModal;
