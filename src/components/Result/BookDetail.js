export default function BookDetail({book_info}) {
    return (
      <div style={{backgroundColor: 'white', padding : '10px', width: '300px'}}>
        <h3 style={{color:'black'}}>상세 정보</h3>
        <img src = {book_info.image} alt="Book Cover" style = {{height: '250px'}}/>
        <div>{book_info.booktitle}</div>
        <div>{book_info.author}</div>
      </div>
    );
  }