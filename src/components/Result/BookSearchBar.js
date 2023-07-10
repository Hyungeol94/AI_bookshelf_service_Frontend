/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const BookSearchBar = (props) => {
  const { inputRef, searchValue, setSearchValue } = props;

  const handleClick = () => {
    if (inputRef.current.value !== "") {
      setSearchValue(inputRef.current.value);
    }
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      if (inputRef.current.value !== "") {
        setSearchValue(inputRef.current.value);
      }
    }
  };

  const handleFocus = () => {
    inputRef.current.value = searchValue;
  };

  return (
    <div class="input-group mb-3">
      <input
        ref={inputRef}
        defaultValue={searchValue}
        placeholder={searchValue}
        onFocus={handleFocus} // Preserve the defaultValue when the input is focused
        className="searchBar"
        class="form-control"
        aria-label="book search"
        aria-describedby="button-addon2"
        type="text"
        onKeyDown={handleOnKeyPress}
        style={{
          color: "black",
          height: "33px",
          marginTop: "5px",
          "margin-left": "1px",
        }}
      />

      <a
        class="nav-link d-none d-lg-block btn btn-default"
        onClick={handleClick}
      >
        <i
          class="tim-icons icon-zoom-split"
          style={{ "margin-right": "3px" }}
        ></i>
      </a>
    </div>
  );
};

export default BookSearchBar;
