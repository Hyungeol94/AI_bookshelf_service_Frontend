import React from 'react';
import {Button} from "reactstrap";
import BookTable from './BookTable'
import "../../styles/Result.css";

const BookTableView = (props) => {
    const {books_info, setSelectedBookInfo, deleteFromBookList, selectedBookRowInfo, setSelectedBookRowInfo, searchValue, setSearchValue, onSearch} = props  

    return (
      <div className = "bookTableView">
        <h3 className="viewHeader">책 목록</h3>
        <BookTable
          books_info = {books_info}
          setSelectedBookInfo = {setSelectedBookInfo}
          selectedBookRowInfo={selectedBookRowInfo}
          setSelectedBookRowInfo = {setSelectedBookRowInfo}
          deleteFromBookList = {deleteFromBookList}
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
          onSearch = {onSearch}          
        />
        <Button style={{width: '70%', display: 'block'}}>식별한 책장 이미지 보기</Button>                
      </div>
    );
  }

  export default BookTableView;