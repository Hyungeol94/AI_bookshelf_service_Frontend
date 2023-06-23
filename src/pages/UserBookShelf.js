import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
// core components
import Footer from "components/Footer/Footer.js";
import { Link } from "react-router-dom";

// our components
// import BookList from "../components/BookList";
import sample from "../assets/sample_book.json";
import getlist from "../components/GetList";
//import get_likes_list from "../components/GetLikesList";
import get_recentlyAdded_list from "../components/GetRecentlyAddedList";
//import get_saved_list from "../components/GetSavedList";
import user_info from "../assets/sample_user.json";
import User_profile from "../components/Profile";
import Book_view from "../components/Bookview";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserBookShelf = () => {
  const { authData } = useSelector((state) => state.userReducer);
  // console.log(authData);

  return (
    <>
      <div className="wrapper">
        <div className="main">
          <div className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path1.png")}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                font: "white",
              }}
            >
              <div>
                <h1 className="title">
                  {authData?.nickname || "undefined"} 님의 Mybrary 📚
                </h1>

                <User_profile data={authData} />
                <Book_view style={{ marginTop: "30px" }} data={authData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBookShelf;
