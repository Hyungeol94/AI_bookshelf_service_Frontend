import React, { useState, useEffect } from "react";
import "../styles/GetList.css";
import { Modal, ModalHeader, Button } from "reactstrap";
import { lightBlue, teal } from "@mui/material/colors";
import {IconButton } from "@mui/material";

import * as api from "../services/api";

import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart,
  ShoppingCart,
  LibraryAddOutlined,
  LibraryAddCheck,
} from "@mui/icons-material";


const BookModal = (props) => {
    const { 
          image,
          booktitle,
          author,
          description,
          id,
          isbn,
          link,
          pubdate,
          publisher,
          bookshelflist,
          likelist,
          cartlist,
          bookshelfcheck,
          likecheck,
          cartcheck,
          setLikelist,
          setBookshelflist,
          setCartlist
          } = props
    const [like, setLike] = useState(
      props?.likecheck?.includes(props?.isbn) || false
    );
    const [cart, setCart] = useState(
      props?.cartcheck?.includes(props?.isbn) || false
    );
    const [bookshelf, setBookshelf] = useState(
      props?.bookshelfcheck?.includes(props?.isbn) || false
    );

    // console.log(props?.likecheck)

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
        await api.likelist().then((data) => {
          const booklist = data?.data?.info?.list;
          setLikelist(booklist);})
        // window.location.reload(); // 페이지 새로고침
      } else {
        setLike(true);
        await api.addlike(request);
        await api.likelist().then((data) => {
          const booklist = data?.data?.info?.list;
          setLikelist(booklist);})
      }

    };
    
    const handleCart = async () => {
      if (cart) {
        // eslint-disable-next-line no-restricted-globals
        var delete_cart = confirm("장바구니에서 삭제하시겠습니까?");
        if (delete_cart === true) {
          setCart(false);
          await api.deletecart(request);
          // window.location.reload(); // 페이지 새로고침
          await api.cartlist().then((data) => {
            const booklist = data?.data?.info?.list;
            setCartlist(booklist);})
        }
      } else {
        // eslint-disable-next-line no-restricted-globals
        var add_cart = confirm("장바구니에 추가하겠습니까?");
        if (add_cart === true) {
          setCart(true);
          await api.addcart(request);
          await api.cartlist().then((data) => {
            const booklist = data?.data?.info?.list;
            setCartlist(booklist);})
        }
      }
    };
    
    const handleBookshelf = async () => {
      if (bookshelf) {
        // eslint-disable-next-line no-restricted-globals
        var delete_bookshelf = confirm("내 서제에서 삭제하시겠습니까?");
        if (delete_bookshelf === true) {
          setBookshelf(false);
          await api.deletebookshelf(request);
          // window.location.reload(); // 페이지 새로고침
          await api.bookshelflist().then((data) => {
            const booklist = data?.data?.info?.list;
            console.log('북리스트', booklist);
            setBookshelflist(booklist);})
        }
      } else {
        // eslint-disable-next-line no-restricted-globals
        var add_bookshelf = confirm("내 서재에 추가하시겠습니까?");
        if (add_bookshelf === true) {
          setBookshelf(true);
          await api.addbookshelf(request);
          await api.bookshelflist().then((data) => {
            const booklist = data?.data?.info?.list;
            setBookshelflist(booklist);})
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
          contentlabel="File Modal"
          className="modal-box"
        >
        <ModalHeader className="justify-content-center">
        책 상세정보
        <Button
          className="btn-round btn-neutral btn-icon"
          onClick={closeModal}
        >
          <i className="tim-icons icon-simple-remove" />
        </Button>
      </ModalHeader>
          <div>
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

          <div style={{ 
            display: "flex", justifyContent: "space-between",
            margin: "0px 8vw 0px 8vw" }}>
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
              
              <div className="btn-groups"
                style={{
                  display:'flex',
                  justifyContent: 'center',
                  marginBottom:'3%'
                }}>
              <Button color="info" size="sm" className="buy-link" style={{borderRadius: "8px"}}
                  onClick={() => window.open(`https://search.shopping.naver.com/book/search?bookTabType=ALL&pageIndex=1&pageSize=40&query=${props.booktitle}&sort=REL`, "_blank")} >
                    네이버 북 </Button>
              <Button color="info" size="sm" className="buy-link" style={{borderRadius: "8px"}} 
                  onClick={() => window.open(`https://www.yes24.com/Product/Search?domain=ALL&query=${props.booktitle}`, "_blank")} >
                    Yes24 </Button>
              <Button color="info" size="sm" className="buy-link" style={{borderRadius: "8px"}} 
                  onClick={() => window.open(`https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord=${props.booktitle}`, "_blank")} > 
                  알라딘 </Button>
              <Button color="info" size="sm" className="buy-link" style={{borderRadius: "8px"}}
                  onClick={() => window.open(`https://search.kyobobook.co.kr/search?keyword=${props.booktitle}`, "_blank")} > 
                  교보문고 </Button> <br/>
            </div>

        </Modal>
      </div>
    </>
  );
};

export default BookModal;