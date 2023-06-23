import React from 'react';

const BookRow = (props) => {
    const {book_info, setSelectedBookInfo, searchValue, setSearchValue, onSearch} = props
  
    function handleClick(){    
      setSearchValue(book_info.booktitle)    
      setSelectedBookInfo(book_info)
    }
    return (
      <tr className = "bookRow" onClick={handleClick}>
        <td >{book_info.booktitle}</td>
        <td>{book_info.price}</td>
      </tr>
    );
  }

  export default BookRow;