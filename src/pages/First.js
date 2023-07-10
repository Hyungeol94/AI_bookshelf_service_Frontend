/* eslint-disable jsx-a11y/alt-text */
// REACT
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
// COMPONENT
import { KeyboardArrowUp } from "@mui/icons-material";
import { Container, Button } from "reactstrap";
import Footer from "components/Footer/Footer.js";
// STYLE
import "../styles/First.css";
import BookLogo from "../assets/img/BookLogo.png";
import mybookshelf from "../assets/img/mybookshelf.jpg";
import First1 from "../assets/img/First1.png";
import bookmodal from "assets/img/bookmodal.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // useState
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("index-page");
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.toggle("index-page");
    };
  }, []);

  const handleScroll = () => {
    const section1 = document.getElementById("section1");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowTopBtn(scrollTop > section1.offsetTop);
  };

  return (
    <div className="wrapper" id="section0">
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />

        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">
              <img
                src={BookLogo}
                style={{
                  height: "80px",
                  marginBottom: "42px",
                  marginRight: "-5px",
                }}
              />
              Book is On & On
            </h1>
            <h2 className="d-none d-sm-block">
              인공지능으로 만드는 나만의 디지털 서재
            </h2>
            <Link to="section1" smooth={true} duration={1000}>
              <Button color="info" size="lg">
                <strong> 알아보기 </strong>
              </Button>
            </Link>
          </div>
        </Container>
      </div>
      <div className="main">
        <div className="section section-basic" id="section1">
          <Container>
            <div className="squares square3" />
            <div className="squares square5" />
            {/* <div className="squares square7" /> */}
            <div style={{ height: "100vh", "margin-top": "10vh" }}>
              <h1>
                <strong>
                  <img
                    src={BookLogo}
                    style={{
                      height: "40px",
                      marginBottom: "16px",
                      marginRight: "-2px",
                    }}
                  />
                  Book is On & On{" "}
                </strong>
              </h1>
              <div className="content-center brand">
                <h2 className="h1-seo">
                  <strong> 오프라인 서재의 온라인화 </strong>
                </h2>
                <img
                  src={mybookshelf}
                  className="floatimages image2"
                  style={{ border: "2px solid white" }}
                />
                <h3 className="d-none d-sm-block">
                  오프라인 서재 사진을 온라인에 등록하고 관리할 수 있어요.
                </h3>

                <Link to="section2" smooth={true} duration={1000}>
                  <Button color="info" size="lg">
                    <strong> 다음 </strong>
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
        <div className="section section-basic" id="section2">
          <div className="squares square7" />
          <Container>
            <div style={{ height: "100vh", "margin-top": "10vh" }}>
              <h1>
                <strong>
                  <img
                    src={BookLogo}
                    style={{
                      height: "40px",
                      marginBottom: "16px",
                      marginRight: "-2px",
                    }}
                  />
                  Book is On & On{" "}
                </strong>
              </h1>
              <div className="content-center brand">
                <h1 className="h1-seo">
                  <strong> 도서 관리 기능 </strong>
                </h1>
                <img
                  src={First1}
                  className="floatimages image2"
                  style={{ border: "2px solid white" }}
                />
                <h3 className="d-none d-sm-block">
                  등록된 온라인 서재로 나의 책 취향을 확인할 수 있어요.
                </h3>
                <Link to="section3" smooth={true} duration={1000}>
                  <Button color="info" size="lg">
                    <strong> 다음 </strong>
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>

        <div className="section section-basic" id="section3">
          <div className="squares square7" />
          <Container>
            <div style={{ height: "100vh", "margin-top": "10vh" }}>
              <h1>
                <strong>
                  <img
                    src={BookLogo}
                    style={{
                      height: "40px",
                      marginBottom: "16px",
                      marginRight: "-2px",
                    }}
                  />
                  Book is On & On{" "}
                </strong>
              </h1>
              <div className="content-center brand">
                <h1 className="h1-seo">
                  <strong> 도서 추천 기능 </strong>
                </h1>
                <img
                  src={bookmodal}
                  className="floatimages image2"
                  style={{ border: "2px solid white" }}
                />
                <h3 className="d-none d-sm-block">
                  나의 책들을 바탕으로 새로운 책들을 추천해줘요.
                </h3>
                <Button color="info" size="lg" href="/login">
                  <strong> 시작하기 </strong>
                </Button>
              </div>
            </div>
          </Container>

          {showTopBtn && (
            <Link to="section0" smooth={true} duration={800} className="topBtn">
              <Button
                color="info"
                size="sm"
                style={{
                  fontSize: "26px",
                  position: "fixed",
                  bottom: "20px",
                  display: "inline-block",
                  zIndex: 10,
                  right: "20px",
                  maxWidth: "200px",
                  maxHeight: "60px",
                }}
              >
                <KeyboardArrowUp />
              </Button>
            </Link>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};
