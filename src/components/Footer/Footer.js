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
import { Link } from "react-router-dom";
import React, { Component } from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {

  class AboutUs extends Component {

    handleClick = (e) => {
      e.preventDefault();
      window.scrollTo(0, 0); // 스크롤을 최상단으로 이동시킴
      window.location.href = e.target.href; // 링크 이동
    }
  
    render() {
      return (
        <NavItem>
        <NavLink tag={Link} to="/about-us" onClick={this.handleClick}>
          <h4> About Us </h4>
        </NavLink>
      </NavItem>
      );
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="4">
            <h1><strong> KT AIVLE School </strong></h1>
            <h2><strong> 5반 17 비냉시켜조 </strong></h2>
            <h2 className="title"></h2>
          </Col>
          <Col md="1">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  <h4> Home </h4>
                </NavLink>
              </NavItem>

              
            </Nav>
          </Col>

          <Col md="2">
            <Nav>
            <NavItem>
                <NavLink to="/terms" tag={Link}>
                  <h4> Terms of Service </h4>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col md="2">
            <Nav>
            <NavItem>
              <AboutUs/>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
          <h4 style={{marginTop: "30px"}}> 
          Kt Aivle School 3기 5반 17조 <br/><br/>
            경기 성남시 분당구 불정로 90 <br/>
            All Rights Reserved ⓒ</h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
