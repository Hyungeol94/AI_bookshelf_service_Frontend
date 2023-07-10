import React from 'react';
import { useState } from "react";
import {Button} from "reactstrap";
import BookTable from './BookTable'
import BookshelfImageModal from './BookshelfImageModal';
import ReUploadButton from './ReUploadButton';
import "../../styles/Result.css";
import * as api from "../../services/api";

import {
  // Link, Route, Routes,
  useNavigate,
} from "react-router-dom";

const BookTableView = (props) => {
    const {booksInfo, setSelectedBookInfo, deleteFromBookList, selectedBookRowInfo, setSelectedBookRowInfo, searchValue, setSearchValue, onSearch, bookInfoAPI, bookshelfImages, isDecidedBook, isLoading, data} = props  
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    
    const searchBookInfo = async (bookInfo) => {
      console.log('searched')
      const fetchedData = await bookInfoAPI(bookInfo.title, 1);
      if (fetchedData !== undefined && fetchedData && fetchedData.items.length!==0) {        
        return fetchedData.items[0]
      } else {
        return {}
      }
    }

    const saveToMyBookshelf = () => {
      console.log('clicked')
      const uniqueBooksInfo = Array.from(new Set(booksInfo));
      const newBooksInfo = []
      const promises = uniqueBooksInfo.map((bookInfo) => {
        if (bookInfo.isbn === undefined) {
          return searchBookInfo(bookInfo);
        } else {
          return Promise.resolve(bookInfo);          
        }
      });

      Promise.all(promises).then((results) => {
        newBooksInfo.push(...results);
        console.log([...newBooksInfo]);
        newBooksInfo.forEach(async (bookInfo) => {
          if (Object.keys(bookInfo).length !==0){
            //save this bookInfo to myBookShelf DB  
            await api.addbookshelf(bookInfo)
          }
        })
        navigate('/bookshelf', { replace: true })
      });      
    }

    const openBookshelfImage = (e) => {
      setModalIsOpen(modalIsOpen => ! modalIsOpen);
      // console.log(modalIsOpen)      
    }

    const handleSaveToMyBookshelf = (e) => {
      if (booksInfo.length !== 0){
        let reply = window.confirm("내 서재로 저장하시겠습니까?")
        if (reply){
          saveToMyBookshelf()
        }
      }
      else{
        window.alert("책 목록이 비어있습니다. 저장을 수행할 수 없습니다.")
      }
    }

    return (
      <div className = "bookTableView" style={{"border-radius":"15px"}}>
        <div className="viewHeader" style={{display:'flex', justifyContent:'space-between'}}>
          <h3 className="viewHeader">책 목록</h3>
          <h4 className="reUpload"><ReUploadButton/></h4>
        </div>
        <BookTable
          booksInfo = {booksInfo}
          setSelectedBookInfo = {setSelectedBookInfo}
          selectedBookRowInfo={selectedBookRowInfo}
          setSelectedBookRowInfo = {setSelectedBookRowInfo}
          deleteFromBookList = {deleteFromBookList}
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
          onSearch = {onSearch}      
          isDecidedBook = {isDecidedBook}
          isLoading = {isLoading}
          data = {data}              
        />
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px',  height: '10%'}}>
          <Button onClick = {openBookshelfImage} style={{padding: '0px 0px', width: '70%', display: 'block',  height: '75%'}}>책장 이미지 확인 </Button>    
            <BookshelfImageModal
              bookshelfImages = {bookshelfImages}
              modalIsOpen = {modalIsOpen}              
              openBookshelfImage = {openBookshelfImage}
              />
          <Button onClick = {handleSaveToMyBookshelf} style={{padding: '0px 0px', width: '70%', display: 'block', height: '75%'}}>내 서재로 저장</Button>                      
        </div>
      </div>
    );
  }

  export default BookTableView;