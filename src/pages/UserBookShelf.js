import React from "react";
// reactstrap components
import { Container } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import { Link } from "react-router-dom";

// our components
// import BookList from "../components/BookList";
import sample from "../assets/sample_book.json";
import getlist from "../components/GetList";
//import get_likes_list from "../components/GetLikesList";
import get_recentlyAdded_list from "../components/GetRecentlyAddedList";
//import get_saved_list from "../components/GetSavedList";
import user_info from "../assets/sample_user.json"
import User_profile from "../components/Profile";
import { useNavigate } from "react-router-dom";


const UserBookShelf = () => {
  let [recentlyAdded_count, recentlyAdded_list] =
    get_recentlyAdded_list(sample);
  let [totalBook_count, totalBook_list] = getlist(sample, user_info.user_bookshelf.book_id);
  let [likes_count, Likes_list] = getlist(sample, user_info.user_like_book);
  let [saved_count, saved_list] = getlist(sample, user_info.user_cart);
  let [interest_count, interest_list] = getlist(sample, user_info.user_interest);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="main">
        <div className="section section-basic" id="basic-elements">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <h1 className="title">{user_info.profile.user_nickname} 님의 Mybrary 📚</h1>

          <User_profile/>

          <h3>최근 추가한 항목({recentlyAdded_count}개)</h3>      
          {recentlyAdded_list}
          <h3> 내 서재에 저장된 책 (총 {totalBook_count}개)</h3>      
          {totalBook_list}
          <h3> 좋아하는 책 ({likes_count}개)</h3>
          {Likes_list}
          <h3> 찜해둔 책 ({saved_count}개)</h3>
          {saved_list}
          <h3> 저장한 책 ({interest_count}개)</h3>
          {interest_list}

        </Container>
        </div>
      </div>
      </div>
    </>
  );
};

export default UserBookShelf;
