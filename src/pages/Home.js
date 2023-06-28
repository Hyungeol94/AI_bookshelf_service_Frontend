import React from "react";
import { useState, useEffect } from "react";

// reactstrap components
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// core components
import Footer from "components/Footer/Footer.js";
// our components
import sample from "../assets/sample_book.json";
import getlist from "../components/GetList_user_home";
import user_info from "../assets/sample_user.json";
import { Link } from "react-router-dom";
import Statshow from "../components/UserStatistics";
import Bookslider from "../components/Bookslider";

// api
import * as api from "../services/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// let [totalBook_count, totalBook_list] = getlist(sample);
let [interest_count, interest_list] = getlist(sample, user_info.user_interest);

const Home = () => {
  const [list, setList] = useState([]);
  const { authData } = useSelector((state) => state.userReducer);

  // console.log(authData);
  const getlikebooklist = async () => {
    console.log(111);
    await api
      .likelist()
      .then((data) => {
        const booklist = data.data.info.list;
        setList(booklist);
        console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  useEffect(() => {
    console.log(222);
    getlikebooklist();
  }, []);

  const [counter1, setCounter1] = useState(0);

  const leftBtnClickHandler1 = () => {
    setCounter1(counter1 - 1);
  };

  const rightBtnClickHandler1 = () => {
    setCounter1(counter1 + 1);
  };

  let showLeftBtn1 = counter1 > 0;
  let showRightBtn1 = counter1 !== interest_count - 9 && interest_count > 9;

  const [counter2, setCounter2] = useState(0);

  const leftBtnClickHandler2 = () => {
    setCounter2(counter2 - 1);
  };

  const rightBtnClickHandler2 = () => {
    setCounter2(counter2 + 1);
  };

  let showLeftBtn2 = counter2 > 0;
  let showRightBtn2 = counter2 !== interest_count - 9 && interest_count > 9;

  console.log(user_info);
  console.log(interest_count, interest_list);
  useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="main">
          <div className="section section-basic" id="basic-elements">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path1.png")}
              style={{ "pointer-events": "none", "z-index": 0 }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                height: "150vh",
                font: "white",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <h1 className="title">Home</h1>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  backgroundColor: "rgba(255,255,255, 0.8)",
                  width: "85%",
                  borderRadius: "30px 30px 30px 30px",
                }}
              >
                <div
                  style={{
                    paddingLeft: "30px",
                    paddingTop: "25px",
                    paddingBottom: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <h3 style={{ color: "#000000" }}>
                      {authData?.nickname || "undefined"}님의 독서 취향
                    </h3>
                    <div style={{ marginLeft: "30px" }}>
                      <Statshow data={authData} />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ color: "#000000" }}>
                      나의 독서 유형 : 미래의 코난{" "}
                    </h4>
                    <h4 style={{ color: "#000000" }}>
                      내가 좋아하는 장르 : 탐정 소설
                    </h4>
                    <h4 style={{ color: "#000000" }}>
                      내가 좋아하는 작가 : 히가시노 게이고
                    </h4>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  paddingTop: "8vh",
                  paddingLeft: "7vw",
                  paddingRight: "7vw",
                }}
              >
                <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
                  {" "}
                  {authData?.nickname || "undefined"}님이 최근 추가한 도서
                </h3>

                {/* <Bookslider list={list}/> */}

                <div className="productBodyScrollable">
                  <div
                    className="products"
                    style={{ transform: `translateX(-${10 * counter1}%)` }}
                  >
                    {/* 임시로 넣어둠 */}
                    {interest_list}
                  </div>
                  {showLeftBtn1 && (
                    <div className="carouselLeft">
                      <button
                        name="left"
                        className="carouselLeftBtn"
                        onClick={leftBtnClickHandler1}
                      >
                        <i className="tim-icons icon-minimal-left" />
                      </button>
                    </div>
                  )}
                  {showRightBtn1 && (
                    <div className="carouselRight">
                      <button
                        name="right"
                        className="carouselRightBtn"
                        onClick={rightBtnClickHandler1}
                      >
                        <i className="tim-icons icon-minimal-right" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  paddingTop: "8vh",
                  paddingLeft: "7vw",
                  paddingRight: "7vw",
                }}
              >
                <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
                  {" "}
                  {authData?.nickname || "undefined"}님을 위한 추천 도서
                </h3>

                <div className="productBodyScrollable">
                  <div
                    className="products"
                    style={{ transform: `translateX(-${27 * counter2}%)` }}
                  >
                    {/* 임시로 넣어둠 */}
                    {interest_list}
                  </div>
                  {showLeftBtn2 && (
                    <div className="carouselLeft">
                      <button
                        name="left"
                        className="carouselLeftBtn"
                        onClick={leftBtnClickHandler2}
                      >
                        <i className="tim-icons icon-minimal-left" />
                      </button>
                    </div>
                  )}
                  {showRightBtn2 && (
                    <div className="carouselRight">
                      <button
                        name="right"
                        className="carouselRightBtn"
                        onClick={rightBtnClickHandler2}
                      >
                        <i className="tim-icons icon-minimal-right" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;

/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
