/* eslint-disable react/jsx-pascal-case */
// REACT
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// COMPONENT
import User_profile from "../components/Profile";
import Footer from "components/Footer/Footer.js";
import Book_view from "../components/Bookview";
// REST_API
import * as api from "../services/api";
// ASSETS
import path1 from "../assets/img/path1.png";

const UserBookShelf = () => {
  // userReducer
  const { authData } = useSelector((state) => state.userReducer);

  // useState
  const [bookshelflist, setBookshelflist] = useState([]);
  const [likelist, setLikelist] = useState([]);
  const [cartlist, setCartlist] = useState([]);

  const getlikelist = async () => {
    await api
      .likelist()
      .then((data) => {
        const booklist = data.data.info.list;
        setLikelist(booklist);
      })
      .catch((e) => console.log("USER_BOOK_SHELF_ERROR", e));
  };

  const getcartlist = async () => {
    await api
      .cartlist()
      .then((data) => {
        const booklist = data.data.info.list;
        setCartlist(booklist);
      })
      .catch((e) => console.log("USER_BOOK_SHELF_ERROR", e));
  };
  const getbookshelflist = async () => {
    await api
      .bookshelflist()
      .then((data) => {
        const booklist = data.data.info.list;
        setBookshelflist(booklist);
      })
      .catch((e) => console.log("USER_BOOK_SHELF_ERROR", e));
  };

  useEffect(() => {
    getlikelist();
    getcartlist();
    getbookshelflist();
  }, []);

  return (
    <>
      <div className="wrapper" style={{}}>
        <div className="main">
          <div className="section">
            <img
              alt="..."
              className="path"
              src={path1}
              style={{ pointerEvents: "none", zIndex: 0 }}
            />
            <div></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                font: "white",
                marginBottom: "15%",
              }}
            >
              <div>
                <User_profile data={authData} />
                <Book_view
                  style={{ marginTop: "30px" }}
                  data={authData}
                  likelist={likelist}
                  cartlist={cartlist}
                  bookshelflist={bookshelflist}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserBookShelf;
