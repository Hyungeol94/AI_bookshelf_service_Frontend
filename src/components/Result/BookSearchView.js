import BookSearchResultRow from "./BookSearchResultRow"
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
      <div style={{backgroundColor: 'white', padding : '10px', width: '300px', height:'450px'}}>
        <h3 style={{color:'black'}}>도서 검색 결과</h3>      
        {/* <div>검색창 넣기</div>  */}        
        <BookSearchBar
          inputRef = {inputRef}
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
        <div>
            {isLoading ? (
            <h3 style={{color: 'black'}}>로딩중..</h3>
          ) : (typeof data !== 'undefined' && data && data.length!=0) ? (
            <div className = "searchBlock">              
              {console.log(data)}            
              {data.map((book) => {
                return (
                  <BookSearchResultRow
                    key={num++}  
                    book_info = {book}
                    setSelectedBookInfo = {setSelectedBookInfo}       
                  />
                );
              })}
          </div>
        ) : (
          <div>
            <h3 style={{color:'black'}} >검색결과가 없습니다</h3>
          </div>
        )}
          </div>
      </div>
    );
  }

  export default BookSearchView; 

