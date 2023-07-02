import React from "react";
import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import {
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";

// core components
import Footer from "components/Footer/Footer.js";
// our components
import getlist from "../components/GetList_user_home";
import user_info from "../assets/sample_user.json";
import Statshow from "../components/UserStatistics";
import Bookslider from "../components/Bookslider";
import BookModal from "../components/BookModalHome";
import PopupHome from "../components/PopupHome";

// api
import * as api from "../services/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [list, setList] = useState([]);
  const { authData } = useSelector((state) => state.userReducer);

  const [likelist, setLikelist] = useState([]);
  const [cartlist, setCartlist] = useState([]);
  const [bookshelflist, setBookshelflist] = useState([]);
  
  const [likecheck, setLikecheck] = useState([]);
  const [cartcheck, setCartcheck] = useState([]);
  const [bookshelfcheck, setBookshelfcheck] = useState([]);

  const getlikecheck = async ()=>{
    await api.likecheck()
    .then((data) => {
      const booklist = data?.data?.info?.list;
      setLikecheck(booklist);
      console.log(data?.data?.info?.list);
    })
    .catch((e) => console.log(e));}

  const getcartcheck = async () => {
    await api.cartcheck()
    .then((data) => {
      const booklist = data?.data?.info?.list;
      setCartcheck(booklist);
      console.log(data?.data?.info?.list);
    })
    .catch((e) => console.log(e));}

  const getbookshelfcheck = async ()=>{
    await api.bookshelfcheck()
    .then((data) => {
      const booklist = data?.data?.info?.list;
      setBookshelfcheck(booklist);
      console.log(data?.data?.info?.list);
    })
    .catch((e) => console.log(e));}

  const getbookshelflist = async () => {
    console.log(111);
    await api.bookshelflist()
      .then((data) => {
        const booklist = data.data.info.list;
        setBookshelflist(booklist);
        console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  const getlikelist = async () => {
    console.log(111);
    await api.likelist()
      .then((data) => {
        const booklist = data.data.info.list;
        setLikelist(booklist);
        console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  const getcartlist = async () => {
    console.log(111);
    await api.cartlist()
      .then((data) => {
        const booklist = data.data.info.list;
        setCartlist(booklist);
        console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };
    
  // console.log(authData);
  const getlikebooklist = async () => {
    console.log(111);
    await api
      .likelist()
      .then((data) => {
        const booklist = data.data.info.list;
        setList(booklist);
        console.log(booklist);
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
  }, []);

  // 좌우 버튼 함수 << 작동여부 확인 후 컴포넌트로 빼야함
  // 좌우를 props?로 받아서 할 수 있는지 알아보자

  const Scroll = ({ direction, scrollParent }) => {
    const handleScroll = () => {
      const { scrollY } = window;
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const move = () => {
      const scrollX = direction === "left" ? -240 : 240;
      const scrollDivs = document.querySelectorAll(`.${scrollParent}`);
  
      if (scrollDivs) {
        scrollDivs.forEach((scrollDiv) => {
          if (scrollDiv.style.overflowX === "auto") {
            const maxScrollLeft = scrollDiv.scrollWidth - scrollDiv.clientWidth;
            const newScrollLeft = scrollDiv.scrollLeft + scrollX;
            // scrollDiv.scrollTo({ left: scrollX, behavior: "smooth" });
            
            if (newScrollLeft >= 0 && newScrollLeft <= maxScrollLeft) {
              scrollDiv.scrollTo({ left: newScrollLeft, behavior: "smooth" });}
        }});
      }
    };

    let authorCount = {}
    let categoryCount = {}

    bookshelflist.forEach((book) => {
      const author = book.author;
      const category = book.category;
      if (authorCount[author]) {
        authorCount[author] += 1;
      } else {
        authorCount[author] = 1;
      }
      if (categoryCount[category]) {
        categoryCount[category] += 1;
      } else {
        categoryCount[category] = 1;
      }
    });
  
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
          {direction === "left" ? 
          <ArrowBackIos /> : <ArrowForwardIos />}
          </IconButton>
      </button>
    );
  };

  let maxAuthor = '-';
  let maxCategory = '-';

  if (bookshelflist.length > 0){
    let authorCount = {}
    let categoryCount = {}
  
    bookshelflist.forEach((book) => {
      const author = book.author;
      const category = book.category;
      if (authorCount[author]) {
        authorCount[author] += 1;
      } else {
        authorCount[author] = 1;
      }
      if (categoryCount[category]) {
        categoryCount[category] += 1;
      } else {
        categoryCount[category] = 1;
      }
    });
  
    maxAuthor = Object.entries(authorCount).reduce((prev, curr) => {
                        return curr[1] > prev[1] ? curr : prev;
                      })[0];
    maxCategory = Object.entries(categoryCount).reduce((prev, curr) => {
                          return curr[1] > prev[1] ? curr : prev;
                        })[0];
  
  }

  

  useEffect(() => {
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
              style={{ "pointer-events": "none", "z-index": 0 }}
            />

            {/* <PopupHome bookCount={bookshelflist.length} />  */}


            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                width: "75%",
                // height: "150vh",
                font: "white",
                margin:'auto'
              }}
              >

              <div
                style={{
                  width: "55%",
                  paddingTop: "10vh",
                  paddingRight: "2vw",
                }}
                >
                <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
                  {" "}
                  {authData?.nickname || "undefined"}님이 최근 추가한 도서
                </h3>

                  <p>
                  <div style={{ display: "flex" }}>
                      <Scroll direction="left" scrollParent="scrollingDiv-recent" />
                  <div
                      className="scrollingDiv-recent"
                      style={{
                        display: "flex",
                        overflowX: "auto",
                        flexWrap:'nowrap',
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                      >
                    {bookshelflist
                    .reverse()
                    .slice(0, 10)
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
                      bookshelflist = {bookshelflist}
                      likelist = {likelist}
                      cartlist = {cartlist}
                      bookshelfcheck = {bookshelfcheck}
                      likecheck = {likecheck}
                      cartcheck = {cartcheck}
                      />
                      ))}
                  </div>
                    <Scroll direction="right" scrollParent="scrollingDiv-recent" />
                  </div>
                </p>

                   
                </div>

                <div
                style={{
                  marginTop: "20px",
                  backgroundColor: "rgba(255,255,255, 0.8)",
                  width: "40%",
                  // height:'100%',
                  borderRadius: "30px 30px 30px 30px",
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
                  <div style={{ display: "flex" }}>
                    <h3 style={{ color: "#000000" }}>
                      {authData?.nickname || "undefined"}님의 독서 취향
                    </h3>
                    <div style={{ marginLeft: "30px" }}>
                      <Statshow data={authData} />
                    </div>
                  </div>

                  <div>
                    <h4 style={{ color: "#000000" }}>
                      내가 좋아하는 장르 : {maxCategory}
                    </h4>
                    <h4 style={{ color: "#000000" }}>
                      내가 좋아하는 작가 : {maxAuthor}
                    </h4>
                  </div>
                </div>
              </div>


              </div>




              <div
                style={{
                  width: "90%",
                  margin:'auto',
                  paddingTop: "8vh",
                  paddingLeft: "7vw",
                  paddingRight: "7vw",
                }}
              >
                <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
                  {" "}
                  {authData?.nickname || "undefined"}님을 위한 추천 도서
                </h3>

                <div className="productBodyScrollable">
                  <div
                    className="products"
                    style={{ }}
                  >

<p>
                  <div style={{ display: "flex" }}>
                      <Scroll direction="left" scrollParent="scrollingDiv-recommend" />
                  <div
                      className="scrollingDiv-recommend"
                      style={{
                        display: "flex",
                        overflowX: "auto",
                        flexWrap:'nowrap',
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                      >
                    {likelist
                    .reverse()
                    .slice(0, 15)
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
                      bookshelflist = {bookshelflist}
                      likelist = {likelist}
                      cartlist = {cartlist}
                      bookshelfcheck = {bookshelfcheck}
                      likecheck = {likecheck}
                      cartcheck = {cartcheck}
                      />
                      ))}
                  </div>
                    <Scroll direction="right" scrollParent="scrollingDiv-recommend" />
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