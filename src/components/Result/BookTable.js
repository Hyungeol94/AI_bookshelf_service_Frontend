import React from 'react';
import BookRow from './BookRow';

const BookTable = (props) => {
    const {books_info, setSelectedBookInfo, searchValue, setSearchValue, onSearch} = props        

    return (        
        <table className="bookRowTable">
          <thead>
            <tr>
              {/* <th>Title</th>
              <th>Price</th> */}
            </tr>
          </thead>
          <tbody >
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
    )
}

export default BookTable;