import React from 'react';
import BookRow from './BookRow';
const BookTableHeader = () => {
  return (
    <tr>            
      <td >
        <span className="content">제목</span>  
      </td> 
      <td >
        <div style={{width: '40px'}}>
          상태
        </div>              
      </td> 
      <td>
        삭제
      </td>
    </tr>  
  )
}

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
          <tbody >
            <BookTableHeader/>
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

