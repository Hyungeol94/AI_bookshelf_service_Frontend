import React from "react";
import {useState} from "react";
import sample from "../assets/sample_book.json";
import bookinfo_api from "../services/bookinfo_api";
import "../styles/Result.css";
import BookSearchView from "../components/Result/BookSearchView.js"
import BookTable from "../components/Result/BookTable.js"
import BookDetail from "../components/Result/BookDetail.js"
import {useEffect} from "react";

function Card({ children }) {
  return (
    <div className="resultCard">
      {children}
    </div>
  );
}

export default function Result() {
  const [selectedBookInfo, setSelectedBookInfo] = useState(sample[0]);
  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState(sample[0].booktitle);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  
  const onSearch = async () => {
    setIsLoading(true);
    const fetchedData = await bookinfo_api(searchValue, pageSize);
    if (typeof fetchedData !== 'undefined' && fetchedData){
      console.log('search and setting data complete and here is the fetched data')
      setData(fetchedData);      
    } else {
      setData(null)
    }
    setIsLoading(false);
  };

  useEffect(() => {
    onSearch()
  }, [searchValue]);


  return (
    <div style={{display:'flex'}}>
      <Card>      
        <BookTable 
          books_info={sample} 
          setSelectedBookInfo={setSelectedBookInfo}
          searchValue = {searchValue}          
          setSearchValue={setSearchValue}
          onSearch={onSearch}        
          />;
      </Card>
      <Card>
        <BookDetail
          book_info = {selectedBookInfo}
        // 클릭되어 있는 텍스트 정보를 제공하기
        />
      </Card>
      <Card>
        {/* 클릭되어 있는 텍스트의 검색 결과 가져 오기 */}
        <BookSearchView
          selectedBookInfo = {selectedBookInfo}
          setSelectedBookInfo={setSelectedBookInfo}
          setSearchValue={setSearchValue}
          onSearch={onSearch}
          isLoading={isLoading}
          setIsLoading= {setIsLoading}
          data = {data}
          setData = {setData}
        />
      </Card>
    </div>
  );
  
}