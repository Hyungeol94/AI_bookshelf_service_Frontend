/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "../styles/Home.css";
// import { Select, MenuItem } from "@mui/material";
import * as api from "../services/api";
import { useLocation } from "react-router-dom";
import BookList from "../components/BookList";
import bookinfo_api from "../services/bookinfo_api";
// import sampleBookImg from "../assets/img/sample_book.png";
// import sample from "../assets/sample_book.json";

export default (props) => {
  const location = useLocation();
  // console.log(location?.state?.value);

  const [data, setData] = useState(props?.data || null);
  const [total, setTotal] = useState(props?.total || null);
  const [likelist, setLikelist] = useState([]);
  const [cartlist, setCartlist] = useState([]);
  const [bookshelflist, setBookshelflist] = useState([]);
  const [searchValue, setSearchValue] = useState(location?.state?.value);
  const [isloading, setIsLoading] = useState(false);

  const onSearch = async () => {
    await bookinfo_api(searchValue).then(async (data) => {
      setIsLoading(true);

      await api
        .likecheck()
        .then((data) => {
          const booklist = data?.data?.info?.list;
          setLikelist(booklist);
          // console.log(data?.data?.info?.list);
        })
        .catch((e) => console.log(e));

      await api
        .cartcheck()
        .then((data) => {
          const booklist = data?.data?.info?.list;
          setCartlist(booklist);
          // console.log(data?.data?.info?.list);
        })
        .catch((e) => console.log(e));

      await api
        .bookshelfcheck()
        .then((data) => {
          const booklist = data?.data?.info?.list;
          setBookshelflist(booklist);
          // console.log(data?.data?.info?.list);
        })
        .catch((e) => console.log(e));

      // console.log(data);
      setData(data?.items);
      setTotal(data?.total);
    });
    setIsLoading(false);
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };

  useEffect(() => {
    setSearchValue(location?.state?.value);
    // console.log(111, searchValue);
  }, [location]);

  useEffect(() => {
    onSearch(searchValue);
    // console.log(222, searchValue);
  }, [searchValue]);

  return (
    <div
      id="search"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "5em",
      }}
    >
      <div>
        {isloading ? (
          <div
            style={{ display: "flex", alignItems: "center", height: "70vh" }}
          >
            <h3>로딩중..</h3>
          </div>
        ) : total > 0 ? (
          <div>
            {data.map((book) => {
              return (
                <BookList
                  key={book?.isbn}
                  likelist={likelist}
                  cartlist={cartlist}
                  bookshelflist={bookshelflist}
                  title={book?.title}
                  author={book?.author}
                  description={book?.description}
                  discount={book?.discount}
                  isbn={book?.isbn}
                  link={book?.link}
                  pubdate={book?.pubdate}
                  publisher={book?.publisher}
                  image={book?.image}
                  category={book?.category}
                  page={book?.page}
                  weight={book?.weight}
                />
              );
            })}
          </div>
        ) : (
          <div
            style={{ display: "flex", alignItems: "center", height: "70vh" }}
          >
            <div
              style={{
                marginTop: "2em",
              }}
            >
              <h2>검색결과가 없습니다</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
