import React, { useEffect } from "react";
// reactstrap components
import { Container, Button } from "reactstrap";
import { animateScroll, scroller, Link } from "react-scroll";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  const handleClick = () => {
    scroller.scrollTo("section2", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return(
    <div className="wrapper">
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
          <h1 className="h1-seo">Book is On & On</h1>
          <h2 className="d-none d-sm-block">
            인공지능으로 만드는 나만의 디지털 서재
          </h2>
          <Link to="section1" smooth={true} duration={1000}>
            <Button color="info" size="lg">
            알아보기
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
          <div style={{height:"100vh", "margin-top": "20vh"}}>
            <h1>Section 1</h1>
            <div className="content-center brand">
          <h1 className="h1-seo">Book is On & On</h1>
          <img src="https://i.ytimg.com/vi/gwHQLBUStO4/maxresdefault.jpg" className="squares square8" />
          <h2 className="d-none d-sm-block">
            인공지능으로 만드는 나만의 디지털 서재
          </h2>
          
          <Link to="section2" smooth={true} duration={1000}>
            <Button color="info" size="lg">
            다음
          </Button>
          </Link>
          </div>

        </div>
          </Container>
        </div>
        <div className="section section-basic" id="section2">
          {/* <div className="squares square3" /> */}
          {/* <div className="squares square5" /> */}
          <div className="squares square7" />
          <Container>
          <div style={{height:"100vh", "margin-top": "20vh"}}>
            <h1>Section 2</h1>
            <div className="content-center brand">
          <h1 className="h1-seo">Book is On & On</h1>
          <h2 className="d-none d-sm-block">
            인공지능으로 만드는 나만의 디지털 서재
          </h2>
          <Button color="info" size="lg" href="/login">
                회원가입하고 서비스 시작하기
              </Button>
        </div>
        </div>
          </Container>
        </div>
    <div className="main"></div>
    <Footer />
    </div>
    </div>
  )
  
};

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
