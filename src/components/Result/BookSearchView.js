import BookList from "../../components/BookList";

export default function BookSearchView(props) { 
    const {book_info, setSelectedBookInfo, setSearchValue, onSearch, isLoading, setIsLoading, data, setData} = props
    let num = 1;
  
    return (
      <div style={{backgroundColor: 'white', padding : '10px', width: '300px', height:'450px'}}>
        <h3 style={{color:'black'}}>도서 검색 결과</h3>      
        <div>{book_info.booktitle}</div>
          {/* book_info에 대한 검색 결과*/}  
          <div>
            {isLoading ? (
            <h3 style={{color: 'black'}}>로딩중..</h3>
          ) : (typeof data !== 'undefined' && data) ? (
            <div>
              검색결과
              {console.log(data)}            
              {data.map((book) => {
                return (
                  <BookList
                    key={num++}
                    booktitle={book?.title}
                    image={book?.image}                
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
        selectedBookInfo에 대한 도서 api 검색결과 나오는 창
      </div>
    );
  }