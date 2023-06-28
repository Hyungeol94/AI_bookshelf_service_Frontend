import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { useCookies } from "react-cookie";

// our component
import sample_user from "../assets/sample_user.json";
import Statshow from "./UserStatistics";

const Userprofile = (props) => {
  // function getCookieValue(cookieName) {
  //   let cookies = document.cookie.split(";");

  //   for (let cookie of cookies) {
  //     let trimmedCookie = cookie.trim();
  //     if (trimmedCookie.startsWith(cookieName + "=")) {
  //       return trimmedCookie.substring(cookieName.length + 1);
  //     }
  //   }

  //   return null; // Cookie not found
  // }
  const {
    email,
    name,
    user_id,
    nickname,
    user_bookshelf,
    user_like_book,
    user_cart,
    user_interest,
    user_type,
  } = props?.data;
  console.log(props?.data);

  return (
    <div
      className="MyProfile"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "1000px",
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingTop: "30px",
        paddingBottom: "30px",
        backgroundColor: "rgba(255,255,255, 0.5)",
        borderRadius: "20px 30px 20px 30px",
      }}
    >
      <div style={{ width: "1000px" }}>
        <h1 style={{ color: "#000000" }}>My profile</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <img
              src={sample_user.profile.image}
              style={{ width: "130px", height: "130px" }}
            />
            <h2
              style={{
                color: "#000000",
                alignSelf: "center",
                height: "1px",
                marginLeft: "20px",
              }}
            >
              {nickname || "undefined"}
            </h2>
          </div>
          <div style={{ display: "block", alignSelf: "center" }}>
            <Link to="/EditProfile">
              <Button style={{ width: "200px", display: "block" }}>
                내 정보 수정하기
              </Button>
            </Link>
            <Link to="/Upload">
              <Button style={{ width: "200px", display: "block" }}>
                서재에 책 추가하기
              </Button>
            </Link>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
