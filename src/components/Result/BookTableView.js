import React from 'react';
import BookTable from './BookTable'
import "../../styles/Result.css";

const BookTableView = (props) => {
    const {books_info, setSelectedBookInfo, searchValue, setSearchValue, onSearch} = props  

    return (
      <div className = "bookTableView">
        <h3 className="viewHeader">책 목록</h3>
        <BookTable
          books_info = {books_info}
          setSelectedBookInfo = {setSelectedBookInfo}
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
          onSearch = {onSearch}          
        />        
      </div>
    );
  }

  export default BookTableView;