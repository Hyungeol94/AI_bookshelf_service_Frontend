import React, { useEffect, useState } from "react";
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

  const ToTheTop = () => {
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
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 토글 여부 state에 따라 버튼을 보여주거나 감추게 만듦
  return toggleBtn ? (
    <div onClick={goToTop}>
		// ... //
    </div>
  ) : null;
}

  return(
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
            <div style={{ height: "100vh", "margin-top": "20vh" }}>
              <h1><strong> Book is On & On </strong></h1>
              <div className="content-center brand">
                <h2 className="h1-seo"><strong> 첫번째, 오프라인 서재의 온라인화 </strong></h2>
                <img src={require("assets/img/mybookshelf.jpg")} className="floatimages image1" style={{ border: "2px solid white" }} />
                <h3 className="d-none d-sm-block">
                오프라인 서재 사진을 온라인에 등록하고 관리할 수 있어요.
                </h3>

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
          <div className="squares square7" />
          <Container>
            <div style={{ height: "100vh", "margin-top": "20vh" }}>
              <h1><strong> Book is On & On </strong></h1>
              <div className="content-center brand">
                <h1 className="h1-seo"><strong> 두번째, 도서 관리 기능 </strong></h1>
                <img src={require("assets/img/bookmodal.jpg")} className="floatimages image2" style={{ border: "2px solid white" }} />
                <h3 className="d-none d-sm-block">
                등록된 온라인 서재를 기반으로 나의 책 취향을 확인할 수 있어요.
                </h3>
                <Link to="section3" smooth={true} duration={1000}>
                  <Button color="info" size="lg">
                    다음
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>

        <div className="section section-basic" id="section3">
          <div className="squares square7" />
          <Container>
            <div style={{ height: "100vh", "margin-top": "20vh" }}>
              <h1><strong> Book is On & On </strong></h1>
              <div className="content-center brand">
                <h1 className="h1-seo"><strong>  세번째, 도서 추천 기능  </strong></h1>
                <img src={require("assets/img/bookmodal.jpg")} className="floatimages image2" style={{ border: "2px solid white" }} />
                <h3 className="d-none d-sm-block">
                나의 책들을 바탕으로 새로운 책들을 추천해줘요.
                </h3>
                <Button color="info" size="lg" href="/login">
                  회원가입하고 서비스 시작하기
                </Button>
              </div>
            </div>
          </Container>
          <div>
          <Link to="section0" smooth={true} duration={800}>
                  <Button  color="info" size="sm"
                  style={{"font-size": "26px", "position":"absolute", "bottom": "37vh",
                                  "right": "2vw", "max-width": "200px", "max-height": "60px"
                                  }}>
                  🛆
                  </Button>
                  </Link>
          </div>

        </div>
        <Footer />
      </div>
    </div>
    // 이미지 애니메이션 설정은 assets/scss/blk-design-system-react/custom에 있음!
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
