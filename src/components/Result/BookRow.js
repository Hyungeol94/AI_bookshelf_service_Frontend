import React from 'react';
import "../../styles/BookList.css";

const BookRow = (props) => {
    const {book_info, setSelectedBookInfo, deleteFromBookList, searchValue, setSearchValue, onSearch} = props
  
    function handleClick(){    
      setSearchValue(book_info.booktitle||book_info.title)    
      setSelectedBookInfo(book_info)
    }

    function handleDelete(){
      deleteFromBookList(book_info)
      console.log("delete")
    }

    return (
      <tr>
        <td onClick={handleClick} className = "bookRow">{book_info.booktitle || book_info.title}</td>                
        <td>
          <button className="deleteButton" onClick={handleDelete}>❎</button>
        </td>
      </tr>
    );
  }

  export default BookRow;