import { Link } from "react-router-dom";
import React from "react";
// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h2>
              <strong> KT AIVLE School </strong>
            </h2>
            <h3>
              <strong> 5반 17 비냉시켜조 </strong>
            </h3>
          </Col>
          <Col md="2">
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
                <NavLink to="/about-us" tag={Link}>
                  <h4> About Us </h4>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col md="2">
            <Nav>
              <NavItem>
                <NavLink to="/terms" tag={Link}>
                  <h4> 개인정보처리방침 </h4>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h4 style={{ marginTop: "30px" }}>
              Kt Aivle School 3기 5반 17조 <br />
              <br />
              경기 성남시 분당구 불정로 90 <br />
              All Rights Reserved ⓒ
            </h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
