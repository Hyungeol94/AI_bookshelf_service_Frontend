import React from 'react';

const BookRow = (props) => {
    const {book_info, setSelectedBookInfo, searchValue, setSearchValue, onSearch} = props
  
    function handleClick(){    
      setSearchValue(book_info.booktitle||book_info.title)    
      setSelectedBookInfo(book_info)
    }
    return (
      <tr onClick={handleClick}>
        <td className = "bookRow">{book_info.booktitle || book_info.title}</td>                
      </tr>
    );
  }

  export default BookRow;