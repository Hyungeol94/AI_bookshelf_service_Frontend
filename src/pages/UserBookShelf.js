/* eslint-disable react/jsx-pascal-case */
// REACT
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// COMPONENT
import Footer from "components/Footer/Footer.js";
import User_profile from "../components/Profile";
import Book_view from "../components/Bookview";

// REST_API
import * as api from "../services/api";

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
    console.log(222);
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
              src={require("assets/img/path1.png")}
              style={{ pointerEvents: "none", zIndex: 0 }}
            />
            <div></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100vh",
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
