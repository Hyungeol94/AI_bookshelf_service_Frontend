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
          onSearch} = props        

    return (        
        <table className="bookRowTable">
          
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
                onSearch={onSearch}/>
            ))}
          </tbody>
        </table>
    )
}

export default BookTable;