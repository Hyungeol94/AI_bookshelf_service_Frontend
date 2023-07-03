import React from 'react';
import BookRow from './BookRow';
import "../../styles/Result.css";

const BookTableHeader = () => {
  return (
    <tr >            
      <td >
        <div style = {{width: '313.35px'}}> 
        {/*오른쪽 스크롤바 생성시 좌우 스크롤바가 생기지 않는 최대 길이로 설정*/}          
          <span className="columnName">제목</span>  
        </div>
      </td> 
      <td >
        <div style={{width: '40px'}}>
          <span className="columnName">상태</span>
        </div>              
      </td> 
      <td>
      <span className="columnName">삭제</span>
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
          <thead>
          <BookTableHeader /> 
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

