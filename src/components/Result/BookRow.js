import React from 'react';
import "../../styles/BookList.css";

const BookRow = (props) => {
    const {bookInfo, setSelectedBookInfo, selectedBookRowInfo, setSelectedBookRowInfo, deleteFromBookList, searchValue, setSearchValue, onSearch} = props
    const isConditionMet = () => {      
      if (bookInfo === selectedBookRowInfo){
        return true
      }      
      return false
    }
  
    function handleClick(){    
      setSearchValue(bookInfo.title||bookInfo.booktitle)    
      setSelectedBookInfo(bookInfo)
      setSelectedBookRowInfo(bookInfo)      
    }

    function handleDelete(){
      deleteFromBookList(bookInfo)
      console.log("delete")
    }
    
    const bookRowClassName = isConditionMet() ? 'bookRow-conditionMet' : 'bookRow';

    return (
        <tr style={{verticalAlign: 'middle' }}>
          <td onClick={handleClick} className = {bookRowClassName}>
            <span className="content">{bookInfo.title||bookInfo.booktitle}</span>  
          </td>                
          <td>
            <button className="deleteButton" onClick={handleDelete}>❎</button>
          </td>
        </tr>
    );
  }

  export default BookRow;