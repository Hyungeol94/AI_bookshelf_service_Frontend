import React from "react";
import "../../styles/BookList.css";
import IconButton from "@mui/material/IconButton";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

const BookRow = (props) => {
  const {
    bookInfo,
    setSelectedBookInfo,
    selectedBookRowInfo,
    setSelectedBookRowInfo,
    deleteFromBookList,
    setSearchValue,
    isDecidedBook,
  } = props;
  const isConditionMet = () => {
    if (bookInfo === selectedBookRowInfo) {
      return true;
    }
    return false;
  };

  function handleClick() {
    setSearchValue(bookInfo.title || bookInfo.booktitle);
    if (isDecidedBook(bookInfo)) {
      setSelectedBookInfo(bookInfo);
    }
    //else는 result.js의 onSearch()에서 처리
    setSelectedBookRowInfo(bookInfo);
  }

  function handleDelete() {
    deleteFromBookList(bookInfo);
    console.log("delete");
  }

  const bookRowClassName = isConditionMet()
    ? "bookRow-conditionMet"
    : "bookRow";

  return (
    <tr
      style={{
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        verticalAlign: "middle",
      }}
    >
      <td onClick={handleClick} className={bookRowClassName}>
        <span className="content">
          {bookInfo.title.length <= 50
            ? bookInfo.title
            : bookInfo.title.slice(0, 50) + "..."}
        </span>
      </td>
      {isDecidedBook(bookInfo) ? (
        <td style={{ padding: "8px" }}>
          <PublishedWithChangesIcon />
        </td>
      ) : (
        <td></td>
      )}
      <td>
        <IconButton
          className="deleteButton"
          onClick={handleDelete}
          size="medium"
        >
          <DeleteForeverRoundedIcon />
        </IconButton>
      </td>
    </tr>
  );
};

export default BookRow;
