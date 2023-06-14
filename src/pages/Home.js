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
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

// our components
import sample from "../assets/sample_book.json";
import getlist from "../components/GetList"
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
let [totalBook_count, totalBook_list] = getlist(sample);

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">

        <div className="main">
        <div className="section section-basic" id="basic-elements">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <h2 className="title">Home</h2>
          <h3>추천 도서</h3>
          {totalBook_list}
          
          <h3>나의 서재 (총 {totalBook_count}개) </h3>
          {totalBook_list}

        </Container>
        </div>
        <Footer />
      </div>
      </div>
    </>
  );
}