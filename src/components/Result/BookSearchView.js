/* eslint-disable import/no-anonymous-default-export */
import React, { useRef, useEffect } from "react";
import BookSearchResultTable from "./BookSearchResultTable";
import BookSearchBar from "./BookSearchBar";
import "../../styles/Result.css";

export default (props) => {
  const { setSelectedBookInfo, searchValue, setSearchValue, isLoading, data } =
    props;
  const inputRef = useRef(searchValue);

  useEffect(() => {
    inputRef.current.value = searchValue;
  }, [searchValue]);

  return (
    <div className="bookSearchView" style={{ "border-radius": "15px" }}>
      <h3 className="viewHeader">
        도서 검색 결과
      </h3>
      <BookSearchBar
        inputRef={inputRef}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <BookSearchResultTable
        isLoading={isLoading}
        data={data}
        setSelectedBookInfo={setSelectedBookInfo}
      />
    </div>
  );
};

// export default BookSearchView;
