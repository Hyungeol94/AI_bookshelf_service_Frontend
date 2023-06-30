import React, { useState, useEffect } from "react";

// our components
import UserProfile from "../components/Profile";
import * as api from "../services/api";
import BookView from "../components/Bookview";
import { useSelector } from "react-redux";

const UserBookShelf = () => {
  const [likelist, setLikelist] = useState([]);
  const [cartlist, setCartlist] = useState([]);
  const [bookshelflist, setBookshelflist] = useState([]);
  const { authData } = useSelector((state) => state.userReducer);
  
  const [likecheck, setLikecheck] = useState([]);
  const [cartcheck, setCartcheck] = useState([]);
  const [bookshelfcheck, setBookshelfcheck] = useState([]);

  const getlikecheck = ()=>{
    api.likecheck()
  .then((data) => {
    const booklist = data?.data?.info?.list;
    setLikecheck(booklist);
    console.log(data?.data?.info?.list);
  })
  .catch((e) => console.log(e));
}
  const getcartcheck = () => {
    api.cartcheck()
    .then((data) => {
      const booklist = data?.data?.info?.list;
      setCartcheck(booklist);
      console.log(data?.data?.info?.list);
    })
    .catch((e) => console.log(e));}

  const getbookshelfcheck = ()=>{
    api.bookshelfcheck()
    .then((data) => {
      const booklist = data?.data?.info?.list;
      setBookshelfcheck(booklist);
      console.log(data?.data?.info?.list);
    })
    .catch((e) => console.log(e));}


  const getlikelist = () => {
    console.log(111);
    api.likelist()
      .then((data) => {
        const booklist = data.data.info.list;
        setLikelist(booklist);
        console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  const getcartlist = () => {
    console.log(111);
    api.cartlist()
      .then((data) => {
        const booklist = data.data.info.list;
        setCartlist(booklist);
        console.log(booklist);
      })
      .catch((e) => console.log(e));
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };
  const getbookshelflist = () => {
    console.log(111);
    api.bookshelflist()
      .then((data) => {
        const booklist = data.data.info.list;
        setBookshelflist(booklist);
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

  return (
    <>
      <div className="wrapper"
        style={{}}>
        <div className="main">
          <div className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path1.png")}
              style={{ "pointer-events": "none", "z-index": 0, }}
            />
            <div></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
                width: "100%",
                height: "100vh",
                // marginTop: "4em",
                font: "white",
              }}
            >
              <div>

                <UserProfile data={authData} />
                <BookView
                  style={{ marginTop: "30px" }}
                  data={authData}
                  likelist={likelist}
                  cartlist={cartlist}
                  bookshelflist={bookshelflist}
                  bookshelfcheck = {bookshelfcheck}
                  likecheck = {likecheck}
                  cartcheck = {cartcheck}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default UserBookShelf;
