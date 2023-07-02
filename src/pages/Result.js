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

function getBookshelfImage (jsonResult) { 
  // Check if jsonResult is provided and valid
  if (jsonResult) {
    try {
          const decodedResult = decodeURIComponent(jsonResult);   
          const parsedResult = JSON.parse(decodedResult);
          const encodedImages = parsedResult.segment_images
          const DecodedImages = []
          const contentType = "image/jpeg";

          Object.values(encodedImages).forEach(base64ImageString => {
            const byteCharacters = atob(base64ImageString);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], {type: contentType});            
            const imageUrl = URL.createObjectURL(blob);
            DecodedImages.push(imageUrl)
          })

          return DecodedImages
        } catch (error){
          console.error("Invalid JSON format:", error);
        }
      }
    // Return an empty array if jsonResult is missing or invalid
  return [];
  }

function getBooksInfo (jsonResult) {
  // Check if jsonResult is provided and valid
  if (jsonResult) {
    try {
      const decodedResult = decodeURIComponent(jsonResult);   
      const parsedResult = JSON.parse(decodedResult);
      //setBookshelfImage(parsedResult.segment_images);               
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
  const searchParams = new URLSearchParams(window.location.search);
  const jsonResult = searchParams.get('jsonResult'); 
  const [bookImageList, setBookImageList] = useState(getBookshelfImage(jsonResult))
  const [bookList, setBookList] = useState(getBooksInfo(jsonResult))
  const [selectedBookInfo, setSelectedBookInfo] = useState(bookList[0]);
  const [selectedBookRowInfo, setSelectedBookRowInfo] = useState(bookList[0]);
  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState(bookList[0]?.title);
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

    if (isDecidedBook(selectedBookRowInfo) == false){
      if (typeof fetchedData !== 'undefined' && fetchedData && fetchedData.items.length!=0){
        setSelectedBookInfo({...fetchedData.items[0]})
      }
    }
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

  const isDecidedBook = (bookInfo) => {
    return (bookInfo.isbn !== undefined)
  }

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
          bookshelfImages = {bookImageList}
          isDecidedBook = {isDecidedBook}
          isLoading = {isLoading}
          data = {data}
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
          isDecidedBook = {isDecidedBook}
          isLoading = {isLoading}
          data = {data}
          setSelectedBookInfo = {setSelectedBookInfo}
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
          selectedBookRowInfo = {selectedBookRowInfo}
          searchValue = {searchValue}    
        />
      </Card>
    </div>
  );
}

export default Result;