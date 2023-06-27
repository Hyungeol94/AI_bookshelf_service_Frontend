import BookSearchResultRow from "./BookSearchResultRow"
import BookSearchResultTable from "./BookSearchResultTable"
import BookSearchBar from "./BookSearchBar"
import "../../styles/Result.css";
import {useRef, useState, useEffect} from 'react'
import React from 'react';
import { Book } from "@mui/icons-material";

const BookSearchView = (props) => { 
    const {setSelectedBookInfo, searchValue, setSearchValue, isLoading, data} = props
    const inputRef = useRef(searchValue);

    let num = 1;
    
    useEffect(() => {
      inputRef.current.value = searchValue
    }, [searchValue]);

   
    return (
      <div className= "bookSearchView">
        <h3 className="viewHeader">도서 검색 결과</h3>      
        {/* <div>검색창 넣기</div>  */}        
        <BookSearchBar
          inputRef = {inputRef}
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
        <BookSearchResultTable
          isLoading = {isLoading}
          data = {data} 
          num = {num}
          setSelectedBookInfo = {setSelectedBookInfo}        
        />
      </div>
    );
  }

  export default BookSearchView; 

