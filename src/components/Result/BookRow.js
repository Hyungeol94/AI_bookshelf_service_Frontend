import React from 'react';
import "../../styles/BookList.css";

const BookRow = (props) => {
    const {book_info, setSelectedBookInfo, selectedBookRowInfo, setSelectedBookRowInfo, deleteFromBookList, searchValue, setSearchValue, onSearch} = props
    const isConditionMet = () => {      
      if (book_info === selectedBookRowInfo){
        return true
      }      
      return false
    }
  
    function handleClick(){    
      setSearchValue(book_info.title||book_info.booktitle)    
      setSelectedBookInfo(book_info)
      setSelectedBookRowInfo(book_info)      
    }

    function handleDelete(){
      deleteFromBookList(book_info)
      console.log("delete")
    }
    
    const bookRowClassName = isConditionMet() ? 'bookRow-conditionMet' : 'bookRow';

    return (
      <tr>
        <td onClick={handleClick} className = {bookRowClassName}>{book_info.title||book_info.booktitle}</td>                
        <td>
          <button className="deleteButton" onClick={handleDelete}>❎</button>
        </td>
      </tr>
    );
  }

  export default BookRow;