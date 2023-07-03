import React, { useState, useEffect } from "react";
import classnames from "classnames";
import * as api from "../services/api";
// reactstrap components

//our components
import BookModal from "./BookModal";

import "../styles/Book-view.css";

import {
  TabContent,
  TabPane,
  Container,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

function Card({ children }) {
  return <div className="book-view-card">{children}</div>;
}

export default function Bookview(props) {
  // console.log(props.list);
  const [iconTabs, setIconsTabs] = useState(1);
  const [filterText, setFilterText] = useState("");
  const [likelist, setLikelist] = useState([]);
  const [cartlist, setCartlist] = useState([]);
  const [bookshelflist, setBookshelflist] = useState([]);

  const [likecheck, setLikecheck] = useState([]);
  const [cartcheck, setCartcheck] = useState([]);
  const [bookshelfcheck, setBookshelfcheck] = useState([]);


  const getlikecheck = async () => {
    await api
      .likecheck()
      .then((data) => {
        const booklist = data?.data?.info?.list;
        setLikecheck(booklist);
        // console.log(data?.data?.info?.list);
      })
      .catch((e) => console.log(e));
  };
  const getcartcheck = async () => {
    await api
      .cartcheck()
      .then((data) => {
        const booklist = data?.data?.info?.list;
        setCartcheck(booklist);
        // console.log(data?.data?.info?.list);
      })
      .catch((e) => console.log(e));
  };

  const getbookshelfcheck = async () => {
    await api
      .bookshelfcheck()
      .then((data) => {
        const booklist = data?.data?.info?.list;
        setBookshelfcheck(booklist);
        // console.log(data?.data?.info?.list);
      })
      .catch((e) => console.log(e));
  };

  const getlikelist = async () => {
    // console.log(111);
    await api
      .likelist()
      .then((data) => {
        const booklist = data.data.info.list;
        setLikelist(booklist);
        // console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  const getcartlist = async () => {
    // console.log(111);
    await api
      .cartlist()
      .then((data) => {
        const booklist = data.data.info.list;
        setCartlist(booklist);
        // console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  const getbookshelflist = async () => {
    // console.log(111);
    await api
      .bookshelflist()
      .then((data) => {
        const booklist = data.data.info.list;
        setBookshelflist(booklist);
        // console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  useEffect(() => {
    console.log(222);
    getlikelist();
    getcartlist();
    getbookshelflist();

    getlikecheck();
    getcartcheck();
    getbookshelfcheck();
  }, [iconTabs]);

  return (
    <>
      <Container
        className=""
        style={{ width: "1000px", padding: 0, ...props.style }}
      >
        <Card>
          <CardHeader className="book-view-card-header">
            <Nav className="nav-tabs-info" role="tablist" tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: iconTabs === 1,
                  })}
                  onClick={(e) => setIconsTabs(1)}
                  href="#pablo"
                  style={{ borderRadius: "30px" }}
                >
                  <i className="tim-icons icon-align-left-2" />내 서재
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: iconTabs === 2,
                  })}
                  onClick={(e) => setIconsTabs(2)}
                  href="#pablo"
                  style={{ borderRadius: "30px" }}
                >
                  <i className="tim-icons icon-heart-2" />
                  좋아하는 책
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: iconTabs === 3,
                  })}
                  onClick={(e) => setIconsTabs(3)}
                  href="#pablo"
                  style={{ borderRadius: "30px" }}
                >
                  <i className="tim-icons icon-cart" />
                  장바구니
                </NavLink>
              </NavItem>
              <Form className="form-inline ml-auto">
                <FormGroup className="no-border">
                  <Input
                    className="book-view-search"
                    placeholder="제목으로 검색하기"
                    type="text"
                    name="searchKeyword"
                    filterText={filterText}
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)} // 검색어 업데이트
                  />
                </FormGroup>
              </Form>
            </Nav>
          </CardHeader>
          <CardBody>
            <TabContent className="tab-space" activeTab={"link" + iconTabs}>
              <TabPane tabId="link1">
                <p>
                  <h4>
                    {" "}
                    총{" "}
                    {
                      bookshelflist.filter((data) =>
                        data?.title
                          ?.toLowerCase()
                          .includes(filterText?.toLowerCase())
                      ).length
                    }
                    권{" "}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      overflowX: "auto",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    {bookshelflist
                      .filter((data) =>
                        data?.title
                          ?.toLowerCase()
                          .includes(filterText?.toLowerCase())
                      )
                      .map((data) => (
                        <BookModal
                          key={data.id}
                          image={data.image}
                          booktitle={data.title}
                          author={data.author}
                          description={data.description}
                          id={data.id}
                          isbn={data.isbn}
                          link={data.link}
                          pubdate={data.pubdate}
                          publisher={data.publisher}
                          bookshelflist={bookshelflist}
                          likelist={likelist}
                          cartlist={cartlist}
                          bookshelfcheck={bookshelfcheck}
                          likecheck={likecheck}
                          cartcheck={cartcheck}
                        />
                      ))}
                  </div>
                </p>
              </TabPane>
              <TabPane tabId="link2">
                <p>
                  <h4>
                    {" "}
                    총{" "}
                    {
                      likelist?.filter((data) =>
                        data?.title
                          ?.toLowerCase()
                          .includes(filterText?.toLowerCase())
                      ).length
                    }
                    권{" "}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      overflowX: "auto",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    {likelist
                      ?.filter((data) =>
                        data?.title
                          ?.toLowerCase()
                          .includes(filterText?.toLowerCase())
                      )
                      .map((data) => (
                        <BookModal
                          key={data.id}
                          image={data.image}
                          booktitle={data.title}
                          author={data.author}
                          description={data.description}
                          id={data.id}
                          isbn={data.isbn}
                          link={data.link}
                          pubdate={data.pubdate}
                          publisher={data.publisher}
                          bookshelflist={bookshelflist}
                          likelist={likelist}
                          cartlist={cartlist}
                          bookshelfcheck={bookshelfcheck}
                          likecheck={likecheck}
                          cartcheck={cartcheck}
                        />
                      ))}
                  </div>
                </p>
              </TabPane>
              <TabPane tabId="link3">
                <p>
                  <h4>
                    {" "}
                    총{" "}
                    {
                      cartlist?.filter((data) =>
                        data?.title
                          ?.toLowerCase()
                          .includes(filterText?.toLowerCase())
                      ).length
                    }
                    권{" "}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      overflowX: "auto",
                      flexWrap: "wrap",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    {cartlist
                      ?.filter((data) =>
                        data?.title
                          ?.toLowerCase()
                          .includes(filterText?.toLowerCase())
                      )
                      .map((data) => (
                        <BookModal
                          key={data.id}
                          image={data.image}
                          booktitle={data.title}
                          author={data.author}
                          description={data.description}
                          id={data.id}
                          isbn={data.isbn}
                          link={data.link}
                          pubdate={data.pubdate}
                          publisher={data.publisher}
                          bookshelflist={bookshelflist}
                          likelist={likelist}
                          cartlist={cartlist}
                          bookshelfcheck={bookshelfcheck}
                          likecheck={likecheck}
                          cartcheck={cartcheck}
                        />
                      ))}
                  </div>
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
