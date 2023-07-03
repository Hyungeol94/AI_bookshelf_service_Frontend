import React from 'react';
import { useState } from "react";
import {Button} from "reactstrap";
import BookTable from './BookTable'
import BookshelfImageModal from './BookshelfImageModal';
import "../../styles/Result.css";
import * as api from "../../services/api";
import {
  // Link, Route, Routes,
  useNavigate,
} from "react-router-dom";

const BookTableView = (props) => {
    const {booksInfo, setSelectedBookInfo, deleteFromBookList, selectedBookRowInfo, setSelectedBookRowInfo, searchValue, setSearchValue, onSearch, bookInfoAPI, bookshelfImages, isDecidedBook, isLoading, data} = props  
    const navigate = useNavigate();
    let [modalIsOpen, setModalIsOpen] = useState(false)
    
    const searchBookInfo = async (bookInfo) => {
      console.log('searched')
      const fetchedData = await bookInfoAPI(bookInfo.title, 1);
      if (fetchedData !== undefined && fetchedData && fetchedData.items.length!==0) {        
        return fetchedData.items[0]
      } else {
        return {}
      }
    }

    const saveToMyBookShelf = (e) => {
      console.log('clicked')
      const newBooksInfo = []
      const promises = booksInfo.map((bookInfo) => {
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
      console.log(modalIsOpen)
      console.log(bookshelfImages)
    }


    return (
      <div className = "bookTableView" style={{"border-radius":"15px"}}>
        <h3 className="viewHeader" style={{"font-size":"30px"}}>책 목록</h3>
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

        <div style={{display: 'flex', marginTop: '10px'}}>
          <Button onClick = {openBookshelfImage} style={{width: '70%', display: 'block'}}>책장 이미지 </Button>    

            <BookshelfImageModal
              bookshelfImages = {bookshelfImages}
              modalIsOpen = {modalIsOpen}
              openBookshelfImage = {openBookshelfImage}
              />
          <Button onClick = {saveToMyBookShelf} style={{width: '70%', display: 'block'}}>내 서재로 저장</Button>                      
        </div>
      </div>
    );
  }

  export default BookTableView;