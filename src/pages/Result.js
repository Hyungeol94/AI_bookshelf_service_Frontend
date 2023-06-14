import React from "react";
import { Link } from "react-router-dom";
import sample from "../assets/sample_book.json";

function Card({ children }) {
    return (
      <div className="card" style={{backgroundColor: 'gray', padding : '10px', width: '350px'}}>
        {children}
      </div>
    );
  }

function BookRow({ book_info }) {
  return (
    <tr>
      <td>{book_info.booktitle}</td>
      <td>{book_info.price}</td>
    </tr>
  );
}

function BookTable({ books_info }) {
  return (
    <div style={{backgroundColor: 'white', padding : '10px', width: '300px'}}>
      <table>
        <thead>
          <tr>
            {/* <th>Title</th>
            <th>Price</th> */}
          </tr>
        </thead>
        <tbody>
          {books_info.map((book_info) => (
            <BookRow
              key={book_info.id}
              book_info={book_info}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Result() {
  return (
    <Card >
        <BookTable books_info={sample} />;
    </Card>
    );
}
