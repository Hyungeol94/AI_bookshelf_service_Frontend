import BookRow from "./BookRow.js"
import { useEffect } from "react";

export default function BookTable(props) {
    const {books_info, setSelectedBookInfo, searchValue, setSearchValue, onSearch} = props
    useEffect(() => {
      onSearch()
    }, [searchValue]);
  
    return (
      <div className="bookTable">
        <h3 style={{ color: "black" }}>책 목록</h3>
        <table>
          <thead>
            <tr>
              {/* <th>Title</th>
              <th>Price</th> */}
            </tr>
          </thead>
          <tbody>
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
      </div>
    );
  }