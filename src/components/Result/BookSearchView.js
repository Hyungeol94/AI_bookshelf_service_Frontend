import BookSearchResultRow from "./BookSearchResultRow"
import "../../styles/Result.css";
import {useRef, useState, useEffect} from 'react'

export default function BookSearchView(props) { 
    const {selectedBookInfo, setSelectedBookInfo, setSearchValue, onSearch, isLoading, setIsLoading, data, setData} = props
    const searchRef = useRef(null);
    const [inputValue, setInputValue] = useState(selectedBookInfo.booktitle);
    
    let num = 1;
    const handleClick = () =>{    
      setSearchValue(searchRef.current.value)    
    }
    
    const handleOnKeyPress = (e) => {
      if (e.key === "Enter") {
        setSearchValue(searchRef.current.value) // Enter 입력이 되면 클릭 이벤트 실행
      }
    };

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    useEffect(() => {
      setInputValue(selectedBookInfo.booktitle)
    }, [selectedBookInfo]);

    return (
      <div style={{backgroundColor: 'white', padding : '10px', width: '300px', height:'450px'}}>
        <h3 style={{color:'black'}}>도서 검색 결과</h3>      
        {/* <div>검색창 넣기</div>  */}        
        <div class="input-group mb-3">
          <input 
            ref ={searchRef}
            className = "searchBar"           
            class="form-control" 
            value = {inputValue}
            placeholder={selectedBookInfo.booktitle}            
            aria-label="book search" 
            aria-describedby="button-addon2" 
            type="text"
            onChange={handleChange}
            onKeyDown={handleOnKeyPress}            
            style={{color: "black"}}/>
                      
          <a class="nav-link d-none d-lg-block btn btn-default" onClick={handleClick}>
            <i class="tim-icons icon-zoom-split"></i>
          </a>
        </div>
        <div>
            {isLoading ? (
            <h3 style={{color: 'black'}}>로딩중..</h3>
          ) : (typeof data !== 'undefined' && data) ? (
            <div className = "searchBlock">              
              {console.log(data)}            
              {data.map((book) => {
                return (
                  <BookSearchResultRow
                    key={num++}  
                    book_info = {book}
                    setSelectedBookInfo = {setSelectedBookInfo}       
                  />
                );
              })}
          </div>
        ) : (
          <div>
            <h3 style={{color:'black'}} >검색결과가 없습니다</h3>
          </div>
        )}
          </div>
      </div>
    );
  }