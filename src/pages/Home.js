import React from "react";
// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components
import Footer from "components/Footer/Footer.js";
import { useSelector } from "react-redux";
// our components
import sample from "../assets/sample_book.json";
import getlist from "../components/GetList_user";
import user_info from "../assets/sample_user.json";
// import { Link } from "react-router-dom";

// let [totalBook_count, totalBook_list] = getlist(sample);
let [interest_count, interest_list] = getlist(sample, user_info.user_interest);

export default function Index() {
  const { authData } = useSelector((state) => state.userReducer);

  console.log(user_info);
  console.log(interest_count, interest_list);
  React.useEffect(() => {
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
            />

            <Container>
              <Row>
                <Col md={{ offset: 5, size: 6 }} sm="12">
                  <h1 className="title">Home</h1>
                </Col>
              </Row>
              <Row>
                <Col className="home" xs="6">
                  <div>
                    <h3>최근 추가된 도서</h3>
                    {/* 임시로 넣어둠 */}
                    {interest_list}
                  </div>
                </Col>
                <Col className="home" xs="6">
                  <div>
                    <h3>{authData?.nickname || "undefined"}님의 독서 취향</h3>
                    <Button
                      className="btn-round"
                      color="primary"
                      size="sm"
                      href=""
                    >
                      자세히 보기
                    </Button>
                    <h4>나의 독서 유형 : 미래의 코난?</h4>
                    <h4>내가 좋아하는 장르 : 탐정 소설</h4>
                    <h4>내가 좋아하는 작가 : 히가시노 게이고</h4>
                  </div>
                </Col>
                <Col>
                  <h3>추천 도서</h3>
                  {interest_list}

                  {/* <h3>나의 서재 (총 {totalBook_count}개) </h3>
                {totalBook_list} */}
                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

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
