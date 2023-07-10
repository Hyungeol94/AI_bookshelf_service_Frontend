/* eslint-disable jsx-a11y/alt-text */
import { useNavigate, useLocation, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// rest-api
import * as api from "../../services/api";
// reactstrap components
import {
  UncontrolledTooltip,
  NavbarBrand,
  Container,
  Collapse,
  NavItem,
  Button,
  Navbar,
  Input,
  Nav,
  Row,
  Col,
} from "reactstrap";
import logo_sm from "../../assets/img/logo_sm.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [collapseOut, setCollapseOut] = useState("");
  const [color, setColor] = useState("navbar-transparent");
  const [search_value, setSearch_value] = useState("");

  const { isAuth } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();
  const location = useLocation();

  /** 로그아웃 함수 */
  const logout = async () => {
    try {
      const res = await api.signout();
      if (res.data?.success) {
        return navigate("/");
      }
    } catch (error) {
      return alert("알 수 없는 오류로 로그아웃을 실패하였습니다.");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const changeColor = () => {
    if (document.documentElement.scrollTop > 1 || document.body.scrollTop > 1) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 2 ||
      document.body.scrollTop < 2
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          {isAuth && (
            <NavbarBrand
              to="/main"
              tag={Link}
              id="navbar-brand"
              style={{ fontSize: "22px" }}
            >
              <span>
                <img
                  src={logo_sm}
                  style={{ marginBottom: "10px", marginRight: "-px" }}
                />{" "}
                Book is On&On{" "}
              </span>
              | Home
            </NavbarBrand>
          )}
          {!isAuth && (
            <NavbarBrand
              to="/"
              tag={Link}
              id="navbar-brand"
              style={{ fontSize: "22px" }}
            >
              <span>
                <img
                  src={logo_sm}
                  style={{ marginBottom: "10px", marginRight: "-5px" }}
                />{" "}
                Book is On&On{" "}
              </span>
              | Home
            </NavbarBrand>
          )}
          <UncontrolledTooltip
            placement="bottom"
            target="navbar-brand"
            style={{ fontSize: "22px" }}
          >
            Home
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          {/* 어디인지 모르겠음 */}
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Book is On&On
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
              <div class="input-group mb-3">
                <Input
                  style={{ borderColor: "#2b3553", width: "20vw" }}
                  type="text"
                  class="form-control"
                  placeholder="Search your book!"
                  aria-label="book search"
                  aria-describedby="button-addon2"
                  id="search_input"
                  name="search_input"
                  value={search_value}
                  onChange={(e) => setSearch_value(e.target.value)}
                  onFocus={(e) => e.target.select()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      navigate("/search", {
                        state: {
                          value: search_value,
                        },
                      });
                    }
                  }}
                />
                <Button
                  className="nav-link d-none d-lg-block"
                  style={{ marginLeft: "0px" }}
                  color="default"
                  // href="/search"
                  onClick={() => {
                    if (location.pathname === "/search") {
                      window.location.reload();
                    }
                    navigate("/search", {
                      state: {
                        value: search_value,
                      },
                    });
                  }}
                >
                  <i className="tim-icons icon-zoom-split" />
                  Search
                </Button>
              </div>
            </NavItem>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="success"
                // target="_blank"
                href="/bookshelf"
              >
                <i className="tim-icons icon-book-bookmark" /> Mybrary
              </Button>
            </NavItem>
            <NavItem>
              {location.pathname === "/" && (
                <Button
                  className="nav-link d-none d-lg-block"
                  color="Success"
                  // onClick={scrollToDownload}
                  href="/login"
                >
                  <i className="tim-icons icon-single-02" /> Login
                </Button>
              )}
              {isAuth && (
                <Button
                  className="nav-link d-none d-lg-block"
                  color="Success"
                  // onClick={scrollToDownload}
                  onClick={() => logout()}
                >
                  <i className="tim-icons icon-single-02" /> Logout
                </Button>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
