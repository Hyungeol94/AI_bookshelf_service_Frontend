import React from "react";
import "../styles/Navigator.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // console.log(props);
  return (
    <div id="navigator">
      <div className="navigator-items">
        <div className="logo">        
          <h1><a href = "http://localhost:3000/" className="link">장미여관</a></h1>          
        </div>
        <div className="menu">
          <h1>dfdf</h1>
        </div>
        <div className="sign">
          <h1><a href = "http://localhost:3000/login" className="link">로그인</a></h1>
        </div>
      </div>
    </div>
  );
};

// const style = {};
