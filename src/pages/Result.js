import React from "react";
import {useState} from "react";
// import { Link } from "react-router-dom";
import sample from "../assets/sample_book.json";
import bookinfo_api from "../services/bookinfo_api";
import BookList from "../components/BookList";
import sampleBookImg from "../assets/img/sample_book.png";
import "../styles/Result.css";

function Card({ children }) {
  return (
    <div className="resultCard">
      {children}
    </div>
  );
}

function BookRow(props) {
  const {book_info, setSelectedBookInfo, searchValue, setSearchValue, onSearch} = props
  function handleClick(){
    setSelectedBookInfo(book_info)
    setSearchValue(book_info.booktitle)
    onSearch(searchValue)
  }
  return (
    <tr className = "bookRow" onClick={handleClick}>
      <td >{book_info.booktitle}</td>
      <td>{book_info.price}</td>
    </tr>
  );
}

function BookTable(props) {
  const {books_info, setSelectedBookInfo, searchValue, setSearchValue, onSearch, setIsLoading, setData} = props
  return (
    <div className="bookTable">
      <h3 style={{ color: "black" }}>책 목록</h3>
      <table>
        <thead>
          <tr>
            {/* <th>Title</th>
            <th>Price</th> */}
          </tr>
        </thead>
        <tbody>
          {books_info.map((book_info) => (
            <BookRow key={book_info.id} 
            book_info={book_info} 
            setSelectedBookInfo={setSelectedBookInfo}
            searchValue = {searchValue}
            setSearchValue={setSearchValue}
            onSearch={onSearch}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}


function BookDetail({book_info}) {
  return (
    <div style={{backgroundColor: 'white', padding : '10px', width: '300px'}}>
      <h3 style={{color:'black'}}>상세 정보</h3>
      <img src = {book_info.image} alt="Book Cover" style = {{height: '250px'}}/>
      <div>{book_info.booktitle}</div>
      <div>{book_info.author}</div>

    </div>
  );
}

function BookSearchView(props) { 
  const {book_info, setSelectedBookInfo, setSearchValue, onSearch, isLoading, setIsLoading, data, setData} = props
  let num = 1;

  return (
    <div style={{backgroundColor: 'white', padding : '10px', width: '300px', height:'450px'}}>
      <h3 style={{color:'black'}}>도서 검색 결과</h3>      
      <div>{book_info.booktitle}</div>
        {/* book_info에 대한 검색 결과*/}  
        <div>
        {isLoading ? (
        <h3 style={{color: 'black'}}>로딩중..</h3>
      ) : data ? (
        <div>
          검색결과
          {console.log(data)}
          {data.map((book) => {
            return (
              <BookList
                key={num++}
                booktitle={book?.elements[0]?.elements[0]?.cdata}
                image={sampleBookImg}                
              />
            );
          })}
        </div>
      ) : (
        <div>
          <h3 style={{color:'black'}} >검색결과가 없습니다</h3>
        </div>
      )}
      {/* <p>bookinfo</p> */}
          
        </div>
      
      selectedBookInfo에 대한 도서 api 검색결과 나오는 창
    </div>
  );
}


export default function Result() {
  const [selectedBookInfo, setSelectedBookInfo] = useState(sample[0]);
  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState(sample[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);

  const onSearch = async () => {
    setIsLoading(true);
    setData(await bookinfo_api(searchValue, pageSize));
    setIsLoading(false);
    // console.log("data", data[0].elements[0].elements[0].cdata);
  };
  
  return (
    <div style={{display:'flex'}}>
      <Card>
        <BookTable 
          books_info={sample} 
          setSelectedBookInfo={setSelectedBookInfo}
          searchValue = {searchValue}
          setSearchValue={setSearchValue}
          onSearch={onSearch}
          setIsLoading= {setIsLoading}
          setData = {setData}
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
          book_info = {selectedBookInfo}
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
