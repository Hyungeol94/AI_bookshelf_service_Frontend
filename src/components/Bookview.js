// react
import React, { useState, useEffect } from "react";
// rest-api
import * as api from "../services/api";
// components
import classnames from "classnames";
import BookModal from "./BookModal";
// styles
import "../styles/Book-view.css";
import {
  TabContent,
  CardHeader,
  Container,
  FormGroup,
  CardBody,
  NavItem,
  NavLink,
  TabPane,
  Input,
  Form,
  Nav,
} from "reactstrap";

function Card({ children }) {
  return <div className="book-view-card">{children}</div>;
}

export default function Bookview(props) {
  const [bookshelfcheck, setBookshelfcheck] = useState([]);
  const [bookshelflist, setBookshelflist] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [likecheck, setLikecheck] = useState([]);
  const [cartcheck, setCartcheck] = useState([]);
  const [iconTabs, setIconsTabs] = useState(1);
  const [likelist, setLikelist] = useState([]);
  const [cartlist, setCartlist] = useState([]);

  const getlikecheck = async () => {
    await api
      .likecheck()
      .then((data) => {
        const booklist = data?.data?.info?.list;
        setLikecheck(booklist);
      })
      .catch((e) => console.log(e));
  };
  const getcartcheck = async () => {
    await api
      .cartcheck()
      .then((data) => {
        const booklist = data?.data?.info?.list;
        setCartcheck(booklist);
      })
      .catch((e) => console.log(e));
  };

  const getbookshelfcheck = async () => {
    await api
      .bookshelfcheck()
      .then((data) => {
        const booklist = data?.data?.info?.list;
        setBookshelfcheck(booklist);
      })
      .catch((e) => console.log(e));
  };

  const getlikelist = async () => {
    await api
      .likelist()
      .then((data) => {
        const booklist = data.data.info.list;
        setLikelist(booklist);
      })
      .catch((e) => console.log(e));
  };

  const getcartlist = async () => {
    await api
      .cartlist()
      .then((data) => {
        const booklist = data.data.info.list;
        setCartlist(booklist);
      })
      .catch((e) => console.log(e));
  };

  const getbookshelflist = async () => {
    await api
      .bookshelflist()
      .then((data) => {
        const booklist = data.data.info.list;
        setBookshelflist(booklist);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
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
                          setLikelist={setLikelist}
                          setBookshelflist={setBookshelflist}
                          setCartlist={setCartlist}
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
                          setLikelist={setLikelist}
                          setBookshelflist={setBookshelflist}
                          setCartlist={setCartlist}
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
                          setLikelist={setLikelist}
                          setBookshelflist={setBookshelflist}
                          setCartlist={setCartlist}
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
