/* eslint-disable no-restricted-globals */
// react
import ClampLines from "react-clamp-lines";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// rest-api
import * as api from "../services/api";
import { Button, Box, Modal, IconButton } from "@mui/material";
import { lightBlue, teal } from "@mui/material/colors";
// assets
import sample_book from "../assets/img/sample_book.png";
//styles
import {
  LibraryAddOutlined,
  LibraryAddCheck,
  AddShoppingCart,
  FavoriteBorder,
  ShoppingCart,
  Favorite,
} from "@mui/icons-material";
import "../styles/BookList.css";

const style = {
  transform: "translate(-50%, -50%)",
  position: "absolute",
  bgcolor: "#171941",
  width: "700px",
  boxShadow: 24,
  height: "90%",
  left: "50%",
  top: "50%",
  p: 4,
};

const styleImage = {
  transform: "translate(-50%, -50%)",
  position: "absolute",
  bgcolor: "#171941",
  boxShadow: 24,
  height: "70%",
  left: "50%",
  top: "50%",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [bookshelf, setBookshelf] = useState(
    props?.bookshelflist.includes(props?.isbn) || false
  );
  const [like, setLike] = useState(
    props?.likelist.includes(props?.isbn) || false
  );
  const [cart, setCart] = useState(
    props?.cartlist.includes(props?.isbn) || false
  );
  const [openImage, setOpenImage] = useState(false);
  const [open, setOpen] = useState(false);

  // HANDLING
  const handleCloseImage = () => setOpenImage(false);
  const handleOpenImage = () => setOpenImage(true);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const request = {
    description: props?.description,
    publisher: props?.publisher,
    discount: props?.discount,
    category: props?.category,
    pubdate: props?.pubdate,
    weight: props?.weight,
    author: props?.author,
    image: props?.image,
    title: props?.title,
    link: props?.link,
    isbn: props?.isbn,
    page: props?.page,
  };

  const handleHeart = async () => {
    if (like) {
      setLike(false);
      await api.deletelike(request);
    } else {
      setLike(true);
      await api.addlike(request);
    }
  };

  const handleCart = async () => {
    if (cart) {
      if (confirm("장바구니에서 삭제하시겠습니까?") === true) {
        setCart(false);
        await api.deletecart(request);
      }
    } else {
      if (confirm("장바구니에 추가하겠습니까?") === true) {
        setCart(true);
        await api.addcart(request);
      }
    }
  };

  const handleBookshelf = async () => {
    if (bookshelf) {
      if (confirm("내 서제에서 삭제하시겠습니까?") === true) {
        setBookshelf(false);
        await api.deletebookshelf(request);
      }
    } else {
      if (confirm("내 서재에 추가하시겠습니까?") === true) {
        setBookshelf(true);
        await api.addbookshelf(request);
      }
    }
  };

  return (
    <div class="booklist">
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <Button
          style={{
            borderColor: "rgb(31 64 182 / 66%)",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            alignItems: "stretch",
            borderRadius: "15px",
            border: "solid 2px",
            textAlign: "left",
            padding: "20px",
            display: "flex",
            width: "1100px",
            zIndex: 12,
          }}
        >
          <img
            src={props.image || sample_book}
            alt={props.booktitle}
            onClick={handleOpenImage}
            style={{ width: "130px", maxHeight: "220px" }}
          />
          <div
            style={{
              justifyContent: "space-between",
              flexDirection: "column",
              paddingRight: "10px",
              paddingLeft: "10px",
              marginLeft: "5px",
              display: "flex",
            }}
          >
            <div onClick={handleOpen}>
              <div
                style={{
                  justifyContent: "space-between",
                  position: "relative",
                  display: "flex",
                  color: "black",
                }}
              >
                <h3
                  style={{
                    marginBottom: 0,
                    fontSize: "20px",
                    color: "black",
                    width: "610px",
                  }}
                >
                  <strong>{props?.title}</strong>
                </h3>
                <p
                  style={{
                    position: "absolute",
                    fontSize: "13px",
                    marginTop: "5px",
                    fontWeight: 400,
                    color: "black",
                    bottom: 0,
                    margin: 0,
                    right: 0,
                  }}
                >
                  {props?.isbn}
                </p>
              </div>
              <div
                style={{
                  borderColor: "rgb(31 64 182 / 75%)",
                  border: "1px solid #dddddd",
                  marginTop: "5px",
                }}
              ></div>
              <div
                style={{
                  justifyContent: "space-between",
                  marginTop: "2px",
                  display: "flex",
                }}
              >
                <p
                  style={{ fontSize: "15px", fontWeight: 400, color: "black" }}
                >
                  {props?.author}
                </p>
                <p
                  style={{ fontSize: "15px", fontWeight: 400, color: "black" }}
                >
                  {props?.publisher}
                </p>
              </div>
              <div
                style={{
                  fontWeight: "border",
                  fontSize: "16px",
                  width: "740px",
                  color: "black",
                }}
              >
                <ClampLines
                  style={{ color: "black" }}
                  text={props?.description}
                  innerElement="p"
                  buttons={false}
                  ellipsis="..."
                  lines={5}
                />
              </div>
            </div>
            <h4
              style={{
                fontSize: "14px",
                textAlign: "end",
                marginBottom: 0,
                color: "black",
              }}
            >
              {String(props?.pubdate).slice(0, 4)}.
              {String(props?.pubdate).slice(4, 6)}.
              {String(props?.pubdate).slice(6, 8)}
            </h4>
          </div>
          <div>
            <div
              style={{
                flexDirection: "column-reverse",
                justifyContent: "space-between",
                display: "flex",
                height: "100%",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton
                  onClick={handleHeart}
                  style={{
                    borderColor: "white",
                    height: "50px",
                    width: "50px",
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
              <div>
                <div>{props?.category}</div>
                <div>
                  <p>쪽: {props?.page}p</p>
                </div>
                <div>무게: {props?.weight}g</div>
              </div>
              <Link to={props?.link}>
                <Button
                  variant="outlined"
                  style={{
                    background: "rgba(35,45,145)",
                    width: "150px",
                    color: "white",
                  }}
                >
                  {Number(props?.discount).toLocaleString("ko-KR")} 원
                </Button>
              </Link>
            </div>
          </div>
        </Button>
      </div>
      <Modal
        aria-describedby="modal-modal-description"
        aria-labelledby="modal-modal-title"
        onClose={handleClose}
        open={open}
      >
        <Box sx={style} style={{ "background-color": "white" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                style={{ maxWidth: "200px", maxHeight: "250px" }}
                src={props.image || sample_book}
                onClick={handleOpenImage}
                alt={props.booktitle}
              />
            </div>
            <div
              style={{
                justifyContent: "space-between",
                flexDirection: "column-reverse",
                display: "flex",
                height: "100%",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton
                  onClick={handleHeart}
                  style={{
                    borderColor: "white",
                    maxHeight: "50px",
                    maxWidth: "50px",
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
              <Link to={props?.link}>
                <Button
                  variant="outlined"
                  style={{
                    backgroundColor: "rgba(35,45,145)",
                    width: "150px",
                    color: "white",
                  }}
                >
                  {Number(props?.discount).toLocaleString("ko-KR")} 원
                </Button>
              </Link>
            </div>
          </div>
          <div
            style={{
              justifyContent: "space-between",
              flexDirection: "column",
              display: "flex",
            }}
          >
            <div style={{ marginTop: "10px" }}>
              <div
                style={{
                  justifyContent: "space-between",
                  position: "relative",
                  display: "flex",
                }}
              >
                <h3
                  style={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    fontSize: "28px",
                    width: "575px",
                    color: "#000",
                  }}
                >
                  <strong>{props?.title}</strong>
                </h3>
                <p
                  style={{
                    position: "absolute",
                    fontSize: "13px",
                    marginTop: "5px",
                    fontWeight: 400,
                    color: "black",
                    bottom: 0,
                    margin: 0,
                    right: 0,
                  }}
                >
                  {props?.isbn}
                </p>
              </div>
              <div
                style={{
                  borderColor: "rgb(31 64 182 / 75%)",
                  border: "1px solid #dddddd",
                  marginTop: "5px",
                }}
              ></div>
              <div
                style={{
                  justifyContent: "space-between",
                  marginTop: "2px",
                  display: "flex",
                }}
              >
                <p
                  style={{ fontSize: "15px", fontWeight: 400, color: "black" }}
                >
                  {props?.author}
                </p>
                <p
                  style={{ fontSize: "15px", fontWeight: 400, color: "black" }}
                >
                  {props?.publisher} {String(props?.pubdate).slice(0, 4)}.
                  {String(props?.pubdate).slice(4, 6)}.
                  {String(props?.pubdate).slice(6, 8)}
                </p>
              </div>
              <div
                style={{
                  fontWeight: "border",
                  position: "absolute",
                  overflowY: "auto",
                  fontSize: "16px",
                  width: "640px",
                  height: "60%",
                }}
              >
                <div style={{ display: "block" }}>
                  <div
                    style={{
                      overflowY: "auto",
                      marginTop: "15px",
                      height: "450px",
                      width: "635px",
                      color: "black",
                    }}
                  >
                    <p
                      className="description-box"
                      style={{ color: "black", height: "380px" }}
                    >
                      {props?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-describedby="modal-modal-description"
        aria-labelledby="modal-modal-title"
        onClose={handleCloseImage}
        open={openImage}
      >
        <Box sx={styleImage} style={{ color: "white" }}>
          <img
            src={props.image || sample_book}
            onClick={handleOpenImage}
            alt={props.booktitle}
            height={"100%"}
            width={"100%"}
          />
        </Box>
      </Modal>
    </div>
  );
};
