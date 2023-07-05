import React from "react";
import BookSearchResultRow from "./BookSearchResultRow";

const BookSearchResultTable = (props) => {
  const { isLoading, data, setSelectedBookInfo } = props;
  let num = 1;

  return (
    <div className="bookSearchResultTable">
      {isLoading ? (
        <h3 style={{ color: "black" }}>로딩중..</h3>
      ) : typeof data !== "undefined" && data && data.items.length !== 0 ? (
        <div className="bookSearchResultTable">
          {console.log("loading done")}
          {data.items.map((book) => {
            return (
              <BookSearchResultRow
                key={num++}
                bookInfo={book}
                setSelectedBookInfo={setSelectedBookInfo}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <h3 style={{ color: "black" }}>검색결과가 없습니다</h3>
        </div>
      )}
    </div>
  );
};

export default BookSearchResultTable;
