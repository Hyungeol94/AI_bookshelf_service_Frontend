import { Link } from "react-router-dom";
import React from "react";
import "../styles/Navigator.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div id="navigator">
      <div className="navigator-items">
        <div className="logo">
          <Link to="/" className="link">
            <h1>북이온앤온</h1>
          </Link>
        </div>
        <div className="menu">
          <Link to="/search" className="link">
            <h1>검색</h1>
          </Link>
        </div>
        <div className="bookshelf">
          <Link to="/bookshelf" className="link">
            <h1>나의서재</h1>
          </Link>
        </div>
        <div className="sign">
          <Link to="/login" className="link">
            <h1>로그인</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
