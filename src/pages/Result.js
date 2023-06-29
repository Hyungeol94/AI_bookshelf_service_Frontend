import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import sample from "../assets/sample_book.json";
import bookinfo_api from "../services/bookinfo_api";
import "../styles/Result.css";
import BookSearchView from "../components/Result/BookSearchView.js"
import BookTableView from "../components/Result/BookTableView.js"
import BookDetailView from "../components/Result/BookDetailView.js"

function Card({ children }) {
  return <div className="resultCard">{children}</div>;
}

function getBooksInfo() {
  const searchParams = new URLSearchParams(window.location.search);
  const jsonResult = searchParams.get('jsonResult');
  
  // Check if jsonResult is provided and valid
  if (jsonResult) {
    try {
      const decodedResult = decodeURIComponent(jsonResult);   
      const parsedResult = JSON.parse(decodedResult);               
      const titleData = parsedResult.data      
      const booksInfo = [];
      Object.keys(titleData).forEach((key) => {
        const bookInfo = {};
        bookInfo.id = key;
        bookInfo.title = titleData[key];
        booksInfo.push(bookInfo);
      });      
      return booksInfo;
    } catch (error) {
      console.error("Invalid JSON format:", error);
    }
  }
  
  // Return an empty array if jsonResult is missing or invalid
  return [];
}


const Result = () => {  
  const [bookList, setBookList] = useState(getBooksInfo())
  const [selectedBookInfo, setSelectedBookInfo] = useState(bookList[0]);
  const [selectedBookRowInfo, setSelectedBookRowInfo] = useState(bookList[0]);
  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState(bookList[0]?.booktitle);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);

  const onSearch = async () => {
    setIsLoading(true);
    const fetchedData = await bookinfo_api(searchValue, pageSize);
    if (typeof fetchedData !== "undefined" && fetchedData) {
      console.log(
        "search and setting data complete and here is the fetched data"
      );
      setData(fetchedData);
    } else {
      setData(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (data && typeof data !== "undefined") console.log("Updated data:", data);
  }, [data]);

    
  useEffect(() => {
    onSearch()
  }, [searchValue]);

  const addToBookList = (bookInfo) => {
    const newBookInfo = {...bookInfo}    
    newBookInfo.id = parseInt(bookList[bookList.length-1].id)+1
    const updatedBookList = bookList.concat(newBookInfo)
    setBookList(updatedBookList)    
    console.log(bookList)
  };  

  const deleteFromBookList = (bookInfo) => {    
    const updatedBookList = bookList.filter(item => item !== bookInfo)
    setBookList(updatedBookList)
  };



  return (
    <div style={{ display: "flex", marginTop: "70px", justifyContent: "center" }}>
      <Card>
        <BookTableView
          booksInfo={bookList}
          setSelectedBookInfo={setSelectedBookInfo}          
          selectedBookRowInfo={selectedBookRowInfo}
          setSelectedBookRowInfo = {setSelectedBookRowInfo}
          deleteFromBookList = {deleteFromBookList}
          searchValue = {searchValue}  
          setSearchValue={setSearchValue}
          onSearch={onSearch}
          bookInfoAPI={bookinfo_api}
        />
        ;
      </Card>
      <Card>
        <BookDetailView
          bookInfo = {selectedBookInfo}
          bookList = {bookList}
          setBookList = {setBookList}
          addToBookList = {addToBookList}          
          selectedBookRowInfo = {selectedBookRowInfo} 
          // 클릭되어 있는 텍스트 정보를 제공하기          
        />
      </Card>
      <Card>
        {/* 클릭되어 있는 텍스트의 검색 결과 가져 오기 */}
        <BookSearchView
          bookInfo={selectedBookInfo}
          setSelectedBookInfo={setSelectedBookInfo}
          setSearchValue={setSearchValue}
          onSearch={onSearch}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          data={data}
          setData={setData}
          selectedBookInfo = {selectedBookInfo}
          // selectedBookRowInfo = {selectedBookRowInfo}
          searchValue = {searchValue}    
        />
      </Card>
    </div>
  );
}

export default Result;