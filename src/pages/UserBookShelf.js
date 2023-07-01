import React, { useState, useEffect } from "react";

// our components
import UserProfile from "../components/Profile";
import * as api from "../services/api";
import BookView from "../components/Bookview";
import { useSelector } from "react-redux";

const UserBookShelf = () => {
  const { authData } = useSelector((state) => state.userReducer);

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

                <UserProfile data={authData} />
                <BookView
                  style={{ marginTop: "30px" }}
                  data={authData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default UserBookShelf;
