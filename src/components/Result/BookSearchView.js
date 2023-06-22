import BookSearchResultRow from "./BookSearchResultRow"
import "../../styles/Result.css";
import {useRef, useState, useEffect} from 'react'

export default function BookSearchView(props) { 
    const {setSelectedBookInfo, searchValue, setSearchValue, isLoading, data} = props
    const inputRef = useRef(searchValue);

  
    let num = 1;
    const handleClick = () =>{
      if (inputRef.current.value!==''){    
       setSearchValue(inputRef.current.value)
    }
    }
    
    const handleOnKeyPress = (e) => {
      if (e.key === "Enter") {
        if (inputRef.current.value!==''){    
          setSearchValue(inputRef.current.value)
        }
      }
    };
    
    const handleFocus = () => {
      inputRef.current.value = searchValue;
    }

    useEffect(() => {
      inputRef.current.value = searchValue
    }, [searchValue]);

   
    return (
      <div style={{backgroundColor: 'white', padding : '10px', width: '300px', height:'450px'}}>
        <h3 style={{color:'black'}}>도서 검색 결과</h3>      
        {/* <div>검색창 넣기</div>  */}        
        <div class="input-group mb-3" >
          <input 
            ref ={inputRef}
            defaultValue={searchValue}
            placeholder= {searchValue}
            onFocus={handleFocus} // Preserve the defaultValue when the input is focused
            className = "searchBar"           
            class="form-control"                         
            aria-label="book search" 
            aria-describedby="button-addon2" 
            type="text"          
            onKeyDown={handleOnKeyPress}            
            style={{color: "black"}}/>
                      
          <a class="nav-link d-none d-lg-block btn btn-default" onClick={handleClick}>
            <i class="tim-icons icon-zoom-split"></i>
          </a>
        </div>
        <div>
            {isLoading ? (
            <h3 style={{color: 'black'}}>로딩중..</h3>
          ) : (typeof data !== 'undefined' && data && data.length!=0) ? (
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

