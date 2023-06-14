import React from "react";
import Booklist from "../components/BookList";
import sample from "../assets/sample_book.json";
import getlist from "../components.GetList";


const Book = (props) => (
    <div>
      <div>
        <img src={props.image} 
        alt={props.booktitle} 
        width={300} 
        height={300}
        style = {{marginRight : "10px"}}
        />
      </div>
      <h5>{props.booktitle}</h5>
    </div>
  );

function BookInfo() {
    const [bookImage, bookName, bookInfo] = useState([]);

    useEffect(() => {
        setTimeout(() => {
          props(sample);
        }, 600);
      }, []);

    return (
        <div>
            <h3> {sample.booktitle} </h3>
            <div> {sample.image} </div>
            <div> {sample.id} </div>
        </div>
    )
}

