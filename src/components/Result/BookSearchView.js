import BookSearchResultRow from "./BookSearchResultRow"

export default function BookSearchView(props) { 
    const {book_info, setSelectedBookInfo, setSearchValue, onSearch, isLoading, setIsLoading, data, setData} = props
    let num = 1;

    return (
      <div style={{backgroundColor: 'white', padding : '10px', width: '300px', height:'450px'}}>
        <h3 style={{color:'black'}}>도서 검색 결과</h3>      
        {/* <div>검색창 넣기</div>  */}
          
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