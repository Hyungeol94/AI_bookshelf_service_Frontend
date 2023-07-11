/* eslint-disable react-hooks/exhaustive-deps */
// react
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// style
import { lightBlue } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  InfoOutlined,
} from "@mui/icons-material";
// components
import BookModal from "../components/BookModalHome";
import Statshow from "../components/UserStatistics";
import Footer from "components/Footer/Footer.js";
// rest-api
import bookinfo_api from "../services/bookinfo_api";
import * as api from "../services/api";
import "../styles/GetList_home.css";
// assets
import path1 from '../assets/img/path1.png'

const Home = () => {
  const { authData } = useSelector((state) => state.userReducer);
  // useState
  const [recommendCategorylist, setRecommendCategorylist] = useState([]); // 추천 책 받는 로직_작가
  const [recommendAuthorlist, setRecommendAuthorlist] = useState([]); // 추천 책 받는 로직_작가
  const [userstat, setUserstat] = useState([]); // user 통계 정보 받는 곳
  const [newbooklist, setNewbooklist] = useState([]); // 새로운 책
  // DB 유뮤 확인
  const [bookshelfcheck, setBookshelfcheck] = useState([]);
  const [likecheck, setLikecheck] = useState([]);
  const [cartcheck, setCartcheck] = useState([]);
  // DB 불러오기
  const [bookshelflist, setBookshelflist] = useState([]);
  const [likelist, setLikelist] = useState([]);
  const [cartlist, setCartlist] = useState([]);

  const getlikecheck = async () => {
    await api
      .likecheck()
      .then((data) => {
        const booklist = data?.data?.info?.list || "df";
        setLikecheck(booklist);
      })
      .catch((e) => console.log(e));
  };

  const getcartcheck = async () => {
    await api
      .cartcheck()
      .then((data) => {
        const booklist = data?.data?.info?.list || "df";
        setCartcheck(booklist);
      })
      .catch((e) => console.log(e));
  };

  const getbookshelfcheck = async () => {
    await api
      .bookshelfcheck()
      .then((data) => {
        const booklist = data?.data?.info?.list || "df";
        setBookshelfcheck(booklist);
      })
      .catch((e) => console.log(e));
  };

  const getbookshelflist = async () => {
    await api
      .bookshelflist()
      .then((data) => {
        const booklist = data?.data?.info?.list || "df";
        setBookshelflist(booklist);
      })
      .catch((e) => console.log(e));
  };

  const getlikelist = async () => {
    await api
      .likelist()
      .then((data) => {
        const booklist = data?.data?.info?.list || "df";
        setLikelist(booklist);
      })
      .catch((e) => console.log(e));
  };

  const getcartlist = async () => {
    await api
      .cartlist()
      .then((data) => {
        const booklist = data?.data?.output || "df";
        setCartlist(booklist);
      })
      .catch((e) => console.log(e));
  };

  const getuserstat = async () => {
    try {
      const data = await api.countBookshelfInfo();
      const statlist = data?.data?.output || "null";
      setUserstat(statlist);

      await getrecommendAuthorlist();
      await getrecommendCategorylist();
      await getnewbooklist();
    } catch (error) {
      console.log(error);
    }
  };

  const getrecommendAuthorlist = async () => {
    await bookinfo_api(userstat.maxAuthor || "베스트셀러", 25).then(
      async (data) => {
        data.items.slice(0, 50).forEach((item) => {
          if (
            !likecheck.includes(item.isbn) &&
            !cartcheck.includes(item.isbn) &&
            !bookshelfcheck.includes(item.isbn)
          ) {
            setRecommendAuthorlist((prevList) => [...prevList, item]);
          }
        });
      }
    );
  };

  const getrecommendCategorylist = async () => {
    // console.log(userstat.maxCategory || 'undefined');
    await bookinfo_api(userstat.maxCategory || "신간 도서", 25).then(
      async (data) => {
        console.log(userstat.maxCategory, "카테고리 추천시스템 점검");
        // console.log(data);
        // console.log(bookshelfcheck);
        // console.log(cartcheck);
        data.items.slice(0, 50).forEach((item) => {
          if (
            !likecheck.includes(item.isbn) &&
            !cartcheck.includes(item.isbn) &&
            !bookshelfcheck.includes(item.isbn)
          ) {
            // console.log(item.isbn, bookshelfcheck);
            setRecommendCategorylist((prevList) => [...prevList, item]);
          } else {
            // console.log(data.isbn);
          }
        });
      }
    );
  };

  const getnewbooklist = async () => {
    await bookinfo_api("신간 도서", 25).then(async (data) => {
      console.log("신간 도서 시스템 점검");
      // console.log(data);
      // console.log(bookshelfcheck);
      // console.log(cartcheck);
      data.items.slice(0, 50).forEach((item) => {
        setNewbooklist((prevList) => [...prevList, item]);
      });
    });
  };

  useEffect(() => {
    getlikelist();
    getcartlist();
    getbookshelflist();

    getlikecheck();
    getcartcheck();
    getbookshelfcheck();

    getuserstat();

    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  // 좌우 버튼 함수 << 작동여부 확인 후 컴포넌트로 빼야함
  // 좌우를 props?로 받아서 할 수 있는지 알아보자

  const Scroll = ({ direction, scrollParent }) => {
    const move = () => {
      const scrollX = direction === "left" ? -130 : 130;
      const scrollDivs = document.querySelectorAll(`.${scrollParent}`);

      if (scrollDivs) {
        scrollDivs.forEach((scrollDiv) => {
          if (scrollDiv.style.overflowX === "auto") {
            const maxScrollLeft =
              scrollDiv.scrollWidth + 10 - scrollDiv.clientWidth + scrollX;
            const newScrollLeft = scrollDiv.scrollLeft + scrollX;
            if (newScrollLeft >= -130 && newScrollLeft <= maxScrollLeft) {
              scrollDiv.scrollTo({ left: newScrollLeft, behavior: "smooth" });
            }
          }
        });
      }
    };

    return (
      <button
        onClick={move}
        aria-label={direction}
        style={{
          maxHeight: "70px",
          fontSize: "60px",
          backgroundColor: "transparent",
          marginTop: "30px",
          marginLeft: "10px",
          marginRight: "10px",
          border: "none",
        }}
      >
        {/* <strong>{direction === "left" ? "<" : ">"}</strong> */}
        <IconButton fontSize="large" sx={{ color: lightBlue[50] }}>
          {direction === "left" ? <ArrowBackIos /> : <ArrowForwardIos />}
        </IconButton>
      </button>
    );
  };

  return (
    <>
      <div className="wrapper">
        <div className="main">
          <div className="section section-basic" id="basic-elements">
            <img
              alt="..."
              className="path"
              src={path1}
              style={{ pointerEvents: "none", zIndex: 0 }}
            />

            {/* <PopupHome bookCount={bookshelflist.length} />  */}

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "row",
                width: "75%",
                // height: "150vh",
                font: "white",
                margin: "auto",
              }}
            >
              <div
                style={{
                  width: "55%",
                  paddingTop: "10vh",
                  paddingRight: "2vw",
                }}
              >
                {bookshelflist?.length > 0 ? (
                  <>
                    <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
                      {" "}
                      {authData?.nickname || "undefined"}님이 최근 추가한 도서
                    </h3>
                  </>
                ) : (
                  <>
                    <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
                      {" "}
                      신간 도서
                    </h3>
                  </>
                )}

                <p>
                  <div style={{ display: "flex" }}>
                    <Scroll
                      direction="left"
                      scrollParent="scrollingDiv-recent"
                    />
                    <div
                      className="scrollingDiv-recent"
                      style={{
                        display: "flex",
                        overflowX: "auto",
                        flexWrap: "nowrap",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                      {bookshelflist?.length > 0 ? (
                        <>
                          {bookshelflist.slice(0, 10).map((data) => (
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
                        </>
                      ) : (
                        <>
                          {newbooklist.slice(0, 10).map((data) => (
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
                          ))}{" "}
                        </>
                      )}
                    </div>
                    <Scroll
                      direction="right"
                      scrollParent="scrollingDiv-recent"
                    />
                  </div>
                </p>
              </div>

              <div
                style={{
                  marginTop: "5%",
                  backgroundColor: "rgba(255,255,255, 0.8)",
                  width: "40%",
                  height: "12%",
                  // height:'100%',
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    paddingTop: "40px",
                    paddingBottom: "30px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {authData?.nickname?.length > 5 ? (
                      <>
                        <h3 style={{ color: "#000000" }}>
                          {authData?.nickname || "undefined"}님의
                          <br />
                          독서 취향
                        </h3>
                        <div>
                          <Statshow data={authData} />
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 style={{ color: "#000000" }}>
                          {authData?.nickname || "undefined"}님의 독서 취향
                        </h3>
                        <div>
                          <Statshow data={authData} />
                        </div>
                      </>
                    )}
                  </div>

                  <div>
                    {bookshelflist?.length > 0 ? (
                      <>
                        <h4 style={{ color: "#000000" }}>
                          내가 좋아하는 장르 : {userstat.maxCategory}
                        </h4>
                        <h4 style={{ color: "#000000" }}>
                          내가 좋아하는 작가 : {userstat.maxAuthor}
                        </h4>
                      </>
                    ) : (
                      <>
                        <div style={{ display: "flex" }}>
                          <InfoOutlined style={{ marginRight: "5px" }} />
                          <p style={{ color: "#000000" }}>
                            현재 내 서재에 저장된 책이 없습니다. <br />
                            독서 취향 서비스는 내 서재에 저장된 책을 바탕으로{" "}
                            <br />
                            나의 독서 성향(좋아하는 작가 및 카테고리)을
                            알려줍니다.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                margin: "auto",
                paddingTop: "8vh",
                paddingLeft: "7vw",
                paddingRight: "7vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {bookshelflist?.length > 0 ? (
                <>
                  <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
                    {" "}
                    {authData?.nickname || "undefined"}님을 위한 추천 도서
                  </h3>
                </>
              ) : (
                <>
                  <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
                    {" "}
                    주간 베스트셀러
                  </h3>
                </>
              )}

              <div className="productBodyScrollable">
                <div className="products" style={{}}>
                  <p>
                    <div style={{ display: "flex", width: "1314px" }}>
                      <Scroll
                        direction="left"
                        scrollParent="scrollingDiv-recommend"
                      />
                      <div
                        className="scrollingDiv-recommend"
                        style={{
                          display: "flex",
                          overflowX: "auto",
                          flexWrap: "nowrap",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                        }}
                      >
                        {bookshelflist?.length > 0 ? (
                          <>
                            {recommendAuthorlist
                              .concat(recommendCategorylist)
                              ?.slice(0, 20)
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
                          </>
                        ) : (
                          <>
                            {recommendAuthorlist?.slice(0, 15).map((data) => (
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
                          </>
                        )}
                      </div>
                      <Scroll
                        direction="right"
                        scrollParent="scrollingDiv-recommend"
                      />
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
