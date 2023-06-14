import React, { useState, useEffect } from 'react';
import Booklist from '../components/BookList';
import sample from '../assets/sample_book.json';
import GetList from '../components/GetList'; 


// const Book = (props) => (
//     <div>
//       <div>
//         <img src={props.image} 
//         alt={props.booktitle} 
//         width={300} 
//         height={300}
//         style = {{marginRight : "10px"}}
//         />
//       </div>
//       <h5>{props.booktitle}</h5>
//     </div>
//   );

// function BookInfo() {
//     const [bookImage, bookName, bookInfo] = useState([]);

//     useEffect(() => {
//         setTimeout(() => {
//           props(sample);
//         }, 600);
//       }, []);

//     return (
//         <div>
//             <h3> {sample.booktitle} </h3>
//             <div> {sample.image} </div>
//             <div> {sample.id} </div>
//         </div>
//     )
// }

// ----------------------------------------------------------------------------------


const Book = (props) => (
  <div>
    <div>
      <img
        src={props.image}
        alt={props.booktitle}
        width={300}
        height={300}
        style={{ marginRight: '10px' }}
      />
    </div>
    <h5>{props.booktitle}</h5>
  </div>
);

function BookInfo() {
  const [bookImage, setBookImage] = useState(''); 
  const [bookName, setBookName] = useState(''); 
  const [bookInfo, setBookInfo] = useState(''); 

  useEffect(() => {
    setTimeout(() => {
      setBookImage(sample.image); 
      setBookName(sample.booktitle); 
      setBookInfo(sample.id); 
    }, 600);
  }, []);

  return (
    <div>
      <h3> {bookName} </h3>
      <div>
        <img src={bookImage} alt={bookName} width={300} height={300} />
      </div>
      <div> {bookInfo} </div>
    </div>
  );
}

export default BookInfo; 