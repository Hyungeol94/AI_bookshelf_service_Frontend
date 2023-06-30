import React, { useState, useEffect } from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// our components
import Footer from "components/Footer/Footer.js";

// import BookList from "../components/BookList";
import sample from "../assets/sample_book.json";
import getlist from "../components/GetList_user";
//import get_likes_list from "../components/GetLikesList";
import get_recentlyAdded_list from "../components/GetRecentlyAddedList";
//import get_saved_list from "../components/GetSavedList";
// import user_info from "../assets/sample_user.json";
import User_profile from "../components/Profile";
import * as api from "../services/api";
import Book_view from "../components/Bookview";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserBookShelf = () => {
  const [likelist, setLikelist] = useState([]);
  const [cartlist, setCartlist] = useState([]);
  const [bookshelflist, setBookshelflist] = useState([]);
  const { authData } = useSelector((state) => state.userReducer);
  // console.log(authData);

  const getlikelist = async () => {
    console.log(111);
    await api
      .likelist()
      .then((data) => {
        const booklist = data.data.info.list;
        setLikelist(booklist);
        console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  const getcartlist = async () => {
    console.log(111);
    await api
      .cartlist()
      .then((data) => {
        const booklist = data.data.info.list;
        setCartlist(booklist);
        console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };
  const getbookshelflist = async () => {
    console.log(111);
    await api
      .bookshelflist()
      .then((data) => {
        const booklist = data.data.info.list;
        setBookshelflist(booklist);
        console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  useEffect(() => {
    console.log(222);
    getlikelist();
    getcartlist();
    getbookshelflist();
  }, []);

  return (
    <>
      <div className="wrapper"
        style={{}}>
        <div className="main">
          <div className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path1.png")}
              style={{ "pointer-events": "none", "z-index": 0, }}
            />
            <div></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
                width: "100%",
                height: "100vh",
                // marginTop: "4em",
                font: "white",
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
      <Footer/>
    </>
  );
};

export default UserBookShelf;