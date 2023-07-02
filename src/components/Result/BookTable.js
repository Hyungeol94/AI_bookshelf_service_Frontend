import React from 'react';
import BookRow from './BookRow';

const BookTable = (props) => {
    const {booksInfo, 
          setSelectedBookInfo, 
          selectedBookRowInfo, 
          setSelectedBookRowInfo, 
          deleteFromBookList, 
          searchValue, 
          setSearchValue, 
          onSearch,
          isDecidedBook,
        } = props        

    return (        
        <table className="bookRowTable">
          <thead>
            책 제목
          </thead>
          <tbody >
            {booksInfo.map((bookInfo) => (            
                <BookRow key={bookInfo.id} 
                bookInfo={bookInfo} 
                setSelectedBookInfo={setSelectedBookInfo}
                selectedBookRowInfo={selectedBookRowInfo}
                setSelectedBookRowInfo = {setSelectedBookRowInfo}
                deleteFromBookList = {deleteFromBookList}      
                searchValue = {searchValue}      
                setSearchValue={setSearchValue}
                onSearch={onSearch}
                isDecidedBook = {isDecidedBook}/>
            ))}
          </tbody>
        </table>
    )
}

export default BookTable;