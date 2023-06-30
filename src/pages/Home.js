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

  // 좌우 버튼 함수 << 작동여부 확인 후 컴포넌트로 빼야함
  // 좌우를 props?로 받아서 할 수 있는지 알아보자

  const ScrollLeft = () => {
    // 토글 여부를 결정하는 state 선언
    const [toggleBtn, setToggleBtn] = useState(true);
  
    // window 객체에서 scrollY 값을 받아옴
    // 어느정도 스크롤이 된건지 판단 후, 토글 여부 결정
    const handleScroll = () => {
      const { scrollY } = window;
  
      scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
    };
  
    // scroll 이벤트 발생 시 이를 감지하고 handleScroll 함수를 실행
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    // 버튼 클릭 시 스크롤을 맨 위로 올려주는 함수
    const goLeft = () => {
      window.scrollTo({ left: "500px", behavior: "smooth" });
    };
  
    // 토글 여부 state에 따라 버튼을 보여주거나 감추게 만듦
    return toggleBtn ? (
      <div onClick={goLeft}>
      // ... //
      </div>
    ) : null;
  };

  const ScrollRight = () => {
    // 토글 여부를 결정하는 state 선언
    const [toggleBtn, setToggleBtn] = useState(true);
  
    // window 객체에서 scrollY 값을 받아옴
    // 어느정도 스크롤이 된건지 판단 후, 토글 여부 결정
    const handleScroll = () => {
      const { scrollY } = window;
  
      scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
    };
  
    // scroll 이벤트 발생 시 이를 감지하고 handleScroll 함수를 실행
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    // 버튼 클릭 시 스크롤을 맨 위로 올려주는 함수
    const goRight = () => {
      window.scrollTo({ left: "500px", behavior: "smooth" });
    };
  
    // 토글 여부 state에 따라 버튼을 보여주거나 감추게 만듦
    return toggleBtn ? (
      <div onClick={goRight}>
      // ... //
      </div>
    ) : null;
  };

  // 좌우함수 2 // <Scroll direction="left" /> 형태로 좌우 500px 읻종
  const Scroll = ({ direction }) => {
    const [toggleBtn, setToggleBtn] = useState(true);
  
    const handleScroll = () => {
      const { scrollY } = window;
  
      scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const goLeft = () => {
      const scrollX = direction === "left" ? -500 : 500;
      window.scrollTo({ left: scrollX, behavior: "smooth" });
    };
  
    return toggleBtn ? (
      <Button onClick={goLeft} aria-label={direction}>
        {direction === "left" ? "<" : ">"}
      </Button>
    ) : null;
  };
  
  
  

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
                    style={{ }}
                  >
                    {/* 임시로 넣어둠 */}
                    {interest_list}
                  
                  
                  </div>
                  {/* {showLeftBtn1 && (
                    <div className="carouselLeft">
                      <Button
                        name="left"
                        className="carouselLeftBtn"
                        onClick={leftBtnClickHandler1}
                        style={{position: "absolute",
                                left: "3vw",}}
                      >
                        <i className="tim-icons icon-minimal-left" />
                      </Button>
                    </div>
                  )} */}
  


                  
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
                    style={{ }}
                  >
                    {/* 임시로 넣어둠 */}
                    {interest_list}
                  </div>



 
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