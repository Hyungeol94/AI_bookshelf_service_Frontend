/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//component
import BookList from "../components/BookList";

// rest-api
import bookinfo_api from "../services/bookinfo_api";
import * as api from "../services/api";

// style
import "../styles/Home.css";
import { TailSpin } from "react-loader-spinner";

export default (props) => {
  const location = useLocation();

  const [searchValue, setSearchValue] = useState(location?.state?.value);
  const [total, setTotal] = useState(props?.total || null);
  const [bookshelflist, setBookshelflist] = useState([]);
  const [data, setData] = useState(props?.data || null);
  const [isloading, setIsLoading] = useState(false);
  const [likelist, setLikelist] = useState([]);
  const [cartlist, setCartlist] = useState([]);

  const onSearch = async () => {
    await bookinfo_api(searchValue).then(async (data) => {
      setIsLoading(true);

      await api
        .likecheck()
        .then((data) => {
          const booklist = data?.data?.info?.list;
          setLikelist(booklist);
        })
        .catch((e) => console.log(e));

      await api
        .cartcheck()
        .then((data) => {
          const booklist = data?.data?.info?.list;
          setCartlist(booklist);
        })
        .catch((e) => console.log(e));

      await api
        .bookshelfcheck()
        .then((data) => {
          const booklist = data?.data?.info?.list;
          setBookshelflist(booklist);
        })
        .catch((e) => console.log(e));

      setTotal(data?.total);
      setData(data?.items);
    });
    setIsLoading(false);
  };

  useEffect(() => {
    setSearchValue(location?.state?.value);
  }, [location]);

  useEffect(() => {
    onSearch(searchValue);
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
            <TailSpin color="#fff" height={100} width={100} />
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
