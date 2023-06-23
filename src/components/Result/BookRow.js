import React from 'react';

const BookRow = (props) => {
    const {book_info, setSelectedBookInfo, searchValue, setSearchValue, onSearch} = props
  
    function handleClick(){    
      setSearchValue(book_info.booktitle)    
      setSelectedBookInfo(book_info)
    }
    return (
      <tr onClick={handleClick}>
        <td className = "bookRow">{book_info.booktitle}</td>                
      </tr>
    );
  }

  export default BookRow;